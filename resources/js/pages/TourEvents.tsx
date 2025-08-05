import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const TourEvents: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen text-white bg-gradient-to-b from-black via-zinc-900 to-black">
            <Header />
            <main className="flex flex-col items-center justify-center flex-grow px-4 text-center">
                <section className="mb-8">
                    <div></div>
                    <div>
                        <div></div>
                        <div>
                            <h1>Buy Tickets</h1>
                        </div>
                        <div></div>
                    </div>
                </section>
                <section className="mb-8"></section>
            </main>
            <Footer />
        </div>
    );
};

export default TourEvents;
