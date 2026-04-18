import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { lang, buildPath } = useLanguage();
  const isEnglish = lang === 'en';
  const quickLinks = isEnglish
    ? [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/qualifications', label: 'Qualifications' },
        { path: '/news', label: 'News' },
        { path: '/contact', label: 'Contact' },
      ]
    : [
        { path: '/', label: '首页' },
        { path: '/about', label: '关于我们' },
        { path: '/services', label: '检测服务' },
        { path: '/qualifications', label: '资质荣誉' },
        { path: '/news', label: '新闻动态' },
        { path: '/contact', label: '联系我们' },
      ];
  const serviceLinks = isEnglish
    ? ['Boiler Inspection', 'Pressure Vessel Inspection', 'Pressure Piping Inspection', 'Elevator Inspection', 'Lifting Machinery Inspection', 'Safety Valve Calibration']
    : ['锅炉检测', '压力容器检测', '压力管道检测', '电梯检测', '起重机械检测', '安全阀校验'];
  const companyName = isEnglish
    ? 'Tangshan Hangao Special Equipment Inspection Co., Ltd.'
    : '唐山市杭奥特种设备检验有限公司';
  const companySubname = isEnglish
    ? 'Special Equipment Inspection, Testing and Technical Services'
    : 'Tangshan Hangao Special Equipment Inspection Co., Ltd.';
  const companyDescription = isEnglish
    ? 'Focused on special equipment inspection, testing and technical services, Hangao is committed to providing safe, reliable and efficient solutions for industrial clients.'
    : '专业从事特种设备检验、检测与技术服务，致力于为客户提供安全、可靠、高效的一站式解决方案。';
  const address = isEnglish
    ? 'Hangao Inspection Office Building, East of the intersection of Huancheng Road and Tangfeng North Road, Lubei District, Tangshan, Hebei, 063000'
    : '河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，06300';
  const workingHours = isEnglish ? 'Mon to Fri 8:00-17:30' : '周一至周五 8:00-17:30';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-col">
            <div className="footer-logo">
              <img
                className="footer-logo-mark"
                src="/hangao_logo.png"
                alt="杭奥 Logo"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/hangao-logo.svg';
                }}
              />
              <div className="footer-logo-text">
                <h3>{companyName}</h3>
                <span>{companySubname}</span>
              </div>
            </div>
            <p className="footer-desc">{companyDescription}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>{isEnglish ? 'Quick Links' : '快速导航'}</h4>
            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item.path}><Link to={buildPath(item.path)}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>{isEnglish ? 'Core Services' : '主要服务'}</h4>
            <ul className="footer-links">
              {serviceLinks.map((item) => (
                <li key={item}><Link to={buildPath('/services')}>{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>{isEnglish ? 'Contact' : '联系方式'}</h4>
            <ul className="footer-contact">
              <li>
                <FiMapPin />
                <span>{address}</span>
              </li>
              <li>
                <FiPhone />
                <span>13582928866</span>
              </li>
              <li>
                <FiMail />
                <span>hatj@tshangao.com.cn</span>
              </li>
              <li>
                <FiClock />
                <span>{workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {isEnglish ? 'Tangshan Hangao Special Equipment Inspection Co., Ltd. All Rights Reserved' : '唐山市杭奥特种设备检验有限公司 版权所有'}
          </p>
          <p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
              冀ICP备2026012504号
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
