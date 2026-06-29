// Layout compartido: mantiene header/footer y gestiona el scroll al cambiar de ruta.
import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const location = useLocation();
  // Track the previous pathname so we can distinguish full page changes from nested tab changes.
  const prevPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const previousPath = prevPathnameRef.current;

    // Normalize VanDetail routes to a stable base (/vans/:id), ignoring nested tab suffixes.
    const getVanBasePath = (path) => {
      const match = path.match(/^\/vans\/([^/]+)(?:\/(specs|ratings))?$/);
      return match ? `/vans/${match[1]}` : null;
    };

    const currentVanBase = getVanBasePath(currentPath);
    const previousVanBase = getVanBasePath(previousPath);
    // True when the user only switched between tabs of the same van detail view.
    const isVanTabSwitch = Boolean(currentVanBase && previousVanBase && currentVanBase === previousVanBase);

    // Update ref early so the next navigation compares against the current location.
    prevPathnameRef.current = currentPath;

    // Keep viewport position when only switching VanDetail nested tabs on the same van.
    if (isVanTabSwitch) {
      return;
    }

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
