import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const Music: React.FC = () => {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center bg-[#111111] p-4 text-center text-white">
                <div>
                    <ul className="grid grid-cols-2">
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src="/images/RetroVinylRecordArtPsychedelicGraphicDesignforFunkyAlbumCovers.webp"
                                alt="Music 1"
                                className="mb-4 rounded-lg shadow-lg"
                            />
                        </li>
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src="/images/VintageoldblurreddustedabstractbackgroundWornmusicAlbumCoverwithRingwearSquareimage.EasytoaddasOverlayorScreenFilter.IdealperfectForposterflyerormusicalbumcoverdesign.webp"
                                alt="Music 1"
                                className="mb-4 rounded-lg shadow-lg"
                            />
                        </li>
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src="/images/Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp"
                                alt="Music 1"
                                className="mb-4 rounded-lg shadow-lg"
                            />
                        </li>
                        <li className="col-span-2 flex w-full justify-center sm:col-span-1">
                            <img
                                src="/images/Abstractillustrationofalabyrinthmaze.Creativedigitalartbackground.Texturedwithsubtlelightnoiseanddust.Canbeusedasamusicalbumcoverdesign..webp"
                                alt="Music 1"
                                className="mb-4 w-max rounded-lg shadow-lg"
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h2 className="text-3xl text-white">On Tour</h2>
                        <div className="relative max-w-full">
                            <div className="absolute inset-0">
                                <img
                                    src="/images/TourBusInteriorwithInstrumentsandStageEquipment copy.webp"
                                    loading="lazy"
                                    alt="#"
                                    className="pointer-events-none h-full w-full object-cover opacity-80"
                                />
                            </div>
                            <div>
                                <p className="relative z-10 mt-4 max-w-3xl text-lg leading-relaxed font-normal text-white">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi
                                    nisl aliquam enim, nec dictum urna elit nec urna. Mauris non erat vitae enim cursus dictum. Etiam euismod, justo
                                    at facilisis cursus, urna erat laoreet enim, nec dictum urna elit nec urna. Suspendisse potenti. Sed euismod, urna
                                    eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna elit nec urna. Mauris non erat vitae enim cursus
                                    dictum. Etiam euismod, justo at facilisis cursus, urna erat laoreet enim, nec dictum urna elit nec urna.
                                    Suspendisse potenti. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna elit nec
                                    urna. Mauris non erat vitae enim cursus dictum. Etiam euismod, justo at facilisis cursus, urna erat laoreet enim,
                                    nec dictum urna elit nec urna. Suspendisse potenti. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam
                                    enim, nec dictum urna elit nec urna. Mauris non erat vitae enim cursus dictum. Etiam euismod, justo at facilisis
                                    cursus, urna erat laoreet enim, nec dictum urna elit nec urna. Suspendisse potenti.
                                </p>
                                <img
                                    src="/images/Mandreamsofahousebytheseaatsunsetsurrealartforalbumcoverposterorbookillustration.webp"
                                    alt="#"
                                    className="relative z-10 mx-auto p-6 opacity-80"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Music;
