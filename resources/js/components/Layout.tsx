import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
    title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <>
            <Head title={title} />
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
