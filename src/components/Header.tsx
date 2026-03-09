'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
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
            <header className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3' : 'bg-white border-transparent py-5'}`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
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

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700">
                        {['Home', 'About', 'Facility'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="relative group py-2 hover:text-primary-600 transition-colors"
                            >
                                {item}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                                />
                            </Link>
                        ))}

                        {/* Services Mega Menu */}
                        <div
                            className="relative group py-2"
                            onMouseEnter={() => setMegaMenuOpen(true)}
                            onMouseLeave={() => setMegaMenuOpen(false)}
                        >
                            <Link href="/services" className="flex items-center gap-1 hover:text-primary-600 transition focus:outline-none">
                                Services <ChevronDown size={14} className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                            </Link>

                            <AnimatePresence>
                                {megaMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className="absolute top-full -left-96 w-[1000px] pt-4"
                                    >
                                        <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-slate-100 p-8 grid grid-cols-12 gap-12 overflow-hidden ring-1 ring-black/5">

                                            {/* Column 1: By Services */}
                                            <div className="col-span-6">
                                                <h3 className="text-sm font-black text-primary-600 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">By Modality / Service</h3>
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                                    {servicesData.map((service, idx) => (
                                                        <motion.div
                                                            key={service.slug}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.03 }}
                                                        >
                                                            <Link
                                                                href={`/services/${service.slug}`}
                                                                className="text-sm text-slate-600 hover:text-primary-700 hover:bg-primary-50 px-3 py-2 rounded-xl transition-all duration-200 line-clamp-1 flex items-center group/item"
                                                                title={service.title}
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-200 mr-2 group-hover/item:bg-primary-500 transition-colors" />
                                                                {service.title}
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Column 2: By Molecule */}
                                            <div className="col-span-6 border-l border-slate-100 pl-8">
                                                <h3 className="text-sm font-black text-secondary-500 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">By Target Molecule</h3>
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                                    {moleculesData.map((mol, idx) => (
                                                        <motion.div
                                                            key={mol.slug}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.2 + (idx * 0.03) }}
                                                        >
                                                            <Link
                                                                href={`/molecules/${mol.slug}`}
                                                                className="text-sm text-slate-600 hover:text-secondary-600 hover:bg-secondary-50 px-3 py-2 rounded-xl transition-all duration-200 line-clamp-1 flex items-center group/item"
                                                                title={mol.title}
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-secondary-200 mr-2 group-hover/item:bg-secondary-500 transition-colors" />
                                                                {mol.title}
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

                        <Link href="/bioanalysis-pathology" className="relative group py-2 hover:text-primary-600 transition-colors">
                            Bioanalysis
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                            />
                        </Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/contact" className="px-6 py-2.5 rounded-full bg-primary-900 border border-primary-900 text-white font-bold hover:bg-primary-800 hover:shadow-lg hover:shadow-primary-900/20 transition-all duration-300">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-y-auto max-h-[85vh] shadow-2xl"
                    >
                        <div className="px-5 py-10 flex flex-col space-y-8">
                            {/* Main Pages */}
                            <div className="flex flex-col space-y-1">
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
                                            className="text-2xl font-black text-slate-800 hover:text-primary-600 transition-colors py-3 block border-b border-slate-50"
                                        >
                                            {item}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="h-px bg-slate-100" />

                            {/* Services Section */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-black text-primary-900 mb-6 block bg-primary-50 px-4 py-3 rounded-2xl">
                                    Services Overview
                                </Link>

                                <div className="space-y-8 pl-2">
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-[0.65rem] tracking-widest mb-4 flex items-center">
                                            <span className="w-8 h-px bg-slate-200 mr-3" /> By Modality
                                        </h4>
                                        <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-primary-100">
                                            {servicesData.map((s, idx) => (
                                                <motion.div
                                                    key={s.slug}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 + (idx * 0.02) }}
                                                >
                                                    <Link href={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-sm py-2 text-slate-600 flex items-center group">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-100 mr-3 group-hover:bg-primary-500 transition-colors" />
                                                        {s.title}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-[0.65rem] tracking-widest mb-4 flex items-center">
                                            <span className="w-8 h-px bg-slate-200 mr-3" /> By Molecule
                                        </h4>
                                        <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-secondary-100">
                                            {moleculesData.map((m, idx) => (
                                                <motion.div
                                                    key={m.slug}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + (idx * 0.02) }}
                                                >
                                                    <Link href={`/molecules/${m.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-sm py-2 text-slate-600 flex items-center group">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-100 mr-3 group-hover:bg-secondary-500 transition-colors" />
                                                        {m.title}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="pt-6"
                            >
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-5 bg-gradient-to-r from-primary-900 to-primary-800 text-white rounded-[2rem] font-bold text-lg shadow-xl shadow-primary-900/20 active:scale-95 transition-transform">
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
