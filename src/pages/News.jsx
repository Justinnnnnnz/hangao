import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import { getNewsItems, newsPageCopy, newsTabs } from '../data/newsData';
import './News.css';

export default function News() {
  const [activeTab, setActiveTab] = useState('all');
  const { lang, buildPath } = useLanguage();
  const copy = newsPageCopy[lang];
  const items = getNewsItems(lang);
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
            {newsTabs[lang].map((tab) => (
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
              <article key={news.slug} className="news-card">
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
                  <Link to={buildPath(`/news/${news.slug}`)} className="news-more">
                    {copy.readMore} <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
