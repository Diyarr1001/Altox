'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Building2, CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <div className="w-full bg-white selection:bg-indigo-100 selection:text-indigo-900">
            {/* Page Header (Mesh Gradient) */}
            <section className="relative pt-40 pb-32 overflow-hidden bg-mesh">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        className="max-w-4xl"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-indigo-600 text-[0.7rem] font-black mb-10 tracking-[0.2em] uppercase"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            Our Origin & Purpose
                        </motion.span>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
                            The Science of <br /><span className="text-indigo-600">Certainty.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed max-w-2xl">
                            Advancing global safety science with uncompromising quality, rigorous ethics, and world-class scientific pedigree.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 -left-1/4 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[150px] pointer-events-none"></div>
            </section>

            {/* Who We Are (Clean Layout) */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="grid grid-cols-2 gap-6 relative z-10">
                            <div className="relative group">
                                <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1480&auto=format&fit=crop" alt="Scientists" className="rounded-[2.5rem] w-full h-[400px] object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-700 mt-12" />
                            </div>
                            <div className="relative group">
                                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="Microscope" className="rounded-[2.5rem] w-full h-[400px] object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-700" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">Legacy of Excellence</span>
                        <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">Elevating Analytical Precision in Preclinical Studies</h2>
                        <div className="space-y-8 text-slate-500 leading-relaxed text-lg font-bold">
                            <p>
                                <span className="text-slate-900">Altox Labs LLP</span> is a premier contract research organization (CRO) specializing in predictive and regulatory preclinical safety assessment services.
                            </p>
                            <p>
                                Operating from our precision-engineered 25,000 sq. ft. GLP-ready facility in Pune, India, our commitment is rooted in scientific excellence and uncompromising transparency.
                            </p>
                            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-slate-900 italic font-black text-xl shadow-xl shadow-slate-900/5 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                                "Our global client base relies on us as an indispensable strategic partner safeguarding both human health and the environment."
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission (Bento Style) */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Our Vision",
                                icon: <Eye size={40} />,
                                desc: "To be the consistently preferred, globally recognized partner for preclinical safety assessment, driving the future of life sciences through integrity and innovation.",
                                color: "indigo"
                            },
                            {
                                title: "Our Mission",
                                icon: <Target size={40} />,
                                desc: "To empower innovators by providing precise, GLP-compliant toxicological insights. We commit to the highest ethical standards and uncompromising transparency.",
                                color: "emerald"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.2 }}
                                className="bg-white p-16 rounded-[4rem] shadow-2xl shadow-slate-900/5 border border-slate-100 group hover:-translate-y-2 transition-all duration-700"
                            >
                                <div className={`w-20 h-20 bg-${item.color}-50 rounded-3xl flex items-center justify-center text-${item.color}-600 mb-10 group-hover:rotate-6 transition-transform`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{item.title}</h3>
                                <p className="text-slate-500 text-xl leading-relaxed font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Expertise (Glass Cards Grid) */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-indigo-600 font-black tracking-[0.25em] uppercase text-[0.7rem] mb-6 block">The Human Element</span>
                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Elite Scientific Talent</h2>
                        <p className="text-xl text-slate-500 font-bold">A multidisciplinary team with global regulatory pedigree.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {[
                            { role: "Toxicologists", cert: "DABTs", icon: <Award />, desc: "Expert study design and definitive regulatory guidance." },
                            { role: "Pathologists", cert: "ACVP / DIBTP", icon: <Award />, desc: "Meticulous tissue evaluation and robust peer review." },
                            { role: "Study Directors", cert: "10+ Years Avg.", icon: <Building2 />, desc: "Led complex studies at global scales." },
                            { role: "Veterinarians", cert: "AAALAC Aligned", icon: <ShieldCheck />, desc: "Dedicated animal welfare at the highest standards." },
                            { role: "Analytical Experts", cert: "LC-MS/MS", icon: <Award />, desc: "Masters of validation for complex molecules." },
                            { role: "Quality Assurance", cert: "GLP Oversight", icon: <CheckCircle2 />, desc: "Independent auditing for absolute data integrity." },
                        ].map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-3xl hover:shadow-indigo-500/5 transition-all duration-700"
                            >
                                <div className="text-indigo-600 mb-8 group-hover:scale-110 transition-transform bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center border border-slate-50">
                                    {exp.icon}
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{exp.role}</h4>
                                <div className="inline-flex px-3 py-1 bg-indigo-50 text-indigo-600 text-[0.65rem] font-black rounded-lg mb-6 uppercase tracking-wider">{exp.cert}</div>
                                <p className="text-slate-500 text-lg leading-relaxed font-bold opacity-80">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
