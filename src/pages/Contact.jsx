import { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check } from 'lucide-react'
import PageMotion from '../components/PageMotion'
import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/portfolio'

import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
  export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }
  return <PageMotion><div className="container-wide page-wrap"><SectionHeading eyebrow={t.contact.title} title={t.contact.title} description={t.contact.message} />
    <div className="grid gap-7 lg:grid-cols-[.8fr_1.2fr]">
      <div className="space-y-4">
        <div className="surface-card p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><Mail/></span><div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</p><a href={`mailto:${profile.email}`} className="mt-1 font-bold text-[#102b50] hover:text-blue-600">{profile.email}</a></div></div><button onClick={copyEmail} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">{copied ? <Check size={15}/> : <Copy size={15}/>} {copied ? 'Copied' : 'Copy email'}</button></div>
        <div className="surface-card p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><Phone/></span><div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone</p><p className="mt-1 font-bold text-[#102b50]">{profile.phone}</p></div></div></div>
        <div className="surface-card p-6"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-blue-600"><MapPin/></span><div><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</p><p className="mt-1 font-bold text-[#102b50]">{profile.location}</p></div></div></div>
        <div className="flex flex-wrap gap-3"><a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-secondary"><Linkedin size={17}/> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer" className="btn-secondary"><Github size={17}/> GitHub</a></div>
      </div>
      <form onSubmit={submit} className="surface-card p-7 md:p-9"><h2 className="font-display text-2xl font-extrabold text-[#102b50]">{t.contact.send}</h2><p className="mt-2 text-sm leading-6 text-slate-500">This form opens your default email application with your message prepared.</p><div className="mt-7 space-y-5"><label className="block"><span className="mb-2 block text-sm font-bold text-slate-700">{t.contact.name}</span><input required className="input-field" value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name"/></label><label className="block"><span className="mb-2 block text-sm font-bold text-slate-700">Email address</span><input required type="email" className="input-field" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@example.com"/></label><label className="block"><span className="mb-2 block text-sm font-bold text-slate-700">Message</span><textarea required rows="5" className="input-field resize-y" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Write your message..."/></label><button className="btn-primary" type="submit">Prepare email <Send size={16}/></button></div></form>
    </div>
  </div></PageMotion>
}
