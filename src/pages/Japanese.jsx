import { motion } from 'framer-motion'
import { Languages, BookOpen, Globe2, Flag } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const milestones = [
  { title: 'JLPT N4', subtitle: 'Japan Foundation', text: 'Japanese-Language Proficiency Test qualification listed in my CV.' },
  { title: 'JLPT N5', subtitle: 'Japan Foundation', text: 'NAT-TEST qualification listed in my CV.' },
  { title: 'Currently learning', subtitle: 'Continuing the journey', text: 'Building Japanese vocabulary, grammar, reading and communication skills.' },
]
export default function Japanese() {
  const { language } = useLanguage();
  const t = translations[language];
  return <PageMotion><div className="container-wide page-wrap"><SectionHeading eyebrow={t.japanese.title} title={t.japanese.title} description={t.japanese.subtitle} />
    <div className="relative overflow-hidden rounded-[30px] bg-[#102b50] p-8 text-white md:p-12"><div className="absolute -right-10 -top-10 h-64 w-64 rounded-full border-[35px] border-white/5"/><div className="relative max-w-3xl"><div className="flex items-center gap-3 text-blue-200"><Languages/><span className="text-xs font-extrabold tracking-[.18em]">LANGUAGE & CULTURE</span></div><h2 className="mt-6 font-display text-4xl font-extrabold md:text-5xl">こんにちは！</h2><p className="mt-4 text-lg leading-8 text-blue-100">Learning a language opens a new way to understand people, ideas and the world.</p><div className="mt-7 flex flex-wrap gap-2"><span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">{t.japanese.jlpt}</span><span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">JLPT N5</span><span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">Japanese culture</span></div></div></div>
    <div className="mt-10 grid gap-5 md:grid-cols-3">{milestones.map((m, i) => <motion.div whileHover={{ y: -5 }} key={m.title} className="surface-card p-7"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600">{i === 0 ? <Flag/> : i === 1 ? <BookOpen/> : <Globe2/>}</span><h3 className="mt-5 font-display text-xl font-extrabold text-[#102b50]">{m.title}</h3><p className="mt-1 text-sm font-bold text-blue-600">{m.subtitle}</p>{i === 0 && <img src="/assets/jlpt-n4.jpeg" alt="JLPT N4 Certificate" className="mt-2 w-full" />}{i === 1 && <img src="/assets/nat-test-q5.jpeg" alt="NAT-TEST Q5 Certificate" className="mt-2 w-full" />}</motion.div>)}</div>
    {/* Japanese Project Presentation Contest */}
    <div className="mt-10">
      <img src="/assets/presentation-contest.png" alt="Japanese Project Presentation Contest" className="w-full rounded-lg"/>
      <h3 className="mt-5 font-display text-xl font-extrabold text-[#102b50]">Japanese Project Presentation Contest</h3>
      <p className="mt-2 text-sm font-bold text-blue-600">Secured 3rd Rank</p>
    </div>
    {/* Bunkasei Festival */}
<div className="mt-10">
  <img src="/assets/bunkasei.png" alt="Bunkasei Festival" className="w-full rounded-lg"/>
  <h3 className="mt-5 font-display text-xl font-extrabold text-[#102b50]">Bunkasei Festival</h3>
  <p className="mt-2 text-sm font-bold text-blue-600">India-Japan Development Model</p>
</div>
<div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-7"><h3 className="font-display text-xl font-extrabold text-[#102b50]">{t.japanese.why}</h3><p className="mt-2 max-w-3xl leading-7 text-slate-600">I am interested in Japanese language and culture, and in learning from Japan's engineering and manufacturing environment. I hope to keep improving my language skills and communicate confidently.</p></div>
  </div></PageMotion>
}
