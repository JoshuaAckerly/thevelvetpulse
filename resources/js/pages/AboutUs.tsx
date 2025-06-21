import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <section className="bg-[#1c1c1c] px-4 py-16 text-white">
            <div className="mx-auto max-w-6xl text-center">
                <h2 className="mb-6 text-4xl font-extrabold underline decoration-[#6633ff] underline-offset-8">About Us</h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#cccccc] md:text-xl">
                    We’re a group of passionate musicians who live for the stage. From sweat-soaked clubs to festival lights, our journey has been
                    loud, raw, and real. Driven by rhythm and rebellion, we’re here to move your heart—and your feet.
                </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2">
                {/* Top-right image with text below */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <img src="/images/Girlband.webp" alt="Band taking selfie" className="h-auto w-full object-cover" />
                    </div>
                    <p className="max-w-md text-center text-sm text-[#cccccc]">
                        Behind every photo is a story of late-night jams and shared dreams. We’re not just a band— we’re a family, and this is our
                        pulse.
                    </p>
                </div>

                {/* Bottom-left image with text below */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                        <img
                            src="/images/Groupofyoungfriendsdoingsportstrainingatgymindoors.Maintainingsportivelifestyle copy.webp"
                            alt="Band live performance"
                            className="h-auto w-full object-cover"
                        />
                    </div>
                    <p className="max-w-md text-center text-sm text-[#cccccc]">
                        Whether we're smashing drums or shredding chords, the stage is our sanctuary. Come see us live and feel the energy for
                        yourself.
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#cccccc] md:text-lg">
                        What started as a garage jam between close friends has grown into a full-fledged movement. Bound by a love of gritty riffs and
                        honest lyrics, we write songs that speak to both struggle and triumph.
                    </p>
                    <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
                        {[
                            { name: 'Jay', role: 'Lead Vocals / Guitar', img: '/images/jay.webp' },
                            { name: 'Rhea', role: 'Drums / Backing Vocals', img: '/images/rhea.webp' },
                            { name: 'Zane', role: 'Bass Guitar / Synth', img: '/images/zane.webp' },
                        ].map((member) => (
                            <div key={member.name} className="flex flex-col items-center space-y-3">
                                {/* <img src={member.img} alt={member.name} className="h-40 w-40 rounded-full object-cover shadow-md" /> */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                    <p className="text-sm text-[#aaaaaa]">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
