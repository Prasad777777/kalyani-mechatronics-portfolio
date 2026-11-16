import { BriefcaseBusiness, MapPin } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/portfolio'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Experience() { const { language } = useLanguage(); const t = translations[language];
  return <PageMotion><div className="container-wide page-wrap"><SectionHeading eyebrow="PROFESSIONAL EXPERIENCE" title={t.experience.title} description={t.experience.description} />
    <div className="relative pl-9"><div className="timeline-line"/>{experience.map(item => <article key={item.company} className="surface-card relative mb-6 p-7 md:p-9"><span className="absolute -left-[31px] top-8 grid h-8 w-8 place-items-center rounded-full border-4 border-[#f7faff] bg-blue-600 text-white"><BriefcaseBusiness size={13}/></span><p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">{item.period}</p><h2 className="mt-3 font-display text-2xl font-extrabold text-[#102b50]">{item.role}</h2><p className="mt-1 text-lg font-semibold text-slate-600">{item.company}</p><p className="mt-2 flex items-center gap-2 text-sm text-slate-400"><MapPin size={14}/>{item.location}</p><ul className="mt-6 space-y-3">{item.bullets.map(b => <li key={b} className="flex gap-3 leading-7 text-slate-600"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"/>{b}</li>)}</ul></article>)}</div><div className="mt-10 grid gap-5 sm:grid-cols-2"><img src="/assets/exp1.jpeg" alt="Experience image 1" className="w-full rounded-lg"/><img src="/assets/exp2.png" alt="Experience image 2" className="w-full rounded-lg"/></div>
  </div><div className="mt-10 grid gap-5 sm:grid-cols-2"><img src="/assets/exp1.jpeg" alt="Experience image 1" className="w-full rounded-lg"/><img src="/assets/exp2.png" alt="Experience image 2" className="w-full rounded-lg"/></div></PageMotion>
}
