import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CalendarDays } from 'lucide-react'; // Optional: lucide-react icon
import React from 'react';

const TourEvents: React.FC = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-black via-zinc-900 to-black text-white">
            <Header />
            <main className="flex flex-grow flex-col items-center justify-center px-4 text-center">
                <div className="max-w-xl">
                    <div className="mb-6 flex justify-center">
                        <CalendarDays className="h-16 w-16 animate-pulse text-green-400" />
                    </div>
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">Tour Events Coming Soon</h1>
                    <p className="mb-6 text-lg text-zinc-300 md:text-xl">
                        We’re lining up venues and finalizing dates. Get ready for an unforgettable experience.
                    </p>
                    <p className="text-md text-zinc-400 md:text-lg">
                        Check back soon, or subscribe below to be the first to know when dates go live.
                    </p>
                    <form className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                        <button type="submit" className="rounded-lg bg-green-500 px-6 py-2 font-semibold text-black transition hover:bg-green-400">
                            Notify Me
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TourEvents;
