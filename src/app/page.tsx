'use client';

import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import {
  ArrowRight, ShieldCheck, Activity, Dna, TestTubes, FlaskConical, Droplets,
  BadgeCheck, PlayCircle, Users, Lightbulb, CheckCircle, ShieldAlert, Handshake, ChevronRight, Zap, CheckCircle2
} from 'lucide-react';

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

// Custom Hook for counting animation
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!hasTriggered) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration, hasTriggered]);

  return { count, setHasTriggered };
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="w-full bg-transparent overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">

      {/* ================= HERO SECTION (Innovation & Visual Impact) ================= */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20 scale-105"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-particle-connection-background-34673-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-transparent to-slate-50"></div>
        </div>

        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-[1] pointer-events-none">
          {/* Vibrant Animated Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 45, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] bg-gradient-to-br from-indigo-300/40 to-blue-200/40 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -45, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-1/4 -left-1/4 w-[1100px] h-[1100px] bg-gradient-to-tr from-emerald-200/30 to-teal-100/30 rounded-full blur-[160px]"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-card border-indigo-200/50 text-indigo-700 text-[0.75rem] font-black mb-14 tracking-[0.25em] uppercase shadow-xl shadow-indigo-500/10 group cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
              </span>
              Pioneering Preclinical Innovation
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.h1 className="text-7xl md:text-[10rem] font-black text-slate-900 leading-[0.85] mb-14 tracking-[-0.06em] text-balance">
              <motion.span
                initial={{ filter: "blur(20px)", opacity: 0, y: 30 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="block mb-2"
              >
                Advancing Safety.
              </motion.span>
              <motion.span
                initial={{ filter: "blur(20px)", opacity: 0, y: 30 }}
                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm"
              >
                Accelerating Cure.
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-3xl text-slate-500/80 mb-20 max-w-4xl mx-auto leading-tight font-bold tracking-tight">
              State-of-the-art GLP pipelines merging <span className="text-slate-900">advanced 3D models</span> with clinical-grade integrity for the next generation of life-saving modalities.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact" className="group relative px-12 py-6 rounded-2xl bg-slate-900 text-white font-black hover:scale-105 hover:-rotate-1 active:scale-95 transition-all duration-500 shadow-2xl shadow-indigo-500/20">
                <span className="relative z-10 flex items-center gap-3 text-xl">Initiate Project <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </Link>

              <Link href="/facility" className="flex items-center gap-4 px-12 py-6 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black hover:border-indigo-600 hover:text-indigo-600 hover:scale-105 active:scale-95 transition-all duration-500 group">
                <div className="relative">
                  <PlayCircle className="text-indigo-500 group-hover:scale-125 transition-transform duration-500" size={28} />
                  <div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-lg animate-pulse"></div>
                </div>
                Virtual Tour
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Dynamic Background Particles (Floating Blobs) */}
        <div className="absolute inset-0 pointer-events-none z-[2]">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute blur-3xl rounded-full bg-indigo-500/10 ${i === 1 ? 'w-40 h-40 top-1/4 left-1/4' :
                i === 2 ? 'w-60 h-60 bottom-1/3 right-1/4' :
                  'w-32 h-32 top-1/2 right-1/3'
                }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[0.6rem] font-black uppercase tracking-[0.4em] text-slate-400 rotate-90 origin-center mb-10 translate-x-1">Scroll</span>
          <div className="w-px h-24 bg-gradient-to-b from-indigo-500 via-indigo-200 to-transparent opacity-40" />
        </motion.div>
      </section>

      {/* ================= STATISTICS (Sleek & Centered) ================= */}
      <section className="py-24 bg-transparent relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { val: "25", suffix: "k", label: "Sq. Ft. Facility", delay: 0 },
              { val: "50", suffix: "+", label: "Leading Scientists", delay: 0.1 },
              { val: "100", suffix: "%", label: "GLP Compliant", delay: 0.2 },
              { val: "95", suffix: "%", label: "Client Retention", delay: 0.3 }
            ].map((stat, idx) => (
              <CounterItem key={idx} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= INNOVATIVE BENTO GRID: OFFERINGS ================= */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-indigo-100 to-emerald-50 opacity-40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Our Expertise</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Precision Pathways.</motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[400px]">

            {/* Bento Box 1: By Services (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-8 bg-slate-900 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden group hover:shadow-3xl hover:shadow-indigo-500/10 transition-all duration-700 flex flex-col justify-end"
            >
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-[2000ms]" alt="Services" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20 group-hover:-translate-y-3 transition-transform duration-500">
                  <Activity size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">By Service Modality</h3>
                <p className="text-slate-300 text-lg max-w-xl mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  Explore our highly specific toxicological disciplines including General Tox, Genetic Tox, and advanced In Vitro models.
                </p>
                <Link href="/services#by-service" className="inline-flex items-center gap-3 text-emerald-400 font-black text-lg group/link">
                  Explore Methodologies <ArrowRight size={20} className="group-hover/link:translate-x-3 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Box 2: By Molecule (Tall) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 lg:row-span-2 bg-gradient-to-b from-white to-indigo-50/30 rounded-[3rem] p-12 relative overflow-hidden group hover:shadow-3xl transition-all duration-700 border border-slate-200/50 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="w-20 h-20 bg-indigo-100/50 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 border border-indigo-200 group-hover:rotate-12 transition-transform duration-500">
                <Dna size={40} className="text-indigo-600" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">By Target Molecule</h3>
              <p className="text-slate-500 mb-12 flex-grow text-lg leading-relaxed font-bold">
                Tailored testing pipelines designed for the unique chemical nature of your test item.
              </p>
              <div className="space-y-4 mb-12">
                {['Pharmaceuticals', 'Biologics & Vaccines', 'Crop Protection', 'Medical Devices'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 transition-all duration-500">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-black text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/services#by-molecule" className="w-full py-5 rounded-2xl bg-indigo-600 text-white font-black text-center hover:bg-slate-900 transition-all duration-500 shadow-xl shadow-indigo-500/20">
                View All Industries
              </Link>
            </motion.div>

            {/* Bento Box 3: Facility Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-4 bg-white rounded-[3rem] p-12 relative overflow-hidden group hover:shadow-3xl transition-all duration-700 border border-slate-200/50 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl"></div>
              <h3 className="text-6xl font-black text-indigo-600 mb-4 tracking-tighter">25,000<span className="text-slate-300 text-3xl">sq.ft</span></h3>
              <p className="font-black text-slate-800 mb-10 text-xl leading-tight">State-of-the-art Vivarium & Labs in Pune.</p>
              <Link href="/facility" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-indigo-600 transition-all duration-500 mt-auto self-start shadow-xl shadow-slate-900/10">
                Tour Facility <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Bento Box 4: Contact Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:col-span-4 glass-card rounded-[3rem] p-12 border border-white/50 group hover:shadow-3xl transition-all duration-700 flex flex-col justify-center items-center text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 shadow-2xl shadow-indigo-500/10"
              >
                <ShieldCheck size={32} />
              </motion.div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Need a Custom Quote?</h3>
              <Link href="/contact" className="text-indigo-600 font-black hover:text-slate-900 transition-colors flex items-center gap-2 mt-6 text-lg group-hover:translate-x-2 transition-transform">
                Speak to our scientists <ChevronRight size={20} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CORE VALUES (Modern & Minimalist) ================= */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Our DNA</motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Relentless Rigor.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: <Handshake className="w-10 h-10" />, title: "Empowerment", desc: "Driving scientific excellence through accountability." },
              { icon: <Users className="w-10 h-10" />, title: "Synergy", desc: "Collaborative breakthroughs across disciplines." },
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Trust", desc: "Uncompromising honesty and transparency." },
              { icon: <Lightbulb className="w-10 h-10" />, title: "Innovation", desc: "Pioneering modern toxicity methodologies." },
              { icon: <CheckCircle className="w-10 h-10" />, title: "Precision", desc: "Data driven safety assessments." },
              { icon: <ShieldAlert className="w-10 h-10" />, title: "GLP Rigor", desc: "Global regulatory compliance as standard." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-indigo-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW (Sophisticated Vertical Cards) ================= */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[150px] translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-emerald-600 font-black tracking-[0.3em] uppercase text-[0.7rem] mb-6 block">Toxicological Portfolio</motion.span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-tight tracking-tighter">Full spectrum safety.</h2>
            </div>
            <Link href="/services" className="group flex items-center gap-4 text-xl font-black text-slate-900 px-8 py-4 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-xl transition-all">
              All Services <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "General Toxicology", img: "https://images.unsplash.com/photo-1544474677-dc323c3bcfad?q=80&w=2070&auto=format&fit=crop", color: "from-indigo-600 to-blue-500", desc: "Global standards for acute, sub-chronic, and chronic safety profile evaluation." },
              { title: "Genetic Toxicology", img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1974&auto=format&fit=crop", color: "from-emerald-600 to-teal-500", desc: "Advanced screens for DNA damage, mutations, and chromosomal instabilities." },
              { title: "Safety Pharmacology", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470&auto=format&fit=crop", color: "from-rose-600 to-pink-500", desc: "Rigorous physiological monitoring for core system safety and vital impacts." }
            ].map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="group relative h-[650px] rounded-[4rem] overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-700"
              >
                <img src={s.img} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]" alt={s.title} />
                <div className={`absolute inset-0 bg-gradient-to-b ${s.color} opacity-60 mix-blend-multiply group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent pt-32">
                  <h3 className="text-4xl font-black text-white mb-6 leading-tight group-hover:-translate-y-2 transition-transform duration-500">{s.title}</h3>
                  <p className="text-white/70 text-lg mb-10 group-hover:text-white transition-colors line-clamp-3 leading-relaxed font-bold">{s.desc}</p>
                  <Link href="/services" className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center text-slate-900 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl shadow-white/20">
                    <ArrowRight size={32} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOLECULE EXPERTISE (Premium Showcase) ================= */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Industry Focus</motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Target Expertise.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Pharmaceuticals', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2069&auto=format&fit=crop' },
              { title: 'Biologics', img: 'https://images.unsplash.com/photo-1532187875605-1838d787032d?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Crop Protection', img: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=2069&auto=format&fit=crop' },
              { title: 'Medical Devices', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent group-hover:via-slate-900/40 transition-all duration-700"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                  <p className="text-slate-300 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Tailored testing pipelines for {item.title.toLowerCase()}.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ULTRA CTA (Apple / Tesla Style) ================= */}
      <section className="py-40 relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-none">
              Ready to <span className="text-indigo-400">Scale?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-400 mb-16 max-w-2xl mx-auto font-bold">
              Initiate your safety program with our elite toxicologists today.
            </p>
            <Link href="/contact" className="group relative inline-flex items-center gap-6 px-16 py-8 rounded-[2.5rem] bg-indigo-600 text-white font-black text-3xl hover:bg-white hover:text-slate-900 shadow-[0_30px_100px_rgba(79,70,229,0.3)] hover:shadow-white/10 transition-all duration-500 active:scale-95">
              Start Project <ArrowRight size={36} className="group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Accents */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]"
        />
      </section>
    </div>
  );
}

// Child Component for Counter
function CounterItem({ stat }: { stat: { val: string, suffix: string, label: string, delay: number } }) {
  const { count, setHasTriggered } = useCounter(parseInt(stat.val), 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: stat.delay, duration: 0.8 }}
      onViewportEnter={() => setHasTriggered(true)}
      className="flex flex-col items-center justify-center p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-700 group"
    >
      <div className="text-6xl md:text-8xl font-black text-slate-900 mb-4 tracking-tighter flex items-baseline group-hover:scale-110 transition-transform duration-500">
        {count}
        <span className="text-indigo-600 text-4xl ml-1">{stat.suffix}</span>
      </div>
      <div className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] text-center">{stat.label}</div>
    </motion.div>
  );
}
