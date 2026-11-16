import { BookOpen, ExternalLink, FileText } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { publications } from '../data/portfolio'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Research() { const { language } = useLanguage(); const t = translations[language];
  return <PageMotion><div className="container-wide page-wrap"><SectionHeading eyebrow="RESEARCH & PUBLICATION" title={t.research.title} description={t.research.description} />
    {publications.map((pub, i) => (
      <article key={i} className="surface-card overflow-hidden mt-5">
        <div className="bg-gradient-to-r from-blue-700 to-sky-500 p-8 text-white md:p-12">
          <BookOpen size={34} />
          {pub.url ? (
            <a href={pub.url} target="_blank" rel="noreferrer" className="mt-5 text-xs font-extrabold tracking-[.18em] text-blue-100">
              PUBLICATION · {pub.publisher}
            </a>
          ) : (
            <span className="mt-5 text-xs font-extrabold tracking-[.18em] text-blue-100">
              PUBLICATION · {pub.publisher}
            </span>
          )}
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-extrabold leading-tight md:text-3xl">
            {pub.title}
          </h2>
        </div>
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3">
            <FileText className="text-blue-600" />
            <div>
              <p className="font-bold text-[#102b50]">{pub.publisher}</p>
            </div>
          </div>
          {pub.note && <p className="mt-6 max-w-3xl leading-7 text-slate-600">{pub.note}</p>}
        </div>
      </article>
    ))}
  </div></PageMotion>
}
