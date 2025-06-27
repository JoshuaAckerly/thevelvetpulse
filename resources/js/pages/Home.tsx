import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import PromoSection from '@/components/PromoSection';
import TourAnnouncements from '@/components/TourAnnouncements';
import React from 'react';

const Home: React.FC = () => {
    const cdn = import.meta.env.VITE_ASSET_URL;
    const backgroundImage = `url('${cdn}/AdobeStock_1423234483.webp')`;

    return (
        <>
            <Header />
            <div className="relative min-h-screen bg-cover bg-center backdrop-blur-md" style={{ backgroundImage }}>
                <div className="absolute inset-0 z-0 bg-black/50" />
                <Banner />
                <div className="relative z-10 space-y-8 px-2 md:px-40">
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
