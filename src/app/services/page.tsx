'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { moleculesData } from '@/data/molecules';

export default function Services() {
    return (
        <div className="w-full bg-slate-50">
            {/* Highly Visual Page Header */}
            <section className="relative pt-32 pb-40 lg:pt-40 lg:pb-52 overflow-hidden bg-slate-900 border-b-[8px] border-primary-500">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop" alt="Laboratory Background" className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-900/60 to-slate-50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-secondary-500/20 text-secondary-400 font-bold tracking-widest uppercase text-sm mb-6 border border-secondary-500/30">
                            Our Capabilities
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
                            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-secondary-500">Scientific</span> Services
                        </h1>
                        <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                            End-to-end GLP-compliant preclinical testing solutions tailored meticulously to your specific molecule and regulatory pathway.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 1: By Services Showcase (Grid Layout) */}
            <section id="by-service" className="py-24 relative z-20 -mt-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-extrabold text-slate-900 bg-white inline-block px-12 py-4 rounded-[2rem] shadow-xl border border-slate-100"
                        >
                            By Service Modality
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((svc, idx) => (
                            <motion.div
                                key={svc.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="h-56 relative overflow-hidden">
                                    <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-3 pr-4">
                                        <h3 className="text-xl font-bold text-white leading-tight">{svc.title}</h3>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                        {svc.description}
                                    </p>
                                    <div className="space-y-3 mb-8 pt-6 border-t border-slate-100">
                                        {svc.features.slice(0, 3).map((feature, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2 text-sm text-slate-700 font-medium line-clamp-2">
                                                <CheckCircle2 className="text-secondary-500 shrink-0 mt-0.5" size={16} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href={`/services/${svc.slug}`} className="inline-flex items-center gap-2 text-primary-700 font-bold hover:text-primary-800 transition group-hover:underline">
                                        View Full Service Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4 py-8">
                <hr className="border-slate-200 border-2 rounded-full" />
            </div>

            {/* Section 2: By Molecules Showcase (Horizontal Cards) */}
            <section id="by-molecule" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary-600 font-black tracking-widest uppercase text-sm mb-3 block"
                        >
                            Industry Focus
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 bg-white inline-block px-12 py-4 rounded-[2rem] shadow-xl border border-slate-100"
                        >
                            By Target Molecule
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-slate-600 max-w-2xl mx-auto mt-6"
                        >
                            We understand that every industry has unique regulatory demands. Our customized testing grids ensure your specific molecule meets its precise global endpoint requirements.
                        </motion.p>
                    </div>

                    <div className="space-y-12">
                        {moleculesData.map((mol, idx) => (
                            <motion.div
                                key={mol.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500`}
                            >
                                <div className="w-full md:w-1/2 h-72 md:h-auto relative overflow-hidden">
                                    <img src={mol.image} alt={mol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply group-hover:bg-primary-900/10 transition-colors"></div>
                                </div>
                                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                                    <div className="w-16 h-1 bg-secondary-500 mb-8 rounded-full"></div>
                                    <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight">{mol.title}</h3>
                                    <p className="text-xl text-slate-600 leading-relaxed mb-10">
                                        {mol.description}
                                    </p>
                                    <Link href={`/molecules/${mol.slug}`} className="inline-flex max-w-max items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary-800 text-white font-bold hover:bg-primary-900 transition-colors shadow-lg group-hover:-translate-y-1">
                                        Explore {mol.title} Pathways <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary-900 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-8">Need a Custom Assay Not Listed Here?</h2>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-900 font-bold hover:bg-slate-100 transition shadow-xl hover:scale-105">
                        Contact Our Scientific Team <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
