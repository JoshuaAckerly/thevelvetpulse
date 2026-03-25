import NotificationBell from '@/components/NotificationBell';
import { Link } from '@inertiajs/react';
import { getLoginUrl } from '../env';

const Header = () => (
    <header className="bg-[#1a1a1a] px-6 py-6 text-white shadow-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
            <Link href="/" className="text-3xl font-bold text-[#6633ff] transition-colors hover:text-[#7c4dff]">
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
                <NotificationBell />
            </nav>
        </div>
    </header>
);

export default Header;
