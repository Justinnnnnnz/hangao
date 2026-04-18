import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function NotFound() {
  const { lang, buildPath } = useLanguage();
  const isEnglish = lang === 'en';

  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: 10 }}>404</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>
          {isEnglish ? 'The page could not be found. It may have been moved or removed.' : '页面不存在，可能已被移动或删除。'}
        </p>
        <Link className="btn btn-primary" to={buildPath('/')}>
          {isEnglish ? 'Back Home' : '返回首页'}
        </Link>
      </div>
    </section>
  );
}
