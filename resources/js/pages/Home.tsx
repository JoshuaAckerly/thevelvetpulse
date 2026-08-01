import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { useGSAP } from '@gsap/react';
import { Link } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { getProjectUrl } from '../env';

const Home = () => {
    const cdn = import.meta.env.VITE_ASSET_URL;
    const backgroundImage = `url('${cdn}/backgrounds/AdobeStock_1423234483.webp')`;
    const pageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Hero entrance stagger
        gsap.fromTo('.tvp-hero-title',
            { opacity: 0, y: -40, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo('.tvp-hero-sub',
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.85, ease: 'power2.out', delay: 0.25 }
        );
        gsap.fromTo('.tvp-hero-cta',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.45 }
        );
        // Scroll stagger on feature cards
        gsap.fromTo('.tvp-card',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.65, stagger: 0.15, ease: 'power2.out',
              scrollTrigger: { trigger: '.tvp-card', start: 'top 82%', once: true } }
        );
    }, { scope: pageRef });

    return (
        <Layout title="Welcome" description="Experience the electrifying sound of The Velvet Pulse — indie rock pushing boundaries. Latest music, tours, and merch.">
            <div ref={pageRef}>
            {/* Hero Section */}
            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#6633ff]/50 via-black/60 to-black/80" />
                <div className="relative z-10 flex min-h-screen items-center justify-center">
                    <Container>
                        <div className="text-center text-white">
                            <h1 className="tvp-hero-title animate-fade-in mb-6 text-5xl font-bold text-[#6633ff] md:text-7xl">The Velvet Pulse</h1>
                            <p className="tvp-hero-sub mx-auto mb-8 max-w-2xl text-xl text-gray-300 md:text-2xl">
                                Experience the electrifying sound that's captivating audiences worldwide
                            </p>
                            <div className="tvp-hero-cta flex flex-col justify-center gap-4 sm:flex-row">
                                <a
                                    href={getProjectUrl('thevelvetpulse')}
                                    className="rounded-lg bg-[#6633ff] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#7c4dff]"
                                >
                                    Listen Now
                                </a>
                                <Link
                                    href="/tours"
                                    className="rounded-lg border border-[#6633ff] px-8 py-3 font-semibold text-[#6633ff] transition-colors hover:bg-[#6633ff] hover:text-white"
                                >
                                    Tour Dates
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Featured Content */}
            <div className="bg-gradient-to-b from-black to-zinc-900 py-20 text-white">
                <Container>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="tvp-card text-center">
                            <h3 className="mb-4 text-2xl font-bold text-[#6633ff]">Latest Album</h3>
                            <p className="mb-4 text-gray-300">
                                Midnight Reverie - Our newest collection of electrifying tracks that push the boundaries of sound.
                            </p>
                            <Link href="/music" className="font-semibold text-[#6633ff] hover:text-[#7c4dff]">
                                Explore Music →
                            </Link>
                        </div>
                        <div className="tvp-card text-center">
                            <h3 className="mb-4 text-2xl font-bold text-[#6633ff]">Live Shows</h3>
                            <p className="mb-4 text-gray-300">
                                Join us on tour as we bring The Velvet Pulse experience to cities across the country.
                            </p>
                            <Link href="/tours" className="font-semibold text-[#6633ff] hover:text-[#7c4dff]">
                                View Dates →
                            </Link>
                        </div>
                        <div className="tvp-card text-center">
                            <h3 className="mb-4 text-2xl font-bold text-[#6633ff]">Merchandise</h3>
                            <p className="mb-4 text-gray-300">Get your official Velvet Pulse gear and show your support for the band.</p>
                            <Link href="/merch" className="font-semibold text-[#6633ff] hover:text-[#7c4dff]">
                                Shop Now →
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
            </div>
        </Layout>
    );
};

export default Home;
