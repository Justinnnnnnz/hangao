import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLanguageFromPath, localizePath, stripLanguagePrefix } from '../i18n';

const seoConfig = {
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

function upsertMeta(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertProperty(property, content) {
  let element = document.head.querySelector(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href, hreflang) {
  let selector = `link[rel="${rel}"]`;

  if (hreflang) {
    selector += `[hreflang="${hreflang}"]`;
  }

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    if (hreflang) {
      element.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const lang = getLanguageFromPath(location.pathname);
    const basePath = stripLanguagePrefix(location.pathname);
    const config = seoConfig[basePath] || seoConfig['/'];
    const meta = config[lang];
    const canonical = `https://www.tshangao.cn${localizePath(basePath, lang)}`;
    const zhAlternate = `https://www.tshangao.cn${localizePath(basePath, 'zh')}`;
    const enAlternate = `https://www.tshangao.cn${localizePath(basePath, 'en')}`;

    document.title = meta.title;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

    upsertMeta('description', meta.description);
    upsertProperty('og:title', meta.title);
    upsertProperty('og:description', meta.description);
    upsertProperty('og:url', canonical);

    upsertLink('canonical', canonical);
    upsertLink('alternate', zhAlternate, 'zh-CN');
    upsertLink('alternate', enAlternate, 'en');
  }, [location.pathname]);

  return null;
}

