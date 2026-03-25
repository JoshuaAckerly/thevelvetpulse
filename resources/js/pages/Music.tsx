import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Music = () => {
    const cdn = import.meta.env.VITE_ASSET_URL;

    const albums = [
        {
            title: 'Midnight Reverie',
            year: '2024',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            tracks: 12,
            cover: `${cdn}/albums/RetroVinylRecordArtPsychedelicGraphicDesignforFunkyAlbumCovers.webp`,
        },
        {
            title: 'Neon Dreams',
            year: '2023',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            tracks: 10,
            cover: `${cdn}/albums/Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp`,
        },
        {
            title: 'Electric Pulse',
            year: '2022',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            tracks: 14,
            cover: `${cdn}/albums/Abstractillustrationofalabyrinthmaze.Creativedigitalartbackground.Texturedwithsubtlelightnoiseanddust.Canbeusedasamusicalbumcoverdesign..webp`,
        },
    ];

    return (
        <Layout title="Music">
            <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
                <Container className="py-16">
                    <div className="mb-16 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-[#6633ff] md:text-6xl">Our Music</h1>
                        <p className="mx-auto max-w-2xl text-xl text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
                            aliquam enim, nec dictum urna elit nec urna.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {albums.map((album, index) => (
                            <div key={index} className="grid items-center gap-8 md:grid-cols-2">
                                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <div className="aspect-square overflow-hidden rounded-lg bg-zinc-800">
                                        <img src={album.cover} alt={`${album.title} album cover`} className="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <h2 className="mb-2 text-3xl font-bold text-[#6633ff]">{album.title}</h2>
                                    <p className="mb-4 text-gray-400">
                                        {album.year} • {album.tracks} tracks
                                    </p>
                                    <p className="mb-6 leading-relaxed text-gray-300">
                                        {album.description} Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                    </p>
                                    <div className="flex gap-4">
                                        <button className="rounded-lg bg-[#6633ff] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#7c4dff]">
                                            Listen Now
                                        </button>
                                        <button className="rounded-lg border border-[#6633ff] px-6 py-2 font-semibold text-[#6633ff] transition-colors hover:bg-[#6633ff] hover:text-white">
                                            View Tracks
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="mb-8 text-3xl font-bold text-[#6633ff]">About Our Sound</h2>
                        <div className="mx-auto max-w-4xl leading-relaxed text-gray-300">
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="mb-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default Music;
