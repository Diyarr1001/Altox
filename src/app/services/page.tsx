'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Microscope } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { moleculesData } from '@/data/molecules';

export default function Services() {
    return (
        <div className="w-full bg-slate-50">
            {/* Highly Visual Page Header */}
            <section className="relative pt-40 pb-52 lg:pt-48 lg:pb-64 overflow-hidden bg-slate-950">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop" alt="Laboratory Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-900/40 to-slate-50"></div>

                    {/* Animated Decorative Elements */}
                    <motion.div
                        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px]"
                    />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block py-1.5 px-6 rounded-full bg-white/5 backdrop-blur-xl text-secondary-400 font-black tracking-[0.3em] uppercase text-xs mb-8 border border-white/10 shadow-[0_0_30px_rgba(74,222,128,0.1)]">
                            Scientific Excellence
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 via-white to-secondary-500">Capabilities</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed italic opacity-80">
                            "Precision preclinical pipelines powered by ethics, advanced 3D models, and global GLP standards."
                        </p>
                    </motion.div>
                </div>

                {/* Section Transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </section>

            {/* Section 1: By Services Showcase (Grid Layout) */}
            <section id="by-service" className="py-32 relative z-20 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-primary-600 font-black tracking-widest uppercase text-xs mb-4 block"
                            >
                                Discipline Specific
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight"
                            >
                                By Service Modality
                            </motion.h2>
                        </div>
                        <p className="text-slate-500 max-w-md font-light">
                            Explore our specialized toxicological disciplines, each managed by subject matter experts and state-of-the-art infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {servicesData.map((svc, idx) => (
                            <motion.div
                                key={svc.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
                                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100 group flex flex-col hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-700"
                            >
                                <div className="h-64 relative overflow-hidden">
                                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-80"></div>
                                    <div className="absolute bottom-6 left-6 pr-6">
                                        <h3 className="text-2xl font-black text-white leading-tight mb-2">{svc.title}</h3>
                                        <div className="w-10 h-1 bg-secondary-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-light">
                                        {svc.description}
                                    </p>
                                    <div className="space-y-3 mb-10">
                                        {svc.features.slice(0, 2).map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-1.5 shrink-0" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={`/services/${svc.slug}`} className="group/link inline-flex items-center gap-3 py-4 px-8 rounded-2xl bg-slate-50 text-primary-900 font-black text-sm hover:bg-primary-900 hover:text-white transition-all duration-300 shadow-inner">
                                        Explore Methodology <ArrowRight size={18} className="translate-x-0 group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: By Molecules Showcase (Horizontal Cards) */}
            <section id="by-molecule" className="py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>

                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-block py-1 px-4 rounded-full bg-secondary-500/20 text-secondary-400 font-black tracking-widest uppercase text-xs mb-6 border border-secondary-500/30"
                        >
                            Industry Focus
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
                        >
                            By Target <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">Molecule</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
                        >
                            Tailored testing grids that ensure your specific chemical entity meets every global endpoint requirement.
                        </motion.p>
                    </div>

                    <div className="space-y-16">
                        {moleculesData.map((mol, idx) => (
                            <motion.div
                                key={mol.slug}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white/5 backdrop-blur-3xl rounded-[3rem] overflow-hidden border border-white/10 group hover:border-white/20 transition-all duration-500 group`}
                            >
                                <div className="w-full lg:w-1/2 h-[450px] relative overflow-hidden">
                                    <img src={mol.image} alt={mol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                                    <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply group-hover:bg-slate-950/20 transition-colors"></div>
                                </div>
                                <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-0.5 bg-secondary-500 rounded-full"></div>
                                        <span className="text-secondary-400 font-black tracking-widest uppercase text-xs">Sector Expert</span>
                                    </div>
                                    <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tight">{mol.title}</h3>
                                    <p className="text-xl text-slate-300 leading-relaxed mb-12 font-light">
                                        {mol.description}
                                    </p>
                                    <Link href={`/molecules/${mol.slug}`} className="inline-flex max-w-max items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-white text-slate-950 font-black hover:bg-secondary-500 transition-all shadow-xl hover:-translate-y-1 active:scale-95 group/btn">
                                        Analysis Pathway <ArrowRight size={22} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-white relative overflow-hidden text-center">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto p-16 md:p-24 rounded-[4rem] bg-slate-50 border border-slate-100 flex flex-col items-center"
                    >
                        <div className="w-20 h-20 bg-primary-900 rounded-3xl flex items-center justify-center text-secondary-400 mb-10 shadow-2xl rotate-3 group-hover:rotate-12 transition-transform">
                            <Microscope size={40} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Need a Custom Assay?</h2>
                        <p className="text-xl text-slate-500 mb-12 max-w-2xl font-light leading-relaxed">
                            Our scientists specialize in developing novel protocols for complex molecules that don't fit standard models.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-primary-900 text-white font-black hover:bg-primary-950 transition shadow-2xl hover:scale-105 active:scale-95 group">
                            Consult with our Scientific Team <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
