import { getLanguageFromPath, localizePath, stripLanguagePrefix } from './i18n';
import { getNewsItemBySlug } from './data/newsData';

const zhCompanyName = '唐山市杭奥特种设备检验有限公司';
const enCompanyName = 'Tangshan Hangao Special Equipment Inspection Co., Ltd.';
const siteBaseUrl = 'https://www.tshangao.com';
const siteUrl = `${siteBaseUrl}/`;
const logoUrl = `${siteBaseUrl}/hangao_logo.png`;
const companyMapUrl =
  'https://map.baidu.com/poi/%E5%94%90%E5%B1%B1%E5%B8%82%E6%9D%AD%E5%A5%A5%E7%89%B9%E7%A7%8D%E8%AE%BE%E5%A4%87%E6%A3%80%E9%AA%8C%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/@13147847.529733775,4790631.8492418,19z?uid=ac529f87acc9767b1d580034&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&sn_xy=-8834928.963611403,5382198.999867244&en_uid=ac529f87acc9767b1d580034&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl';
const zhHomeDescription =
  '唐山市杭奥特种设备检验有限公司官方网站，提供车用气瓶检测、安全阀校验、低温瓶检测、呼吸器检测、压力表检定等特种设备检验检测服务。公司位于河北省唐山市路北区，服务工业与民用特种设备安全管理。';
const companyAddress = {
  '@type': 'PostalAddress',
  streetAddress: '环城路与唐丰北路交叉路口杭奥特检办公楼',
  addressLocality: '唐山市路北区',
  addressRegion: '河北省',
  postalCode: '063000',
  addressCountry: 'CN',
};
const companyAreaServed = [
  {
    '@type': 'City',
    name: '唐山市',
  },
  {
    '@type': 'AdministrativeArea',
    name: '河北省',
  },
  {
    '@type': 'Country',
    name: '中国',
  },
];
const companySameAsUrls = [
  'https://www.hbsea.org/member/info/index.html?id=121',
  'https://www.sme-gov.cn/hebei-gaoqi-631054.html',
  'https://www.tianyancha.com/company/338422021',
  'https://m.qizhidao.com/qiye/risk/9db5a67cf66c8c46dbf8cabdeaef7066.html',
];
const companySubjectOf = [
  {
    '@type': 'NewsArticle',
    name: '唐山市杭奥特种设备检验有限公司',
    url: 'https://tangshan.huanbohainews.com.cn/2020-05/03/content_80163.html',
    datePublished: '2020-05-03',
    publisher: {
      '@type': 'Organization',
      name: '环渤海新闻网',
    },
  },
];
const companyServiceItems = [
  {
    name: '车用 CNG 气瓶检测',
    serviceType: 'CNG gas cylinder inspection',
    description: '针对车用压缩天然气气瓶开展定期检验，覆盖外观、附件及安全性能核查。',
  },
  {
    name: '车用 LNG 气瓶检测',
    serviceType: 'LNG gas cylinder inspection',
    description: '面向车用液化天然气气瓶提供规范化检测服务，核查瓶体、附件和安全状态。',
  },
  {
    name: '工业用低温瓶检测',
    serviceType: 'Cryogenic vessel inspection',
    description: '提供工业用低温瓶和杜瓦瓶专项检测，关注低温容器结构完整性、密封性与安全附件状态。',
  },
  {
    name: '无缝气瓶检测',
    serviceType: 'Seamless steel cylinder inspection',
    description: '针对钢制无缝气瓶及相关承压气瓶进行综合检验，保障瓶体质量与运行安全。',
  },
  {
    name: '空气呼吸器检测',
    serviceType: 'Air breathing apparatus inspection',
    description: '对空气呼吸器关键部件及整体性能进行检测评估，支撑工业安全与应急使用场景。',
  },
  {
    name: '氧气呼吸器检测',
    serviceType: 'Oxygen breathing apparatus inspection',
    description: '为氧气呼吸器提供检测和状态确认服务，重点核查使用安全与性能可靠性。',
  },
  {
    name: '安全阀校验',
    serviceType: 'Safety valve calibration',
    description: '提供安全阀离线与在线校验服务，核查整定压力、密封性能和启闭动作可靠性。',
  },
  {
    name: '压力表检定',
    serviceType: 'Pressure gauge verification',
    description: '提供压力表计量检定与状态确认服务，确保测量数据准确、可追溯、可复核。',
  },
  {
    name: '无损检测 RT / UT / MT / PT',
    serviceType: 'Non-destructive testing',
    description: '提供射线、超声、磁粉、渗透等无损检测技术服务，支持特种设备安全评估。',
  },
];

const breadcrumbLabels = {
  zh: {
    '/': '首页',
    '/about': '关于我们',
    '/services': '检测服务',
    '/qualifications': '资质荣誉',
    '/news': '新闻动态',
    '/contact': '联系我们',
  },
  en: {
    '/': 'Home',
    '/about': 'About Us',
    '/services': 'Services',
    '/qualifications': 'Qualifications',
    '/news': 'News',
    '/contact': 'Contact',
  },
};

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
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${siteUrl}#organization`,
    name: zhCompanyName,
    legalName: zhCompanyName,
    alternateName: enCompanyName,
    description: zhHomeDescription,
    url: siteUrl,
    foundingDate: '2013',
    areaServed: companyAreaServed,
    openingHours: 'Mo-Fr 08:00-17:30',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'https://schema.org/Monday',
          'https://schema.org/Tuesday',
          'https://schema.org/Wednesday',
          'https://schema.org/Thursday',
          'https://schema.org/Friday',
        ],
        opens: '08:00',
        closes: '17:30',
      },
    ],
    hasOfferCatalog: buildServiceOfferCatalog(),
    memberOf: {
      '@type': 'Organization',
      name: '河北省特种设备学会',
      url: 'https://www.hbsea.org/member/info/index.html?id=121',
    },
    award: '河北省高新技术企业',
    sameAs: companySameAsUrls,
    subjectOf: companySubjectOf,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    email: 'mailto:hatj@tshangao.com.cn',
    telephone: '15536993625',
    address: companyAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.6628538,
      longitude: 118.0949347,
    },
    hasMap: companyMapUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '15536993625',
      email: 'hatj@tshangao.com.cn',
      areaServed: companyAreaServed,
      availableLanguage: ['zh-CN', 'en'],
    },
  };
}

function buildServiceOfferCatalog() {
  return {
    '@type': 'OfferCatalog',
    name: '特种设备检验检测服务',
    itemListElement: companyServiceItems.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        serviceType: service.serviceType,
        description: service.description,
        provider: { '@id': `${siteUrl}#organization` },
        areaServed: companyAreaServed,
        url: `${siteUrl}services/`,
      },
    })),
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

function buildBreadcrumbStructuredData({ basePath, article, canonical, lang }) {
  if (basePath === '/') {
    return null;
  }

  const labels = breadcrumbLabels[lang];
  const items = [
    {
      name: labels['/'],
      url: `${siteBaseUrl}${localizePath('/', lang)}`,
    },
  ];

  if (basePath.startsWith('/news/') && article) {
    items.push({
      name: labels['/news'],
      url: `${siteBaseUrl}${localizePath('/news', lang)}`,
    });
    items.push({
      name: article.title,
      url: canonical,
    });
  } else {
    items.push({
      name: labels[basePath] || article?.title || labels['/'],
      url: canonical,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
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
    xDefault: `${siteBaseUrl}${localizePath(basePath, 'zh')}`,
    canonical: `${siteBaseUrl}${localizePath(basePath, lang)}`,
    zhAlternate: `${siteBaseUrl}${localizePath(basePath, 'zh')}`,
    enAlternate: `${siteBaseUrl}${localizePath(basePath, 'en')}`,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        buildWebsiteStructuredData(lang),
        buildOrganizationStructuredData(),
        buildWebPageStructuredData({
          canonical: `${siteBaseUrl}${localizePath(basePath, lang)}`,
          lang,
          meta,
        }),
        buildNewsArticleStructuredData({
          article,
          canonical: `${siteBaseUrl}${localizePath(basePath, lang)}`,
          lang,
          meta,
        }),
        buildBreadcrumbStructuredData({
          basePath,
          article,
          canonical: `${siteBaseUrl}${localizePath(basePath, lang)}`,
          lang,
        }),
      ].filter(Boolean),
    },
  };
}
