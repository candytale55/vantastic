// Layout compartido: mantiene header/footer y gestiona el scroll al cambiar de ruta.
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // Route changes should start at the top, except footer/home links with hashes.
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const sectionId = location.hash.slice(1);
    const timeoutId = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  return (
    <div className="page-shell">
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
