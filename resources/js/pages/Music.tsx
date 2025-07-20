import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const cdn = import.meta.env.VITE_ASSET_URL;

const Music: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center bg-[#111111] p-4 text-center text-white">
                <div>
                    <ul className="grid grid-cols-2 md:m-auto md:w-1/2 md:gap-4">
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src={`${cdn}/RetroVinylRecordArtPsychedelicGraphicDesignforFunkyAlbumCovers.webp`}
                                alt="Music 1"
                                className="mb-4 rounded-lg shadow-lg"
                            />
                        </li>
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src={`${cdn}/VintageoldblurreddustedabstractbackgroundWornmusicAlbumCoverwithRingwearSquareimage.EasytoaddasOverlayorScreenFilter.IdealperfectForposterflyerormusicalbumcoverdesign.webp`}
                                alt="Music 1"
                                className="mb-4 rounded-lg shadow-lg"
                            />
                        </li>
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src={`${cdn}/Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp`}
                                alt="Music 1"
                                className="mb-4 rounded-lg shadow-lg"
                            />
                        </li>
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src={`${cdn}/Abstractillustrationofalabyrinthmaze.Creativedigitalartbackground.Texturedwithsubtlelightnoiseanddust.Canbeusedasamusicalbumcoverdesign..webp`}
                                alt="Music 1"
                                className="mb-4 w-max rounded-lg shadow-lg"
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <div className="relative max-w-full">
                            <div>
                                <h2 className="relative z-10 bg-[#111111] text-3xl text-white">Our Music</h2>
                                <div className="absolute inset-0">
                                    <img
                                        src={`${cdn}/TourBusInteriorwithInstrumentsandStageEquipment copy.webp`}
                                        loading="lazy"
                                        alt="#"
                                        className="pointer-events-none h-full w-full object-cover opacity-80"
                                    />
                                </div>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div className="relative flex flex-col items-center justify-center p-6 md:flex-row md:items-start">
                                    <div className="relative z-10 m-auto w-1/2 rounded-2xl bg-[#111111] text-lg font-normal text-white opacity-80 md:w-full md:p-10">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur,
                                        nisi nisl aliquam enim, nec dictum urna elit nec urna. Mauris non erat vitae enim cursus dictum. Etiam
                                        euismod, justo at facilisis cursus, urna erat laoreet enim, nec dictum urna elit nec urna. Suspendisse
                                        potenti. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna elit nec urna.
                                        Mauris non erat vitae enim cursus dictum.
                                        <div className="">
                                            {' '}
                                            Etiam euismod, justo at facilisis cursus, urna erat laoreet enim, nec dictum urna elit nec urna.
                                            Suspendisse potenti. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna
                                            elit nec urna. Mauris non erat vitae enim cursus dictum. Etiam euismod, justo at facilisis cursus, urna
                                            erat laoreet enim, nec dictum urna elit nec urna. Suspendisse potenti. Sed euismod, urna eu tincidunt
                                            consectetur, nisi nisl aliquam enim, nec dictum urna elit nec urna. Mauris non erat vitae enim cursus
                                            dictum. Etiam euismod, justo at facilisis cursus, urna erat laoreet enim, nec dictum urna elit nec urna.
                                            Suspendisse potenti.
                                        </div>
                                    </div>
                                    <img
                                        src={`${cdn}/Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp`}
                                        alt="#"
                                        className="relative z-10 mx-auto my-auto flex p-6 md:w-1/3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <ul className="m-4 grid grid-cols-2 md:m-auto md:w-1/2 md:gap-4">
                            <li>
                                <img
                                    src={`${cdn}/Abstractillustrationofalabyrinthmaze.Creativedigitalartbackground.Texturedwithsubtlelightnoiseanddust.Canbeusedasamusicalbumcoverdesign..webp`}
                                    alt="Music 1"
                                    className="mt-2 rounded-lg p-2"
                                />
                            </li>
                            <li>
                                <img
                                    src={`${cdn}/eviltranscendencealbumcoversleekdigitalrenderforthealbumbeyondrealitiesstyle.generativeAI copy.webp`}
                                    alt="Music 2"
                                    className="mt-2 rounded-lg p-2"
                                />
                            </li>
                            <li>
                                <img
                                    src={`${cdn}/EnigmaticDeep-SeaCreatureBioluminescentFantasyFishwithGlowingEyeandPearl-likeSkin copy.webp`}
                                    alt="Music 3"
                                    className="rounded-lg p-2"
                                />
                            </li>
                            <li>
                                <img
                                    src={`${cdn}/VintageoldblurreddustedabstractbackgroundWornmusicAlbumCoverwithRingwearSquareimage.EasytoaddasOverlayorScreenFilter.IdealperfectForposterflyerormusicalbumcoverdesign.webp`}
                                    alt="Music 4"
                                    className="w-max rounded-lg p-2"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Music;
