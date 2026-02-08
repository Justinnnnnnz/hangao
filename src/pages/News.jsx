import { useState } from 'react';
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi';
import './News.css';

const newsData = [
  {
    id: 1,
    category: '公司新闻',
    tag: 'company',
    title: '杭奥检测顺利通过特种设备检验检测机构核准换证审查',
    date: '2024-01-15',
    summary:
      '近日，国家市场监督管理总局特种设备检验检测机构核准审查组对我公司进行了换证审查。经过严格的文件审查、现场考核和人员考试，审查组一致认为我公司质量管理体系运行有效，检测能力满足核准条件，顺利通过换证审查。',
  },
  {
    id: 2,
    category: '行业动态',
    tag: 'industry',
    title: '市场监管总局发布新版《特种设备安全监督检查办法》',
    date: '2024-01-08',
    summary:
      '国家市场监管总局于近日正式发布新版《特种设备安全监督检查办法》，对特种设备的使用登记、定期检验、日常维护保养等方面提出了更加严格的要求。新办法将于2024年3月1日起正式实施。',
  },
  {
    id: 3,
    category: '公司新闻',
    tag: 'company',
    title: '我公司成功举办2024年度特种设备安全技术培训',
    date: '2023-12-20',
    summary:
      '为提升企业特种设备安全管理水平，我公司于12月18-20日成功举办了为期三天的特种设备安全技术培训班。来自唐山及周边地区30余家企业的80余名安全管理人员参加了此次培训。',
  },
  {
    id: 4,
    category: '技术分享',
    tag: 'tech',
    title: '浅谈压力容器定期检验中常见缺陷及处理方法',
    date: '2023-12-10',
    summary:
      '压力容器在长期使用过程中，由于介质腐蚀、疲劳载荷、高温蠕变等因素的影响，可能产生各种缺陷。本文结合多年检验检测经验，总结了压力容器定期检验中常见的缺陷类型及相应的处理方法。',
  },
  {
    id: 5,
    category: '公司新闻',
    tag: 'company',
    title: '杭奥检测参加河北省特种设备检验检测技术交流会',
    date: '2023-11-25',
    summary:
      '2023年11月22-24日，河北省特种设备检验检测技术交流会在石家庄召开。我公司技术团队受邀参加，并就"数字化无损检测技术在特种设备检验中的应用"做了专题报告，获得与会专家的高度评价。',
  },
  {
    id: 6,
    category: '行业动态',
    tag: 'industry',
    title: '河北省开展特种设备安全专项整治行动',
    date: '2023-11-15',
    summary:
      '为深入贯彻安全生产相关要求，河北省市场监督管理局决定在全省范围内开展为期三个月的特种设备安全专项整治行动，重点排查锅炉、压力容器、电梯等特种设备的安全隐患。',
  },
  {
    id: 7,
    category: '技术分享',
    tag: 'tech',
    title: 'TOFD检测技术在压力管道焊缝检测中的应用',
    date: '2023-10-28',
    summary:
      'TOFD（衍射时差法）作为一种先进的超声检测技术，在焊缝缺陷检测和尺寸评定方面具有显著优势。本文介绍了TOFD技术的基本原理、检测方法及其在压力管道焊缝检测中的实际应用案例。',
  },
  {
    id: 8,
    category: '公司新闻',
    tag: 'company',
    title: '我公司引进最新数字化X射线检测系统',
    date: '2023-10-12',
    summary:
      '为进一步提升检测能力和效率，我公司于近日引进了国际先进的数字化X射线检测系统。该系统具有成像质量高、检测速度快、数据可存储等优势，将显著提升我公司的射线检测水平。',
  },
];

const tabs = [
  { key: 'all', label: '全部' },
  { key: 'company', label: '公司新闻' },
  { key: 'industry', label: '行业动态' },
  { key: 'tech', label: '技术分享' },
];

export default function News() {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all' ? newsData : newsData.filter((n) => n.tag === activeTab);

  return (
    <div className="news-page">
      <section className="page-banner">
        <div className="container">
          <h1>新闻动态</h1>
          <p>了解杭奥最新动态 · 关注行业前沿资讯</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="news-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`news-tab ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* News List */}
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
                  <span className="news-more">
                    阅读全文 <FiArrowRight />
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
