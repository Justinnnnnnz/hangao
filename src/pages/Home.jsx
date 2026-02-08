import { Link } from 'react-router-dom';
import {
  FiShield,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiTool,
  FiFileText,
  FiArrowRight,
  FiPhone,
} from 'react-icons/fi';
import './Home.css';

const stats = [
  { number: '15+', label: '年行业经验' },
  { number: '5000+', label: '检测项目' },
  { number: '200+', label: '服务企业' },
  { number: '50+', label: '专业技术人员' },
];

const services = [
  {
    icon: <FiTool size={32} />,
    title: '锅炉检测',
    desc: '包括蒸汽锅炉、热水锅炉、有机热载体锅炉等各类锅炉的定期检验、安装监检及维修改造后检验。',
  },
  {
    icon: <FiShield size={32} />,
    title: '压力容器检测',
    desc: '涵盖固定式压力容器、移动式压力容器的年度检查、全面检验及耐压试验等综合检测服务。',
  },
  {
    icon: <FiCheckCircle size={32} />,
    title: '压力管道检测',
    desc: '工业管道、公用管道、长输管道的在线检验、全面检验，确保管道系统安全运行。',
  },
  {
    icon: <FiFileText size={32} />,
    title: '电梯检测',
    desc: '曳引与强制驱动电梯、液压电梯、自动扶梯和自动人行道的定期检验和监督检验。',
  },
  {
    icon: <FiAward size={32} />,
    title: '起重机械检测',
    desc: '桥式起重机、门式起重机、塔式起重机、流动式起重机等各类起重机械的定期检验。',
  },
  {
    icon: <FiUsers size={32} />,
    title: '安全阀校验',
    desc: '各类安全阀的在线、离线校验服务，出具权威校验报告，确保安全阀灵敏可靠。',
  },
];

const advantages = [
  {
    title: '权威资质',
    desc: '取得国家市场监督管理总局颁发的特种设备检验检测机构核准证，检测结果权威可靠。',
  },
  {
    title: '专业团队',
    desc: '拥有50余名高级工程师及专业技术人员，持证上岗，经验丰富，技术精湛。',
  },
  {
    title: '先进设备',
    desc: '配备国际先进的无损检测设备、理化检测仪器及安全性能检测装置，确保检测精准。',
  },
  {
    title: '优质服务',
    desc: '7x24小时响应客户需求，提供上门检测服务，出具报告及时准确，售后服务完善。',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="fade-in-up">唐山市杭奥特种设备检验有限公司</h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
            专业 · 权威 · 安全 · 高效
          </p>
          <p className="hero-desc fade-in-up" style={{ animationDelay: '0.4s' }}>
            专注特种设备检验检测十五年，为企业安全生产保驾护航
          </p>
          <div className="hero-actions fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/services" className="btn btn-primary">
              了解服务 <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <FiPhone /> 联系我们
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="section services-home">
        <div className="container">
          <div className="section-title">
            <h2>核心检测服务</h2>
            <p>覆盖特种设备全品类检测，为您的企业安全生产提供全方位保障</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="service-link">
                  了解详情 <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About Preview ===== */}
      <section className="section about-preview">
        <div className="container about-preview-inner">
          <div className="about-preview-text">
            <h2>关于杭奥</h2>
            <p className="about-lead">
              唐山市杭奥特种设备检验有限公司成立于2009年，是经国家市场监督管理总局核准的专业特种设备检验检测机构。
            </p>
            <p>
              公司位于河北省唐山市，拥有现代化的检测实验室和先进的检测设备。多年来，公司始终坚持"科学、公正、准确、高效"的质量方针，为唐山及周边地区数百家企业提供了优质的特种设备检验检测服务。
            </p>
            <p>
              公司业务涵盖锅炉、压力容器、压力管道、电梯、起重机械、厂内专用机动车辆等特种设备的检验检测，以及无损检测、理化检测、安全阀校验等专业技术服务。
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: 20 }}>
              了解更多 <FiArrowRight />
            </Link>
          </div>
          <div className="about-preview-image">
            <div className="about-image-placeholder">
              <FiShield size={80} />
              <span>安全检测 专业保障</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Advantages ===== */}
      <section className="section advantages">
        <div className="container">
          <div className="section-title">
            <h2>我们的优势</h2>
            <p>选择杭奥，选择安心</p>
          </div>
          <div className="advantages-grid">
            {advantages.map((a, i) => (
              <div key={i} className="advantage-card">
                <div className="advantage-number">0{i + 1}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="cta-section">
        <div className="container cta-inner">
          <h2>需要特种设备检测服务？</h2>
          <p>我们的专业团队随时为您提供咨询和服务</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary">
              立即咨询
            </Link>
            <a href="tel:03152345678" className="btn btn-outline">
              <FiPhone /> 拨打电话
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
