import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Music = () => {
    const cdn = import.meta.env.VITE_ASSET_URL;
    
    const albums = [
        {
            title: 'Midnight Reverie',
            year: '2024',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tracks: 12,
            cover: `${cdn}/albums/RetroVinylRecordArtPsychedelicGraphicDesignforFunkyAlbumCovers.webp`
        },
        {
            title: 'Neon Dreams',
            year: '2023',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tracks: 10,
            cover: `${cdn}/albums/Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp`
        },
        {
            title: 'Electric Pulse',
            year: '2022',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            tracks: 14,
            cover: `${cdn}/albums/Abstractillustrationofalabyrinthmaze.Creativedigitalartbackground.Texturedwithsubtlelightnoiseanddust.Canbeusedasamusicalbumcoverdesign..webp`
        }
    ];

    return (
        <Layout title="Music">
            <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen">
                <Container className="py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#6633ff] mb-4">
                            Our Music
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, 
                            urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna elit nec urna.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {albums.map((album, index) => (
                            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="aspect-square bg-zinc-800 rounded-lg overflow-hidden">
                                        <img 
                                            src={album.cover} 
                                            alt={`${album.title} album cover`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <h2 className="text-3xl font-bold text-[#6633ff] mb-2">{album.title}</h2>
                                    <p className="text-gray-400 mb-4">{album.year} • {album.tracks} tracks</p>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        {album.description} Excepteur sint occaecat cupidatat non proident, 
                                        sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut 
                                        perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                    </p>
                                    <div className="flex gap-4">
                                        <button className="px-6 py-2 bg-[#6633ff] hover:bg-[#7c4dff] text-white rounded-lg font-semibold transition-colors">
                                            Listen Now
                                        </button>
                                        <button className="px-6 py-2 border border-[#6633ff] text-[#6633ff] hover:bg-[#6633ff] hover:text-white rounded-lg font-semibold transition-colors">
                                            View Tracks
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="text-3xl font-bold text-[#6633ff] mb-8">About Our Sound</h2>
                        <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="mb-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                                architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default Music;
