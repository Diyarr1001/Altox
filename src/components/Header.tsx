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
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-800 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                            AL
                        </div>
                        <div>
                            <div className="font-extrabold text-xl md:text-2xl text-primary-900 leading-none">Altox Labs</div>
                            <div className="text-[0.65rem] tracking-widest text-primary-600 font-semibold uppercase mt-1">Solutions through Sciences</div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 font-medium text-slate-700">
                        <Link href="/" className="hover:text-primary-600 transition">Home</Link>
                        <Link href="/about" className="hover:text-primary-600 transition">About</Link>
                        <Link href="/facility" className="hover:text-primary-600 transition">Facility</Link>

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
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full -left-96 w-[1000px] pt-4"
                                    >
                                        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 grid grid-cols-12 gap-12">

                                            {/* Column 1: By Services */}
                                            <div className="col-span-6">
                                                <h3 className="text-sm font-black text-primary-600 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">By Modality / Service</h3>
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                                    {servicesData.map((service) => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/services/${service.slug}`}
                                                            className="text-sm text-slate-600 hover:text-primary-700 hover:bg-slate-50 px-2 py-1.5 rounded-md transition duration-200 line-clamp-1"
                                                            title={service.title}
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Column 2: By Molecule */}
                                            <div className="col-span-6 border-l border-slate-100 pl-8">
                                                <h3 className="text-sm font-black text-secondary-500 uppercase tracking-widest mb-6 border-b border-slate-100 pb-3">By Target Molecule</h3>
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                                    {moleculesData.map((mol) => (
                                                        <Link
                                                            key={mol.slug}
                                                            href={`/molecules/${mol.slug}`}
                                                            className="text-sm text-slate-600 hover:text-secondary-600 hover:bg-slate-50 px-2 py-1.5 rounded-md transition duration-200 line-clamp-1"
                                                            title={mol.title}
                                                        >
                                                            {mol.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/bioanalysis-pathology" className="hover:text-primary-600 transition">Bioanalysis</Link>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact" className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 font-medium hover:border-primary-600 hover:text-primary-600 transition">
                            Contact
                        </Link>
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-b border-slate-200 overflow-y-auto max-h-[80vh]"
                    >
                        <div className="px-4 py-8 flex flex-col space-y-6">
                            {/* Main Pages */}
                            <div className="flex flex-col space-y-4">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary-600 transition">Home</Link>
                                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary-600 transition">About</Link>
                                <Link href="/facility" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary-600 transition">Facility</Link>
                                <Link href="/bioanalysis-pathology" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-slate-700 hover:text-primary-600 transition">Bioanalysis</Link>
                            </div>

                            <div className="h-px bg-slate-100" />

                            {/* Services Section */}
                            <div>
                                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-xl font-black text-primary-900 mb-4 block">Services Overview</Link>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-[0.65rem] tracking-widest mb-3">By Modality</h4>
                                        <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-primary-100">
                                            {servicesData.map(s => (
                                                <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 text-slate-600 hover:text-primary-600">{s.title}</Link>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-400 uppercase text-[0.65rem] tracking-widest mb-3 border-t border-slate-50 pt-4">By Target Molecule</h4>
                                        <div className="grid grid-cols-1 gap-2 pl-4 border-l-2 border-secondary-100">
                                            {moleculesData.map(m => (
                                                <Link key={m.slug} href={`/molecules/${m.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 text-slate-600 hover:text-secondary-600">{m.title}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-4 bg-primary-900 text-white rounded-2xl font-bold shadow-lg shadow-primary-900/20">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
