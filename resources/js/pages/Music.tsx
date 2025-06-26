import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Music: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#111111] px-4 py-24 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold text-[#6633ff] md:text-5xl">Coming Soon</h1>
                <p className="max-w-xl text-lg text-gray-400">
                    We’re tuning up our tracks. Check back soon for new releases, exclusive content, and more from The Velvet Pulse.
                </p>
            </main>
            <Footer />
        </>
    );
};

export default Music;
