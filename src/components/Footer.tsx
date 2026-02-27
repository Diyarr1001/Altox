import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900 opacity-20 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-900 opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Company Info */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                                AL
                            </div>
                            <div className="text-white">
                                <div className="font-extrabold text-xl leading-none">Altox Labs</div>
                                <div className="text-[0.6rem] tracking-widest text-secondary-400 font-semibold uppercase mt-1">Solutions through Sciences</div>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            Advancing safety and accelerating innovation with state-of-the-art GLP-ready facilities for global life science industries.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary-600 hover:text-white transition cursor-pointer">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary-600 hover:text-white transition cursor-pointer">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-4 bg-secondary-500 rounded-full"></div>
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> About Us</Link></li>
                            <li><Link href="/facility" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> Facility & Compliance</Link></li>
                            <li><Link href="/contact" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> Careers</Link></li>
                            <li><Link href="/privacy-policy" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-4 bg-secondary-500 rounded-full"></div>
                            Scientific Services
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/services#toxicology" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> General Toxicology</Link></li>
                            <li><Link href="/services#genetic" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> Genetic Toxicology</Link></li>
                            <li><Link href="/bioanalysis-pathology" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> Bioanalytical Testing</Link></li>
                            <li><Link href="/routes-of-administration" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> Routes of Admin</Link></li>
                            <li><Link href="/test-species" className="text-slate-400 hover:text-secondary-400 transition text-sm flex items-center gap-2 group"><ArrowRight size={14} className="text-slate-600 group-hover:text-secondary-400 transition-colors" /> Test Species</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                            <div className="w-1 h-4 bg-secondary-500 rounded-full"></div>
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-secondary-400 mt-0.5 shrink-0" />
                                <span className="text-slate-400 text-sm leading-relaxed">
                                    M. No. 67, Nande, Taluka: Mulshi<br />
                                    District: Pune, Maharashtra – 412115<br />
                                    India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-secondary-400 shrink-0" />
                                <a href="tel:+919403136585" className="text-slate-400 hover:text-secondary-400 transition text-sm">
                                    +91 9403136585
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-secondary-400 shrink-0" />
                                <a href="mailto:altoxlabs@gmail.com" className="text-slate-400 hover:text-secondary-400 transition text-sm">
                                    altoxlabs@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs text-center md:text-left">
                        &copy; {currentYear} Altox Labs LLP. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <Link href="/terms" className="hover:text-secondary-400 transition">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-secondary-400 transition">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
