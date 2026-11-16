import { Award, ImagePlus, Trophy } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { achievements, certifications } from '../data/portfolio'

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
export default function Achievements() {
  const { language } = useLanguage();
  const t = translations[language];
  return <PageMotion><div className="container-wide page-wrap"><SectionHeading eyebrow="RECOGNITION & LEARNING" title={t.achievements.title} description={t.achievements.description} />
    <div className="mb-12"><div className="mb-6 flex items-center gap-3"><Trophy className="text-blue-600"/><h2 className="font-display text-2xl font-extrabold text-[#102b50]">Achievements</h2></div><div className="grid gap-5 md:grid-cols-2">{achievements.map(item => <article key={item.title} className="surface-card p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Award size={23}/></span><h3 className="mt-5 font-display text-xl font-extrabold text-[#102b50]">{item.title}</h3><p className="mt-2 inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">{item.result}</p><p className="mt-3 text-sm leading-6 text-slate-500">{item.detail}</p></article>)}</div></div>
    <div><div className="mb-6 flex items-center gap-3"><Award className="text-blue-600"/><h2 className="font-display text-2xl font-extrabold text-[#102b50]">Certifications</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{certifications.map((item, i) => <div key={item} className="surface-card flex items-start gap-3 p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">{String(i+1).padStart(2,'0')}</span><p className="pt-1 text-sm font-bold leading-6 text-[#17365e]">{item}</p></div>)}</div></div>
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  <img src="/assets/cert1.jpeg" alt="Certificate 1" className="w-full rounded-lg" />
  <img src="/assets/cert2.jpeg" alt="Certificate 2" className="w-full rounded-lg" />
  <img src="/assets/cert3.jpeg" alt="Certificate 3" className="w-full rounded-lg" />
  <img src="/assets/cert4.jpeg" alt="Certificate 4" className="w-full rounded-lg" />
  <img src="/assets/cert5.jpeg" alt="Certificate 5" className="w-full rounded-lg" />
  <img src="/assets/cert6.jpeg" alt="Certificate 6" className="w-full rounded-lg" />
</div>
  </div></PageMotion>
}
