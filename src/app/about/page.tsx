'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, Award, Building2, CheckCircle2 } from 'lucide-react';

export default function About() {
    return (
        <div className="w-full bg-slate-50">
            {/* Highly Visual Page Header */}
            <section className="relative pt-32 pb-40 overflow-hidden bg-slate-900 border-b-[8px] border-primary-500">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" alt="Abstract Science" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block py-1.5 px-5 rounded-full bg-white/10 backdrop-blur-md text-white font-bold tracking-widest uppercase text-sm mb-6 border border-white/20">
                            Our Origin & Purpose
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-xl tracking-tight leading-tight">
                            The Science of <span className="text-secondary-400">Certainty.</span>
                        </h1>
                        <p className="text-xl text-primary-100 font-light leading-relaxed">
                            Advancing global safety science with uncompromising quality, rigorous ethics, and world-class scientific pedigree.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="grid grid-cols-2 gap-4 relative z-10">
                            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1480&auto=format&fit=crop" alt="Scientists" className="rounded-2xl w-full h-64 object-cover shadow-xl mt-8" />
                            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" alt="Microscope" className="rounded-2xl w-full h-64 object-cover shadow-xl" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-secondary-100 rounded-full blur-[80px] -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase mb-3">Who We Are</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">Elevating Analytical Precision in Preclinical Studies</h3>
                        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                <strong className="text-slate-800">Altox Labs LLP</strong> is a premier contract research organization (CRO) specializing in predictive and regulatory preclinical safety assessment services. Situated in Pune, India, we cater to a diverse portfolio of international clients spanning the pharmaceutical, agrochemical, medical devices, and specialty chemical sectors.
                            </p>
                            <p>
                                Operating from our precision-engineered 25,000 sq. ft. GLP-ready facility, our foundational commitment is rooted in scientific excellence, rigorous compliance, and strict ethical standards.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-secondary-500 p-6 rounded-r-2xl text-slate-700 italic font-medium">
                                "Our global client base relies on us not just as a service provider, but as an indispensable strategic partner safeguarding both human health and the environment."
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24 bg-primary-900 border-y border-primary-950 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/5 backdrop-blur-lg p-12 rounded-[2.5rem] border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center text-secondary-400 mx-auto mb-8 shadow-inner shadow-black/20">
                                <Eye size={40} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-wide">Our Vision</h3>
                            <p className="text-primary-100 text-lg leading-relaxed font-light">
                                To be the consistently preferred, globally recognized partner for preclinical safety assessment, driving the future of life sciences through integrity, innovation, and unparalleled quality.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-white/5 backdrop-blur-lg p-12 rounded-[2.5rem] border border-white/10 hover:border-white/30 transition-all duration-300"
                        >
                            <div className="w-20 h-20 bg-primary-800 rounded-2xl flex items-center justify-center text-secondary-400 mx-auto mb-8 shadow-inner shadow-black/20">
                                <Target size={40} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-6 tracking-wide">Our Mission</h3>
                            <p className="text-primary-100 text-lg leading-relaxed font-light">
                                To empower innovators by providing precise, GLP-compliant toxicological insights. We commit to the highest ethical standards in animal welfare and uncompromising transparency.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Leadership & Expertise */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary-600 font-black tracking-widest uppercase text-sm mb-3 block">The Human Element</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">World-Class Scientific Expertise</h2>
                        <p className="text-xl text-slate-600">The core strength of Altox lies in our highly credentialed, globally experienced multidisciplinary team driving every assay.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {[
                            { role: "Board-Certified Toxicologists", cert: "DABTs", icon: <Award />, desc: "Providing expert study design, interpretation, and definitive regulatory guidance." },
                            { role: "Expert Pathologists", cert: "ACVP & DIBTP", icon: <Award />, desc: "Ensuring meticulous tissue evaluation and robust peer review processes." },
                            { role: "Study Directors", cert: "10+ Years Avg.", icon: <Building2 />, desc: "Seasoned leaders managing complex multi-site studies seamlessly." },
                            { role: "Veterinarians", cert: "24/7 Access", icon: <ShieldCheck />, desc: "Dedicated to the highest standards of AAALAC-aligned animal welfare." },
                            { role: "Analytical Experts", cert: "Method Validation", icon: <Award />, desc: "Masters of LC-MS/MS and method development for niche molecules." },
                            { role: "QAU Professionals", cert: "Zero Tolerance", icon: <CheckCircle2 />, desc: "Independent auditing guaranteeing 100% data integrity and GLP compliance." },
                        ].map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-slate-50 hover:bg-white border border-slate-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="text-secondary-500 mb-6 group-hover:scale-110 group-hover:text-primary-600 transition-transform bg-white w-14 h-14 rounded-xl shadow-sm flex items-center justify-center">
                                    {exp.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{exp.role}</h4>
                                <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-md mb-4">{exp.cert}</div>
                                <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
