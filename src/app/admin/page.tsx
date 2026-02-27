'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, Users, FileText, Settings,
    BarChart3, FlaskConical, Bell, Search,
    LogOut, ExternalLink, ShieldCheck, Database,
    MoreVertical, Mail, Building2, Calendar,
    CheckCircle2, Clock, Trash2, ChevronRight, X
} from 'lucide-react';
import Link from 'next/link';

interface Inquiry {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    type: string;
    message: string;
    timestamp: string;
    status: string;
}

export default function AdminDashboard() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchInquiries();
    }, []);

    const fetchInquiries = async () => {
        try {
            const res = await fetch('/api/contact');
            const data = await res.json();
            setInquiries(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Failed to fetch inquiries:', error);
        } finally {
            setLoading(false);
        }
    };

    const stats = [
        { label: 'Total Inquiries', value: inquiries.length.toString(), icon: <FileText className="text-blue-600" />, color: 'bg-blue-50' },
        { label: 'Pending Response', value: inquiries.filter(i => i.status === 'Pending').length.toString(), icon: <Clock className="text-amber-600" />, color: 'bg-amber-50' },
        { label: 'Growth', value: '+12%', icon: <BarChart3 className="text-emerald-600" />, color: 'bg-emerald-50' },
        { label: 'System Health', value: '100%', icon: <ShieldCheck className="text-purple-600" />, color: 'bg-purple-50' },
    ];

    const filteredInquiries = inquiries.filter(i =>
        i.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 flex font-sans">
            {/* Sidebar */}
            <aside className="w-72 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-0 h-screen">
                <div className="p-8 border-b border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200">
                        <FlaskConical size={20} className="text-secondary-400" />
                    </div>
                    <div>
                        <span className="font-black tracking-tighter text-2xl block leading-none">ALTOX</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Control Panel</span>
                    </div>
                </div>

                <nav className="flex-1 p-6 space-y-1 py-8">
                    {[
                        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
                        { icon: <FileText size={20} />, label: 'Inquiries', count: inquiries.length },
                        { icon: <Database size={20} />, label: 'Service Catalog' },
                        { icon: <Users size={20} />, label: 'Client Base' },
                        { icon: <Settings size={20} />, label: 'Settings' },
                    ].map((item, i) => (
                        <button
                            key={i}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all ${item.active
                                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                {item.label}
                            </div>
                            {item.count !== undefined && (
                                <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.active ? 'bg-secondary-500 text-slate-900' : 'bg-slate-100 text-slate-500'}`}>
                                    {item.count}
                                </span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-6 mt-auto">
                    <div className="bg-slate-900 rounded-2xl p-5 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-secondary-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Scientific Lead</p>
                        <p className="font-bold text-sm mb-3">Dr. Sarah Johnson</p>
                        <Link href="/login" className="flex items-center gap-2 text-xs font-bold text-secondary-400 hover:text-secondary-300 transition-colors">
                            <LogOut size={14} />
                            Sign Out
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
                    <div className="flex items-center gap-4 flex-1 max-w-2xl">
                        <div className="relative flex-1 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-900 transition-colors" size={18} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search by name, company, or email..."
                                className="w-full bg-slate-50 border-none rounded-2xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-slate-900 transition-all text-sm font-medium"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4 ml-8">
                        <button className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-white transition-all relative">
                            <Bell size={20} />
                            {inquiries.some(i => i.status === 'Pending') && (
                                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
                            )}
                        </button>
                        <Link href="/" target="_blank" className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:translate-y-[-2px] hover:shadow-lg transition-all">
                            Live Site <ExternalLink size={16} />
                        </Link>
                    </div>
                </header>

                <div className="p-8 space-y-8 pb-20">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900">Inquiry Dashboard</h1>
                            <p className="text-slate-500 font-medium">Manage and respond to incoming preclinical study requests.</p>
                        </div>
                        <div className="flex bg-white p-1 rounded-xl border border-slate-200">
                            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold">All</button>
                            <button className="px-4 py-2 text-slate-500 hover:text-slate-900 rounded-lg text-xs font-bold">Pending</button>
                            <button className="px-4 py-2 text-slate-500 hover:text-slate-900 rounded-lg text-xs font-bold">Responded</button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {stat.icon}
                                </div>
                                <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</h3>
                                <div className="flex items-end gap-2">
                                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Table Section */}
                    <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white sticky left-0">
                            <h2 className="text-xl font-bold flex items-center gap-3">
                                Recent Inquiries
                                {loading && <Clock className="animate-spin text-slate-400" size={16} />}
                            </h2>
                            <button onClick={fetchInquiries} className="text-xs font-bold text-blue-600 hover:underline">Refresh Data</button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-slate-50/50">
                                    <tr className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
                                        <th className="px-8 py-4">Client Name</th>
                                        <th className="px-4 py-4">Company</th>
                                        <th className="px-4 py-4">Interest</th>
                                        <th className="px-4 py-4">Date</th>
                                        <th className="px-4 py-4">Status</th>
                                        <th className="px-8 py-4 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {loading ? (
                                        <tr>
                                            <td colSpan={6} className="px-8 py-20 text-center text-slate-400">Loading inquiries...</td>
                                        </tr>
                                    ) : filteredInquiries.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} className="px-8 py-20 text-center text-slate-400">No inquiries found matching your search.</td>
                                        </tr>
                                    ) : (
                                        filteredInquiries.map((inquiry) => (
                                            <tr
                                                key={inquiry.id}
                                                className="group hover:bg-slate-50 transition-colors cursor-pointer"
                                                onClick={() => setSelectedInquiry(inquiry)}
                                            >
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                                            {inquiry.firstName[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900 group-hover:text-slate-900">{inquiry.firstName} {inquiry.lastName}</p>
                                                            <p className="text-xs text-slate-400">{inquiry.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-5 font-bold text-slate-600 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <Building2 size={14} className="text-slate-300" />
                                                        {inquiry.company}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-5">
                                                    <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-lg max-w-[150px] truncate block">
                                                        {inquiry.type}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-5 text-sm font-medium text-slate-400 italic">
                                                    {new Date(inquiry.timestamp).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-5">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 rounded-full ${inquiry.status === 'Pending' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                                                        <span className="text-xs font-bold text-slate-700">{inquiry.status}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5 text-right">
                                                    <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Inquiry Modal */}
                <AnimatePresence>
                    {selectedInquiry && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedInquiry(null)}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-screen w-full max-w-xl bg-white shadow-2xl z-[101] flex flex-col"
                            >
                                <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                                    <h2 className="text-2xl font-black">Inquiry Detail</h2>
                                    <button onClick={() => setSelectedInquiry(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                        <X size={24} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-8 space-y-10">
                                    {/* Header Section */}
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-3xl font-black text-secondary-400">
                                            {selectedInquiry.firstName[0]}
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-black">{selectedInquiry.firstName} {selectedInquiry.lastName}</h3>
                                            <p className="text-slate-400 font-bold flex items-center gap-2">
                                                <Building2 size={16} /> {selectedInquiry.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Info Grid */}
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Email</p>
                                            <p className="font-bold text-slate-800 break-all">{selectedInquiry.email}</p>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Type</p>
                                            <p className="font-bold text-slate-800">{selectedInquiry.type}</p>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Submitted</p>
                                            <p className="font-bold text-slate-800">{new Date(selectedInquiry.timestamp).toLocaleString()}</p>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Status</p>
                                            <span className="text-xs font-black px-3 py-1 bg-amber-100 text-amber-700 rounded-full">{selectedInquiry.status}</span>
                                        </div>
                                    </div>

                                    {/* Message Section */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-black flex items-center gap-2">
                                            <FileText size={20} className="text-slate-400" />
                                            Message Content
                                        </h4>
                                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 italic text-slate-700 leading-relaxed shadow-inner">
                                            "{selectedInquiry.message}"
                                        </div>
                                    </div>

                                    {/* Action History (Fake) */}
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-black flex items-center gap-2">
                                            <Clock size={20} className="text-slate-400" />
                                            Administrative Logs
                                        </h4>
                                        <div className="space-y-3">
                                            <div className="flex gap-4 items-start">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                                <p className="text-sm"><span className="font-bold">System:</span> Received through contact form web-portal.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex gap-4">
                                    <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:shadow-xl transition-all">
                                        Mark as Responded
                                        <CheckCircle2 size={20} />
                                    </button>
                                    <button className="p-4 bg-white border border-slate-200 text-red-500 rounded-2xl hover:bg-red-50 transition-colors">
                                        <Trash2 size={24} />
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}
