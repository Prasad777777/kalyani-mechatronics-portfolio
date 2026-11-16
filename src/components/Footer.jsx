
import { Link } from "react-router-dom";
import { ArrowUpRight, Heart } from "lucide-react";

import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-wide flex flex-col gap-4 py-8 sm:flex-row sm:justify-between">

        <div>
          <Link to="/" className="font-bold text-[#102b50]">
            Kalyani Asane.
          </Link>

          <p className="text-xs text-slate-500">
            {t.role}
          </p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-sm font-bold text-blue-700"
        >
          {t.connect}
          <ArrowUpRight size={15} />
        </a>

        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Kalyani Asane
          <Heart size={12} className="mx-1 inline text-blue-500" />
        </p>

      </div>
    </footer>
  );
}
