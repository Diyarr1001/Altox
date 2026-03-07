'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight, Youtube, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: ['Home', 'About Us', 'Facility', 'Careers', 'Contact'],
        solutions: [
            { label: 'Toxicology', path: '/services#toxicology' },
            { label: 'Bioanalysis', path: '/bioanalysis-pathology' },
            { label: 'Genetic Tox', path: '/services#genetic' },
            { label: 'In Vitro', path: '/services#in-vitro' },
            { label: 'Test Species', path: '/test-species' }
        ]
    };

    return (
        <footer className="bg-white border-t border-slate-200/60 pt-32 pb-16 relative overflow-hidden">
            {/* Architectural Background Detail */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="container mx-auto px-8 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">

                    {/* Brand & Mission - High Impact */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-4 mb-10 group">
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black text-xl group-hover:bg-indigo-600 transition-colors duration-500 shadow-xl shadow-slate-900/10"
                            >
                                AL
                            </motion.div>
                            <span className="font-black text-3xl text-slate-950 tracking-tighter">Altox Labs</span>
                        </Link>
                        <p className="text-slate-500 text-xl leading-relaxed max-w-md mb-12 font-medium">
                            The benchmark in preclinical research. Delivering precision, integrity, and scientific innovation for the global pharmaceutical landscape.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Linkedin size={22} />, label: 'LinkedIn' },
                                { icon: <Twitter size={22} />, label: 'Twitter' },
                                { icon: <Instagram size={22} />, label: 'Instagram' },
                                { icon: <Youtube size={22} />, label: 'YouTube' }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href="#"
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <span className="transition-transform duration-500 group-hover:scale-110">{social.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns - Structured & Clean */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
                        {/* Platform */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-[0.7rem] font-black text-indigo-600 uppercase tracking-[0.3em] mb-10">Platform</h4>
                            <ul className="space-y-6">
                                {footerLinks.platform.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                                            className="text-slate-600 hover:text-indigo-600 font-black text-lg transition-all duration-300 flex items-center group"
                                        >
                                            <span className="relative overflow-hidden">
                                                {item}
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                            </span>
                                            <ArrowUpRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Solutions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-[0.7rem] font-black text-emerald-600 uppercase tracking-[0.3em] mb-10">Solutions</h4>
                            <ul className="space-y-6">
                                {footerLinks.solutions.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.path}
                                            className="text-slate-600 hover:text-emerald-600 font-black text-lg transition-all duration-300 flex items-center group"
                                        >
                                            <span className="relative overflow-hidden">
                                                {item.label}
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                            </span>
                                            <ArrowUpRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Location & Contact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="col-span-2 md:col-span-1"
                        >
                            <h4 className="text-[0.7rem] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Headquarters</h4>
                            <address className="not-italic space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-500 shrink-0 border border-slate-100">
                                        <MapPin size={20} />
                                    </div>
                                    <p className="text-slate-500 text-lg leading-relaxed font-bold">
                                        Nande, Mulshi,<br />
                                        Pune, Maharashtra<br />
                                        India – 412115
                                    </p>
                                </div>
                                <div className="space-y-5">
                                    <a href="mailto:altoxlabs@gmail.com" className="flex items-center gap-4 text-slate-800 hover:text-indigo-600 font-black transition-all group lg:text-lg">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <Mail size={18} />
                                        </div>
                                        altoxlabs@gmail.com
                                    </a>
                                    <a href="tel:+919403136585" className="flex items-center gap-4 text-slate-800 hover:text-indigo-600 font-black transition-all group lg:text-lg">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <Phone size={18} />
                                        </div>
                                        +91 9403136585
                                    </a>
                                </div>
                            </address>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Architectural Bar */}
                <div className="pt-12 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4 text-slate-400 font-black text-xs tracking-widest uppercase">
                        <span>&copy; {currentYear} Altox Labs LLP</span>
                        <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                        <span className="text-indigo-400/60">GLP & ISO 9001 Recognized</span>
                    </div>
                    <div className="flex gap-10 text-[0.65rem] font-black text-slate-500 uppercase tracking-[0.25em]">
                        {['Privacy', 'Terms', 'Compliance'].map(item => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-indigo-600 transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Visual Flair */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px]"></div>
        </footer>
    );
}
