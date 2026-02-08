import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiCalendar } from 'react-icons/fi';
import './About.css';

const timeline = [
  { year: '2009', title: '公司成立', desc: '唐山市杭奥特种设备检验有限公司在唐山市路北区正式注册成立，开始从事特种设备检验检测业务。' },
  { year: '2011', title: '资质获批', desc: '取得河北省质量技术监督局颁发的特种设备检验检测资质，业务范围涵盖锅炉、压力容器检测。' },
  { year: '2014', title: '业务拓展', desc: '新增电梯检测、起重机械检测资质，建立完善的质量管理体系，通过ISO 9001认证。' },
  { year: '2017', title: '设备升级', desc: '投资建设现代化检测实验室，引进国际先进的无损检测设备和理化检验仪器。' },
  { year: '2020', title: '规模扩大', desc: '技术人员扩充至50余人，服务企业超过200家，年检测项目突破1000项。' },
  { year: '2023', title: '创新发展', desc: '引入数字化检测管理系统，推进智能检测技术应用，提升检测效率和服务质量。' },
];

const team = [
  { role: '高级工程师', count: '15+', desc: '持有国家注册特种设备检验师资格' },
  { role: '检测工程师', count: '25+', desc: '具备丰富的现场检测经验' },
  { role: '无损检测人员', count: '10+', desc: 'RT/UT/MT/PT等多项资质' },
  { role: '管理人员', count: '8+', desc: '专业高效的项目管理和客户服务团队' },
];

const profileHighlights = [
  '公司成立于2009年，持有特种设备检验检测机构核准证，并通过ISO体系认证。',
  '可承担锅炉、压力容器、压力管道、电梯、起重机械等检验检测与技术服务。',
  '检验检测人员约80人，其中检验师、检验员及无损检测人员配置齐全，具备多项持证能力。',
  '公司长期服务唐山及周边工业企业，覆盖化工、钢铁、制造、能源等多个行业场景。',
];

export default function About() {
  return (
    <div className="about-page">
      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <h1>关于我们</h1>
          <p>专业特种设备检验检测机构 · 为企业安全保驾护航</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-text">
              <h2>公司简介</h2>
              <p>
                唐山市杭奥特种设备检验有限公司成立于2009年，是经国家市场监督管理总局核准的专业特种设备检验检测机构。公司位于河北省唐山市路北区环城路与唐丰北路交叉路口杭奥特检办公楼，06300，拥有现代化的办公场所、检验实验室及配套技术装备。
              </p>
              <p>
                公司专注于特种设备检验检测领域，主要从事锅炉、压力容器、压力管道、电梯、起重机械、场（厂）内机动车辆等设备检验检测工作，同时提供无损检测（RT、UT、MT、PT）、理化检测、安全阀校验、能效测试等专业技术服务。
              </p>
              <p>
                公司始终秉承“科学、公正、准确、高效”的质量方针，严格执行国家法规与技术标准，不断提升技术能力和服务效率，持续为客户提供权威、及时、可追溯的检验检测成果。
              </p>
              <ul className="about-profile-list">
                {profileHighlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-intro-stats">
              <div className="intro-stat">
                <FiCalendar size={28} />
                <span className="intro-stat-num">15+</span>
                <span className="intro-stat-label">年行业深耕</span>
              </div>
              <div className="intro-stat">
                <FiUsers size={28} />
                <span className="intro-stat-num">50+</span>
                <span className="intro-stat-label">专业技术人员</span>
              </div>
              <div className="intro-stat">
                <FiAward size={28} />
                <span className="intro-stat-num">500+</span>
                <span className="intro-stat-label">服务企业</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section culture-section">
        <div className="container">
          <div className="section-title">
            <h2>企业文化</h2>
          </div>
          <div className="culture-grid">
            <div className="culture-card">
              <FiTarget size={36} />
              <h3>企业使命</h3>
              <p>以专业检测技术守护特种设备安全，为企业安全生产和社会公共安全贡献力量。</p>
            </div>
            <div className="culture-card">
              <FiEye size={36} />
              <h3>企业愿景</h3>
              <p>成为河北省乃至全国领先的特种设备检验检测服务机构，树立行业标杆。</p>
            </div>
            <div className="culture-card">
              <FiHeart size={36} />
              <h3>核心价值观</h3>
              <p>科学严谨、公正廉洁、客户至上、持续创新。以诚信立业，以质量取胜。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>发展历程</h2>
            <p>十五年砥砺前行，铸就专业检测品牌</p>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
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

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-title">
            <h2>专业团队</h2>
            <p>汇聚行业精英，打造一流检测团队</p>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <span className="team-count">{t.count}</span>
                <h3>{t.role}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
