import React from 'react';
const cdn = import.meta.env.VITE_ASSET_URL;

const PromoSection: React.FC = () => (
    <div className="animate-in fade-in slide-in-from-bottom duration-700">
        <section className="relative z-10 mx-auto grid grid-cols-1 items-center text-white md:gap-8 lg:grid-cols-2">
            <div className="p-2">
                <div className="flex flex-col p-2 text-2xl md:flex-row">
                    <div className="m-2 rounded-2xl bg-[#333333] p-2">
                        <h1>Listen Now</h1>
                    </div>
                    <div className="m-2 rounded-2xl bg-[#333333] p-2">
                        <h1>Buy Tickets</h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 rounded-2xl bg-[#333333] md:grid-cols-2">
                    <div className="flex items-center justify-center p-2">
                        <img src={`${cdn}/AdobeStock_565842769.webp`} alt="Neon Dreams cover art" className="h-auto rounded-lg" />
                    </div>
                    <div className="flex items-center justify-center p-2">
                        <p>
                            Dive into the soul of indie rock with our latest single, <em>Neon Dreams</em>. Fuzzy guitars, punchy drums, and lyrics
                            you’ll hum all week long. Available now on all platforms.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
                <img src={`${cdn}/AdobeStock_1261974513.webp`} alt="Live show promo" className="w-xs rounded-lg" />
            </div>
        </section>
    </div>
);

export default PromoSection;
