import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiCalendar, FiExternalLink, FiTag } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import { getNewsItemBySlug, newsPageCopy } from '../data/newsData';
import NotFound from './NotFound';
import './News.css';

export default function NewsArticle() {
  const { slug } = useParams();
  const { lang, buildPath } = useLanguage();
  const copy = newsPageCopy[lang];
  const item = getNewsItemBySlug(lang, slug);

  if (!item) {
    return <NotFound />;
  }

  return (
    <div className="news-article-page">
      <section className="page-banner">
        <div className="container">
          <h1>{item.title}</h1>
          <p>{item.category}</p>
        </div>
      </section>

      <section className="section">
        <div className="container news-article-shell">
          <Link to={buildPath('/news')} className="news-backlink">
            <FiArrowLeft /> {copy.backToList}
          </Link>

          <article className="news-article">
            <div className="news-article-meta">
              <span className="news-category">
                <FiTag size={12} /> {item.category}
              </span>
              <span className="news-date-text">
                <FiCalendar size={12} /> {item.date}
              </span>
            </div>

            <p className="news-article-summary">{item.summary}</p>

            <div className="news-article-body">
              {item.content?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {item.highlights?.length ? (
              <section className="news-article-section">
                <h2>{lang === 'en' ? 'Key Points' : '要点提示'}</h2>
                <ul className="news-article-list">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {item.references?.length ? (
              <section className="news-article-section">
                <h2>{copy.referencesTitle}</h2>
                <ul className="news-article-references">
                  {item.references.map((reference) => (
                    <li key={reference.url}>
                      <a href={reference.url} target="_blank" rel="noreferrer">
                        {reference.label} <FiExternalLink size={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </article>
        </div>
      </section>
    </div>
  );
}
