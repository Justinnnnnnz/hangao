import { FiCheckCircle, FiClipboard, FiShield, FiTool } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './Services.css';

const content = {
  zh: {
    bannerTitle: '检测服务',
    bannerSubtitle: '重点覆盖气瓶、安全阀、低温瓶、呼吸器与压力表等检验检测项目',
    overviewTitle: '检验项目总览',
    overviewDesc:
      '我们围绕企业高频使用的特种设备与安全附件，提供专项检验、校验与检定服务。各项目均按现行规范执行，形成可追溯检测数据和规范化报告，支持企业安全管理与合规要求。',
    projects: [
      { title: '车用气瓶', intro: '面向车用 CNG/LNG 气瓶开展定期检验与安全状态评估，保障车辆运行安全。', details: ['外观与结构状态检查', '瓶阀及附件性能核查', '检测记录归档与检验报告出具'] },
      { title: 'CNG/LNG安全阀校验（10MPa以下）', intro: '针对 10MPa 以下工况安全阀开展离线/在线校验，确保启跳参数准确。', details: ['整定压力校准', '密封性能测试', '校验数据记录与证书出具'] },
      { title: 'CNG/LNG安全阀校验（10MPa及以上）', intro: '针对高压工况安全阀提供专项校验服务，满足高风险场景安全要求。', details: ['高压工况校验流程执行', '阀门动作一致性复核', '高压设备专项技术支持'] },
      { title: '工业用低温瓶（杜瓦瓶检测）', intro: '提供低温绝热容器专项检测，覆盖密封性、绝热性与关键附件安全性。', details: ['瓶体与焊缝状态检查', '低温工况性能核验', '使用风险评估与整改建议'] },
      { title: '呼吸器检测', intro: '服务复合式呼吸器与氧气呼吸器，保障应急防护装备性能可靠。', details: ['气密性与功能性检测', '关键部件有效性检查', '使用周期与维护建议'] },
      { title: '液化石油气钢瓶', intro: '对液化石油气钢瓶实施规范化检测，提升充装、储运与使用环节安全。', details: ['瓶体缺陷检查', '阀门及附件状态核验', '判定结论与复检建议'] },
      { title: '消防用焊接气瓶', intro: '针对消防场景焊接气瓶开展专项检测，确保在应急使用中稳定可靠。', details: ['焊接部位完整性检查', '承压与密封性能核验', '检测报告与技术说明'] },
      { title: '钢制无缝气瓶（丙烷气瓶）', intro: '面向钢制无缝气瓶及丙烷气瓶提供检验服务，覆盖重点风险部位。', details: ['瓶体结构与壁厚检查', '阀件功能与密封核验', '合格判定与追溯管理'] },
      { title: '压力表（检定）', intro: '按计量要求开展压力表检定，确保测量数据准确、稳定、可追溯。', details: ['示值误差检定', '重复性与回程误差检查', '检定结果出具与周期建议'] },
    ],
    standardsTitle: '执行标准',
    standards: ['按照国家现行特种设备安全技术规范执行', '按照计量检定规程与校准规范执行', '检测数据可追溯并形成标准化报告'],
    advantages: [
      { icon: <FiShield />, title: '资质覆盖全面', desc: '涵盖气瓶、安全阀、低温瓶、呼吸器及压力表等关键项目。' },
      { icon: <FiTool />, title: '流程规范严谨', desc: '按照标准流程实施检验检测，确保过程和结论一致性。' },
      { icon: <FiClipboard />, title: '报告及时可追溯', desc: '检测结果形成规范报告，便于企业档案留存与监管核查。' },
    ],
    processTitle: '检测流程',
    processSubtitle: '规范化流程覆盖需求沟通、现场实施、数据分析与报告交付',
    process: [
      { step: '01', title: '需求沟通', desc: '明确项目类型、数量、使用工况和时间安排' },
      { step: '02', title: '方案制定', desc: '制定检测计划，确认标准依据与实施流程' },
      { step: '03', title: '现场检测', desc: '按规范开展检测作业并完整记录原始数据' },
      { step: '04', title: '数据分析', desc: '对采集数据进行评定并识别潜在安全风险' },
      { step: '05', title: '报告出具', desc: '形成规范报告并给出整改建议与复检意见' },
      { step: '06', title: '跟踪服务', desc: '提供技术答疑、整改支持与后续服务建议' },
    ],
  },
  en: {
    bannerTitle: 'Services',
    bannerSubtitle: 'Inspection and testing services focused on cylinders, safety valves, cryogenic vessels, breathing apparatus and pressure gauges',
    overviewTitle: 'Service Overview',
    overviewDesc:
      'We provide targeted inspection, calibration and verification services for special equipment and safety accessories widely used by industrial clients. All projects follow applicable technical rules and generate traceable data and standardized reports for compliance management.',
    projects: [
      { title: 'Vehicle Gas Cylinders', intro: 'Periodic inspection and safety evaluation for vehicle CNG/LNG cylinders.', details: ['Appearance and structural checks', 'Valve and accessory inspection', 'Inspection record filing and report issuance'] },
      { title: 'CNG/LNG Safety Valve Calibration (<10MPa)', intro: 'Offline and online calibration service for safety valves below 10MPa.', details: ['Set pressure calibration', 'Sealing performance testing', 'Calibration records and certificates'] },
      { title: 'CNG/LNG Safety Valve Calibration (>=10MPa)', intro: 'Dedicated calibration service for high-pressure safety valve conditions.', details: ['High-pressure calibration procedures', 'Action consistency verification', 'Technical support for high-pressure systems'] },
      { title: 'Industrial Cryogenic Vessels', intro: 'Inspection service for cryogenic insulated vessels including key accessories.', details: ['Cylinder body and weld inspection', 'Cryogenic performance verification', 'Risk assessment and recommendations'] },
      { title: 'Breathing Apparatus Testing', intro: 'Testing service for composite and oxygen breathing apparatus used in emergency and industrial scenarios.', details: ['Tightness and functional testing', 'Critical component inspection', 'Maintenance cycle recommendations'] },
      { title: 'LPG Cylinders', intro: 'Standardized inspection service for LPG cylinders used in filling, storage and transportation.', details: ['Cylinder defect checks', 'Valve and accessory verification', 'Conclusion and reinspection recommendations'] },
      { title: 'Fire-Fighting Welded Cylinders', intro: 'Specialized inspection for welded cylinders used in fire-protection applications.', details: ['Weld integrity inspection', 'Pressure and sealing verification', 'Report and technical notes'] },
      { title: 'Seamless Steel Cylinders', intro: 'Inspection service for seamless steel cylinders and propane cylinders.', details: ['Structure and wall thickness checks', 'Valve function and sealing verification', 'Conformity judgement and traceability'] },
      { title: 'Pressure Gauge Verification', intro: 'Verification service to maintain accurate, stable and traceable pressure measurements.', details: ['Indication error verification', 'Repeatability and return error checks', 'Verification report and interval advice'] },
    ],
    standardsTitle: 'Execution Standards',
    standards: ['Performed in accordance with current national technical specifications for special equipment safety', 'Executed in line with metrology verification rules and calibration standards', 'All testing data remains traceable and is documented in standardized reports'],
    advantages: [
      { icon: <FiShield />, title: 'Comprehensive Qualifications', desc: 'Coverage across key inspection items including cylinders, safety valves, cryogenic vessels and pressure gauges.' },
      { icon: <FiTool />, title: 'Standardized Processes', desc: 'Inspection work is executed through disciplined procedures for consistent results.' },
      { icon: <FiClipboard />, title: 'Traceable Reporting', desc: 'Inspection results are delivered in standardized reports for internal records and regulatory review.' },
    ],
    processTitle: 'Inspection Process',
    processSubtitle: 'A standardized workflow from project communication to report delivery and follow-up support',
    process: [
      { step: '01', title: 'Requirement Review', desc: 'Confirm project type, quantity, operating conditions and schedule.' },
      { step: '02', title: 'Planning', desc: 'Prepare the inspection plan and identify applicable standards and procedures.' },
      { step: '03', title: 'On-site Inspection', desc: 'Carry out inspection activities in accordance with procedures and record raw data.' },
      { step: '04', title: 'Data Evaluation', desc: 'Review collected data and identify potential safety risks.' },
      { step: '05', title: 'Report Delivery', desc: 'Issue standardized reports with recommendations and reinspection suggestions.' },
      { step: '06', title: 'Follow-up Support', desc: 'Provide technical clarification, rectification support and subsequent advice.' },
    ],
  },
};

export default function Services() {
  const { lang } = useLanguage();
  const copy = content[lang];

  return (
    <div className="services-page">
      <section className="page-banner">
        <div className="container">
          <h1>{copy.bannerTitle}</h1>
          <p>{copy.bannerSubtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-overview">
            <h2>{copy.overviewTitle}</h2>
            <p>{copy.overviewDesc}</p>
          </div>

          <div className="services-project-grid">
            {copy.projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card-head">
                  <FiCheckCircle />
                  <h3>{project.title}</h3>
                </div>
                <p className="project-intro">{project.intro}</p>
                <ul className="project-details">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="service-standards">
            <h3>{copy.standardsTitle}</h3>
            <ul>
              {copy.standards.map((standard) => (
                <li key={standard}>{standard}</li>
              ))}
            </ul>
          </div>

          <div className="service-advantages">
            {copy.advantages.map((item) => (
              <article key={item.title} className="advantage-item">
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
            <h2>{copy.processTitle}</h2>
            <p>{copy.processSubtitle}</p>
          </div>
          <div className="process-steps">
            {copy.process.map((item) => (
              <div key={item.step} className="process-step">
                <span className="process-num">{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
