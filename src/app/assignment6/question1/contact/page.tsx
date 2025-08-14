'use client'
import dynamic from 'next/dynamic';

const ContactComponent = dynamic(() => import('@/app/components/ContactComponent'),{
    loading: () => <p>Contact Components</p>
});

export default function ContactPage() {
    return <ContactComponent />
}