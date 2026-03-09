'use client';

import {
    ShieldCheck, Cross, Dna, Activity, Eye, Sprout, TestTube,
    Crosshair, Droplet, ArrowRight, Zap, Target, Leaf, CheckCircle2,
    Beaker, Microscope, Globe, Clock, Shield, Settings
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ServiceDetail } from '@/data/services';

const IconMap: Record<string, any> = {
    ShieldCheck, Cross, Dna, Activity, Eye, Sprout, TestTube, Crosshair, Droplet, Zap, Target, Leaf, Beaker
};

export default function ServiceDetailClient({ service }: { service: ServiceDetail }) {
    const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'standards'>('overview');
    const IconComponent = IconMap[service.icon] || Activity;

    return (
        <div className="w-full bg-slate-50 min-h-screen">
            {/* Immersive Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-slate-950">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-primary-950/80 to-transparent"></div>
                </motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-2 text-secondary-400 font-bold tracking-[0.2em] uppercase text-xs mb-6"
                        >
                            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                            <span>/</span>
                            <span className="text-white/60">Pivotal Testing</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]"
                        >
                            {service.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl"
                        >
                            {service.description}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Quick Specs Bar */}
            {service.specifications && (
                <section className="bg-white border-b border-slate-100 py-6 relative z-20 shadow-sm">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-16">
                            {Object.entries(service.specifications).map(([key, value], idx) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (idx * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    {key === 'Compliance' && <Shield className="text-secondary-500" size={20} />}
                                    {key === 'Standard Species' && <Microscope className="text-secondary-500" size={20} />}
                                    {key === 'Typical Duration' && <Clock className="text-secondary-500" size={20} />}
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">{key}</p>
                                        <p className="text-sm font-bold text-slate-800 leading-none">{value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content Layout */}
            <section className="py-24 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Content Column */}
                    <div className="flex-grow lg:w-2/3">
                        {/* Interactive Tabs */}
                        <div className="flex gap-8 border-b border-slate-200 mb-12">
                            {(['overview', 'methodology', 'standards'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-4 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-primary-900' : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-secondary-500 rounded-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="prose prose-slate prose-lg max-w-none text-slate-600 mb-16 font-light leading-relaxed">
                                        <p className="text-2xl text-slate-900 font-bold mb-8 leading-tight">Expert Preclinical Insights</p>
                                        <p>{service.fullDescription}</p>
                                    </div>

                                    {/* Detailed Sections with Images */}
                                    <div className="space-y-24">
                                        {service.detailedSections?.map((section, idx) => (
                                            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                                                <div className="w-full md:w-1/2">
                                                    <h3 className="text-3xl font-black text-slate-900 mb-6">{section.title}</h3>
                                                    <p className="text-lg text-slate-600 leading-relaxed font-light">{section.content}</p>
                                                </div>
                                                <div className="w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl">
                                                    <img src={section.image} alt={section.title} className="w-full h-80 object-cover" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'methodology' && (
                                <motion.div
                                    key="methodology"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {service.methodology?.map((step, idx) => (
                                            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                                <div className="w-12 h-12 bg-slate-950 text-secondary-400 rounded-2xl flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
                                                    {idx + 1}
                                                </div>
                                                <h4 className="text-xl font-black text-slate-900 mb-4">{step.step}</h4>
                                                <p className="text-slate-600 font-light leading-relaxed">{step.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'standards' && (
                                <motion.div
                                    key="standards"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="p-10 bg-primary-900 rounded-[2.5rem] relative overflow-hidden">
                                        <Globe className="absolute -bottom-20 -right-20 text-white opacity-10 w-80 h-80" />
                                        <h3 className="text-3xl font-black text-white mb-8 relative z-10">Global Regulatory Alignment</h3>
                                        <div className="flex flex-wrap gap-4 relative z-10">
                                            {service.regulatoryStandards?.map((standard, idx) => (
                                                <div key={idx} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white font-bold border border-white/20">
                                                    {standard}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-10 text-primary-100 font-light relative z-10">
                                            Our studies are meticulously designed to satisfy the rigorous requirements of OECD, FDA, EMA, and other international health authorities, ensuring seamless data acceptance across global territories.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Gallery Section */}
                        {service.gallery && (
                            <div className="mt-32">
                                <h3 className="text-3xl font-black text-slate-900 mb-12">Visual Insights</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {service.gallery.map((img, idx) => (
                                        <div key={idx} className="rounded-3xl overflow-hidden shadow-xl aspect-video group">
                                            <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sticky Sidebar */}
                    <aside className="w-full lg:w-1/3">
                        <div className="sticky top-28 space-y-8">
                            {/* Capabilities List */}
                            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                    <Settings className="text-secondary-500" /> Key Applications
                                </h3>
                                <div className="space-y-4">
                                    {service.applications.map((app, idx) => (
                                        <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:bg-secondary-50 group">
                                            <div className="w-2 h-2 rounded-full bg-secondary-400 group-hover:scale-150 transition-transform"></div>
                                            <span className="text-slate-800 font-bold text-sm tracking-tight">{app}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Box */}
                            <div className="bg-primary-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-500 rounded-full blur-[100px] opacity-20 transition-opacity group-hover:opacity-40"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Consult with our Leads</h3>
                                <p className="text-primary-100 mb-8 relative z-10 font-light">Discuss your customized IND-enabling safety package with our toxicologists.</p>
                                <Link href="/contact" className="w-full py-5 bg-secondary-500 text-slate-950 font-black rounded-2xl flex items-center justify-center gap-3 relative z-10 hover:bg-white transition-all shadow-lg active:scale-95">
                                    Initiate Study <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}
