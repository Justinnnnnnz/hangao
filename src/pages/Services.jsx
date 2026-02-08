import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './Services.css';

const categories = [
  {
    id: 'projects',
    icon: <FiCheckCircle size={28} />,
    title: '检验项目',
    summary: '气瓶、安全阀、低温瓶、呼吸器及压力表等专项检验检测',
    description:
      '当前检验服务聚焦于气瓶类、安全阀类、低温瓶及计量检定等项目，覆盖企业常见特种设备与安全附件的日常检验、校验与检定需求。',
    items: [
      '车用气瓶',
      'CNG/LNG安全阀校验（10MPa以下）',
      'CNG/LNG安全阀校验（10MPa及以上）',
      '工业用低温瓶（杜瓦瓶检测）',
      '呼吸器检测',
      '液化石油气钢瓶',
      '消防用焊接气瓶',
      '钢制无缝气瓶（丙烷气瓶）',
      '压力表（检定）',
    ],
    standards: ['按国家现行特种设备与计量检定相关规范执行（可按项目补充具体标准编号）'],
  },
];

export default function Services() {
  const [active, setActive] = useState('projects');
  const current = categories.find((c) => c.id === active);

  return (
    <div className="services-page">
      <section className="page-banner">
        <div className="container">
          <h1>检测服务</h1>
          <p>全品类特种设备检验检测 · 一站式技术服务</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-layout">
            {/* Sidebar */}
            <div className="services-sidebar">
              <h3>服务分类</h3>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`sidebar-item ${active === cat.id ? 'active' : ''}`}
                  onClick={() => setActive(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="services-detail">
              <div className="detail-header">
                <div className="detail-icon">{current.icon}</div>
                <div>
                  <h2>{current.title}</h2>
                  <p className="detail-summary">{current.summary}</p>
                </div>
              </div>

              <div className="detail-body">
                <p className="detail-desc">{current.description}</p>

                <h3>服务项目</h3>
                <div className="detail-items">
                  {current.items.map((item, i) => (
                    <div key={i} className="detail-item">
                      <FiCheckCircle />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h3>执行标准</h3>
                <ul className="detail-standards">
                  {current.standards.map((std, i) => (
                    <li key={i}>{std}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <h2>检测流程</h2>
            <p>规范化的检测流程，确保每一步都严谨高效</p>
          </div>
          <div className="process-steps">
            {[
              { step: '01', title: '需求沟通', desc: '了解客户检测需求，确定检测项目和范围' },
              { step: '02', title: '方案制定', desc: '制定详细的检测方案和计划，安排技术人员' },
              { step: '03', title: '现场检测', desc: '专业团队上门进行设备检测，严格按标准执行' },
              { step: '04', title: '数据分析', desc: '对检测数据进行科学分析和综合评定' },
              { step: '05', title: '报告出具', desc: '出具权威检测报告，提出整改建议' },
              { step: '06', title: '跟踪服务', desc: '提供后续技术咨询和跟踪服务' },
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
