'use client';

import { motion } from 'framer-motion';
import { Microscope, Beaker, FileSearch, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function BioanalysisPathology() {
    return (
        <div className="w-full bg-slate-50">
            {/* Highly Immersive Medical Hero */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-52 overflow-hidden bg-slate-900">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1470&auto=format&fit=crop" alt="Microscope view" className="w-full h-full object-cover opacity-50 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-slate-900/60 to-slate-50"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="w-20 h-20 bg-primary-800/80 backdrop-blur rounded-3xl flex items-center justify-center text-secondary-400 mx-auto mb-8 shadow-2xl border border-white/10">
                            <Microscope size={40} />
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-xl tracking-tight leading-tight">
                            Bioanalysis & <span className="text-secondary-400">Pathology</span>
                        </h1>
                        <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                            The backbone of toxicological interpretation. We deliver highly accurate diagnostics, method validation, and ACVP-certified histopathology review.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-24 relative z-20 -mt-20">
                <div className="container mx-auto px-4 max-w-6xl space-y-24">

                    {/* Clinical Pathology */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                                <img src="https://images.unsplash.com/photo-1574345330896-180b5eacc5e4?q=80&w=2070&auto=format&fit=crop" alt="Clinical Pathology" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-primary-900/30 mix-blend-multiply"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <h2 className="text-sm font-black tracking-widest text-primary-600 uppercase mb-3 flex items-center gap-2"><Beaker size={16} /> Diagnostic Profiling</h2>
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Clinical Pathology</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                Fully automated, high-throughput hematology, clinical chemistry, and urinalysis supporting in-life study phases with immediate data readouts.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm leading-relaxed">
                                    <strong className="text-slate-800 block mb-1">Hematology & Coagulation</strong>
                                    <span className="text-slate-500 text-sm">CBC, Reticulocytes, PT, APTTp evaluated on advanced flow cytometry analyzers.</span>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm leading-relaxed">
                                    <strong className="text-slate-800 block mb-1">Clinical Chemistry</strong>
                                    <span className="text-slate-500 text-sm">Organ-specific panels (liver, kidney, cardiac biomarkers) including electrolytes.</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Histopathology */}
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                                <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1974&auto=format&fit=crop" alt="Histopathology slides" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-secondary-900/30 mix-blend-multiply"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2"
                        >
                            <h2 className="text-sm font-black tracking-widest text-secondary-500 uppercase mb-3 flex items-center gap-2"><Microscope size={16} /> Cellular Analysis</h2>
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Histopathology & Necropsy</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                Expert gross necropsy and macroscopic observations meticulously correlated with microscopic tissue evaluations.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-primary-500"></div> Routine H&E staining & special stains
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-primary-500"></div> Immunohistochemistry (IHC)
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-primary-500"></div> Toxicologic pathology scoring matrices
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Peer Review CTA Block */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl max-w-5xl mx-auto"
                    >
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[100px]"></div>
                        <FileSearch className="w-16 h-16 text-secondary-400 mx-auto mb-6" />
                        <h3 className="text-3xl lg:text-5xl font-black mb-6">Robust Peer Review System</h3>
                        <p className="text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-10">
                            Our pathology reports are finalized under an independent peer review process (PWG aligned) orchestrated by independent ACVP/DIBTP board-certified pathologists.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary-500 text-slate-900 font-bold hover:bg-white transition-colors duration-300 shadow-lg">
                            Request Sample Reports <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
