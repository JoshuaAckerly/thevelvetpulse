import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { Link } from '@inertiajs/react';

const Home = () => {
    const cdn = import.meta.env.VITE_ASSET_URL;
    const backgroundImage = `url('${cdn}/backgrounds/AdobeStock_1423234483.webp')`;

    return (
        <Layout title="Welcome">
            {/* Hero Section */}
            <div className="relative min-h-screen bg-center bg-cover" style={{ backgroundImage }}>
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <Container>
                        <div className="text-center text-white">
                            <h1 className="text-5xl md:text-7xl font-bold text-[#6633ff] mb-6 animate-fade-in">
                                The Velvet Pulse
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                Experience the electrifying sound that's captivating audiences worldwide
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    href="/music" 
                                    className="px-8 py-3 bg-[#6633ff] hover:bg-[#7c4dff] text-white rounded-lg font-semibold transition-colors"
                                >
                                    Listen Now
                                </Link>
                                <Link 
                                    href="/tours" 
                                    className="px-8 py-3 border border-[#6633ff] text-[#6633ff] hover:bg-[#6633ff] hover:text-white rounded-lg font-semibold transition-colors"
                                >
                                    Tour Dates
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Featured Content */}
            <div className="bg-gradient-to-b from-black to-zinc-900 text-white py-20">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#6633ff] mb-4">Latest Album</h3>
                            <p className="text-gray-300 mb-4">
                                Midnight Reverie - Our newest collection of electrifying tracks that push the boundaries of sound.
                            </p>
                            <Link href="/music" className="text-[#6633ff] hover:text-[#7c4dff] font-semibold">
                                Explore Music →
                            </Link>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#6633ff] mb-4">Live Shows</h3>
                            <p className="text-gray-300 mb-4">
                                Join us on tour as we bring The Velvet Pulse experience to cities across the country.
                            </p>
                            <Link href="/tours" className="text-[#6633ff] hover:text-[#7c4dff] font-semibold">
                                View Dates →
                            </Link>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#6633ff] mb-4">Merchandise</h3>
                            <p className="text-gray-300 mb-4">
                                Get your official Velvet Pulse gear and show your support for the band.
                            </p>
                            <Link href="/merch" className="text-[#6633ff] hover:text-[#7c4dff] font-semibold">
                                Shop Now →
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default Home;
