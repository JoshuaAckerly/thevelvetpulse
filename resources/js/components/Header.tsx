import React from 'react';

const Header: React.FC = () => (
    <div className="animate-in fade-in slide-in-from-bottom duration-700">
        {/* Content */}

        <section className="bg-[#333333] text-white">
            <div className="container mx-auto p-2">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">The Velvet Pulse</div>
                    <nav className="space-x-4">
                        <a href="about" className="hover:text-[#6633ff]">
                            About Us
                        </a>
                        <a href="#announcements" className="hover:text-[#6633ff]">
                            Announcements
                        </a>
                        <a href="#signup" className="hover:text-[#6633ff]">
                            Newsletter Signup
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    </div>
);

export default Header;
