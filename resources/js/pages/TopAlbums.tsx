import React from 'react';

const albums = [
    {
        cover: '/images/RetroVinylRecordArtPsychedelicGraphicDesignforFunkyAlbumCovers.webp',
        title: 'Album Title',
        artist: 'Artist Name',
        releaseDate: 'YYYY-MM-DD',
    },
    {
        cover: '/images/VintageoldblurreddustedabstractbackgroundWornmusicAlbumCoverwithRingwearSquareimage.EasytoaddasOverlayorScreenFilter.IdealperfectForposterflyerormusicalbumcoverdesign.webp',
        title: 'Album Title',
        artist: 'Artist Name',
        releaseDate: 'YYYY-MM-DD',
    },
    {
        cover: '/images/Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp',
        title: 'Album Title',
        artist: 'Artist Name',
        releaseDate: 'YYYY-MM-DD',
    },
    {
        cover: '/images/Abstractillustrationofalabyrinthmaze.Creativedigitalartbackground.Texturedwithsubtlelightnoiseanddust.Canbeusedasamusicalbumcoverdesign..webp',
        title: 'Album Title',
        artist: 'Artist Name',
        releaseDate: 'YYYY-MM-DD',
    },
];

const TopAlbums: React.FC = () => {
    return (
        <div>
            <h1 className="sr-only">Top Albums</h1>
            {/* Add your album list or content here */}
            <section>
                <ul className="album-list grid grid-cols-2 gap-4">
                    {albums.map((album, idx) => (
                        <li className="album-item flex flex-col place-items-center" key={idx}>
                            <div className="album-cover relative m-2 flex h-auto w-40 items-center justify-center rounded-2xl p-2">
                                <img src={album.cover} alt="Album Cover" className="h-auto w-full" />
                                <div className="album-info bg-opacity-50 absolute inset-0 z-10 flex flex-col items-center justify-center bg-black text-center text-white opacity-0 transition-opacity hover:opacity-100">
                                    <h2 className="album-title">{album.title}</h2>
                                    <p className="album-artist">{album.artist}</p>
                                    <p className="album-release-date">Release Date: {album.releaseDate}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <div>
                    <img src="/images/TourBusInteriorwithInstrumentsandStageEquipment.webp" alt="Placeholder" className="placeholder-image" />
                    <div>
                        <div>
                            <h2>On Tour</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, urna erat dictum enim,
                                at cursus enim urna eu erat.
                            </p>
                        </div>
                        <div>
                            <img src="path/to/icon.png" alt="Icon" className="icon" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopAlbums;
