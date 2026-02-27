import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { ShieldCheck, Cross, Dna, Activity, Eye, Sprout, TestTube, Crosshair, Droplet, ArrowRight, Zap, Target, Leaf, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

// Helper to map string to icon
const IconMap: Record<string, any> = {
    ShieldCheck, Cross, Dna, Activity, Eye, Sprout, TestTube, Crosshair, Droplet, Zap, Target, Leaf
};

// Generate static params so Next.js pre-renders these pages at build time
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const IconComponent = IconMap[service.icon] || Activity;

    return (
        <div className="w-full bg-slate-50 min-h-screen pb-24">
            {/* Dynamic Hero */}
            <section className="relative pt-32 pb-40 lg:pt-48 lg:pb-52 overflow-hidden bg-slate-900 border-b-[8px] border-primary-500">
                <div className="absolute inset-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-primary-950/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-4 rounded-full bg-secondary-500/20 text-secondary-300 font-bold tracking-widest uppercase text-sm mb-6 border border-secondary-500/30">
                            Pivotal Testing Service
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 drop-shadow-lg tracking-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-slate-200 font-light leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Body */}
            <section className="container mx-auto px-4 relative z-20 -mt-20">
                <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-slate-100 flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Descriptions */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shadow-inner border border-primary-100">
                                <IconComponent size={32} />
                            </div>
                            <h2 className="text-3xl font-extrabold text-slate-900">Assay Overview</h2>
                        </div>
                        <div className="prose prose-lg text-slate-600 leading-relaxed mb-12">
                            <p>{service.fullDescription}</p>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Regulatory Capabilities</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <CheckCircle2 className="text-secondary-500 shrink-0 mt-0.5" size={20} />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-primary-900 text-white rounded-3xl p-8 shadow-xl mb-8 relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-500 rounded-full blur-[60px] opacity-30"></div>
                            <h3 className="text-xl font-bold mb-6 relative z-10">Common Applications</h3>
                            <ul className="space-y-4 relative z-10">
                                {service.applications.map((app, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-secondary-400"></div>
                                        <span className="text-primary-100">{app}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link href="/contact" className="w-full flex items-center justify-center gap-2 py-4 bg-white border-2 border-primary-600 text-primary-700 font-extrabold rounded-2xl hover:bg-primary-600 hover:text-white transition-colors group">
                            Request Quote for this Study <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
}
