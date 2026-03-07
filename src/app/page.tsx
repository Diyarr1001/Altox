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

      {/* ================= HERO SECTION (Mesh Gradient + Apple Style) ================= */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-mesh">
        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 z-0">
          {/* Animated Background Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-indigo-200/40 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute -bottom-1/4 -left-1/4 w-[1000px] h-[1000px] bg-emerald-100/30 rounded-full blur-[150px]"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-indigo-600 text-[0.7rem] font-black mb-12 tracking-[0.2em] uppercase shadow-indigo-500/5">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              Pioneering Preclinical Safety
            </motion.div>

            <motion.h1 className="text-7xl md:text-9xl font-black text-slate-900 leading-[0.95] mb-12 tracking-[-0.05em] text-balance">
              <motion.span variants={fadeUp} className="block">Advancing Safety.</motion.span>
              <motion.span variants={fadeUp} className="block text-indigo-600">
                Accelerating Innovation.
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed font-bold">
              Precision preclinical pipelines powered by ethics, advanced 3D models, and a state-of-the-art facility in Pune, India.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-slate-900 text-white font-black hover:bg-indigo-600 transition-all duration-500 shadow-2xl shadow-indigo-500/20 active:scale-95">
                <span className="relative z-10 flex items-center gap-2 text-lg">Initiate Study <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </Link>

              <Link href="/facility" className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black hover:border-indigo-600 hover:text-indigo-600 transition-all duration-500 group">
                <PlayCircle className="text-indigo-400 group-hover:scale-110 transition-transform duration-500" size={24} /> Virtual Tour
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-12 bg-gradient-to-b from-indigo-500 to-transparent rounded-full opacity-30"
          />
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
              className="lg:col-span-4 lg:row-span-2 bg-white rounded-[3rem] p-12 relative overflow-hidden group hover:shadow-3xl transition-all duration-700 border border-slate-200/50 flex flex-col"
            >
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-10 border border-indigo-100 group-hover:rotate-6 transition-transform duration-500">
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

      {/* ================= SERVICES OVERVIEW (Sophisticated Grid) ================= */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Our Capabilities</motion.span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Scientific Excellence.</h2>
            </div>
            <Link href="/services" className="px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-900 font-black hover:border-indigo-600 hover:text-indigo-600 transition-all duration-500 shadow-xl shadow-indigo-500/5">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Toxicology", desc: "Comprehensive safety assessments for varied drug candidates.", icon: <Activity className="w-8 h-8" />, color: "indigo" },
              { title: "Genetic Toxicology", desc: "Advanced assays to assess mutagenic potential and DNA damage.", icon: <Dna className="w-8 h-8" />, color: "emerald" },
              { title: "Endocrine Assays", desc: "Critical testing for endocrine disrupting potential.", icon: <TestTubes className="w-8 h-8" />, color: "indigo" },
              { title: "In Vitro Models", desc: "Cutting-edge cell-based alternatives for toxicity testing.", icon: <FlaskConical className="w-8 h-8" />, color: "emerald" },
              { title: "Safety Pharmacology", desc: "Vital physiological system safety evaluations.", icon: <ShieldCheck className="w-8 h-8" />, color: "indigo" },
              { title: "DMPK Profiling", desc: "Precise drug metabolism and pharmacokinetic studies.", icon: <Droplets className="w-8 h-8" />, color: "emerald" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative h-[320px] bg-white rounded-[3rem] p-10 border border-slate-200/50 hover:border-indigo-200 shadow-xl shadow-slate-900/5 hover:shadow-indigo-500/10 transition-all duration-700 flex flex-col justify-between overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center text-${item.color}-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
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
