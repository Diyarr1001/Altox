// src/components/HeroSection.tsx
"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function HeroSection() {
  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-[115vh] min-h-[950px] flex items-center overflow-hidden bg-slate-950">
      <motion.div style={{ y: yBg, opacity: opacityBg }} className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 scale-110" poster="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop">
          <source src="https://cdn.pixabay.com/video/2019/11/04/28775-372172778_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-primary-900/40 to-slate-950/90"></div>
        {/* Animated Glowing Orbs */}
        <motion.div
          animate={{ x: [0, 150, -80, 0], y: [0, -100, 100, 0], scale: [1, 1.5, 0.8, 1], opacity: [0.3, 0.6, 0.2, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[180px] mix-blend-screen"
        />
        <motion.div
          animate={{ x: [0, -200, 150, 0], y: [0, 150, -80, 0], scale: [1, 1.8, 0.7, 1], opacity: [0.2, 0.5, 0.1, 0.2] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[900px] h-[900px] bg-primary-500/10 rounded-full blur-[200px] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none"></div>
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-secondary-500/5 via-transparent to-transparent animate-slow-spin"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="w-full lg:w-[85%] xl:w-2/3" initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.h1 className="text-[3.5rem] md:text-7xl lg:text-[8.5rem] font-black text-white leading-[0.95] mb-10 tracking-tighter">
            <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block mb-2">
              Advancing <span className="bg-clip-text bg-gradient-to-t from-white to-white/70">Safety.</span>
            </motion.span>
            <motion.span initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="block bg-clip-text bg-gradient-to-r from-secondary-300 via-white to-secondary-500 drop-shadow-[0_0_50px_rgba(74,222,128,0.4)]">
              Accelerating Innovation.
            </motion.span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="relative">
            <p className="text-xl md:text-2xl text-slate-300/90 mb-14 max-w-2xl leading-relaxed font-light border-l-2 border-secondary-500/50 pl-8">
              Precision preclinical pipelines powered by ethics, advanced 3D models, and a state-of-the-art facility in Pune, India.
            </p>
          </motion.div>
          <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Link href="/contact" className="group relative px-10 py-5 rounded-full bg-secondary-500 text-slate-950 font-black flex items-center gap-4 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(74,222,128,0.4)] active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <span className="relative z-10 flex items-center gap-3 text-lg">Initiate Study
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                  <ArrowRight size={22} />
                </motion.div>
              </span>
            </Link>
            <Link href="/facility" className="group relative px-10 py-5 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold flex items-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-white/40 overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-lg">Facility Tour</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
