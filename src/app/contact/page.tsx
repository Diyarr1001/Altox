'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, UploadCloud, CheckCircle2 } from 'lucide-react';

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
        <div className="w-full">
            {/* Page Header */}
            <section className="bg-primary-900 py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-4"
                    >
                        Contact Our Experts
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-primary-100 text-lg max-w-2xl mx-auto"
                    >
                        Reach out to discuss your preclinical study requirements, request a quote, or schedule a facility tour.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* Contact Details & Map */}
                        <div className="w-full lg:w-5/12">
                            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-50 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Global Headquarters & GLP Facility</h3>

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0 border border-primary-100">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">Address</h4>
                                            <p className="text-slate-600 leading-relaxed text-sm">
                                                Altox Labs LLP<br />
                                                M. No. 67, Nande, Taluka: Mulshi<br />
                                                District: Pune, Maharashtra – 412115<br />
                                                India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                                        <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0 border border-primary-100">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                                            <a href="tel:+919403136585" className="text-slate-600 hover:text-primary-600 transition text-sm">
                                                +91 9403136585
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 border-t border-slate-100 pt-6">
                                        <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0 border border-primary-100">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                                            <a href="mailto:altoxlabs@gmail.com" className="text-slate-600 hover:text-primary-600 transition text-sm">
                                                altoxlabs@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="bg-slate-200 rounded-3xl overflow-hidden h-[300px] border border-slate-200 shadow-inner block w-full relative">
                                {/* Simulated Google Map using an iframe to the coordinates or general Pune area */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1d121059.04711156075!2d73.78054815!3d18.524598599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                ></iframe>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="w-full lg:w-7/12" id="quote">
                            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Quote / Inquiry</h3>
                                <p className="text-slate-500 mb-8 font-medium">Please fill out the form below. Our scientific team will get back to you within 24 hours.</p>

                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-secondary-50 border border-secondary-200 rounded-2xl p-8 text-center"
                                    >
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm mx-auto mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted!</h4>
                                        <p className="text-slate-600 mb-6">Thank you for contacting Altox Labs. A representative will be in touch shortly.</p>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="px-6 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-white font-medium transition"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">First Name *</label>
                                                <input required name="firstName" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50 focus:bg-white" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Last Name *</label>
                                                <input required name="lastName" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50 focus:bg-white" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Corporate Email *</label>
                                                <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50 focus:bg-white" placeholder="john@company.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700">Phone</label>
                                                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50 focus:bg-white" placeholder="+1 (555) 000-0000" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Company / Organization *</label>
                                            <input required name="company" type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50 focus:bg-white" placeholder="Life Sciences Inc." />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Inquiry Type</label>
                                            <select name="type" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50 focus:bg-white appearance-none cursor-pointer">
                                                <option>Request for Proposal (RFP) / Quote</option>
                                                <option>General Inquiry</option>
                                                <option>Technical/Scientific Support</option>
                                                <option>Partnership Opportunities</option>
                                                <option>Careers</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700">Message / Study Details *</label>
                                            <textarea required name="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-slate-50 focus:bg-white resize-none" placeholder="Please provide details about your molecule, timeline, and required regulatory guidelines..."></textarea>
                                        </div>

                                        {/* File Upload Option */}
                                        <div className="pt-2">
                                            <div className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 hover:border-primary-400 transition cursor-pointer group">
                                                <UploadCloud size={32} className="mx-auto text-slate-400 group-hover:text-primary-500 mb-3 transition" />
                                                <p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
                                                <p className="text-xs text-slate-500 mt-1">Study protocols, Safety Data Sheets (SDS), or NDA (Max 10MB)</p>
                                            </div>
                                        </div>

                                        {/* Security & Consent */}
                                        <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                                            {/* Fake CAPTCHA */}
                                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between max-w-[300px]">
                                                <div className="flex items-center gap-3">
                                                    <input type="checkbox" required className="w-6 h-6 rounded border-slate-300 text-primary-600 focus:ring-primary-500 cursor-pointer" />
                                                    <span className="text-sm font-medium text-slate-700">I'm not a robot</span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1024px-RecaptchaLogo.svg.png" className="h-6 opacity-60" alt="reCAPTCHA" />
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 mt-2">
                                                <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 cursor-pointer" />
                                                <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                                                    I consent to the processing of my personal data by Altox Labs in accordance with the <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a> to handle my inquiry.
                                                </label>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 rounded-xl bg-primary-800 text-white font-bold text-lg hover:bg-primary-900 shadow-xl shadow-primary-800/20 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:transform-none disabled:cursor-not-allowed mt-4"
                                        >
                                            {isSubmitting ? (
                                                <>Processing...</>
                                            ) : (
                                                <>Send Inquiry <Send size={20} /></>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
