import React from 'react';

const Home: React.FC = () => {
    return (
        <>
            <section className="bg-[#333333] text-white">
                <div className="container mx-auto p-2">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold">The Velvet Pulse</div>
                        <nav className="space-x-4">
                            <a href="#tour" className="hover:text-[#6633ff]">
                                Tour
                            </a>
                            <a href="#announcements" className="hover:text-[#6633ff]">
                                Announcements
                            </a>
                            <a href="#signup" className="hover:text-[#6633ff]">
                                Newsletter Signup
                            </a>
                        </nav>
                    </div>
                </div>
            </section>

            <div className="relative min-h-screen bg-[url('/images/AdobeStock_1423234483.webp')] bg-cover bg-center">
                <div className="absolute inset-0 z-0 bg-black/50" />
                {/* Overlay and Content goes here */}
                <section className="relative z-10 flex items-center justify-center p-2">
                    <div className="bg-opacity-70 w-full max-w-xl rounded-lg bg-[#333333] p-2 text-center">
                        <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#6633ff] md:text-5xl">The Velvet Pulse</h1>
                    </div>
                </section>

                <div className="px-2 md:px-40">
                    <section className="relative z-10 mx-auto grid grid-cols-1 gap-2 p-2 text-white md:grid-cols-2 md:gap-8">
                        <div className="space-y-10">
                            <h2 className="text-xl font-semibold">TOUR</h2>
                            <p>New Orleans, LA: 10/13/25</p>
                            <p>Austin, TX: 10/18/25</p>
                            <p>Brooklyn, NY: 11/03/25</p>
                        </div>
                        <div className="space-y-10 md:text-right">
                            <h2 className="text-xl font-semibold">Latest Announcements</h2>
                            <p>New EP drops this Friday!</p>
                            <p>Merch restock coming soon.</p>
                            <p>Thank you for 10K followers!</p>
                            <div className="max-w-lg rounded-2xl bg-[#333333] p-2">
                                <h3 className="text-center text-5xl font-bold text-[#6633ff] md:text-4xl">Newsletter Signup</h3>
                            </div>
                        </div>
                    </section>

                    <section className="relative z-10 mx-auto grid grid-cols-1 items-center text-white md:gap-8 lg:grid-cols-2">
                        <div className="p-2">
                            <div className="flex flex-row p-2 text-2xl">
                                <div className="m-2 rounded-2xl bg-[#333333] p-2">
                                    <h1>Listen Now</h1>
                                </div>
                                <div className="m-2 rounded-2xl bg-[#333333] p-2">
                                    <h1>Buy Tickets</h1>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 rounded-2xl bg-[#333333] md:grid-cols-2">
                                <div className="flex items-center justify-center p-2">
                                    <img src="/images/AdobeStock_565842769.webp" alt="Featured Image" className="h-auto rounded-lg" />
                                </div>
                                <div className="flex items-center justify-center p-2">
                                    <p>
                                        Dive into the soul of indie rock with our latest single, *Neon Dreams*. Fuzzy guitars, punchy drums, and
                                        lyrics you’ll hum all week long. Available now on all platforms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col items-center justify-center p-2">
                                <img src="/images/AdobeStock_1261974513.webp" alt="Featured Image" className="w-xs rounded-lg" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;
