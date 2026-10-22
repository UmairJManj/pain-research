import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar.jsx";
import Home from "./pages/Home.jsx";
import Publications from "./pages/Publications.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="bg-fx" aria-hidden />
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <main className={pathname === "/" ? "page page-wide" : "page"} id="main">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
