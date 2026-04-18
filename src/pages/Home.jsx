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
import { useLanguage } from '../contexts/LanguageContext';
import './Home.css';

const iconList = [
  <FiTool size={32} />,
  <FiShield size={32} />,
  <FiCheckCircle size={32} />,
  <FiFileText size={32} />,
  <FiAward size={32} />,
  <FiUsers size={32} />,
  <FiTool size={32} />,
  <FiShield size={32} />,
  <FiCheckCircle size={32} />,
];

const content = {
  zh: {
    companyName: '唐山市杭奥特种设备检验有限公司',
    heroSubtitle: '专业 · 权威 · 安全 · 高效',
    heroDescription: '专注特种设备检验检测十二年，为企业安全生产保驾护航',
    primaryAction: '了解服务',
    secondaryAction: '联系我们',
    stats: [
      { number: '12+', label: '年行业经验' },
      { number: '500+', label: '检测项目' },
      { number: '200+', label: '服务企业' },
      { number: '80+', label: '专业技术人员' },
    ],
    servicesTitle: '核心检验项目',
    servicesSubtitle: '围绕气瓶、安全阀、低温瓶与压力表等重点项目，提供规范、可靠、可追溯的检验服务',
    servicesIntro:
      '当前重点服务覆盖车用气瓶、CNG/LNG 安全阀分压级校验、工业用低温瓶（杜瓦瓶）检测、呼吸器检测、液化石油气钢瓶、消防用焊接气瓶、钢制无缝气瓶（丙烷气瓶）及压力表检定，满足企业日常运行与安全管理的多场景需求。',
    services: [
      {
        title: '车用气瓶',
        desc: '针对车用压缩天然气与相关气瓶开展定期检验，覆盖外观、附件及安全性能核查。',
      },
      {
        title: 'CNG/LNG安全阀校验（10MPa以下）',
        desc: '面向10MPa以下工况的安全阀实施整定与密封性能校验，确保启闭动作准确可靠。',
      },
      {
        title: 'CNG/LNG安全阀校验（10MPa及以上）',
        desc: '针对10MPa及以上高压工况进行专项校验与复核，满足高压系统运行安全要求。',
      },
      {
        title: '工业用低温瓶（杜瓦瓶检测）',
        desc: '提供杜瓦瓶专项检测服务，重点关注低温容器结构完整性、密封性与安全附件状态。',
      },
      {
        title: '呼吸器检测',
        desc: '对呼吸器关键部件及整体性能进行检测评估，支撑工业安全与应急使用场景。',
      },
      {
        title: '液化石油气钢瓶',
        desc: '面向液化石油气钢瓶开展规范化检验，强化瓶体状态、阀件与使用安全管控。',
      },
      {
        title: '消防用焊接气瓶',
        desc: '依据相关规范执行消防用焊接气瓶检测，重点核查承压部件及附件有效性。',
      },
      {
        title: '钢制无缝气瓶（丙烷气瓶）',
        desc: '针对钢制无缝气瓶及丙烷气瓶进行综合检验，保障瓶体质量与运行安全。',
      },
      {
        title: '压力表（检定）',
        desc: '提供压力表计量检定与状态确认服务，确保测量数据准确、可追溯、可复核。',
      },
    ],
    learnMore: '了解详情',
    aboutTitle: '关于杭奥',
    aboutLead:
      '唐山市杭奥特种设备检验有限公司注册资金500万元，是一家从事综合检测服务的高新技术企业，主要从事特种设备检测。',
    aboutParagraphs: [
      '现有业务包含气瓶（复合式呼吸器、氧气呼吸器、焊接绝热气瓶、无缝钢质气瓶、车用CNG、LNG气瓶等）检测；安全阀校验（包括高低压安全阀离线、在线校验）。',
      '拟开展锅炉检测、压力容器、压力管道、游乐设施、电梯、厂内机械、起重设备检测。主要服务于钢铁、化工、焦炭、热力、游乐设施、工民建筑等多种行业，为工业生产和民用特种设备使用安全保驾护航。',
    ],
    aboutButton: '了解更多',
    aboutImageText: '安全检测 专业保障',
    advantagesTitle: '我们的优势',
    advantagesSubtitle: '选择杭奥，选择安心',
    advantages: [
      {
        title: '权威资质',
        desc: '取得国家市场监督管理总局颁发的特种设备检验检测机构核准证，检测结果权威可靠。',
      },
      {
        title: '专业团队',
        desc: '拥有80余名高级工程师及专业技术人员，持证上岗，经验丰富，技术精湛。',
      },
      {
        title: '先进设备',
        desc: '配备国际先进的无损检测设备、理化检测仪器及安全性能检测装置，确保检测精准。',
      },
      {
        title: '优质服务',
        desc: '快速响应客户需求，提供专业检测服务，出具报告及时准确，售后服务完善。',
      },
    ],
    ctaTitle: '需要特种设备检测服务？',
    ctaSubtitle: '我们的专业团队随时为您提供咨询和服务',
    ctaPrimary: '立即咨询',
    ctaSecondary: '拨打电话',
  },
  en: {
    companyName: 'Tangshan Hangao Special Equipment Inspection Co., Ltd.',
    heroSubtitle: 'Professional · Authoritative · Safe · Efficient',
    heroDescription:
      'For more than twelve years, Hangao has focused on special equipment inspection and testing to support safe industrial operations.',
    primaryAction: 'View Services',
    secondaryAction: 'Contact Us',
    stats: [
      { number: '12+', label: 'Years of Industry Experience' },
      { number: '500+', label: 'Inspection Projects' },
      { number: '200+', label: 'Enterprise Clients' },
      { number: '80+', label: 'Technical Professionals' },
    ],
    servicesTitle: 'Core Inspection Services',
    servicesSubtitle:
      'Providing standardized, reliable and traceable inspection services for gas cylinders, safety valves, cryogenic vessels, breathing apparatus and pressure gauges.',
    servicesIntro:
      'Our core service portfolio covers vehicle gas cylinders, CNG/LNG safety valve calibration by pressure range, industrial cryogenic vessel inspection, breathing apparatus testing, LPG cylinders, welded fire-fighting cylinders, seamless steel cylinders and pressure gauge verification.',
    services: [
      {
        title: 'Vehicle Gas Cylinders',
        desc: 'Periodic inspection for vehicle CNG/LNG cylinders, including appearance, accessories and key safety checks.',
      },
      {
        title: 'CNG/LNG Safety Valve Calibration (<10MPa)',
        desc: 'Offline and online calibration for safety valves below 10MPa to ensure accurate set pressure and sealing performance.',
      },
      {
        title: 'CNG/LNG Safety Valve Calibration (>=10MPa)',
        desc: 'Specialized high-pressure calibration and verification service for demanding operating conditions.',
      },
      {
        title: 'Industrial Cryogenic Vessels',
        desc: 'Dedicated inspection for Dewar vessels with focus on structural integrity, insulation performance and safety accessories.',
      },
      {
        title: 'Breathing Apparatus Testing',
        desc: 'Performance evaluation of breathing apparatus components and complete sets for industrial and emergency use.',
      },
      {
        title: 'LPG Cylinders',
        desc: 'Standardized inspection for LPG cylinders to improve safety during filling, storage, transportation and use.',
      },
      {
        title: 'Fire-Fighting Welded Cylinders',
        desc: 'Inspection for fire-service welded cylinders with emphasis on pressure-bearing parts and accessory validity.',
      },
      {
        title: 'Seamless Steel Cylinders',
        desc: 'Inspection service for seamless steel cylinders and propane cylinders, covering critical risk areas.',
      },
      {
        title: 'Pressure Gauge Verification',
        desc: 'Verification service to keep pressure gauge measurements accurate, stable and traceable.',
      },
    ],
    learnMore: 'Learn More',
    aboutTitle: 'About Hangao',
    aboutLead:
      'Tangshan Hangao Special Equipment Inspection Co., Ltd. is a specialized service provider with registered capital of RMB 5 million, focused on special equipment inspection and integrated testing services.',
    aboutParagraphs: [
      'Current business scope covers gas cylinder inspection for composite breathing apparatus, oxygen breathing apparatus, insulated welded cylinders, seamless steel cylinders, vehicle CNG cylinders and LNG cylinders, as well as safety valve calibration for both high-pressure and low-pressure applications.',
      'The company is preparing to further expand into boiler, pressure vessel, pressure piping, amusement facility, elevator, in-plant vehicle and lifting equipment inspection, serving sectors such as steel, chemical, coking, heating, public facilities and industrial construction.',
    ],
    aboutButton: 'Read More',
    aboutImageText: 'Safety Inspection · Professional Assurance',
    advantagesTitle: 'Why Choose Hangao',
    advantagesSubtitle: 'Professional capability backed by compliance and execution',
    advantages: [
      {
        title: 'Authoritative Qualifications',
        desc: 'Approved by the relevant regulatory authorities for special equipment inspection and testing services.',
      },
      {
        title: 'Experienced Team',
        desc: 'More than 80 technical professionals, including senior engineers and qualified inspection personnel.',
      },
      {
        title: 'Advanced Equipment',
        desc: 'Equipped with modern NDT instruments, laboratory devices and safety performance testing facilities.',
      },
      {
        title: 'Reliable Service',
        desc: 'Responsive consultation, standardized reporting and professional support throughout the service cycle.',
      },
    ],
    ctaTitle: 'Looking for Special Equipment Inspection Services?',
    ctaSubtitle: 'Our technical team is ready to support your inspection and compliance needs.',
    ctaPrimary: 'Contact Now',
    ctaSecondary: 'Call Us',
  },
};

export default function Home() {
  const { lang, buildPath } = useLanguage();
  const copy = content[lang];
  const isEnglish = lang === 'en';

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay" />
        <div className={`container hero-content${isEnglish ? ' hero-content--en' : ''}`}>
          <h1 className="fade-in-up">{copy.companyName}</h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
            {copy.heroSubtitle}
          </p>
          <p className="hero-desc fade-in-up" style={{ animationDelay: '0.4s' }}>
            {copy.heroDescription}
          </p>
          <div className="hero-actions fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to={buildPath('/services')} className="btn btn-primary">
              {copy.primaryAction} <FiArrowRight />
            </Link>
            <Link to={buildPath('/contact')} className="btn btn-outline">
              <FiPhone /> {copy.secondaryAction}
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {copy.stats.map((item) => (
            <div key={item.label} className="stat-item">
              <span className="stat-number">{item.number}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section services-home">
        <div className="container">
          <div className="section-title">
            <h2>{copy.servicesTitle}</h2>
            <p>{copy.servicesSubtitle}</p>
          </div>
          <p className="services-home-intro">{copy.servicesIntro}</p>
          <div className="services-grid">
            {copy.services.map((service, index) => (
              <div key={service.title} className="service-card">
                <div className="service-icon">{iconList[index]}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={buildPath('/services')} className="service-link">
                  {copy.learnMore} <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-preview-inner">
          <div className="about-preview-text">
            <h2>{copy.aboutTitle}</h2>
            <p className="about-lead">{copy.aboutLead}</p>
            {copy.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link to={buildPath('/about')} className="btn btn-primary" style={{ marginTop: 20 }}>
              {copy.aboutButton} <FiArrowRight />
            </Link>
          </div>
          <div className="about-preview-image">
            <div className="about-image-placeholder">
              <FiShield size={80} />
              <span>{copy.aboutImageText}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section advantages">
        <div className="container">
          <div className="section-title">
            <h2>{copy.advantagesTitle}</h2>
            <p>{copy.advantagesSubtitle}</p>
          </div>
          <div className="advantages-grid">
            {copy.advantages.map((advantage, index) => (
              <div key={advantage.title} className="advantage-card">
                <div className="advantage-number">0{index + 1}</div>
                <h3>{advantage.title}</h3>
                <p>{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaSubtitle}</p>
          <div className="cta-actions">
            <Link to={buildPath('/contact')} className="btn btn-primary">
              {copy.ctaPrimary}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
