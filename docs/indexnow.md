# IndexNow

IndexNow is a search-engine notification protocol for telling Bing and other IndexNow-supported search engines that site URLs have been added, updated, or removed. It is a discovery signal, not an indexing guarantee.

This implementation is for Bing and IndexNow-supported search engines. It is not Google Search Console Change of Address, does not submit anything to Google, and does not replace sitemap submission.

## Key File

The IndexNow key is stored in:

```text
public/5cf1d1f12b1040d3b60a099d5a17141a.txt
```

Vite copies files from `public/` into the build output, so the deployed file should be available at:

```text
https://www.tshangao.com/5cf1d1f12b1040d3b60a099d5a17141a.txt
```

Verify after deployment:

```sh
curl -I https://www.tshangao.com/5cf1d1f12b1040d3b60a099d5a17141a.txt
curl https://www.tshangao.com/5cf1d1f12b1040d3b60a099d5a17141a.txt
```

The body should be:

```text
5cf1d1f12b1040d3b60a099d5a17141a
```

## Submitting URLs

The submission script fetches:

```text
https://www.tshangao.com/sitemap.xml
```

It extracts all `<loc>` URLs, keeps only URLs on `https://www.tshangao.com`, removes duplicates, and submits them to:

```text
https://api.indexnow.org/indexnow
```

Dry run:

```sh
npm run indexnow -- --dry-run
```

Submit:

```sh
npm run indexnow
```

## Response Codes

- `200`: Accepted successfully.
- `202`: Accepted for processing.
- `400`: Bad request. Check the JSON payload, host, key, keyLocation, and urlList.
- `403`: Forbidden. The key file may be missing, inaccessible, or not matching the submitted key.
- `422`: Unprocessable entity. One or more URLs may not belong to the submitted host or the payload is invalid.
- `429`: Rate limited. Wait before submitting again; do not retry repeatedly.

IndexNow can notify supported search engines quickly, but it does not guarantee crawling, indexing, or ranking.
