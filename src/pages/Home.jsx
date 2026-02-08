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
    title: '车用气瓶',
    desc: '针对车用压缩天然气与相关气瓶开展定期检验，覆盖外观、附件及安全性能核查。',
  },
  {
    icon: <FiShield size={32} />,
    title: 'CNG/LNG安全阀校验（10MPa以下）',
    desc: '面向10MPa以下工况的安全阀实施整定与密封性能校验，确保启闭动作准确可靠。',
  },
  {
    icon: <FiCheckCircle size={32} />,
    title: 'CNG/LNG安全阀校验（10MPa及以上）',
    desc: '针对10MPa及以上高压工况进行专项校验与复核，满足高压系统运行安全要求。',
  },
  {
    icon: <FiFileText size={32} />,
    title: '工业用低温瓶（杜瓦瓶检测）',
    desc: '提供杜瓦瓶专项检测服务，重点关注低温容器结构完整性、密封性与安全附件状态。',
  },
  {
    icon: <FiAward size={32} />,
    title: '呼吸器检测',
    desc: '对呼吸器关键部件及整体性能进行检测评估，支撑工业安全与应急使用场景。',
  },
  {
    icon: <FiUsers size={32} />,
    title: '液化石油气钢瓶',
    desc: '面向液化石油气钢瓶开展规范化检验，强化瓶体状态、阀件与使用安全管控。',
  },
  {
    icon: <FiTool size={32} />,
    title: '消防用焊接气瓶',
    desc: '依据相关规范执行消防用焊接气瓶检测，重点核查承压部件及附件有效性。',
  },
  {
    icon: <FiShield size={32} />,
    title: '钢制无缝气瓶（丙烷气瓶）',
    desc: '针对钢制无缝气瓶及丙烷气瓶进行综合检验，保障瓶体质量与运行安全。',
  },
  {
    icon: <FiCheckCircle size={32} />,
    title: '压力表（检定）',
    desc: '提供压力表计量检定与状态确认服务，确保测量数据准确、可追溯、可复核。',
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
            <h2>核心检验项目</h2>
            <p>围绕气瓶、安全阀、低温瓶与压力表等重点项目，提供规范、可靠、可追溯的检验服务</p>
          </div>
          <p className="services-home-intro">
            当前重点服务覆盖车用气瓶、CNG/LNG 安全阀分压级校验、工业用低温瓶（杜瓦瓶）检测、呼吸器检测、液化石油气钢瓶、消防用焊接气瓶、钢制无缝气瓶（丙烷气瓶）及压力表检定，满足企业日常运行与安全管理的多场景需求。
          </p>
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
