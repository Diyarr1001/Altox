'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, UploadCloud, CheckCircle2, Activity } from 'lucide-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            company: formData.get('company'),
            type: formData.get('type'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full bg-white selection:bg-indigo-100 selection:text-indigo-900">
            {/* Page Header (Mesh Gradient) */}
            <section className="relative pt-40 pb-32 overflow-hidden bg-mesh">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-indigo-600 text-[0.7rem] font-black mb-10 tracking-[0.2em] uppercase"
                        >
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                            Direct Access
                        </motion.span>
                        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-tight text-balance">
                            Contact Our <span className="text-indigo-600">Experts.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-bold leading-relaxed max-w-3xl mx-auto">
                            Reach out to discuss your preclinical study requirements, request a quote, or schedule a facility tour.
                        </p>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 -left-1/4 w-[800px] h-[800px] bg-emerald-100/30 rounded-full blur-[150px] pointer-events-none"></div>
            </section>

            {/* Main Content */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-20">

                        {/* Contact Details & Map */}
                        <div className="w-full lg:w-5/12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-indigo-900/5 mb-10 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                                <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Global GLP Facility</h3>

                                <div className="space-y-10 relative z-10">
                                    {[
                                        {
                                            icon: <MapPin size={24} />,
                                            title: "Address",
                                            desc: <>Altox Labs LLP<br />M. No. 67, Nande, Taluka: Mulshi<br />Pune, Maharashtra – 412115, India</>
                                        },
                                        {
                                            icon: <Phone size={24} />,
                                            title: "Scientific Inquiry",
                                            desc: <a href="tel:+919403136585" className="hover:text-indigo-600 transition">+91 9403136585</a>
                                        },
                                        {
                                            icon: <Mail size={24} />,
                                            title: "Email",
                                            desc: <a href="mailto:altoxlabs@gmail.com" className="hover:text-indigo-600 transition">altoxlabs@gmail.com</a>
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-6 group/item">
                                            <div className="w-14 h-14 bg-white text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 shadow-sm group-hover/item:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-black text-slate-900 mb-2">{item.title}</h4>
                                                <div className="text-slate-500 leading-relaxed font-bold text-sm">
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Map Embed */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-slate-200 rounded-[3.5rem] overflow-hidden h-[450px] border border-slate-200 shadow-3xl block w-full relative group"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1d121059.04711156075!2d73.78054815!3d18.524598599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0 grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                            </motion.div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="w-full lg:w-7/12" id="quote">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-12 lg:p-16 rounded-[4rem] border border-slate-100 shadow-3xl shadow-indigo-900/5"
                            >
                                <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Request an Inquiry</h3>
                                <p className="text-slate-500 mb-12 font-bold opacity-80">Our scientific team will get back to you within 24 hours.</p>

                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-indigo-50 border border-indigo-100 rounded-[3rem] p-12 text-center"
                                    >
                                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-emerald-500 shadow-xl mx-auto mb-8">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h4 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h4>
                                        <p className="text-slate-500 font-bold mb-10">Thank you for contacting Altox Labs. A representative will be in touch shortly.</p>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="px-10 py-4 rounded-full bg-white text-indigo-600 font-black shadow-lg hover:shadow-xl transition-all duration-300"
                                        >
                                            New Inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest px-1">First Name</label>
                                                <input required name="firstName" type="text" className="w-full px-8 py-5 rounded-[1.5rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-bold" placeholder="Scientific" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest px-1">Last Name</label>
                                                <input required name="lastName" type="text" className="w-full px-8 py-5 rounded-[1.5rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-bold" placeholder="Expert" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest px-1">Corporate Email</label>
                                                <input required name="email" type="email" className="w-full px-8 py-5 rounded-[1.5rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-bold" placeholder="expert@company.com" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest px-1">Phone</label>
                                                <input type="tel" className="w-full px-8 py-5 rounded-[1.5rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-bold" placeholder="+91 0000 000 000" />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest px-1">Company / Organization</label>
                                            <input required name="company" type="text" className="w-full px-8 py-5 rounded-[1.5rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-bold" placeholder="Life Sciences Hub" />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest px-1">Inquiry Type</label>
                                            <div className="relative">
                                                <select name="type" className="w-full px-8 py-5 rounded-[1.5rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-bold appearance-none cursor-pointer">
                                                    <option>Request for Proposal (RFP) / Quote</option>
                                                    <option>General Inquiry</option>
                                                    <option>Technical/Scientific Support</option>
                                                    <option>Partnership Opportunities</option>
                                                    <option>Careers</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                    <Activity size={18} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[0.7rem] font-black text-slate-400 uppercase tracking-widest px-1">Message / Study Details</label>
                                            <textarea required name="message" rows={5} className="w-full px-8 py-6 rounded-[2rem] border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-500 outline-none transition-all duration-300 font-bold resize-none" placeholder="Provide details about your molecule, timeline, and required guidelines..."></textarea>
                                        </div>

                                        {/* File Upload Option */}
                                        <div className="pt-2">
                                            <div className="w-full border-2 border-dashed border-slate-200 rounded-[2rem] p-10 text-center hover:bg-slate-50 hover:border-indigo-500 transition-all duration-500 cursor-pointer group">
                                                <UploadCloud size={40} className="mx-auto text-slate-300 group-hover:text-indigo-600 mb-4 transition-colors" />
                                                <p className="text-sm font-black text-slate-700">Attach Document(s)</p>
                                                <p className="text-[0.65rem] text-slate-400 font-bold mt-2 uppercase tracking-wider">Protocols, SDS, or NDA (Max 10MB)</p>
                                            </div>
                                        </div>

                                        {/* Security & Consent */}
                                        <div className="pt-6 flex flex-col gap-6">
                                            <div className="flex items-start gap-4 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                                                <input required type="checkbox" id="consent" className="mt-1 w-5 h-5 rounded-lg border-slate-200 text-indigo-600 focus:ring-indigo-500 cursor-pointer" />
                                                <label htmlFor="consent" className="text-xs text-slate-500 font-bold leading-relaxed cursor-pointer select-none">
                                                    I consent to the processing of my personal data by Altox Labs in accordance with the <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a> to handle my inquiry.
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-6 rounded-full bg-indigo-600 text-white font-black text-xl hover:bg-indigo-700 shadow-2xl shadow-indigo-600/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed mt-4"
                                        >
                                            {isSubmitting ? (
                                                <>Processing...</>
                                            ) : (
                                                <>Send Inquiry <Send size={22} /></>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
