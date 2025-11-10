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
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}