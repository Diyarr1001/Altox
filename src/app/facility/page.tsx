'use client';

import { motion } from 'framer-motion';
import { Building2, Microscope, ShieldCheck, PawPrint, Eye, Layers, Wind, Activity } from 'lucide-react';

export default function Facility() {
    return (
        <div className="w-full bg-white">
            {/* Immersive Page Header */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-52 overflow-hidden bg-slate-900">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1574345330896-180b5eacc5e4?q=80&w=2070&auto=format&fit=crop" alt="High-Tech Laboratory" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary-950/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-secondary-500/20 text-secondary-300 font-bold tracking-widest uppercase text-sm mb-6 border border-secondary-500/30">
                            Global Infrastructure
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
                            Facility & Compliance
                        </h1>
                        <p className="text-xl text-slate-200 font-light leading-relaxed">
                            A precision-engineered 25,000 sq. ft. campus designed specifically to exceed OECD GLP directives and AAALAC animal welfare standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Infrastructure Overview - Visual Heavy */}
            <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase mb-3">Facility Specifications</h2>
                            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Advanced Testing Infrastructure</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Built from the ground up to prevent cross-contamination and ensure immutable data integrity. Our interconnected lab zones are physically and electronically secured.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: <Layers />, title: "25,000 sq. ft. Total Footprint", desc: "Zoned specialized labs for In Vitro, Genetic Tox, and Bioanalytics." },
                                    { icon: <Wind />, title: "HVAC & Environmental Control", desc: "100% fresh air systems, HEPA filtration, and strict temperature/humidity gradients." },
                                    { icon: <Activity />, title: "24/7 Digital Monitoring", desc: "Redundant power backups and real-time electronic alerting for all critical zones." }
                                ].map((spec, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm text-secondary-500 flex items-center justify-center shrink-0 border border-slate-100">
                                            {spec.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900">{spec.title}</h4>
                                            <p className="text-sm text-slate-600">{spec.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img src="https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2070&auto=format&fit=crop" alt="Lab Equipment" className="rounded-[2.5rem] shadow-2xl relative z-10 w-full object-cover h-[500px]" />
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-dots-pattern opacity-20 z-0"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ABSL2 Vivarium Showcase */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase mb-3">Animal Welfare</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">ABSL2 Compliant Vivarium</h3>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            A dedicated 14,000 sq. ft. barrier facility strictly observing the 3Rs (Replacement, Reduction, Refinement) and highest ethical care standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="col-span-1 md:col-span-2 bg-slate-50 rounded-[2rem] p-10 border border-slate-100 relative overflow-hidden group"
                        >
                            <img src="https://images.unsplash.com/photo-1532187643603-c15568efbbd3?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="Mice Models" />
                            <div className="relative z-10">
                                <PawPrint className="text-primary-600 w-12 h-12 mb-6" />
                                <h4 className="text-2xl font-bold text-slate-900 mb-4">Barrier Concepts</h4>
                                <ul className="space-y-3 text-slate-700">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div> IVC (Individually Ventilated Cages) for Rodents</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div> Clean / Dirty Corridor separation</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div> Fully automated autoclave and washing systems</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div> Strict biosecurity showers and PPE protocols</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-primary-900 text-white rounded-[2rem] p-10 relative overflow-hidden shadow-xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-500 opacity-20 blur-3xl rounded-full"></div>
                            <h4 className="text-2xl font-bold mb-4 relative z-10">Veterinary Oversight</h4>
                            <p className="text-primary-100 mb-6 relative z-10">
                                Uninterrupted access to board-certified veterinarians ensuring pain management, environmental enrichment, and daily clinical observations.
                            </p>
                            <div className="text-4xl font-black text-secondary-400">24/7</div>
                            <div className="text-sm font-bold text-primary-200 uppercase mt-1">Care & Monitoring</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Quality & Regulatory Compliance Grid */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase mb-3">Our Standards</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Global Regulatory Compliance</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: "OECD GLP", desc: "Good Laboratory Practice compliance ensuring data acceptance globally." },
                            { title: "AAALAC", desc: "Aligned with international standards for animal care and use." },
                            { title: "CCSEA", desc: "Approved by the Committee for Control and Supervision of Experiments on Animals (India)." },
                            { title: "ISO/IEC 17025", desc: "General requirements for the competence of testing laboratories." }
                        ].map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:border-secondary-400 hover:shadow-lg transition cursor-default"
                            >
                                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 mb-4">
                                    <ShieldCheck size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h4>
                                <p className="text-sm text-slate-500">{cert.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
