import { motion } from 'framer-motion'
import { Bot, Code2, DraftingCompass, Users } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/portfolio'







import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const icons = [Bot, DraftingCompass, Code2, Users]
export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];


  return <PageMotion><div className="container-wide page-wrap"><SectionHeading eyebrow="MY TOOLKIT" title={t.skills.title} description={t.skills.description} />
    <div className="grid gap-5 md:grid-cols-2">{skillGroups.map((group, i) => { const Icon = icons[i]; return <motion.div whileHover={{ y: -5 }} key={group.title} className="surface-card p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={23}/></span><h2 className="mt-5 font-display text-xl font-extrabold text-[#102b50]">{group.title}</h2><div className="mt-5 flex flex-wrap gap-2">{group.items.map(skill => <span key={skill} className="tag">{skill}</span>)}</div></motion.div>})}</div>
    <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-7"><h3 className="font-display text-xl font-extrabold text-[#102b50]">Continuous learning</h3><p className="mt-2 max-w-3xl leading-7 text-slate-600">I am continuing to strengthen my technical foundation and practical experience. Skills shown here are based on the supplied CV; add proficiency levels or new tools as you confirm them.</p></div>
  </div></PageMotion>
}
