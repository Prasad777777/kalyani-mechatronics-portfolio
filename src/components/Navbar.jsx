
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const paths = [
  ["home", "/"],
  ["about", "/about"],
  ["skills", "/skills"],
  ["projects", "/projects"],
  ["experience", "/experience"],
  ["research", "/research"],
  ["japanese", "/japanese"],
  ["achievements", "/achievements"],
  ["contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur-xl">
      <div className="container-wide flex min-h-[76px] items-center justify-between gap-4 py-3">

        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-600 font-bold text-white">
            KA
          </span>

          <div>
            <p className="font-bold text-[#102b50]">
              Kalyani Asane
            </p>
            <p className="text-xs text-slate-500">
              {language === "en"
                ? "Mechatronics Engineer"
                : "メカトロニクスエンジニア"}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 2xl:flex">
          {paths.map(([key, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {t[key]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">

          {/* LANGUAGE TOGGLE */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-100"
          >
            <Languages size={17} />

            {language === "en" ? "日本語" : "English"}
          </button>

          <button
            className="mobile-menu 2xl:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-wide grid grid-cols-2 gap-2 pb-5 2xl:hidden">
          {paths.map(([key, path]) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-bold text-slate-600 hover:bg-blue-50"
            >
              {t[key]}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
