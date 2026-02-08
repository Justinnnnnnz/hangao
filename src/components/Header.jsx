import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import './Header.css';

const navItems = [
  { path: '/', label: '首页' },
  { path: '/about', label: '关于我们' },
  { path: '/services', label: '检测服务' },
  { path: '/qualifications', label: '资质荣誉' },
  { path: '/news', label: '新闻动态' },
  { path: '/contact', label: '联系我们' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

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
            <span><FiPhone /> 0315-5913128 / 5913198</span>
            <span><FiMail /> hatj@tshangao.com.cn</span>
          </div>
          <div className="top-bar-right">
            <span><FiMapPin /> 河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，06300</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link to="/" className="logo" aria-label="唐山市杭奥特种设备检验有限公司">
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
              <img
                className="logo-name-image"
                src="/hangao-name.png"
                alt="唐山市杭奥特种设备检验有限公司"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="logo-name-fallback">
                <span>唐山市杭奥特种设备检验有限公司</span>
                <small>Tangshan Hangao Special Equipment Inspection Co., Ltd.</small>
              </div>
            </div>
          </Link>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>
    </>
  );
}
