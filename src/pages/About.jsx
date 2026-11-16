import { motion } from 'framer-motion'
import { GraduationCap, Target, Heart, Languages } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { education, profile } from '../data/portfolio'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function About() { const { language } = useLanguage(); const t = translations[language];
  return <PageMotion><div className="container-wide page-wrap">
    <SectionHeading eyebrow="ABOUT ME" title={t.about.title} description="I enjoy learning how mechanical systems, electronics and software come together to solve practical problems." />
    <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
      <div className="surface-card overflow-hidden p-4"><img src="/profile.jpg" alt="Kalyani Asane profile picture" className="w-full rounded-2xl" /><div className="p-3"><h2 className="font-display text-xl font-extrabold text-[#102b50]">Kalyani Asane</h2><p className="mt-1 text-sm text-slate-500">Mechatronics Engineer · Japanese Learner</p></div></div>
      <div className="space-y-6">
        <div className="surface-card p-7"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><Heart size={21}/></span><h2 className="mt-5 font-display text-2xl font-extrabold text-[#102b50]">My story</h2><p className="mt-3 leading-8 text-slate-600">{profile.summary}</p><p className="mt-3 leading-8 text-slate-600">My interests include robotics, automation, embedded systems, product development and continuous learning. Alongside engineering, I am learning Japanese and enjoy discovering Japanese culture and technology.</p></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="surface-card p-6"><Target className="text-blue-600"/><h3 className="mt-3 font-bold text-[#102b50]">My approach</h3><p className="mt-2 text-sm leading-6 text-slate-500">Stay curious, learn by building, and improve through experimentation.</p></div><div className="surface-card p-6"><Languages className="text-blue-600"/><h3 className="mt-3 font-bold text-[#102b50]">Beyond engineering</h3><p className="mt-2 text-sm leading-6 text-slate-500">Japanese language learning and cross-cultural communication.</p></div></div>
      </div>
    </div>
    <div className="mt-16"><div className="mb-8 flex items-center gap-3"><GraduationCap className="text-blue-600"/><h2 className="font-display text-2xl font-extrabold text-[#102b50]">Education</h2></div><div className="grid gap-4">{education.map((item, i) => <motion.div whileHover={{ x: 4 }} key={item.degree} className="surface-card flex flex-col justify-between gap-3 p-6 sm:flex-row sm:items-center"><div><p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">{item.period}</p><h3 className="mt-2 font-display text-lg font-extrabold text-[#102b50]">{item.degree}</h3><p className="mt-1 text-sm text-slate-500">{item.institution}</p></div><span className="tag w-fit">{item.result}</span></motion.div>)}</div></div>
  </div></PageMotion>
}
