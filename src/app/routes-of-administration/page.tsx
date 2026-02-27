'use client';

import { motion } from 'framer-motion';
import { Pill, Syringe, Wind, Eye, Droplets, Activity, Cross } from 'lucide-react';
import Link from 'next/link';

export default function RoutesOfAdministration() {
    return (
        <div className="w-full bg-slate-50">
            {/* Immersive Header */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-52 overflow-hidden bg-slate-900 border-b-[8px] border-primary-600">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2062&auto=format&fit=crop" alt="Medical Administration" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary-950/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md text-white font-bold tracking-widest uppercase text-sm mb-6 border border-white/20">
                            Technical Capabilities
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
                            Routes of Administration
                        </h1>
                        <p className="text-xl text-primary-100 font-light leading-relaxed">
                            Comprehensive expertise in delivering test items via virtually any clinically relevant or environmentally plausible route.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Routes Grid */}
            <section className="py-24 relative z-20 -mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                        {[
                            {
                                title: "Oral & Dietary",
                                icon: <Pill />,
                                items: ["Oral Gavage (PO)", "Dietary Admixture", "Drinking Water", "Capsule Administration"],
                                color: "bg-blue-50 text-blue-600 border-blue-100"
                            },
                            {
                                title: "Parenteral",
                                icon: <Syringe />,
                                items: ["Intravenous (IV - Bolus & Infusion)", "Intramuscular (IM)", "Subcutaneous (SC)", "Intraperitoneal (IP)"],
                                color: "bg-emerald-50 text-emerald-600 border-emerald-100"
                            },
                            {
                                title: "Inhalation & Respiratory",
                                icon: <Wind />,
                                items: ["Nose-Only Inhalation", "Whole-Body Exposure", "Intratracheal Instillation (IT)", "Intranasal (IN)"],
                                color: "bg-cyan-50 text-cyan-600 border-cyan-100"
                            },
                            {
                                title: "Dermal & Topicals",
                                icon: <Droplets />,
                                items: ["Dermal Application (Intact/Abraded)", "Transdermal Patches", "Percutaneous", "Subdermal Implantation"],
                                color: "bg-amber-50 text-amber-600 border-amber-100"
                            },
                            {
                                title: "Ocular & Mucosal",
                                icon: <Eye />,
                                items: ["Ocular Instillation", "Intravitreal Injection", "Vaginal & Rectal", "Buccal & Sublingual"],
                                color: "bg-purple-50 text-purple-600 border-purple-100"
                            },
                            {
                                title: "Specialized Surgical",
                                icon: <Activity />,
                                items: ["Intracerebral / ICV", "Intra-articular", "Epidural & Intrathecal", "Surgically Implanted Devices"],
                                color: "bg-rose-50 text-rose-600 border-rose-100"
                            },
                        ].map((route, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${route.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {route.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">{route.title}</h3>
                                <ul className="space-y-3">
                                    {route.items.map((item, idxx) => (
                                        <li key={idxx} className="flex items-center gap-3 text-slate-600 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-primary-500 transition-colors"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Validation Callout */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-primary-50 border border-primary-100 rounded-[3rem] p-12 lg:p-20 text-center max-w-5xl mx-auto shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-[80px]"></div>
                        <Cross className="w-16 h-16 text-primary-300 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-black text-primary-900 mb-6 tracking-tight">Dosing Precision & Validation</h2>
                        <p className="text-lg md:text-xl text-primary-800/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Every route of administration is supported by rigorous bioanalytical verification, ensuring that the target systemic exposure or local tissue concentration is achieved exactly as required by the study protocol.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-800 text-white font-bold rounded-full hover:bg-primary-900 transition shadow-xl mt-4">
                            Discuss Your Study Design
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
