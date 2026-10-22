import { NavLink, Link } from "react-router-dom";
import ThemeControls from "./ThemeControls.jsx";
import { profile } from "../data.js";

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link className="brand" to="/">U<b>J</b>M</Link>
        <ThemeControls />
      </div>
      <nav className="topnav" aria-label="Pages">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/publications">Publications</NavLink>
      </nav>
      <a className="book-btn" href={profile.cv} target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>
        Download CV
      </a>
    </header>
  );
}
