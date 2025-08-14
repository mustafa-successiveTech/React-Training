'use client'
import dynamic from 'next/dynamic';

const AboutComponent = dynamic(() => import('@/app/components/AboutComponent'),{
    loading : () => <p>Loading About...</p>
});

export default function AboutPage() {
    return <AboutComponent />
}