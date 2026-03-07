'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '@/data/services';
import { moleculesData } from '@/data/molecules';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Info Bar - Disappears completely on scroll for ultimate clean look */}
            <AnimatePresence>
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-slate-900/5 backdrop-blur-sm text-slate-500 text-[0.65rem] py-2 px-6 hidden md:block border-b border-slate-200/50 overflow-hidden"
                    >
                        <div className="container mx-auto flex justify-between items-center tracking-[0.2em] font-black uppercase">
                            <div className="flex items-center space-x-12">
                                <span className="flex items-center gap-2 hover:text-indigo-600 transition-colors cursor-pointer"><Mail size={12} /> altoxlabs@gmail.com</span>
                                <span className="flex items-center gap-2 hover:text-indigo-600 transition-colors cursor-pointer"><Phone size={12} /> +91 9403136585</span>
                            </div>
                            <div className="flex items-center gap-2 text-indigo-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                                GLP COMPLIANT FACILITY
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Navigation - High-End Floating Design */}
            <div className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-700">
                <header
                    className={`transition-all duration-700 pointer-events-auto flex items-center justify-between mt-6 lg:mt-8 px-8 md:px-12 ${isScrolled
                        ? 'w-[92%] lg:w-[85%] max-w-7xl h-20 glass-card rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-slate-200/60 !mt-4'
                        : 'w-full max-w-7xl h-24 bg-transparent rounded-none border-transparent'
                        }`}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <motion.div
                            animate={{ scale: isScrolled ? 0.9 : 1 }}
                            className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-600/20 group-hover:rotate-6 transition-all duration-500"
                        >
                            AL
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="font-black text-2xl text-slate-900 leading-none tracking-tighter group-hover:text-indigo-600 transition-colors">Altox Labs</span>
                            <span className={`text-[0.6rem] tracking-[0.3em] text-slate-400 font-black uppercase mt-1.5 transition-opacity duration-500 ${isScrolled ? 'hidden lg:block opacity-60' : 'block'}`}>Scientific Excellence</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Clean architectural look */}
                    <nav className="hidden lg:flex items-center gap-2 bg-slate-900/5 p-1 rounded-full border border-slate-200/30">
                        {['Home', 'About', 'Facility'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="px-6 py-2.5 rounded-full text-slate-600 font-black text-[0.85rem] uppercase tracking-wider hover:text-indigo-600 hover:bg-white transition-all duration-500"
                            >
                                {item}
                            </Link>
                        ))}

                        {/* Services Mega Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setMegaMenuOpen(true)}
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <Link
                                href="/services"
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-slate-600 font-black text-[0.85rem] uppercase tracking-wider transition-all duration-500 ${megaMenuOpen ? 'bg-white text-indigo-600 shadow-sm' : 'hover:bg-white hover:text-indigo-600'}`}
                            >
                                Services <ChevronDown size={14} className={`transition-transform duration-500 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                            </Link>

                            <AnimatePresence>
                                {megaMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full -left-64 w-[1000px] pt-6"
                                    >
                                        <div className="glass-card rounded-[3.5rem] p-16 grid grid-cols-2 gap-20 shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white/60">
                                            {/* Modality Section */}
                                            <div>
                                                <div className="flex items-center gap-4 mb-10">
                                                    <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">S</div>
                                                    <h3 className="text-[0.7rem] font-black text-slate-400 uppercase tracking-[0.3em]">Scientific Modalities</h3>
                                                </div>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {servicesData.slice(0, 6).map((service, idx) => (
                                                        <motion.div
                                                            key={service.slug}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.03 }}
                                                        >
                                                            <Link
                                                                href={`/services/${service.slug}`}
                                                                className="text-lg text-slate-900 font-black hover:text-indigo-600 hover:bg-indigo-50 px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group/item"
                                                            >
                                                                <span>{service.title}</span>
                                                                <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Molecule Section */}
                                            <div className="border-l border-slate-100 pl-20">
                                                <div className="flex items-center gap-4 mb-10">
                                                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black">M</div>
                                                    <h3 className="text-[0.7rem] font-black text-slate-400 uppercase tracking-[0.3em]">By Target Molecule</h3>
                                                </div>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {moleculesData.map((mol, idx) => (
                                                        <motion.div
                                                            key={mol.slug}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.15 + (idx * 0.03) }}
                                                        >
                                                            <Link
                                                                href={`/molecules/${mol.slug}`}
                                                                className="text-lg text-slate-900 font-black hover:text-emerald-600 hover:bg-emerald-50 px-6 py-4 rounded-2xl transition-all duration-300 flex items-center justify-between group/item"
                                                            >
                                                                <span>{mol.title}</span>
                                                                <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/bioanalysis-pathology"
                            className="px-6 py-2.5 rounded-full text-slate-600 font-black text-[0.85rem] uppercase tracking-wider hover:text-indigo-600 hover:bg-white transition-all duration-500"
                        >
                            Bioanalysis
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/contact"
                            className={`hidden md:flex bg-slate-900 text-white px-10 py-3.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/20 active:scale-95 transition-all duration-500 ${isScrolled ? 'h-12 flex items-center' : ''}`}
                        >
                            Get Started
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 text-white active:scale-90 transition-all"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile Nav Overlay - Redesigned for clean light look */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] lg:hidden bg-white overflow-y-auto"
                    >
                        <div className="min-h-screen flex flex-col p-10">
                            <div className="flex justify-between items-center mb-20">
                                <Link href="/" className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl">AL</div>
                                    <span className="font-black text-2xl tracking-tighter">Altox Labs</span>
                                </Link>
                                <button onClick={() => setMobileMenuOpen(false)} className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 active:scale-90 transition-all"><X size={28} /></button>
                            </div>

                            <div className="flex flex-col space-y-4">
                                {['Home', 'About', 'Facility', 'Services', 'Bioanalysis'].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-6xl font-black text-slate-950 hover:text-indigo-600 transition-colors py-4 block"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto pt-20">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center py-8 bg-indigo-600 text-white rounded-[2rem] font-black text-2xl shadow-2xl shadow-indigo-600/30 active:scale-95 transition-all"
                                >
                                    Initiate Project
                                </Link>
                                <div className="mt-12 flex justify-center gap-12 text-slate-400 font-black uppercase text-xs tracking-widest">
                                    <span>In</span>
                                    <span>Tw</span>
                                    <span>Li</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
