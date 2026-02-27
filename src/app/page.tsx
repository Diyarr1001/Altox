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
      <section ref={heroRef} className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-slate-900">
        <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 w-full h-full z-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" poster="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop">
            <source src="https://cdn.pixabay.com/video/2019/11/04/28775-372172778_large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/90 via-primary-900/80 to-slate-900/40"></div>

          {/* Animated Glowing Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-secondary-500 rounded-full blur-[120px] mix-blend-screen"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary-500 rounded-full blur-[150px] mix-blend-screen"
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div className="w-full lg:w-4/5 xl:w-2/3" initial="hidden" animate="visible" variants={staggerContainer}>

            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-secondary-300 text-sm font-black mb-10 shadow-[0_0_30px_rgba(74,222,128,0.1)] uppercase tracking-[0.2em]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Zap size={16} className="text-secondary-400" />
              </motion.div>
              Next-Gen GLP Safety Assessment
            </motion.div>

            <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
              <motion.span variants={fadeUp} className="block">Advancing Safety.</motion.span>
              <motion.span variants={fadeUp} className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-white to-secondary-500 drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                Accelerating Innovation.
              </motion.span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light border-l-4 border-secondary-500 pl-6">
              Precision preclinical pipelines powered by ethics, advanced 3D models, and a state-of-the-art facility in Pune, India.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6">
              <Link href="/contact" className="relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-secondary-500 text-slate-900 font-black hover:scale-105 transition-transform duration-300 group">
                <span className="relative z-10 flex items-center gap-2">Initiate Study <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /></span>
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </Link>

              <Link href="/facility" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all duration-300 group">
                <PlayCircle className="text-secondary-400 group-hover:scale-125 transition-transform duration-300" size={24} /> Virtual Tour
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs font-bold tracking-widest uppercase">Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
          >
            <div className="w-1.5 h-3 bg-secondary-400 rounded-full" />
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
              className="lg:col-span-8 bg-primary-900 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary-900/30 transition-all duration-500 flex flex-col justify-end"
            >
              <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1574345330896-180b5eacc5e4?q=80&w=1969&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" alt="Services" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-900/80 to-transparent"></div>
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform border border-white/20">
                  <Activity size={32} className="text-secondary-400" />
                </div>
                <h3 className="text-4xl font-black text-white mb-4">By Service Modality</h3>
                <p className="text-primary-100 text-lg max-w-lg mb-8 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Explore our highly specific toxicological disciplines including General Tox, Genetic Tox, and In Vitro models.
                </p>
                <Link href="/services#by-service" className="inline-flex items-center gap-2 text-secondary-400 font-bold text-lg group/link">
                  Explore Methodologies <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Box 2: By Molecule (Tall) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 lg:row-span-2 bg-white rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 border border-primary-100 group-hover:scale-110 transition-transform">
                <Dna size={32} className="text-primary-600" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6">By Target Molecule</h3>
              <p className="text-slate-600 mb-10 flex-grow text-lg leading-relaxed">
                We customize testing pipelines around the specific chemical nature of your test item, ensuring precision regulatory compliance.
              </p>
              <div className="space-y-4 mb-10">
                {['Pharmaceuticals', 'Biologics & Vaccines', 'Crop Protection', 'Medical Devices'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-primary-50 group-hover:border-primary-100 transition-colors">
                    <CheckCircle2 size={20} className="text-secondary-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/services#by-molecule" className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold text-center hover:bg-primary-600 transition-colors shadow-lg">
                View All Industries
              </Link>
            </motion.div>

            {/* Bento Box 3: Facility Preview */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-4 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-2xl hover:shadow-secondary-500/30 transition-all duration-500 text-slate-900"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-20 rounded-full blur-3xl mix-blend-overlay"></div>
              <h3 className="text-3xl font-black mb-4">25,000 sq.ft.</h3>
              <p className="font-medium text-slate-800 mb-8 text-lg">State-of-the-art Vivarium & Labs in Pune.</p>
              <Link href="/facility" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors mt-auto">
                Tour Facility <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Bento Box 4: Contact Teaser */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:col-span-4 bg-white rounded-[2.5rem] p-10 border border-slate-100 group hover:shadow-2xl hover:border-primary-200 transition-all duration-500 flex flex-col justify-center items-center text-center"
            >
              <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center text-secondary-400 mb-6 group-hover:rotate-12 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Need a Custom Quote?</h3>
              <Link href="/contact" className="text-primary-600 font-bold hover:underline flex items-center gap-1 mt-4">
                Speak to our scientists <ChevronRight size={16} />
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

      {/* ================= ULTRA CTA ================= */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.5 }}>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Accelerate?</span></h2>
            <p className="text-2xl text-slate-500 mb-12 max-w-2xl mx-auto">Get your custom IND-enabling safety package quoted today by our leading toxicologists.</p>
            <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-slate-900 text-white font-black text-2xl hover:bg-primary-600 shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(13,148,136,0.4)] transition-all duration-500 hover:-translate-y-2">
              Start Inquiry <Zap size={28} className="text-secondary-400" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= MOLECULES OVERVIEW ================= */}
      <section className="py-40 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-12">Our Molecule Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Pharmaceuticals', 'Biologics & Vaccines', 'Crop Protection', 'Medical Devices'].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="w-full h-48 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img src={`https://source.unsplash.com/400x300/?${item}`} alt={item} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{item}</h3>
                <p className="text-slate-600">Tailored testing pipelines for {item.toLowerCase()} ensuring regulatory compliance and scientific excellence.</p>
              </motion.div>
            ))}
          </div>
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
