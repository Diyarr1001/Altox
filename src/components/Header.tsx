'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, Dna, FlaskConical } from 'lucide-react';
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
            {/* Top Bar */}
            <div className="bg-primary-900 text-white text-sm py-2 px-4 hidden md:block">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <span className="flex items-center gap-2"><Mail size={14} /> altoxlabs@gmail.com</span>
                        <span className="flex items-center gap-2"><Phone size={14} /> +91 9403136585</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled
                    ? 'mt-4 px-4'
                    : 'mt-0 px-0'
                    }`}
            >
                <div
                    className={`container mx-auto px-6 h-20 flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled
                        ? 'bg-white/80 backdrop-blur-2xl rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 ring-1 ring-black/5 max-w-7xl'
                        : 'bg-white border-b border-slate-100 max-w-full'
                        }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-gradient-to-br from-primary-800 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0"
                        >
                            AL
                        </motion.div>
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-extrabold text-xl md:text-2xl text-primary-900 leading-none group-hover:text-primary-700 transition-colors"
                            >
                                Altox Labs
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-[0.65rem] tracking-widest text-primary-600 font-semibold uppercase mt-1"
                            >
                                Solutions through Sciences
                            </motion.div>
                        </div>
                    </Link>

                    {/* Centralized Desktop Nav */}
                    <nav className="hidden lg:flex items-center bg-slate-50/50 p-1 rounded-full border border-slate-100 relative shadow-inner">
                        <Link
                            href="/"
                            className="relative px-5 py-2 text-sm font-bold text-slate-700 hover:text-primary-600 transition-colors group"
                        >
                            Home
                            <motion.div className="absolute inset-0 bg-white rounded-full shadow-sm scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                        </Link>

                        <Link
                            href="/about"
                            className="relative px-5 py-2 text-sm font-bold text-slate-700 hover:text-primary-600 transition-colors group"
                        >
                            About
                            <motion.div className="absolute inset-0 bg-white rounded-full shadow-sm scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                        </Link>

                        {/* Services Mega Menu Trigger */}
                        <div
                            className="relative group px-5 py-2"
                            onMouseEnter={() => setMegaMenuOpen(true)}
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <Link href="/services" className="flex items-center gap-1 text-sm font-bold text-slate-700 group-hover:text-primary-600 transition-colors focus:outline-none">
                                Services <ChevronDown size={14} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                            </Link>

                            <AnimatePresence>
                                {megaMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="fixed top-[5.5rem] left-1/2 -translate-x-1/2 w-screen max-w-6xl z-50 pt-2 px-4"
                                    >
                                        <div className="bg-white/95 backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-white p-10 grid grid-cols-12 gap-10 overflow-hidden ring-1 ring-black/5">

                                            {/* Column 1: Intro/Featured */}
                                            <div className="col-span-3 border-r border-slate-100 pr-6">
                                                <div className="w-12 h-12 bg-primary-900 rounded-2xl flex items-center justify-center text-secondary-400 mb-6 shadow-lg shadow-primary-900/20">
                                                    <FlaskConical size={24} />
                                                </div>
                                                <h3 className="text-xl font-black text-primary-900 mb-3 leading-tight">Expert Solutions through Sciences</h3>
                                                <p className="text-sm text-slate-500 mb-6 leading-relaxed text-pretty">Comprehensive GLP-compliant testing pipelines designed for precision and global regulatory excellence.</p>
                                                <Link href="/services" className="text-xs font-black uppercase tracking-widest text-primary-600 hover:text-primary-800 flex items-center gap-2 group/link">
                                                    View All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                </Link>
                                            </div>

                                            {/* Column 2: By Services */}
                                            <div className="col-span-4 pl-4">
                                                <h3 className="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center">
                                                    <span className="w-8 h-px bg-primary-100 mr-3" /> By Modality
                                                </h3>
                                                <div className="flex flex-col gap-1">
                                                    {servicesData.slice(0, 8).map((service, idx) => (
                                                        <motion.div
                                                            key={service.slug}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.03 }}
                                                        >
                                                            <Link
                                                                href={`/services/${service.slug}`}
                                                                className="text-sm font-bold text-slate-600 hover:text-primary-700 hover:translate-x-1 px-3 py-2 rounded-xl transition-all duration-200 line-clamp-1 flex items-center group/item"
                                                            >
                                                                {service.title}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Column 3: By Molecule */}
                                            <div className="col-span-5 border-l border-slate-100 pl-10">
                                                <h3 className="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center">
                                                    <span className="w-8 h-px bg-secondary-100 mr-3" /> Target Molecule
                                                </h3>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {moleculesData.map((mol, idx) => (
                                                        <motion.div
                                                            key={mol.slug}
                                                            initial={{ opacity: 0, scale: 0.95 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.2 + (idx * 0.05) }}
                                                        >
                                                            <Link
                                                                href={`/molecules/${mol.slug}`}
                                                                className="group relative bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 flex items-center justify-between overflow-hidden"
                                                            >
                                                                <div className="relative z-10 flex items-center gap-4">
                                                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary-600 shadow-sm ring-1 ring-slate-100 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-500">
                                                                        <Dna size={18} />
                                                                    </div>
                                                                    <div className="font-black text-slate-800 text-sm">{mol.title}</div>
                                                                </div>
                                                                <ArrowRight size={16} className="text-primary-200 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
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
                            href="/facility"
                            className="relative px-5 py-2 text-sm font-bold text-slate-700 hover:text-primary-600 transition-colors group"
                        >
                            Facility
                            <motion.div className="absolute inset-0 bg-white rounded-full shadow-sm scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                        </Link>

                        <Link
                            href="/bioanalysis-pathology"
                            className="relative px-5 py-2 text-sm font-bold text-slate-700 hover:text-primary-600 transition-colors group"
                        >
                            Bioanalysis
                            <motion.div className="absolute inset-0 bg-white rounded-full shadow-sm scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/contact" className="px-8 py-3 rounded-full bg-primary-900 border border-primary-900 text-white font-bold text-sm shadow-lg shadow-primary-900/20 hover:bg-primary-800 hover:shadow-xl hover:shadow-primary-900/30 transition-all duration-300">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`lg:hidden p-3 rounded-2xl transition-colors ${isScrolled ? 'bg-primary-50 text-primary-900' : 'text-slate-600'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 lg:hidden p-4 pt-24"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <div className="relative bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-y-auto max-h-full flex flex-col p-8">
                            {/* Main Pages */}
                            <div className="grid grid-cols-1 gap-4 mb-10">
                                {['Home', 'About', 'Facility', 'Bioanalysis'].map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-3xl font-black text-slate-800 hover:text-primary-600 transition-colors py-1 block"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="h-px bg-slate-100 mb-10" />

                            {/* Services Section */}
                            <div className="flex-grow">
                                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-black text-primary-900 mb-8 block bg-primary-50 px-6 py-4 rounded-[2rem] flex items-center justify-between">
                                    Services Overview <ArrowRight size={20} />
                                </Link>

                                <div className="space-y-10 pl-2">
                                    <div>
                                        <h4 className="font-black text-slate-400 uppercase text-[0.65rem] tracking-[0.2em] mb-6 flex items-center">
                                            <span className="w-8 h-px bg-primary-100 mr-3" /> By Modality
                                        </h4>
                                        <div className="grid grid-cols-1 gap-2 border-l-2 border-primary-50 pl-5">
                                            {servicesData.slice(0, 6).map((s, idx) => (
                                                <motion.div
                                                    key={s.slug}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.35 + (idx * 0.03) }}
                                                >
                                                    <Link href={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold py-2 text-slate-600 hover:text-primary-600 flex items-center">
                                                        {s.title}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-black text-slate-400 uppercase text-[0.65rem] tracking-[0.2em] mb-6 flex items-center">
                                            <span className="w-8 h-px bg-secondary-100 mr-3" /> Target Molecule
                                        </h4>
                                        <div className="grid grid-cols-1 gap-2 border-l-2 border-secondary-50 pl-5">
                                            {moleculesData.map((m, idx) => (
                                                <motion.div
                                                    key={m.slug}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + (idx * 0.03) }}
                                                >
                                                    <Link href={`/molecules/${m.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold py-2 text-slate-600 hover:text-secondary-600 flex items-center">
                                                        {m.title}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="mt-12 pt-6 border-t border-slate-50"
                            >
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-6 bg-primary-900 text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-primary-900/30 active:scale-95 transition-transform">
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
