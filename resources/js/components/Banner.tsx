import React from 'react';

const Banner: React.FC = () => (
    <div className="animate-in fade-in slide-in-from-bottom duration-700">
        {/* Content */}

        <section className="relative z-10 flex items-center justify-center pt-8">
            <div className="bg-opacity-70 w-full max-w-xl rounded-lg bg-[#1a1a1a] p-2 text-center">
                <h1 className="text-4xl leading-tight font-bold tracking-tight text-[#6633ff] md:text-5xl">The Velvet Pulse</h1>
            </div>
        </section>
    </div>
);

export default Banner;
