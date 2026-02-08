import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: 10 }}>404</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>
          页面不存在，可能已被移动或删除。
        </p>
        <Link className="btn btn-primary" to="/">
          返回首页
        </Link>
      </div>
    </section>
  );
}
