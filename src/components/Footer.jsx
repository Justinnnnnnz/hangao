import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
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
                <h3>唐山市杭奥特种设备检验有限公司</h3>
                <span>Tangshan Hangao Special Equipment Inspection Co., Ltd.</span>
              </div>
            </div>
            <p className="footer-desc">
              专业从事特种设备检验、检测与技术服务，致力于为客户提供安全、可靠、高效的一站式解决方案。
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>快速导航</h4>
            <ul className="footer-links">
              <li><Link to="/">首页</Link></li>
              <li><Link to="/about">关于我们</Link></li>
              <li><Link to="/services">检测服务</Link></li>
              <li><Link to="/qualifications">资质荣誉</Link></li>
              <li><Link to="/news">新闻动态</Link></li>
              <li><Link to="/contact">联系我们</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>主要服务</h4>
            <ul className="footer-links">
              <li><Link to="/services">锅炉检测</Link></li>
              <li><Link to="/services">压力容器检测</Link></li>
              <li><Link to="/services">压力管道检测</Link></li>
              <li><Link to="/services">电梯检测</Link></li>
              <li><Link to="/services">起重机械检测</Link></li>
              <li><Link to="/services">安全阀校验</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>联系方式</h4>
            <ul className="footer-contact">
              <li>
                <FiMapPin />
                <span>河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，06300</span>
              </li>
              <li>
                <FiPhone />
                <span>0315-5913128 / 5913198</span>
              </li>
              <li>
                <FiMail />
                <span>hatj@tshangao.com.cn</span>
              </li>
              <li>
                <FiClock />
                <span>周一至周五 8:00-17:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 唐山市杭奥特种设备检验有限公司 版权所有</p>
          <p>冀ICP备XXXXXXXX号-1 | 技术支持</p>
        </div>
      </div>
    </footer>
  );
}
