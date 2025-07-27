import React from 'react';

const Header: React.FC = () => (
    <header className="bg-[#1a1a1a] px-6 py-6 text-white shadow-md">
        <div className="flex flex-col items-center max-w-6xl gap-4 mx-auto md:flex-row md:justify-between">
            {/* Logo */}
            <div className="text-3xl font-bold text-[#6633ff]">The Velvet Pulse</div>

            {/* Navigation */}
            <nav className="flex flex-col items-center gap-2 text-sm md:flex-row md:gap-6 md:text-base">
                <a href="/" className="transition hover:text-[#6633ff]">
                    Home
                </a>
                <a href="/music" className="transition hover:text-[#6633ff]">
                    Music
                </a>
                <a href="/tourevents" className="transition hover:text-[#6633ff]">
                    Tour / Events
                </a>
                <a href="/shop" className="transition hover:text-[#6633ff]">
                    Shop'
                </a>

                <a href="#contact" className="transition hover:text-[#6633ff]">
                    Contact
                </a>
            </nav>
        </div>
    </header>
);

export default Header;
