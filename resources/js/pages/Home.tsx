import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import PromoSection from '@/components/PromoSection';
import TourAnnouncements from '@/components/TourAnnouncements';
import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <div className="relative min-h-screen bg-[url('/images/AdobeStock_1423234483.webp')] bg-cover bg-center backdrop-blur-md">
                <div className="absolute inset-0 z-0 bg-black/50" />
                <Banner />
                <div className="space-y-8 px-2 md:px-40">
                    <TourAnnouncements />
                    <Newsletter />
                    <PromoSection />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
