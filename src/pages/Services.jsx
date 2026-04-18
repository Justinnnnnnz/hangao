import { FiCheckCircle, FiClipboard, FiShield, FiTool } from 'react-icons/fi';
import './Services.css';

const projectItems = [
  {
    title: '车用气瓶',
    intro: '面向车用 CNG/LNG 气瓶开展定期检验与安全状态评估，保障车辆运行安全。',
    details: ['外观与结构状态检查', '瓶阀及附件性能核查', '检测记录归档与检验报告出具'],
  },
  {
    title: 'CNG/LNG安全阀校验（10MPa以下）',
    intro: '针对 10MPa 以下工况安全阀开展离线/在线校验，确保启跳参数准确。',
    details: ['整定压力校准', '密封性能测试', '校验数据记录与证书出具'],
  },
  {
    title: 'CNG/LNG安全阀校验（10MPa及以上）',
    intro: '针对高压工况安全阀提供专项校验服务，满足高风险场景安全要求。',
    details: ['高压工况校验流程执行', '阀门动作一致性复核', '高压设备专项技术支持'],
  },
  {
    title: '工业用低温瓶（杜瓦瓶检测）',
    intro: '提供低温绝热容器专项检测，覆盖密封性、绝热性与关键附件安全性。',
    details: ['瓶体与焊缝状态检查', '低温工况性能核验', '使用风险评估与整改建议'],
  },
  {
    title: '呼吸器检测',
    intro: '服务复合式呼吸器与氧气呼吸器，保障应急防护装备性能可靠。',
    details: ['气密性与功能性检测', '关键部件有效性检查', '使用周期与维护建议'],
  },
  {
    title: '液化石油气钢瓶',
    intro: '对液化石油气钢瓶实施规范化检测，提升充装、储运与使用环节安全。',
    details: ['瓶体缺陷检查', '阀门及附件状态核验', '判定结论与复检建议'],
  },
  {
    title: '消防用焊接气瓶',
    intro: '针对消防场景焊接气瓶开展专项检测，确保在应急使用中稳定可靠。',
    details: ['焊接部位完整性检查', '承压与密封性能核验', '检测报告与技术说明'],
  },
  {
    title: '钢制无缝气瓶（丙烷气瓶）',
    intro: '面向钢制无缝气瓶及丙烷气瓶提供检验服务，覆盖重点风险部位。',
    details: ['瓶体结构与壁厚检查', '阀件功能与密封核验', '合格判定与追溯管理'],
  },
  {
    title: '压力表（检定）',
    intro: '按计量要求开展压力表检定，确保测量数据准确、稳定、可追溯。',
    details: ['示值误差检定', '重复性与回程误差检查', '检定结果出具与周期建议'],
  },
];

const standards = [
  '按照国家现行特种设备安全技术规范执行',
  '按照计量检定规程与校准规范执行',
  '检测数据可追溯并形成标准化报告',
];

const serviceAdvantages = [
  {
    icon: <FiShield />,
    title: '资质覆盖全面',
    desc: '涵盖气瓶、安全阀、低温瓶、呼吸器及压力表等关键项目。',
  },
  {
    icon: <FiTool />,
    title: '流程规范严谨',
    desc: '按照标准流程实施检验检测，确保过程和结论一致性。',
  },
  {
    icon: <FiClipboard />,
    title: '报告及时可追溯',
    desc: '检测结果形成规范报告，便于企业档案留存与监管核查。',
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-banner">
        <div className="container">
          <h1>检测服务</h1>
          <p>重点覆盖气瓶、安全阀、低温瓶、呼吸器与压力表等检验检测项目</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-overview">
            <h2>检验项目总览</h2>
            <p>
              我们围绕企业高频使用的特种设备与安全附件，提供专项检验、校验与检定服务。各项目均按现行规范执行，形成可追溯检测数据和规范化报告，支持企业安全管理与合规要求。
            </p>
          </div>

          <div className="services-project-grid">
            {projectItems.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-card-head">
                  <FiCheckCircle />
                  <h3>{project.title}</h3>
                </div>
                <p className="project-intro">{project.intro}</p>
                <ul className="project-details">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="service-standards">
            <h3>执行标准</h3>
            <ul>
              {standards.map((standard, index) => (
                <li key={index}>{standard}</li>
              ))}
            </ul>
          </div>

          <div className="service-advantages">
            {serviceAdvantages.map((item, index) => (
              <article key={index} className="advantage-item">
                <div className="advantage-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <h2>检测流程</h2>
            <p>规范化流程覆盖需求沟通、现场实施、数据分析与报告交付</p>
          </div>
          <div className="process-steps">
            {[
              { step: '01', title: '需求沟通', desc: '明确项目类型、数量、使用工况和时间安排' },
              { step: '02', title: '方案制定', desc: '制定检测计划，确认标准依据与实施流程' },
              { step: '03', title: '现场检测', desc: '按规范开展检测作业并完整记录原始数据' },
              { step: '04', title: '数据分析', desc: '对采集数据进行评定并识别潜在安全风险' },
              { step: '05', title: '报告出具', desc: '形成规范报告并给出整改建议与复检意见' },
              { step: '06', title: '跟踪服务', desc: '提供技术答疑、整改支持与后续服务建议' },
            ].map((p, i) => (
              <div key={i} className="process-step">
                <span className="process-num">{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
