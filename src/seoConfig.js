import { getLanguageFromPath, localizePath, stripLanguagePrefix } from './i18n';
import { getNewsItemBySlug } from './data/newsData';

export const seoConfig = {
  '/': {
    zh: {
      title: '唐山市杭奥特种设备检验有限公司',
      description:
        '唐山市杭奥特种设备检验有限公司，提供车用气瓶检测、安全阀校验、低温瓶检测、呼吸器检测、压力表检定等特种设备检验检测服务。',
    },
    en: {
      title: 'Tangshan Hangao Special Equipment Inspection Co., Ltd.',
      description:
        'Tangshan Hangao Special Equipment Inspection Co., Ltd. provides special equipment inspection, gas cylinder testing, safety valve calibration and related technical services in Tangshan, Hebei, China.',
    },
  },
  '/about': {
    zh: {
      title: '关于我们 | 唐山市杭奥特种设备检验有限公司',
      description: '了解杭奥特检的发展历程、企业文化、质量方针、专业团队与服务领域。',
    },
    en: {
      title: 'About Us | Tangshan Hangao Special Equipment Inspection Co., Ltd.',
      description:
        'Learn about Tangshan Hangao Special Equipment Inspection Co., Ltd., including its history, team, culture, quality policy and service capabilities.',
    },
  },
  '/services': {
    zh: {
      title: '检测服务 | 唐山市杭奥特种设备检验有限公司',
      description: '查看杭奥特检在气瓶、安全阀、低温瓶、呼吸器与压力表等方面的检测服务能力。',
    },
    en: {
      title: 'Services | Tangshan Hangao Special Equipment Inspection Co., Ltd.',
      description:
        'Explore Hangao inspection services covering gas cylinders, safety valves, cryogenic vessels, breathing apparatus and pressure gauges.',
    },
  },
  '/qualifications': {
    zh: {
      title: '资质荣誉 | 唐山市杭奥特种设备检验有限公司',
      description: '查看杭奥特检的资质证书、行业荣誉以及检测设备配置。',
    },
    en: {
      title: 'Qualifications | Tangshan Hangao Special Equipment Inspection Co., Ltd.',
      description:
        'Review Hangao qualifications, certifications, honors and inspection equipment capabilities.',
    },
  },
  '/news': {
    zh: {
      title: '新闻动态 | 唐山市杭奥特种设备检验有限公司',
      description: '查看杭奥特检新闻、行业动态和技术分享。',
    },
    en: {
      title: 'News | Tangshan Hangao Special Equipment Inspection Co., Ltd.',
      description:
        'Browse company news, industry updates and technical articles from Tangshan Hangao Special Equipment Inspection Co., Ltd.',
    },
  },
  '/contact': {
    zh: {
      title: '联系我们 | 唐山市杭奥特种设备检验有限公司',
      description: '欢迎联系杭奥特检，获取特种设备检测咨询、留言与服务支持。',
    },
    en: {
      title: 'Contact | Tangshan Hangao Special Equipment Inspection Co., Ltd.',
      description:
        'Contact Tangshan Hangao Special Equipment Inspection Co., Ltd. for consultation, inspection inquiries and service support.',
    },
  },
};

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
    meta,
    canonical: `https://www.tshangao.cn${localizePath(basePath, lang)}`,
    zhAlternate: `https://www.tshangao.cn${localizePath(basePath, 'zh')}`,
    enAlternate: `https://www.tshangao.cn${localizePath(basePath, 'en')}`,
  };
}
