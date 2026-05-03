import { getLanguageFromPath, localizePath, stripLanguagePrefix } from './i18n';
import { getNewsItemBySlug } from './data/newsData';

const zhCompanyName = '唐山市杭奥特种设备检验有限公司';
const enCompanyName = 'Tangshan Hangao Special Equipment Inspection Co., Ltd.';
const siteUrl = 'https://www.tshangao.cn/';
const logoUrl = 'https://www.tshangao.cn/hangao_logo.png';
const zhHomeDescription =
  '唐山市杭奥特种设备检验有限公司官方网站，提供车用气瓶检测、安全阀校验、低温瓶检测、呼吸器检测、压力表检定等特种设备检验检测服务。公司位于河北省唐山市路北区，服务工业与民用特种设备安全管理。';

export const seoConfig = {
  '/': {
    zh: {
      title: `${zhCompanyName}官方网站`,
      description: zhHomeDescription,
    },
    en: {
      title: enCompanyName,
      description:
        `${enCompanyName} provides special equipment inspection, gas cylinder testing, safety valve calibration and related technical services in Tangshan, Hebei, China.`,
    },
  },
  '/about': {
    zh: {
      title: `关于我们 | ${zhCompanyName}`,
      description: '了解杭奥特检的发展历程、企业文化、质量方针、专业团队与服务领域。',
    },
    en: {
      title: `About Us | ${enCompanyName}`,
      description:
        `Learn about ${enCompanyName}, including its history, team, culture, quality policy and service capabilities.`,
    },
  },
  '/services': {
    zh: {
      title: `检测服务 | ${zhCompanyName}`,
      description: '查看杭奥特检在气瓶、安全阀、低温瓶、呼吸器与压力表等方面的检测服务能力。',
    },
    en: {
      title: `Services | ${enCompanyName}`,
      description:
        'Explore Hangao inspection services covering gas cylinders, safety valves, cryogenic vessels, breathing apparatus and pressure gauges.',
    },
  },
  '/qualifications': {
    zh: {
      title: `资质荣誉 | ${zhCompanyName}`,
      description: '查看杭奥特检的资质证书、行业荣誉以及检测设备配置。',
    },
    en: {
      title: `Qualifications | ${enCompanyName}`,
      description:
        'Review Hangao qualifications, certifications, honors and inspection equipment capabilities.',
    },
  },
  '/news': {
    zh: {
      title: `新闻动态 | ${zhCompanyName}`,
      description: '查看杭奥特检新闻、行业动态和技术分享。',
    },
    en: {
      title: `News | ${enCompanyName}`,
      description:
        `Browse company news, industry updates and technical articles from ${enCompanyName}.`,
    },
  },
  '/contact': {
    zh: {
      title: `联系我们 | ${zhCompanyName}`,
      description: '欢迎联系杭奥特检，获取特种设备检测咨询、留言与服务支持。',
    },
    en: {
      title: `Contact | ${enCompanyName}`,
      description:
        `Contact ${enCompanyName} for consultation, inspection inquiries and service support.`,
    },
  },
};

function buildOrganizationStructuredData() {
  return {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: zhCompanyName,
    alternateName: enCompanyName,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    email: 'mailto:hatj@tshangao.com.cn',
    telephone: '15536993625',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '环城路与唐丰北路交叉路口杭奥特检办公楼',
      addressLocality: '唐山市路北区',
      addressRegion: '河北省',
      postalCode: '063000',
      addressCountry: 'CN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '15536993625',
      email: 'hatj@tshangao.com.cn',
      areaServed: 'CN',
      availableLanguage: ['zh-CN', 'en'],
    },
  };
}

function buildWebsiteStructuredData(lang) {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: lang === 'en' ? enCompanyName : zhCompanyName,
    alternateName: lang === 'en' ? zhCompanyName : enCompanyName,
    inLanguage: lang === 'en' ? 'en' : 'zh-CN',
  };
}

function buildWebPageStructuredData({ canonical, lang, meta }) {
  return {
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: meta.title,
    description: meta.description,
    inLanguage: lang === 'en' ? 'en' : 'zh-CN',
    isPartOf: { '@id': `${siteUrl}#website` },
    about: { '@id': `${siteUrl}#organization` },
  };
}

function buildNewsArticleStructuredData({ article, canonical, lang, meta }) {
  if (!article) {
    return null;
  }

  return {
    '@type': 'NewsArticle',
    '@id': `${canonical}#article`,
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: lang === 'en' ? 'en' : 'zh-CN',
    articleSection: article.category,
    mainEntityOfPage: { '@id': `${canonical}#webpage` },
    author: { '@id': `${siteUrl}#organization` },
    publisher: {
      '@id': `${siteUrl}#organization`,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    isPartOf: { '@id': `${siteUrl}#website` },
    about: { '@id': `${siteUrl}#organization` },
    name: meta.title,
  };
}

export function getSeoForPath(pathname) {
  const lang = getLanguageFromPath(pathname);
  const basePath = stripLanguagePrefix(pathname);
  const isNewsArticle = basePath.startsWith('/news/');
  const articleSlug = isNewsArticle ? basePath.replace('/news/', '') : null;
  const article = articleSlug ? getNewsItemBySlug(lang, articleSlug) : null;
  const meta = article
    ? {
        title:
          lang === 'en'
            ? `${article.title} | News | Tangshan Hangao Special Equipment Inspection Co., Ltd.`
            : `${article.title} | 新闻动态 | 唐山市杭奥特种设备检验有限公司`,
        description: article.summary,
      }
    : (seoConfig[basePath] || seoConfig['/'])[lang];

  return {
    lang,
    basePath,
    article,
    meta,
    siteName: lang === 'en' ? enCompanyName : zhCompanyName,
    xDefault: `https://www.tshangao.cn${localizePath(basePath, 'zh')}`,
    canonical: `https://www.tshangao.cn${localizePath(basePath, lang)}`,
    zhAlternate: `https://www.tshangao.cn${localizePath(basePath, 'zh')}`,
    enAlternate: `https://www.tshangao.cn${localizePath(basePath, 'en')}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildWebsiteStructuredData(lang),
        buildOrganizationStructuredData(),
        buildWebPageStructuredData({
          canonical: `https://www.tshangao.cn${localizePath(basePath, lang)}`,
          lang,
          meta,
        }),
        buildNewsArticleStructuredData({
          article,
          canonical: `https://www.tshangao.cn${localizePath(basePath, lang)}`,
          lang,
          meta,
        }),
      ].filter(Boolean),
    },
  };
}
