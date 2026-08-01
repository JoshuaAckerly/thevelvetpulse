import { Head, router } from '@inertiajs/react';
import gsap from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';
import Footer from './Footer';
import Header from './Header';
import SEO from './SEO';

interface LayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
    canonicalUrl?: string;
}

export default function Layout({ children, title, description, keywords, ogImage, canonicalUrl }: LayoutProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const off1 = router.on('before', () => {
            if (overlayRef.current) gsap.fromTo(overlayRef.current, { opacity: 0, pointerEvents: 'none' }, { opacity: 1, pointerEvents: 'all', duration: 0.3, ease: 'power1.in' });
        });
        const off2 = router.on('finish', () => {
            if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.4, ease: 'power2.out', delay: 0.05 });
        });
        return () => { off1(); off2(); };
    }, []);
    return (
        <>
            <SEO
                title={title}
                description={description}
                keywords={keywords}
                ogImage={ogImage}
                canonicalUrl={canonicalUrl}
            />
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[#6633ff] focus:px-4 focus:py-2 focus:text-white focus:outline-none"
            >
                Skip to main content
            </a>
            <div className="flex min-h-screen flex-col">
                <div ref={overlayRef} className="pointer-events-none fixed inset-0 z-[9999] bg-black opacity-0" aria-hidden="true" />
                <Header />
                <main id="main-content" className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
