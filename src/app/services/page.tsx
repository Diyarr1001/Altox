'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { moleculesData } from '@/data/molecules';

export default function Services() {
    return (
        <div className="w-full bg-white selection:bg-indigo-100 selection:text-indigo-900">
            {/* Page Header (Mesh Gradient) */}
            <section className="relative pt-40 pb-32 overflow-hidden bg-mesh">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-indigo-600 text-[0.7rem] font-black mb-10 tracking-[0.2em] uppercase"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            Our Capabilities
                        </motion.span>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-tight text-balance">
                            Scientific <span className="text-indigo-600">Precision.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed max-w-3xl mx-auto">
                            End-to-end GLP-compliant preclinical testing solutions tailored meticulously to your specific molecule and regulatory pathway.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 -left-1/4 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[150px] pointer-events-none"></div>
            </section>

            {/* Section 1: By Services (Grid Layout) */}
            <section id="by-service" className="py-32 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Service Modalities</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">Core Competencies</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {servicesData.map((svc, idx) => (
                            <motion.div
                                key={svc.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: (idx % 3) * 0.1, duration: 0.8 }}
                                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-900/5 border border-slate-100 group flex flex-col hover:-translate-y-2 transition-all duration-700"
                            >
                                <div className="h-72 relative overflow-hidden">
                                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-8 left-8">
                                        <h3 className="text-2xl font-black text-white tracking-tight">{svc.title}</h3>
                                    </div>
                                </div>
                                <div className="p-10 flex flex-col flex-grow">
                                    <p className="text-slate-500 font-bold leading-relaxed mb-8 flex-grow opacity-80 group-hover:opacity-100 transition-opacity">
                                        {svc.description}
                                    </p>
                                    <div className="space-y-4 mb-10 pt-8 border-t border-slate-100">
                                        {svc.features.slice(0, 3).map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-3 text-sm text-slate-700 font-black">
                                                <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={`/services/${svc.slug}`} className="inline-flex items-center gap-2 text-indigo-600 font-black hover:text-indigo-700 transition group-hover:translate-x-1 duration-300">
                                        Explore Methodology <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: By Molecules (Horizontal Cards) */}
            <section id="by-molecule" className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Target Specificity</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">By Molecule Type</h2>
                        <p className="text-xl text-slate-500 font-bold max-w-2xl mx-auto leading-relaxed opacity-80">
                            Customized testing grids ensure your specific molecule meets its precise global endpoint requirements.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {moleculesData.map((mol, idx) => (
                            <motion.div
                                key={mol.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-900/5 border border-slate-100 group hover:shadow-indigo-500/5 transition-all duration-700`}
                            >
                                <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
                                    <img src={mol.image} alt={mol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply group-hover:bg-indigo-900/0 transition-colors duration-700"></div>
                                </div>
                                <div className="w-full lg:w-1/2 p-16 lg:p-24 flex flex-col justify-center">
                                    <div className="w-20 h-1 bg-emerald-500 mb-10 rounded-full group-hover:w-32 transition-all duration-700"></div>
                                    <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 tracking-tight">{mol.title}</h3>
                                    <p className="text-xl text-slate-500 font-bold leading-relaxed mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
                                        {mol.description}
                                    </p>
                                    <Link href={`/molecules/${mol.slug}`} className="group/btn inline-flex max-w-max items-center justify-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white font-black hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 duration-300">
                                        View Study Design <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-white to-transparent opacity-50"></div>
            </section>

            {/* Final CTA (Mesh Style) */}
            <section className="py-40 bg-white relative overflow-hidden text-center">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto p-20 rounded-[4rem] bg-indigo-600 text-white relative overflow-hidden shadow-3xl"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                        <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10 tracking-tight leading-tight">Need a Specialized Assay <br />Not Listed Here?</h2>
                        <p className="text-xl text-indigo-100 font-bold mb-12 relative z-10 max-w-2xl mx-auto">
                            Our scientific team develops custom protocols for novel modalities and complex molecules everyday.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white text-indigo-600 font-black hover:bg-slate-50 transition-all shadow-2xl hover:scale-105 relative z-10 duration-300">
                            Consult with Experts <ArrowRight size={22} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
