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
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Floating Orbs animation
  const orb1X = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orb2X = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="w-full bg-slate-50 overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative h-[115vh] min-h-[950px] flex items-center overflow-hidden bg-slate-950">
        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 w-full h-full z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 scale-110" poster="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop">
            <source src="https://cdn.pixabay.com/video/2019/11/04/28775-372172778_large.mp4" type="video/mp4" />
          </video>

          {/* Secondary Ambient Media Overlay */}
          <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"></div>

          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/40 to-slate-950/90"></div>

          {/* Animated Glowing Orbs - Innovative Motion */}
          <motion.div
            animate={{
              x: [0, 150, -80, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.5, 0.8, 1],
              opacity: [0.3, 0.6, 0.2, 0.3]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[180px] mix-blend-screen"
          />
          <motion.div
            animate={{
              x: [0, -200, 150, 0],
              y: [0, 150, -80, 0],
              scale: [1, 1.8, 0.7, 1],
              opacity: [0.2, 0.5, 0.1, 0.2]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] bg-primary-500/10 rounded-full blur-[200px] mix-blend-screen"
          />

          {/* Floating Particle/Grid Visual */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none"></div>

          {/* Cinematic Light Leak */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-secondary-500/5 via-transparent to-transparent animate-slow-spin"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="w-full lg:w-[85%] xl:w-2/3" initial="hidden" animate="visible" variants={staggerContainer}>



            <motion.h1
              className="text-[3.5rem] md:text-7xl lg:text-[8.5rem] font-black text-white leading-[0.95] mb-10 tracking-tighter"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="block mb-2"
              >
                Advancing <span className="bg-clip-text bg-gradient-to-t from-white to-white/70">Safety.</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block bg-clip-text bg-gradient-to-r from-secondary-300 via-white to-secondary-500 drop-shadow-[0_0_50px_rgba(74,222,128,0.4)]"
              >
                Accelerating Innovation.
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <p className="text-xl md:text-2xl text-slate-300/90 mb-14 max-w-2xl leading-relaxed font-light border-l-2 border-secondary-500/50 pl-8">
                Precision preclinical pipelines powered by ethics, advanced 3D models, and a state-of-the-art facility in Pune, India.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link href="/contact" className="group relative px-10 py-5 rounded-full bg-secondary-500 text-slate-950 font-black flex items-center gap-4 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,222,128,0.4)] active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Initiate Study
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ArrowRight size={22} />
                  </motion.div>
                </span>
              </Link>

              <Link href="/facility" className="group relative px-10 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold flex items-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-white/40 overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <PlayCircle className="text-secondary-400 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" size={26} />
                <span className="text-lg">Facility Tour</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Improved Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}
            className="text-white/40 text-[0.6rem] font-black tracking-[0.4em] uppercase"
          >
            Explore Altox
          </motion.div>
          <motion.div
            className="w-[30px] h-[50px] border border-white/20 rounded-full flex justify-center p-1.5 relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [0, 20, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-secondary-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.8)]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= STATISTICS GRID (Animated Counters) ================= */}
      <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { val: "25", suffix: "k+", label: "Sq. Ft. Facility", delay: 0 },
              { val: "50", suffix: "+", label: "Leading Scientists", delay: 0.2 },
              { val: "100", suffix: "%", label: "GLP Compliant", delay: 0.4 },
              { val: "95", suffix: "%", label: "Client Retention", delay: 0.6 }
            ].map((stat, idx) => (
              <CounterItem key={idx} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= INNOVATIVE BENTO GRID: OFFERINGS ================= */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary-100 to-secondary-50 opacity-40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary-600 font-black tracking-[0.2em] uppercase text-sm mb-4 block">Our Portfolio</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">Precision Pathways</motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[350px]">

            {/* Bento Box 1: By Services (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-8 bg-primary-900 rounded-[3rem] p-10 lg:p-14 relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(13,148,136,0.3)] transition-all duration-700 flex flex-col justify-end"
            >
              <div className="absolute inset-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-110 transition-transform duration-1000">
                  <source src="https://cdn.pixabay.com/video/2021/08/17/85374-589574488_large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/60 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-20 h-20 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center justify-center mb-8 border border-white/20 shadow-2xl"
                >
                  <Activity size={40} className="text-secondary-400" />
                </motion.div>
                <h3 className="text-5xl font-black text-white mb-6 tracking-tighter">By Service Modality</h3>
                <p className="text-primary-100 text-xl max-w-xl mb-10 font-light leading-relaxed group-hover:translate-x-2 transition-transform duration-500">
                  Precision toxicity mapping across specialized disciplines. From endocrine disruptor screening to advanced in-vitro alternatives.
                </p>
                <Link href="/services#by-service" className="inline-flex items-center gap-4 text-secondary-500 font-black text-xl group/link">
                  <span className="relative overflow-hidden inline-block">
                    Explore Methodologies
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary-500 -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500"></span>
                  </span>
                  <ArrowRight size={24} className="group-hover/link:translate-x-3 transition-transform duration-500" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Box 2: By Molecule (Tall) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 lg:row-span-2 bg-white rounded-[3rem] p-10 relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[5rem]"></div>
              <div className="w-20 h-20 bg-primary-50 rounded-[2rem] flex items-center justify-center mb-10 border border-primary-100 group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-500 shadow-sm">
                <Dna size={40} className="text-primary-600" />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">By Target Molecule</h3>
              <p className="text-slate-500 mb-12 flex-grow text-xl font-light leading-relaxed">
                Architecting safety portfolios mapped to the unique molecular logic of your innovation.
              </p>
              <div className="space-y-5 mb-12">
                {['Pharmaceuticals', 'Biologics & Vaccines', 'Crop Protection', 'Medical Devices'].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-primary-100 group-hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-xl bg-secondary-100 flex items-center justify-center">
                      <CheckCircle2 size={18} className="text-secondary-600" />
                    </div>
                    <span className="font-bold text-slate-800 text-sm tracking-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Link href="/services#by-molecule" className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black text-center hover:bg-primary-600 transition-all duration-300 shadow-xl active:scale-95 text-lg">
                View All Industries
              </Link>
            </motion.div>

            {/* Bento Box 3: Facility Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all duration-700 flex flex-col justify-between"
            >
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" alt="Facility" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/40 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black text-secondary-400 tracking-tighter">25,000</span>
                  <span className="text-xl font-bold text-white/60">sq.ft.</span>
                </div>
                <p className="text-2xl font-bold text-white leading-tight">Advanced Vivarium & GLP Analytics HQ in Pune.</p>
              </div>
              <Link href="/facility" className="relative z-10 inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-secondary-400 transition-colors mt-8 group/btn">
                Tour HQ <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            {/* Bento Box 4: Contact Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-4 bg-primary-50 rounded-[3rem] p-12 border border-primary-100 group hover:shadow-[0_30px_60px_rgba(13,148,136,0.1)] transition-all duration-500 flex flex-col justify-center items-center text-center relative overflow-hidden"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary-600 mb-8 border border-primary-100"
              >
                <ShieldCheck size={48} />
              </motion.div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter leading-none">Need a Custom Quote?</h3>
              <p className="text-slate-600 font-light mb-8 max-w-[200px]">Our lead toxicologists are ready to architect your safety package.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary-700 font-black text-lg group-hover:text-primary-900 transition-colors">
                <span className="border-b-2 border-primary-200 group-hover:border-primary-600 transition-all">Consulte Now</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Handshake className="w-12 h-12 text-primary-600" />, title: "Empowerment", desc: "Driving scientific excellence." },
              { icon: <Users className="w-12 h-12 text-primary-600" />, title: "Teamwork", desc: "Collaborative synergy." },
              { icon: <ShieldCheck className="w-12 h-12 text-primary-600" />, title: "Integrity", desc: "Honesty & transparency." },
              { icon: <Lightbulb className="w-12 h-12 text-primary-600" />, title: "Innovation", desc: "Modern methodologies." },
              { icon: <CheckCircle className="w-12 h-12 text-primary-600" />, title: "Customer Focus", desc: "Exceed expectations." },
              { icon: <ShieldAlert className="w-12 h-12 text-primary-600" />, title: "Safety", desc: "GLP compliance." },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-slate-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General & Reproduction Toxicology", desc: "Comprehensive toxicology studies for safety assessment.", icon: <Activity /> },
              { title: "Genetic Toxicology / Mutagenicity", desc: "Assess genetic damage and mutagenic potential.", icon: <Dna /> },
              { title: "Endocrine Disruptor Assays", desc: "Evaluate endocrine system interactions.", icon: <TestTubes /> },
              { title: "In Vitro Toxicology", desc: "Advanced cell-based toxicity testing.", icon: <FlaskConical /> },
              { title: "Safety Pharmacology", desc: "Critical safety evaluations for drug candidates.", icon: <ShieldCheck /> },
              { title: "DMPK & Metabolism", desc: "Drug metabolism and pharmacokinetic profiling.", icon: <Droplets /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center text-primary-600">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MOLECULE EXPLORER: TARGET SPECIFICITY ================= */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-3xl">
              <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-secondary-600 font-black tracking-[0.2em] uppercase text-sm mb-4 block">Target Specificity</motion.span>
              <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">Molecule Explorer</motion.h2>
            </div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-slate-500 font-light max-w-md leading-relaxed">
              We architect safety portfolios based on the molecular complexity of your unique innovations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pharmaceuticals",
                type: "NCEs",
                img: "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?q=80&w=2070&auto=format&fit=crop",
                slug: "pharmaceuticals",
                features: ["IND-Enabling", "NCE Optimization", "PK/TK Modeling"]
              },
              {
                title: "Biologics",
                type: "Large Molecules",
                img: "https://images.unsplash.com/photo-1618015359908-058e0a138c29?q=80&w=2070&auto=format&fit=crop",
                slug: "biologics",
                features: ["mAbs & Proteins", "Immunogenicity", "ICH S6 Compliance"]
              },
              {
                title: "Crop Protection",
                type: "Agrochemicals",
                img: "https://images.unsplash.com/photo-1628189675276-879e614da66d?q=80&w=2070&auto=format&fit=crop",
                slug: "crop-protection-agents",
                features: ["6-Pack Arrays", "Environmental Fate", "EPA/EFSA Dossiers"]
              }
            ].map((mol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
              >
                <img src={mol.img} alt={mol.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                <div className="absolute inset-0 p-12 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                  <span className="text-secondary-400 font-black text-xs uppercase tracking-widest mb-3">{mol.type}</span>
                  <h3 className="text-4xl font-black text-white mb-6 tracking-tighter leading-none">{mol.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {mol.features.map((feat, fIdx) => (
                      <span key={fIdx} className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] font-bold border border-white/20">
                        {feat}
                      </span>
                    ))}
                  </div>

                  <Link href={`/molecules/${mol.slug}`} className="w-14 h-14 bg-secondary-500 rounded-full flex items-center justify-center text-slate-950 transition-all duration-500 group-hover:w-full group-hover:rounded-2xl gap-3">
                    <ArrowRight size={24} className="group-hover:translate-x-0" />
                    <span className="overflow-hidden w-0 group-hover:w-auto font-black text-sm whitespace-nowrap transition-all duration-500 opacity-0 group-hover:opacity-100">
                      Explore Pipeline
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <Link href="/services#by-molecule" className="px-12 py-5 rounded-full border-2 border-slate-900 text-slate-900 font-black hover:bg-slate-900 hover:text-white transition-all duration-300">
              View All Molecule Modalities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= SCIENTIFIC EXCELLENCE: THE ALTOX EDGE ================= */}
      <section className="py-40 relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="https://cdn.pixabay.com/video/2018/11/02/18987-295624750_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter"
            >
              Scientific <span className="text-secondary-500">Excellence</span> at Scale.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { title: "Advanced Vivarium", desc: "A world-class AAALAC inspired facility in Pune designed for diverse species monitoring.", icon: <ShieldCheck className="text-secondary-400" /> },
                { title: "Bioanalytical Core", desc: "Equipped with state-of-the-art LC-MS/MS platforms for ultra-sensitive metabolic profiling.", icon: <Activity className="text-secondary-400" /> },
                { title: "Digital Quality", desc: "100% computerized data capture ensures absolute integrity and rapid electronic submissions.", icon: <BadgeCheck className="text-secondary-400" /> },
                { title: "Expert Pathology", desc: "Led by internationally certified pathologists (ABT/ECVP) for nuanced apical interpretation.", icon: <Microscope className="text-secondary-400" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-16">
              <Link href="/facility" className="inline-flex items-center gap-4 text-white font-black text-2xl group">
                Tour Our Pune HQ <ArrowRight className="text-secondary-500 group-hover:translate-x-4 transition-transform" size={28} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ULTRA CTA: CINEMATIC FINISH ================= */}
      <section className="py-52 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5 }}>
            <h2 className="text-7xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.85]">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Accelerate?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-500 mb-16 max-w-3xl mx-auto font-light leading-snug">
              Partner with Altox Labs for a seamless transition from discovery to the clinic.
            </p>
            <Link href="/contact" className="group relative inline-flex items-center gap-6 px-16 py-8 rounded-full bg-slate-900 text-white font-black text-3xl overflow-hidden transition-all duration-700 hover:bg-primary-600 shadow-[0_30px_70px_rgba(0,0,0,0.2)] hover:shadow-[0_40px_80px_rgba(13,148,136,0.3)] hover:-translate-y-3">
              <span className="relative z-10">Start Inquiry</span>
              <Zap size={36} className="text-secondary-400 relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:animate-[shimmer_3s_infinite]" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Child Component for Counter
function CounterItem({ stat }: { stat: { val: string, suffix: string, label: string, delay: number } }) {
  const { count, setHasTriggered } = useCounter(parseInt(stat.val), 2.5);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: stat.delay, type: "spring" }}
      onViewportEnter={() => setHasTriggered(true)}
      className="flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300 group"
    >
      <div className="text-5xl md:text-6xl font-black text-primary-900 mb-2 group-hover:scale-110 transition-transform flex items-baseline">
        {count}
        <span className="text-secondary-500">{stat.suffix}</span>
      </div>
      <div className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center">{stat.label}</div>
    </motion.div>
  );
}
