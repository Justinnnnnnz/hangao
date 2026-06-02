const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const SITEMAP_URL = 'https://www.tshangao.com/sitemap.xml';
const HOST = 'www.tshangao.com';
const KEY = '5cf1d1f12b1040d3b60a099d5a17141a';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');

function decodeXmlEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'");
}

function extractSitemapUrls(xml) {
  const urls = [];
  const locPattern = /<loc>\s*([^<]+?)\s*<\/loc>/gi;
  let match;

  while ((match = locPattern.exec(xml)) !== null) {
    urls.push(decodeXmlEntities(match[1].trim()));
  }

  return urls;
}

function filterCanonicalUrls(urls) {
  const canonicalUrls = [];
  const seen = new Set();

  for (const value of urls) {
    let parsed;

    try {
      parsed = new URL(value);
    } catch {
      console.warn(`Skipping invalid URL from sitemap: ${value}`);
      continue;
    }

    if (parsed.protocol !== 'https:' || parsed.hostname !== HOST) {
      console.warn(`Skipping non-canonical URL from sitemap: ${value}`);
      continue;
    }

    const normalized = parsed.toString();
    if (!seen.has(normalized)) {
      seen.add(normalized);
      canonicalUrls.push(normalized);
    }
  }

  return canonicalUrls;
}

async function fetchSitemap() {
  let response;

  try {
    response = await fetch(SITEMAP_URL);
  } catch (error) {
    throw new Error(`Failed to fetch sitemap: ${error.message}`);
  }

  const body = await response.text();

  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: HTTP ${response.status}\n${body}`);
  }

  return body;
}

function explainFailure(status) {
  switch (status) {
    case 400:
      return 'Bad request. Check the JSON payload, host, key, keyLocation, and urlList format.';
    case 403:
      return 'Forbidden. The IndexNow key file may be missing, inaccessible, or not matching the submitted key.';
    case 422:
      return 'Unprocessable entity. One or more URLs may not belong to the submitted host or the payload is invalid.';
    case 429:
      return 'Rate limited. Wait before submitting again; do not retry repeatedly.';
    default:
      return 'Unexpected IndexNow response. Review the status code and response body.';
  }
}

async function submitIndexNow(payload) {
  let response;

  try {
    response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    throw new Error(`Failed to submit to IndexNow: ${error.message}`);
  }

  const body = await response.text();

  return {
    status: response.status,
    body,
    ok: response.status === 200 || response.status === 202,
  };
}

async function main() {
  console.log(`Fetching sitemap: ${SITEMAP_URL}`);
  const sitemapXml = await fetchSitemap();
  const sitemapUrls = extractSitemapUrls(sitemapXml);
  const urlList = filterCanonicalUrls(sitemapUrls);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`URLs found in sitemap: ${sitemapUrls.length}`);
  console.log(`Canonical ${HOST} URLs selected: ${urlList.length}`);

  if (urlList.length === 0) {
    throw new Error(`No ${HOST} URLs found in sitemap; refusing to submit an empty urlList.`);
  }

  if (dryRun) {
    console.log('Dry run enabled. No request was sent to IndexNow.');
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  console.log(`Submitting ${urlList.length} URLs to IndexNow: ${INDEXNOW_ENDPOINT}`);
  const result = await submitIndexNow(payload);

  console.log(`IndexNow HTTP status: ${result.status}`);
  console.log(`IndexNow response body: ${result.body || '(empty)'}`);

  if (!result.ok) {
    throw new Error(explainFailure(result.status));
  }

  console.log('IndexNow submission accepted.');
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
