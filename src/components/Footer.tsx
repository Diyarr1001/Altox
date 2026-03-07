import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 relative overflow-hidden">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

                    {/* Brand & Mission */}
                    <div className="lg:col-span-5">
                        <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-lg group-hover:bg-indigo-600 transition-colors duration-500">
                                AL
                            </div>
                            <span className="font-black text-2xl text-slate-900 tracking-tighter">Altox Labs</span>
                        </Link>
                        <p className="text-slate-500 text-lg leading-relaxed max-w-md mb-10">
                            Setting the standard in preclinical excellence. We provide precision toxicity assessments and innovative scientific solutions for the global life sciences industry.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
                                { icon: <Twitter size={20} />, label: 'Twitter' },
                                { icon: <Instagram size={20} />, label: 'Instagram' },
                                { icon: <Youtube size={20} />, label: 'YouTube' }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Company */}
                        <div>
                            <h4 className="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Platform</h4>
                            <ul className="space-y-4">
                                {['Home', 'About Us', 'Facility', 'Careers', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-600 hover:text-indigo-600 font-bold transition-colors flex items-center group">
                                            {item}
                                            <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Solutions</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Toxicology', path: '/services#toxicology' },
                                    { label: 'Bioanalysis', path: '/bioanalysis-pathology' },
                                    { label: 'Genetic Tox', path: '/services#genetic' },
                                    { label: 'In Vitro', path: '/services#in-vitro' },
                                    { label: 'Test Species', path: '/test-species' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.path} className="text-slate-600 hover:text-indigo-600 font-bold transition-colors flex items-center group">
                                            {item.label}
                                            <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-[0.65rem] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Location</h4>
                            <address className="not-italic space-y-6">
                                <div className="flex gap-3">
                                    <MapPin size={20} className="text-indigo-500 shrink-0 mt-1" />
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        Nande, Taluka: Mulshi,<br />
                                        Pune, Maharashtra<br />
                                        India – 412115
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <a href="mailto:altoxlabs@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 font-bold transition-colors group text-sm">
                                        <Mail size={18} className="text-indigo-400" />
                                        altoxlabs@gmail.com
                                    </a>
                                    <a href="tel:+919403136585" className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 font-bold transition-colors group text-sm">
                                        <Phone size={18} className="text-indigo-400" />
                                        +91 9403136585
                                    </a>
                                </div>
                            </address>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-xs tracking-widest uppercase">
                        <span>&copy; {currentYear} Altox Labs LLP</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                        <span className="text-slate-300">ISO 9001:2015</span>
                    </div>
                    <div className="flex gap-8 text-xs font-black text-slate-400 uppercase tracking-widest">
                        <Link href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-indigo-600 transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-indigo-600 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
