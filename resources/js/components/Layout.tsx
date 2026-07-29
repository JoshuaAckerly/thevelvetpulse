import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
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
                <Header />
                <main id="main-content" className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}
