import { motion } from 'framer-motion'
import { ArrowUpRight, Lightbulb } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/portfolio'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  return <PageMotion><div className="container-wide page-wrap"><SectionHeading eyebrow="SELECTED WORK" title={t.projects.title} description={t.projects.description} />
    <div className="mt-10">
  <img src="/assets/Projectaward.png" alt="Best Innovative Project Award" className="w-full rounded-lg"/>
  <h3 className="mt-5 font-display text-xl font-extrabold text-[#102b50]">Best Innovative Project Award</h3>
  <p className="mt-2 text-sm font-bold text-blue-600">AI Based Robot Maintenance Predictive System</p>
</div>
<div className="space-y-7">{projects.map((project, i) => <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} key={project.number} className="surface-card grid overflow-hidden lg:grid-cols-[.85fr_1.15fr]"><div className="min-h-64 bg-blue-50"><img src={project.image} alt={project.title} className="h-full min-h-64 w-full object-cover"/></div><div className="p-7 md:p-9"><p className="text-xs font-extrabold tracking-[.15em] text-blue-600">PROJECT {project.number} · {project.category}</p><h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-[#102b50]">{project.title}</h2><p className="mt-4 leading-7 text-slate-600">{project.description}</p><ul className="mt-5 space-y-2">{project.highlights.map(line => <li key={line} className="flex gap-2 text-sm leading-6 text-slate-600"><Lightbulb size={16} className="mt-1 shrink-0 text-blue-500"/>{line}</li>)}</ul><div className="mt-6 flex flex-wrap gap-2">{project.tools.map(tool => <span key={tool} className="tag">{tool}</span>)}</div></div></motion.article>)}</div>
    <p className="mt-7 text-sm text-slate-500">Project descriptions and performance figures are transcribed from the supplied CV. Add project photos, source-code links, videos or detailed documentation when available.</p>
  </div></PageMotion>
}
