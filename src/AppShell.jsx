import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SeoManager from './components/SeoManager';
import { LanguageProvider } from './contexts/LanguageContext';
import { getLanguageFromPath, localizePath, stripLanguagePrefix } from './i18n';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Qualifications from './pages/Qualifications';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';

export const pageRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/qualifications', element: <Qualifications /> },
  { path: '/news', element: <News /> },
  { path: '/contact', element: <Contact /> },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = getLanguageFromPath(location.pathname);
  const basePath = stripLanguagePrefix(location.pathname);

  function changeLanguage(nextLang) {
    localStorage.setItem('siteLanguage', nextLang);
    navigate(localizePath(location.pathname, nextLang));
  }

  return (
    <LanguageProvider
      value={{
        lang,
        basePath,
        buildPath: (path) => localizePath(path, lang),
        switchLanguage: changeLanguage,
      }}
    >
      <ScrollToTop />
      <SeoManager />
      <Header />
      <main>
        <Routes>
          {pageRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="/news/:slug" element={<NewsArticle />} />
          {pageRoutes.map((route) => (
            <Route
              key={`en${route.path}`}
              path={localizePath(route.path, 'en')}
              element={route.element}
            />
          ))}
          <Route path="/en/news/:slug" element={<NewsArticle />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
