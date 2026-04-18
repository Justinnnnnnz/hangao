import { useState } from 'react';
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import './News.css';

const newsData = {
  zh: [
    {
      id: 0,
      category: '公司新闻',
      tag: 'company',
      title: '路北区市场监督管理局气瓶质量安全追溯体系建设“回头看”工作会在我公司召开并圆满结束',
      date: '2021-04-29',
      summary: '为贯彻落实路北区市场监督管理局气瓶质量安全追溯体系建设，积极推进气瓶质量安全工作，4月29日上午召开路北区市场监督管理局气瓶质量安全追溯体系建设“回头看”工作会。',
      content: [
        '路北区何局长与张科长就我区气瓶质量安全有关要求、排查整治工作开展情况、目前存在的问题和下一步安排做了系统总结，并提出了具体工作要求。',
        '会议指出：以全面落实气瓶充装单位、检测单位追溯管理责任为基础，以提升气瓶质量安全与公共安全为目标，统一追溯标注，强化全市不同信息化充装管理和检验管理系统信息互动共享，提高监管效能，实现全市气瓶来源可查、流向可追、责任可究。',
        '我公司贯彻落实会议精神，加强工作管理，切实落实唐山市气瓶质量安全追溯体系建设“回头看”工作的会议精神，为客户提供更系统、更安全、更优质的服务。',
      ],
    },
    { id: 1, category: '公司新闻', tag: 'company', title: '杭奥检测顺利通过特种设备检验检测机构核准换证审查', date: '2024-01-15', summary: '近日，国家市场监督管理总局特种设备检验检测机构核准审查组对我公司进行了换证审查。经过严格的文件审查、现场考核和人员考试，审查组一致认为我公司质量管理体系运行有效，检测能力满足核准条件，顺利通过换证审查。' },
    { id: 2, category: '行业动态', tag: 'industry', title: '市场监管总局发布新版《特种设备安全监督检查办法》', date: '2024-01-08', summary: '国家市场监管总局于近日正式发布新版《特种设备安全监督检查办法》，对特种设备的使用登记、定期检验、日常维护保养等方面提出了更加严格的要求。新办法将于2024年3月1日起正式实施。' },
    { id: 3, category: '公司新闻', tag: 'company', title: '我公司成功举办2023年度特种设备安全技术培训', date: '2023-12-20', summary: '为提升企业特种设备安全管理水平，我公司于12月18-20日成功举办了为期三天的特种设备安全技术培训班。来自唐山及周边地区30余家企业的80余名安全管理人员参加了此次培训。' },
    { id: 4, category: '技术分享', tag: 'tech', title: '浅谈压力容器定期检验中常见缺陷及处理方法', date: '2023-12-10', summary: '压力容器在长期使用过程中，由于介质腐蚀、疲劳载荷、高温蠕变等因素的影响，可能产生各种缺陷。本文结合多年检验检测经验，总结了压力容器定期检验中常见的缺陷类型及相应的处理方法。' },
    { id: 5, category: '公司新闻', tag: 'company', title: '杭奥检测参加河北省特种设备检验检测技术交流会', date: '2023-11-25', summary: '2023年11月22-24日，河北省特种设备检验检测技术交流会在石家庄召开。我公司技术团队受邀参加，并就"数字化无损检测技术在特种设备检验中的应用"做了专题报告，获得与会专家的高度评价。' },
    { id: 6, category: '行业动态', tag: 'industry', title: '河北省开展特种设备安全专项整治行动', date: '2023-11-15', summary: '为深入贯彻安全生产相关要求，河北省市场监督管理局决定在全省范围内开展为期三个月的特种设备安全专项整治行动，重点排查锅炉、压力容器、电梯等特种设备的安全隐患。' },
    { id: 7, category: '技术分享', tag: 'tech', title: 'TOFD检测技术在压力管道焊缝检测中的应用', date: '2023-10-28', summary: 'TOFD（衍射时差法）作为一种先进的超声检测技术，在焊缝缺陷检测和尺寸评定方面具有显著优势。本文介绍了TOFD技术的基本原理、检测方法及其在压力管道焊缝检测中的实际应用案例。' },
    { id: 8, category: '公司新闻', tag: 'company', title: '我公司引进最新数字化X射线检测系统', date: '2023-10-12', summary: '为进一步提升检测能力和效率，我公司于近日引进了国际先进的数字化X射线检测系统。该系统具有成像质量高、检测速度快、数据可存储等优势，将显著提升我公司的射线检测水平。' },
  ],
  en: [
    {
      id: 0,
      category: 'Company News',
      tag: 'company',
      title: 'Review Meeting on Gas Cylinder Traceability System Held at Hangao',
      date: '2021-04-29',
      summary: 'A review meeting on the gas cylinder quality and safety traceability system was held at Hangao to further promote gas cylinder safety management in Lubei District.',
      content: [
        'Local market supervision officials reviewed current requirements, progress, existing issues and next-step arrangements regarding gas cylinder quality and safety.',
        'The meeting emphasized stronger traceability obligations for filling and inspection entities, unified traceability identification and improved information sharing across management systems.',
        'Hangao will continue to implement the meeting requirements and provide safer and more systematic inspection services for clients.',
      ],
    },
    { id: 1, category: 'Company News', tag: 'company', title: 'Hangao Passed the Renewal Review for Special Equipment Inspection Qualification', date: '2024-01-15', summary: 'Hangao successfully passed the renewal review for its special equipment inspection qualification after document review, on-site assessment and personnel examination.' },
    { id: 2, category: 'Industry Updates', tag: 'industry', title: 'SAMR Released the Updated Measures for Special Equipment Safety Inspection', date: '2024-01-08', summary: 'China\'s market regulator released updated measures for special equipment safety supervision, strengthening requirements for registration, periodic inspection and maintenance.' },
    { id: 3, category: 'Company News', tag: 'company', title: 'Hangao Successfully Held the 2023 Special Equipment Safety Training Program', date: '2023-12-20', summary: 'Hangao organized a three-day safety training program for special equipment management personnel from more than 30 enterprises in Tangshan and nearby areas.' },
    { id: 4, category: 'Technical Insight', tag: 'tech', title: 'Common Defects in Periodic Inspection of Pressure Vessels', date: '2023-12-10', summary: 'This article summarizes common defects found during pressure vessel periodic inspection and discusses corresponding treatment methods based on practical experience.' },
    { id: 5, category: 'Company News', tag: 'company', title: 'Hangao Participated in Hebei Special Equipment Technology Exchange Conference', date: '2023-11-25', summary: 'Hangao\'s technical team joined the Hebei technology exchange conference and shared a presentation on digital NDT applications in special equipment inspection.' },
    { id: 6, category: 'Industry Updates', tag: 'industry', title: 'Hebei Launched a Special Equipment Safety Rectification Campaign', date: '2023-11-15', summary: 'Hebei authorities launched a three-month campaign focusing on major safety risks related to boilers, pressure vessels and elevators.' },
    { id: 7, category: 'Technical Insight', tag: 'tech', title: 'Application of TOFD in Pressure Piping Weld Inspection', date: '2023-10-28', summary: 'This article introduces TOFD technology and its application in detecting weld defects and evaluating weld sizing for pressure piping.' },
    { id: 8, category: 'Company News', tag: 'company', title: 'Hangao Introduced a New Digital X-ray Inspection System', date: '2023-10-12', summary: 'Hangao introduced an advanced digital X-ray inspection system to further improve inspection efficiency, image quality and data management capability.' },
  ],
};

const tabs = {
  zh: [
    { key: 'all', label: '全部' },
    { key: 'company', label: '公司新闻' },
    { key: 'industry', label: '行业动态' },
    { key: 'tech', label: '技术分享' },
  ],
  en: [
    { key: 'all', label: 'All' },
    { key: 'company', label: 'Company News' },
    { key: 'industry', label: 'Industry Updates' },
    { key: 'tech', label: 'Technical Insight' },
  ],
};

const pageCopy = {
  zh: {
    title: '新闻动态',
    subtitle: '了解杭奥最新动态 · 关注行业前沿资讯',
    readMore: '阅读全文',
  },
  en: {
    title: 'News',
    subtitle: 'Latest updates from Hangao and selected industry information',
    readMore: 'Read More',
  },
};

export default function News() {
  const [activeTab, setActiveTab] = useState('all');
  const { lang } = useLanguage();
  const copy = pageCopy[lang];
  const items = newsData[lang];
  const filtered = activeTab === 'all' ? items : items.filter((item) => item.tag === activeTab);

  return (
    <div className="news-page">
      <section className="page-banner">
        <div className="container">
          <h1>{copy.title}</h1>
          <p>{copy.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-tabs">
            {tabs[lang].map((tab) => (
              <button
                key={tab.key}
                className={`news-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="news-list">
            {filtered.map((news) => (
              <article key={news.id} className="news-card">
                <div className="news-date-col">
                  <span className="news-day">{news.date.split('-')[2]}</span>
                  <span className="news-month">
                    {news.date.split('-')[0]}.{news.date.split('-')[1]}
                  </span>
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-category">
                      <FiTag size={12} /> {news.category}
                    </span>
                    <span className="news-date-text">
                      <FiCalendar size={12} /> {news.date}
                    </span>
                  </div>
                  <h3>{news.title}</h3>
                  <p>{news.summary}</p>
                  {news.content && (
                    <div className="news-content-detail">
                      {news.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  <span className="news-more">
                    {copy.readMore} <FiArrowRight />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
