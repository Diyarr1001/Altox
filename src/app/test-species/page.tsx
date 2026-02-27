'use client';

import { motion } from 'framer-motion';
import { PawPrint, Dna, Activity, CheckCircle2 } from 'lucide-react';

export default function TestSpecies() {
    return (
        <div className="w-full bg-slate-50">
            {/* Immersive Header */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-52 overflow-hidden bg-slate-900 border-b-[8px] border-secondary-500">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1532187643603-c15568efbbd3?q=80&w=2070&auto=format&fit=crop" alt="Preclinical Vivarium" className="w-full h-full object-cover opacity-50 mix-blend-overlay grayscale-[30%]" />
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
                            Available Models
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
                            Tested Species & Models
                        </h1>
                        <p className="text-xl text-slate-200 font-light leading-relaxed">
                            A comprehensive array of regulatory-approved mammalian and non-mammalian test systems maintained strictly under AAALAC and CCSEA guidelines.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Species Categorization */}
            <section className="py-24 bg-white relative -mt-10 rounded-t-[3rem] z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

                        {/* Rodents */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:shadow-xl hover:border-primary-200 transition-all"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-sm border border-slate-200">
                                <PawPrint size={32} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Rodent Models</h3>
                            <p className="text-slate-600 mb-8 text-lg">
                                The foundation of general toxicology, strictly bred and maintained in IVC systems.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-secondary-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="text-slate-800 block">Rats</strong>
                                        <span className="text-slate-500 text-sm">Wistar, Sprague Dawley (SD), Fisher 344</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-secondary-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="text-slate-800 block">Mice</strong>
                                        <span className="text-slate-500 text-sm">Swiss Albino, BALB/c, C57BL/6, CD-1</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-secondary-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="text-slate-800 block">Specialized</strong>
                                        <span className="text-slate-500 text-sm">Transgenic models, Nude mice upon request</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Non-Rodents */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-10 hover:shadow-xl hover:border-secondary-200 transition-all"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary-600 mb-8 shadow-sm border border-slate-200">
                                <Activity size={32} />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Non-Rodent Models</h3>
                            <p className="text-slate-600 mb-8 text-lg">
                                Essential for IND enabling and comparative safety pharmacology studies.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="text-slate-800 block">Lagomorphs (Rabbits)</strong>
                                        <span className="text-slate-500 text-sm">New Zealand White (NZW) - Primary model for irritation and teratology.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="text-slate-800 block">Canines (Dogs)</strong>
                                        <span className="text-slate-500 text-sm">Beagle - Standard non-rodent model for systemic toxicology.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="text-primary-500 mt-1 shrink-0" size={20} />
                                    <div>
                                        <strong className="text-slate-800 block">Swine</strong>
                                        <span className="text-slate-500 text-sm">Gottingen Minipig - Excellent model for dermal toxicology and cardiovascular studies.</span>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Eco & In Vitro */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="col-span-1 md:col-span-2 bg-gradient-to-br from-primary-900 to-primary-950 text-white rounded-[2.5rem] p-12 overflow-hidden relative shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                                <div>
                                    <h3 className="text-3xl font-extrabold mb-6 text-white flex items-center gap-3">
                                        <Dna className="text-secondary-400" size={32} /> In Vitro & Cell Lines
                                    </h3>
                                    <p className="text-primary-100 mb-6 leading-relaxed">
                                        Robust cell banks adhering to ATCC guidelines for genotoxicity, cytotoxicity, and primary screening assays.
                                    </p>
                                    <ul className="space-y-2 text-primary-200">
                                        <li>• Salmonella typhimurium (Ames)</li>
                                        <li>• CHO & CHL cell lines</li>
                                        <li>• Human peripheral blood lymphocytes</li>
                                        <li>• 3D Reconstructed Human Epidermis (RhE)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-3xl font-extrabold mb-6 text-white flex items-center gap-3">
                                        <Sprout className="text-secondary-400" size={32} /> Ecotoxicology
                                    </h3>
                                    <p className="text-primary-100 mb-6 leading-relaxed">
                                        Controlled environmental models for aquatic and terrestrial environmental safety assessments.
                                    </p>
                                    <ul className="space-y-2 text-primary-200">
                                        <li>• Fish (Zebra fish, Rainbow Trout)</li>
                                        <li>• Daphnia magna</li>
                                        <li>• Algae (Pseudokirchneriella subcapitata)</li>
                                        <li>• Earthworms (Eisenia fetida) & Honey bees</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}

function Sprout(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" /><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" /><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
        </svg>
    );
}
