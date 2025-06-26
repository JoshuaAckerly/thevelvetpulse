import React from 'react';

const Header: React.FC = () => (
    <div className="animate-in fade-in slide-in-from-bottom duration-700">
        <section className="bg-[#333333] text-white">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col items-center justify-between md:flex-row md:items-center">
                    <div className="mb-4 text-3xl font-bold md:mb-0">The Velvet Pulse</div>
                    <nav className="flex flex-col items-center gap-2 text-center md:flex-row md:gap-6">
                        <a href="/" className="text-lg hover:text-[#6633ff]">
                            Home
                        </a>
                        <a href="/about" className="text-lg hover:text-[#6633ff]">
                            About Us
                        </a>
                        <a href="#announcements" className="text-lg hover:text-[#6633ff]">
                            Music
                        </a>
                        <a href="#signup" className="text-lg hover:text-[#6633ff]">
                            Tour / Events
                        </a>
                        <a href="#newsletter" className="text-lg hover:text-[#6633ff]">
                            Contact
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    </div>
);

export default Header;
