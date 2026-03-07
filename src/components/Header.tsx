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
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Info Bar - Hidden on scroll for minimalism */}
            <AnimatePresence mode="wait">
                {!isScrolled && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-slate-950 text-slate-400 text-[0.65rem] py-2 px-4 hidden md:block border-b border-white/5 overflow-hidden"
                    >
                        <div className="container mx-auto flex justify-between items-center tracking-[0.15em] font-black uppercase">
                            <div className="flex items-center space-x-10">
                                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Mail size={12} className="text-indigo-400" /> altoxlabs@gmail.com</span>
                                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Phone size={12} className="text-indigo-400" /> +91 9403136585</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                GLP COMPLIANT FACILITY
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Navigation - Floating Glassmorphism */}
            <div className={`fixed left-0 right-0 z-50 transition-all duration-700 flex justify-center ${isScrolled ? 'top-4 px-4' : 'top-6 px-0 md:top-12'}`}>
                <header
                    className={`transition-all duration-700 flex items-center justify-between shadow-2xl overflow-visible ${isScrolled
                            ? 'max-w-6xl w-full glass-card rounded-full py-2.5 px-8 shadow-indigo-500/10'
                            : 'container mx-auto max-w-7xl bg-white/40 backdrop-blur-md rounded-[2.5rem] py-4 px-10 border border-white/20'
                        }`}
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-indigo-500/30"
                        >
                            AL
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="font-black text-xl md:text-2xl text-slate-900 leading-none tracking-tighter group-hover:text-indigo-600 transition-colors">Altox Labs</span>
                            <span className="text-[0.6rem] tracking-[0.25em] text-slate-500 font-bold uppercase mt-1">Solutions through Sciences</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 font-bold text-slate-600 bg-slate-900/5 p-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">
                        {['Home', 'About', 'Facility'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="px-6 py-2.5 rounded-full hover:text-indigo-600 hover:bg-white transition-all duration-500 relative group"
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
                                className={`flex items-center gap-1 px-6 py-2.5 rounded-full transition-all duration-500 ${megaMenuOpen ? 'bg-white text-indigo-600 shadow-sm' : 'hover:bg-white hover:text-indigo-600'}`}
                            >
                                Services <ChevronDown size={14} className={`transition-transform duration-500 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                            </Link>

                            <AnimatePresence>
                                {megaMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: 15, scale: 0.98, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute top-full -left-64 w-[960px] pt-8 pointer-events-auto"
                                    >
                                        <div className="glass-card rounded-[3rem] p-12 grid grid-cols-2 gap-16 shadow-[0_40px_120px_rgba(0,0,0,0.15)] border border-white/50 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] -z-10"></div>

                                            {/* Modality Section */}
                                            <div>
                                                <div className="flex items-center gap-3 mb-8 px-4">
                                                    <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                                                        <Menu size={16} />
                                                    </div>
                                                    <h3 className="text-[0.7rem] font-black text-indigo-600 uppercase tracking-[0.25em]">By Modality / Service</h3>
                                                </div>
                                                <div className="grid grid-cols-1 gap-1.5 focus-within:z-10">
                                                    {servicesData.slice(0, 6).map((service, idx) => (
                                                        <motion.div
                                                            key={service.slug}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.04 }}
                                                        >
                                                            <Link
                                                                href={`/services/${service.slug}`}
                                                                className="text-[0.95rem] text-slate-600 hover:text-indigo-700 hover:bg-indigo-50/80 px-5 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between group/item"
                                                            >
                                                                <span className="font-bold">{service.title}</span>
                                                                <ArrowRight size={16} className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-indigo-400" />
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Molecule Section */}
                                            <div className="border-l border-slate-100 pl-16">
                                                <div className="flex items-center gap-3 mb-8 px-4">
                                                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600">
                                                        <ChevronDown size={16} />
                                                    </div>
                                                    <h3 className="text-[0.7rem] font-black text-emerald-600 uppercase tracking-[0.25em]">By Target Molecule</h3>
                                                </div>
                                                <div className="grid grid-cols-1 gap-1.5">
                                                    {moleculesData.map((mol, idx) => (
                                                        <motion.div
                                                            key={mol.slug}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 + (idx * 0.04) }}
                                                        >
                                                            <Link
                                                                href={`/molecules/${mol.slug}`}
                                                                className="text-[0.95rem] text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/80 px-5 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between group/item"
                                                            >
                                                                <span className="font-bold">{mol.title}</span>
                                                                <ArrowRight size={16} className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-emerald-400" />
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
                            className="px-6 py-2.5 rounded-full hover:text-indigo-600 hover:bg-white transition-all duration-500"
                        >
                            Bioanalysis
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="hidden md:flex bg-slate-900 shadow-xl shadow-slate-900/10 text-white px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-indigo-600 hover:shadow-indigo-500/30 active:scale-95 transition-all duration-500"
                        >
                            Initiate Inquiry
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 active:scale-90 transition-all"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="fixed inset-0 z-[60] lg:hidden bg-slate-50 overflow-y-auto"
                    >
                        <div className="min-h-screen flex flex-col p-8">
                            <div className="flex justify-between items-center mb-16">
                                <Link href="/" className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black">AL</div>
                                    <span className="font-black text-xl tracking-tighter">Altox Labs</span>
                                </Link>
                                <button onClick={() => setMobileMenuOpen(false)} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 active:scale-90 transition-all"><X size={24} /></button>
                            </div>

                            <div className="flex flex-col space-y-2">
                                {['Home', 'About', 'Facility', 'Bioanalysis', 'Services'].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (idx * 0.08), duration: 0.6, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-5xl font-black text-slate-900 hover:text-indigo-600 transition-colors py-6 block border-b border-slate-200/50 flex items-center justify-between group"
                                        >
                                            {item}
                                            <ArrowRight size={32} className="opacity-20 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 transition-transform" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto pt-20">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full text-center py-7 bg-indigo-600 text-white rounded-3xl font-black text-2xl shadow-[0_20px_60px_rgba(79,70,229,0.4)] active:scale-95 transition-all"
                                >
                                    Work With Us
                                </Link>
                                <div className="mt-8 flex justify-center gap-10 text-slate-400 font-bold uppercase text-xs tracking-widest">
                                    <span>Instagram</span>
                                    <span>LinkedIn</span>
                                    <span>Twitter</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
