import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import ServiceDetailClient from './ServiceDetailClient';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}

// Generate static params so Next.js pre-renders these pages at build time
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}
