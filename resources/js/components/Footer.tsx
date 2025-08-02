import React from 'react';
import { FaEnvelope, FaInstagram, FaSpotify } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="mt-12 bg-[#1a1a1a] px-6 py-8 text-white">
            <div className="flex flex-col items-center max-w-6xl gap-6 mx-auto text-center md:flex-row md:justify-between">
                {/* Logo / Tagline */}
                <div>
                    <h2 className="text-xl font-bold text-[#6633ff]">The Velvet Pulse</h2>
                    <p className="text-sm text-gray-400">Echoes of sound. Rhythm of soul.</p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-2 text-sm md:flex-row md:gap-6">
                    <a href="/" className="transition hover:text-[#6633ff]">
                        Home
                    </a>
                    <a href="/music" className="transition hover:text-[#6633ff]">
                        Music
                    </a>
                    <a href="#signup" className="transition hover:text-[#6633ff]">
                        Tour
                    </a>
                    <a href="#newsletter" className="transition hover:text-[#6633ff]">
                        Contact
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 text-lg">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6633ff]">
                        <FaInstagram />
                    </a>
                    <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#6633ff]">
                        <FaSpotify />
                    </a>
                    <a href="mailto:admin@graveyardjokes.com" className="hover:text-[#6633ff]">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Divider and Copyright */}
            <div className="pt-4 mt-6 text-xs text-center text-gray-500 border-t border-gray-700">
                &copy; {new Date().getFullYear()} Joshua Ackerly — The Velvet Pulse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
