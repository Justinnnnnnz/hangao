import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';

const navItems = {
  zh: [
    { path: '/', label: '首页' },
    { path: '/about', label: '关于我们' },
    { path: '/services', label: '检测服务' },
    { path: '/qualifications', label: '资质荣誉' },
    { path: '/news', label: '新闻动态' },
    { path: '/contact', label: '联系我们' },
  ],
  en: [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/qualifications', label: 'Qualifications' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ],
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { lang, basePath, buildPath, switchLanguage } = useLanguage();
  const isEnglish = lang === 'en';
  const labels = navItems[lang];
  const topBarAddress = isEnglish
    ? 'Hangao Inspection Office Building, Lubei District, Tangshan, Hebei, 063000'
    : '河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，06300';
  const companyName = '唐山市杭奥特种设备检验有限公司';
  const companySubname = 'Tangshan Hangao Special Equipment Inspection Co., Ltd.';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span><FiPhone /> 13582928866</span>
            <span><FiMail /> hatj@tshangao.com.cn</span>
          </div>
          <div className="top-bar-right">
            <span><FiMapPin /> {topBarAddress}</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to={buildPath('/')} className="logo" aria-label={companyName}>
            <img
              className="logo-mark"
              src="/hangao_logo.png"
              alt="杭奥 Logo"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/hangao-logo.svg';
              }}
            />
            <div className="logo-name-wrap">
              <div className="logo-name-fallback">
                <span>{companyName}</span>
                <small>{companySubname}</small>
              </div>
            </div>
          </Link>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {labels.map((item) => (
              <Link
                key={item.path}
                to={buildPath(item.path)}
                className={`nav-link ${basePath === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="lang-toggle"
            type="button"
            onClick={() => switchLanguage(isEnglish ? 'zh' : 'en')}
          >
            {isEnglish ? '中文' : 'English'}
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
}
