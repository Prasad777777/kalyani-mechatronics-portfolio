import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, MoveUpRight, Cpu, Bot, Languages, Wrench, Sparkles } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import { profile, projects, skillGroups } from '../data/portfolio'
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

const interests = [
  { icon: Bot, label: 'Robotics & Automation', text: 'Building and exploring practical automated systems.' },
  { icon: Cpu, label: 'Embedded Systems & IoT', text: 'Connecting sensors, controllers and real-world applications.' },
  { icon: Languages, label: 'Japanese Language', text: 'Learning Japanese and exploring its culture.' },
]

export default function Home() { const { language } = useLanguage(); const t = translations[language];
  return (
    <PageMotion>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[460px] w-[460px] rounded-full bg-blue-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-64 h-[360px] w-[360px] rounded-full bg-sky-100/70 blur-3xl" />
        <div className="container-wide relative grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold text-blue-700 shadow-sm"><Sparkles size={14} />{t.home.title}</div>
            <p className="eyebrow">MECHATRONICS ENGINEER · JAPANESE LEARNER</p>
            <h1 className="font-display mt-5 max-w-3xl text-[clamp(3rem,7vw,5.8rem)] font-extrabold leading-[1.02] tracking-[-.065em] text-[#102b50]">{t.home.title}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">{t.home.description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">Explore my work <ArrowRight size={17} /></Link>
              <a href="/resume.pdf" download className="btn-secondary"><Download size={17} /> Download CV</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-blue-100 pt-7">
              <div><p className="font-display text-2xl font-extrabold text-[#102b50]">8.3</p><p className="text-xs font-semibold text-slate-500">B.Tech CGPA</p></div>
              <div><p className="font-display text-2xl font-extrabold text-[#102b50]">N4</p><p className="text-xs font-semibold text-slate-500">JLPT Certified</p></div>
              <div><p className="font-display text-2xl font-extrabold text-[#102b50]">3+</p><p className="text-xs font-semibold text-slate-500">Engineering Projects</p></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .12 }} className="relative mx-auto w-full max-w-[460px]">
            <div className="grid-dots absolute -right-5 -top-5 h-32 w-32 rounded-3xl opacity-60" />
            <div className="relative rounded-[34px] border border-blue-100 bg-white p-4 shadow-[0_30px_90px_rgba(30,75,140,.14)]">
              <div className="overflow-hidden rounded-[25px] bg-gradient-to-br from-blue-50 to-sky-100">
                <img src="/profile.jpg" alt="Kalyani Asane profile picture" className="aspect-[4/4.2] w-full object-cover" />
              </div>
              <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-5">
                <div><p className="font-display text-lg font-extrabold text-[#102b50]">Kalyani Asane</p><p className="mt-1 text-sm text-slate-500">Curious mind. Practical builder.</p></div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white"><Wrench size={22} /></span>
              </div>
            </div>
            
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -right-7 bottom-20 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl sm:block"><p className="text-xs font-bold text-slate-400">LANGUAGE</p><p className="mt-1 font-bold text-[#17365e]">日本語 · JLPT N4</p></motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white py-6">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-bold text-slate-500">
          {['MECHATRONICS', 'ROBOTICS', 'AUTOMATION', 'EMBEDDED SYSTEMS', 'JAPANESE'].map(x => <span key={x} className="tracking-[.12em]">{x}</span>)}
        </div>
      </section>

      <section className="section-space">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">WHAT I AM INTERESTED IN</p><h2 className="section-title mt-3">Where engineering meets curiosity.</h2></div><Link to="/about" className="inline-flex items-center gap-2 font-bold text-blue-700">More about me <MoveUpRight size={17} /></Link></div>
          <div className="grid gap-5 md:grid-cols-3">
            {interests.map(({ icon: Icon, label, text }, i) => <motion.div whileHover={{ y: -6 }} key={label} className="surface-card p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={23} /></span><h3 className="mt-6 font-display text-xl font-extrabold text-[#102b50]">{label}</h3><p className="mt-3 leading-7 text-slate-500">{text}</p></motion.div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#edf4ff] py-20">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">SELECTED WORK</p><h2 className="section-title mt-3">Projects I have worked on.</h2></div><Link to="/projects" className="btn-secondary">View all projects <ArrowRight size={16} /></Link></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map(project => <Link to="/projects" key={project.number} className="surface-card group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"><img src={project.image} alt="" className="h-48 w-full object-cover" /><div className="p-6"><p className="text-xs font-extrabold tracking-widest text-blue-600">{project.category}</p><h3 className="mt-3 font-display text-lg font-extrabold text-[#102b50]">{project.title}</h3><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">{project.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Explore project <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span></div></Link>)}
          </div>
        </div>
      </section>
      <section className="section-space"><div className="container-wide rounded-[30px] bg-[#102b50] px-8 py-12 text-white md:px-14"><p className="text-xs font-extrabold tracking-[.18em] text-blue-300">LET'S CONNECT</p><div className="mt-4 flex flex-wrap items-end justify-between gap-6"><div><h2 className="font-display text-3xl font-extrabold md:text-4xl">Have an idea or opportunity?</h2><p className="mt-3 max-w-xl leading-7 text-blue-100/75">I would love to connect, learn and explore meaningful engineering opportunities.</p></div><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50">Get in touch <ArrowRight size={17} /></Link></div></div></section>
    </PageMotion>
  )
}
