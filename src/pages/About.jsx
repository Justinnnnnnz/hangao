import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiCalendar } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

const content = {
  zh: {
    bannerTitle: '关于我们',
    bannerSubtitle: '专业特种设备检验检测机构 · 为企业安全保驾护航',
    introTitle: '公司简介',
    officialNameLabel: '官方英文名称',
    officialEnglishName: 'Tangshan Hangao Special Equipment Inspection Co., Ltd.',
    introParagraphs: [
      '唐山市杭奥特种设备检验有限公司成立于2013年，是经国家市场监督管理总局核准的专业特种设备检验检测机构。公司位于河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，06300，拥有现代化的办公场所、检验实验室及配套技术装备。',
      '公司专注于特种设备检验检测领域，主要从事锅炉、压力容器、压力管道、电梯、起重机械、场（厂）内机动车辆等设备检验检测工作，同时提供无损检测（RT、UT、MT、PT）、理化检测、安全阀校验、能效测试等专业技术服务。',
      '公司始终秉承“科学、公正、准确、高效”的质量方针，严格执行国家法规与技术标准，不断提升技术能力和服务效率，持续为客户提供权威、及时、可追溯的检验检测成果。',
    ],
    profileHighlights: [
      '公司成立于2013年，持有特种设备检验检测机构核准证，并通过ISO体系认证。',
      '可承担锅炉、压力容器、压力管道、电梯、起重机械等检验检测与技术服务。',
      '检验检测人员80+，其中检验师、检验员及无损检测人员配置齐全，具备多项持证能力。',
      '公司长期服务唐山及周边工业企业，覆盖化工、钢铁、制造、能源等多个行业场景。',
    ],
    stats: [
      { icon: <FiCalendar size={28} />, number: '12+', label: '年行业深耕' },
      { icon: <FiUsers size={28} />, number: '80+', label: '专业技术人员' },
      { icon: <FiAward size={28} />, number: '200+', label: '服务企业' },
    ],
    cultureTitle: '企业文化',
    cultureCards: [
      {
        icon: <FiTarget size={36} />,
        title: '企业使命',
        desc: '以专业检测技术守护特种设备安全，为企业安全生产和社会公共安全贡献力量。',
      },
      {
        icon: <FiEye size={36} />,
        title: '企业愿景',
        desc: '成为河北省乃至全国领先的特种设备检验检测服务机构，树立行业标杆。',
      },
      {
        icon: <FiHeart size={36} />,
        title: '核心价值观',
        desc: '科学严谨、公正廉洁、客户至上、持续创新。以诚信立业，以质量取胜。',
      },
    ],
    businessTitle: '资质与服务领域',
    businessSubtitle: '检测资质覆盖气瓶、呼吸器与安全阀等重点方向，服务工业与民用多行业客户',
    qualificationTitle: '核心检测校验资质',
    qualificationItems: [
      '车用CNG气瓶检测资质',
      '车用LNG气瓶检测资质',
      '工业用低温瓶（杜瓦瓶）检测资质',
      '无缝气瓶检测资质',
      '空气呼吸器检测资质',
      '氧气呼吸器检测资质',
      '安全阀校验资质',
    ],
    businessNote: '公司是国内检测资质较齐全的企业之一，长期从事检测与维修综合业务。',
    serviceUsersTitle: '主要服务用户',
    serviceUsers: ['中石油', '中石化', '大型钢厂', '公交客运公司', '运输公司', '气体公司', '燃气公司', '消防', '化工企业'],
    qualityTitle: '质量方针',
    qualitySubtitle: '以科学、公正、规范、可追溯为准则，持续提升检验检测能力与服务品质',
    qualityPolicies: [
      {
        title: '诚实守信',
        desc: '严格履行检测合同，向客户提供优质、规范的服务，承担应尽的法律责任和义务。',
      },
      {
        title: '行为公正',
        desc: '测量结果不受行政干预、外界压力、经济利益及其他利益影响，确保检验检测独立、公正。',
      },
      {
        title: '方法科学',
        desc: '依据技术标准或客户约定方法，使用检定合格或经校准设备开展检测，确保过程科学规范。',
      },
      {
        title: '数据准确',
        desc: '落实设备校准计划，确保检测结果可溯源至国际单位制（SI），实现数据精准可靠、可互比互认。',
      },
    ],
    qualitySummary:
      '我们秉承诚信为本、客户至上的核心价值观，在追求品质的同时持续完善服务体系，以高质量成果和完善的售前、售中、售后服务赢得广大用户信赖。',
    timelineTitle: '发展历程',
    timelineSubtitle: '十二年砥砺前行，铸就专业检测品牌',
    timeline: [
      { year: '2013', title: '公司成立', desc: '唐山市杭奥特种设备检验有限公司在唐山市路北区正式注册成立，开始从事特种设备检验检测业务。' },
      { year: '2015', title: '资质获批', desc: '取得河北省质量技术监督局颁发的特种设备检验检测资质，业务范围涵盖锅炉、压力容器检测。' },
      { year: '2017', title: '业务拓展', desc: '新增电梯检测、起重机械检测资质，建立完善的质量管理体系，通过ISO 9001认证。' },
      { year: '2019', title: '设备升级', desc: '投资建设现代化检测实验室，引进国际先进的无损检测设备和理化检验仪器。' },
      { year: '2022', title: '规模扩大', desc: '技术人员扩充至50余人，服务企业超过200家，年检测项目突破1000项。' },
      { year: '2025', title: '创新发展', desc: '引入数字化检测管理系统，推进智能检测技术应用，提升检测效率和服务质量。' },
    ],
    teamTitle: '专业团队',
    teamSubtitle: '汇聚行业精英，打造一流检测团队',
    team: [
      { role: '高级工程师', count: '15+', desc: '持有国家注册特种设备检验师资格' },
      { role: '检测工程师', count: '25+', desc: '具备丰富的现场检测经验' },
      { role: '无损检测人员', count: '10+', desc: 'RT/UT/MT/PT等多项资质' },
      { role: '管理人员', count: '8+', desc: '专业高效的项目管理和客户服务团队' },
    ],
  },
  en: {
    bannerTitle: 'About Us',
    bannerSubtitle: 'Special equipment inspection and testing services dedicated to industrial safety and compliance',
    introTitle: 'Company Profile',
    officialNameLabel: 'Official Chinese Name',
    officialEnglishName: '唐山市杭奥特种设备检验有限公司',
    introParagraphs: [
      'Tangshan Hangao Special Equipment Inspection Co., Ltd. was founded in 2013 and is an approved professional inspection and testing organization for special equipment. The company is located in Lubei District, Tangshan, Hebei, with dedicated office facilities, laboratories and supporting technical equipment.',
      'Hangao focuses on the inspection and testing of boilers, pressure vessels, pressure piping, elevators, lifting machinery and in-plant vehicles, while also providing non-destructive testing (RT, UT, MT, PT), laboratory testing, safety valve calibration and energy efficiency testing services.',
      'Guided by the quality policy of being scientific, impartial, accurate and efficient, the company strictly follows applicable regulations and technical standards and continues to provide authoritative, timely and traceable inspection outcomes.',
    ],
    profileHighlights: [
      'Founded in 2013 with approved qualifications for special equipment inspection and ISO-based management systems.',
      'Capable of handling inspection, testing and technical services for boilers, pressure vessels, pressure piping, elevators and lifting machinery.',
      'More than 80 inspection and testing professionals, including inspectors, technicians and NDT personnel with multiple certifications.',
      'Long-term service coverage across Tangshan and nearby industrial sectors including steel, chemical, manufacturing and energy.',
    ],
    stats: [
      { icon: <FiCalendar size={28} />, number: '12+', label: 'Years in the Industry' },
      { icon: <FiUsers size={28} />, number: '80+', label: 'Technical Professionals' },
      { icon: <FiAward size={28} />, number: '200+', label: 'Served Enterprises' },
    ],
    cultureTitle: 'Corporate Culture',
    cultureCards: [
      {
        icon: <FiTarget size={36} />,
        title: 'Mission',
        desc: 'Protect the safety of special equipment through professional inspection technology and contribute to safe industrial and public operations.',
      },
      {
        icon: <FiEye size={36} />,
        title: 'Vision',
        desc: 'To become a leading special equipment inspection and testing service provider in Hebei and beyond.',
      },
      {
        icon: <FiHeart size={36} />,
        title: 'Core Values',
        desc: 'Scientific rigor, impartial conduct, client focus and continuous improvement built on integrity and quality.',
      },
    ],
    businessTitle: 'Qualifications and Service Scope',
    businessSubtitle:
      'Qualifications covering gas cylinders, breathing apparatus and safety valves while serving a wide range of industrial and public-sector clients.',
    qualificationTitle: 'Core Approved Capabilities',
    qualificationItems: [
      'Vehicle CNG Cylinder Inspection Qualification',
      'Vehicle LNG Cylinder Inspection Qualification',
      'Industrial Cryogenic Vessel Inspection Qualification',
      'Seamless Cylinder Inspection Qualification',
      'Breathing Apparatus Inspection Qualification',
      'Oxygen Breathing Apparatus Inspection Qualification',
      'Safety Valve Calibration Qualification',
    ],
    businessNote:
      'Hangao maintains a broad set of inspection qualifications and continues to provide integrated testing and maintenance support.',
    serviceUsersTitle: 'Typical Client Segments',
    serviceUsers: ['PetroChina', 'Sinopec', 'Large Steel Plants', 'Public Transport Operators', 'Logistics Companies', 'Gas Suppliers', 'City Gas Companies', 'Fire Services', 'Chemical Enterprises'],
    qualityTitle: 'Quality Policy',
    qualitySubtitle:
      'Continuous enhancement of inspection capability and service quality through scientific, impartial, standardized and traceable practices.',
    qualityPolicies: [
      {
        title: 'Integrity',
        desc: 'Strict contract fulfillment and standardized delivery with full legal responsibility and professional accountability.',
      },
      {
        title: 'Impartiality',
        desc: 'Inspection results remain independent from administrative intervention, external pressure or commercial interests.',
      },
      {
        title: 'Scientific Methods',
        desc: 'All testing is performed according to applicable standards or agreed methods using calibrated and verified equipment.',
      },
      {
        title: 'Accurate Data',
        desc: 'Results are traceable and supported by equipment calibration planning to ensure reliability and comparability.',
      },
    ],
    qualitySummary:
      'Hangao remains committed to client-oriented service, trustworthy conduct and continuous improvement, delivering dependable outcomes across pre-sales, delivery and after-service support.',
    timelineTitle: 'Development History',
    timelineSubtitle: 'Twelve years of progress in building a professional inspection brand',
    timeline: [
      { year: '2013', title: 'Company Founded', desc: 'Tangshan Hangao Special Equipment Inspection Co., Ltd. was registered in Tangshan and started its special equipment inspection business.' },
      { year: '2015', title: 'Qualification Approval', desc: 'Received inspection and testing approvals covering boiler and pressure vessel services.' },
      { year: '2017', title: 'Business Expansion', desc: 'Expanded into elevator and lifting machinery inspection and established a more complete quality system.' },
      { year: '2019', title: 'Equipment Upgrade', desc: 'Invested in modern laboratories and introduced advanced NDT and laboratory equipment.' },
      { year: '2022', title: 'Scale Expansion', desc: 'Technical staff size and client coverage continued to grow, supporting more than 200 enterprises.' },
      { year: '2025', title: 'Digital Development', desc: 'Introduced digital inspection management tools to improve efficiency, consistency and service quality.' },
    ],
    teamTitle: 'Professional Team',
    teamSubtitle: 'Experienced professionals supporting high-standard inspection delivery',
    team: [
      { role: 'Senior Engineers', count: '15+', desc: 'Holding national qualification credentials for special equipment inspection' },
      { role: 'Inspection Engineers', count: '25+', desc: 'With extensive experience in field inspection and testing' },
      { role: 'NDT Personnel', count: '10+', desc: 'Qualified in RT, UT, MT, PT and related methods' },
      { role: 'Management Staff', count: '8+', desc: 'Providing efficient project coordination and client service support' },
    ],
  },
};

export default function About() {
  const { lang } = useLanguage();
  const copy = content[lang];

  return (
    <div className="about-page">
      <section className="page-banner">
        <div className="container">
          <h1>{copy.bannerTitle}</h1>
          <p>{copy.bannerSubtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-text">
              <h2>{copy.introTitle}</h2>
              <p>
                <strong>{copy.officialNameLabel}:</strong> {copy.officialEnglishName}
              </p>
              {copy.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="about-profile-list">
                {copy.profileHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-intro-stats">
              {copy.stats.map((item) => (
                <div key={item.label} className="intro-stat">
                  {item.icon}
                  <span className="intro-stat-num">{item.number}</span>
                  <span className="intro-stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section culture-section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.cultureTitle}</h2>
          </div>
          <div className="culture-grid">
            {copy.cultureCards.map((item) => (
              <div key={item.title} className="culture-card">
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.businessTitle}</h2>
            <p>{copy.businessSubtitle}</p>
          </div>
          <div className="business-grid">
            <article className="business-card">
              <h3>{copy.qualificationTitle}</h3>
              <ul>
                {copy.qualificationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="business-note">{copy.businessNote}</p>
            </article>
            <article className="business-card">
              <h3>{copy.serviceUsersTitle}</h3>
              <ul>
                {copy.serviceUsers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section quality-section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.qualityTitle}</h2>
            <p>{copy.qualitySubtitle}</p>
          </div>
          <div className="quality-grid">
            {copy.qualityPolicies.map((item) => (
              <article key={item.title} className="quality-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <p className="quality-summary">{copy.qualitySummary}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.timelineTitle}</h2>
            <p>{copy.timelineSubtitle}</p>
          </div>
          <div className="timeline">
            {copy.timeline.map((item, index) => (
              <div key={`${item.year}-${item.title}`} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-title">
            <h2>{copy.teamTitle}</h2>
            <p>{copy.teamSubtitle}</p>
          </div>
          <div className="team-grid">
            {copy.team.map((item) => (
              <div key={item.role} className="team-card">
                <span className="team-count">{item.count}</span>
                <h3>{item.role}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
