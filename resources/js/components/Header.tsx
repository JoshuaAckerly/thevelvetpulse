
import { Link } from '@inertiajs/react';
import { getLoginUrl } from '../env';

const Header = () => (
    <header className="bg-[#1a1a1a] px-6 py-6 text-white shadow-md">
        <div className="flex flex-col items-center max-w-6xl gap-4 mx-auto md:flex-row md:justify-between">
            <Link href="/" className="text-3xl font-bold text-[#6633ff] hover:text-[#7c4dff] transition-colors">
                The Velvet Pulse
            </Link>

            <nav className="flex flex-col items-center gap-2 text-sm md:flex-row md:gap-6 md:text-base">
                <Link href="/" className="transition hover:text-[#6633ff]">
                    Home
                </Link>
                <Link href="/music" className="transition hover:text-[#6633ff]">
                    Music
                </Link>
                <Link href="/tours" className="transition hover:text-[#6633ff]">
                    Tours
                </Link>
                <Link href="/merch" className="transition hover:text-[#6633ff]">
                    Merch
                </Link>
                <a href={getLoginUrl('thevelvetpulse')} className="transition hover:text-[#6633ff]">
                    Login
                </a>
            </nav>
        </div>
    </header>
);

export default Header;
