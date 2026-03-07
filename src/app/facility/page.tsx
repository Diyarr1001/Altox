'use client';

import { motion } from 'framer-motion';
import { Building2, Microscope, ShieldCheck, PawPrint, Eye, Layers, Wind, Activity } from 'lucide-react';

export default function Facility() {
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
                            Global Infrastructure
                        </motion.span>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-tight text-balance">
                            Facility & <span className="text-indigo-600">Compliance.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed max-w-3xl mx-auto">
                            A precision-engineered 25,000 sq. ft. campus designed specifically to exceed OECD GLP directives and AAALAC animal welfare standards.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 -left-1/4 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[150px] pointer-events-none"></div>
            </section>

            {/* Infrastructure Overview (Clean Layout) */}
            <section className="py-32 bg-white relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Facility Specifications</span>
                            <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">Advanced Testing Infrastructure</h2>
                            <p className="text-lg text-slate-500 font-bold leading-relaxed mb-12">
                                Built from the ground up to prevent cross-contamination and ensure immutable data integrity. Our interconnected lab zones are physically and electronically secured.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Layers className="w-6 h-6" />, title: "25,000 sq. ft. Total Footprint", desc: "Zoned specialized labs for In Vitro, Genetic Tox, and Bioanalytics." },
                                    { icon: <Wind className="w-6 h-6" />, title: "HVAC & Environmental Control", desc: "100% fresh air systems, HEPA filtration, and strict climate gradients." },
                                    { icon: <Activity className="w-6 h-6" />, title: "24/7 Digital Monitoring", desc: "Redundant power backups and real-time electronic alerting." }
                                ].map((spec, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 items-start group hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500">
                                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm text-indigo-600 flex items-center justify-center shrink-0 border border-slate-50 group-hover:scale-110 transition-transform">
                                            {spec.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-slate-900 mb-2">{spec.title}</h4>
                                            <p className="text-slate-500 font-bold text-sm leading-relaxed">{spec.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <img src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2070&auto=format&fit=crop" alt="Lab Equipment" className="rounded-[4rem] shadow-3xl relative z-10 w-full object-cover h-[600px] border border-slate-100 group-hover:scale-[1.02] transition-transform duration-700" />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/5 blur-[80px] pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ABSL2 Vivarium (Bento Style) */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Animal Welfare</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">ABSL2 Vivarium</h2>
                        <p className="text-xl text-slate-500 font-bold leading-relaxed">
                            A dedicated 14,000 sq. ft. barrier facility strictly observing the 3Rs (Replacement, Reduction, Refinement) and highest ethical care standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-8 bg-white rounded-[3.5rem] p-16 border border-slate-100 relative overflow-hidden group shadow-2xl shadow-slate-900/5"
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-10 group-hover:rotate-6 transition-transform">
                                    <PawPrint size={32} />
                                </div>
                                <h4 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Barrier Concepts</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    {[
                                        "IVC for Rodents",
                                        "Clean/Dirty Corridor",
                                        "Automated Autoclaves",
                                        "Biosecurity Showers"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 font-black text-slate-700">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="md:col-span-4 bg-slate-900 text-white rounded-[3.5rem] p-16 relative overflow-hidden shadow-2xl group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
                            <h4 className="text-3xl font-black mb-8 relative z-10 leading-tight">Veterinary Oversight</h4>
                            <p className="text-slate-400 font-bold mb-10 relative z-10 leading-relaxed">
                                Uninterrupted access to board-certified veterinarians ensuring pain management and daily clinical observations.
                            </p>
                            <div className="text-7xl font-black text-indigo-400 tracking-tighter group-hover:scale-110 transition-transform duration-500">24/7</div>
                            <div className="text-xs font-black text-indigo-300 uppercase mt-4 tracking-widest">Care & Monitoring</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Certifications (Premium Grid) */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Our Standards</span>
                        <h2 className="text-5xl font-black text-slate-900 tracking-tighter">Regulatory Compliance</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            { title: "OECD GLP", desc: "Good Laboratory Practice compliance ensuring data acceptance globally." },
                            { title: "AAALAC", desc: "Aligned with international standards for animal care and use." },
                            { title: "CCSEA", desc: "Approved by the Committee for Control and Supervision of Experiments (India)." },
                            { title: "ISO/IEC 17025", desc: "General requirements for the competence of testing laboratories." }
                        ].map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 text-center group hover:bg-white hover:shadow-3xl transition-all duration-700"
                            >
                                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-indigo-500 mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                    <ShieldCheck size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{cert.title}</h4>
                                <p className="text-slate-500 font-bold text-sm leading-relaxed opacity-80">{cert.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
