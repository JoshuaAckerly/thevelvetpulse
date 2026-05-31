import NotificationBell from '@/components/NotificationBell';
import { useAppearance } from '@/hooks/use-appearance';
import { Link } from '@inertiajs/react';
import { Moon, Sun } from 'lucide-react';
import { getLoginUrl } from '../env';

const Header = () => {
    const { appearance, updateAppearance } = useAppearance();

    const isDark =
        appearance === 'dark' ||
        (appearance === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const toggleTheme = () => updateAppearance(isDark ? 'light' : 'dark');

    return (
        <header className="bg-[#1a1a1a] px-6 py-6 text-white shadow-md">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
                <Link href="/" className="text-3xl font-bold text-[#6633ff] transition-colors hover:text-[#7c4dff]">
                    The Velvet Pulse
                </Link>

                <nav className="flex flex-col items-center gap-2 text-sm md:flex-row md:gap-6 md:text-base" aria-label="Main navigation">
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
                    <button
                        onClick={toggleTheme}
                        className="rounded p-1 text-gray-300 transition-colors hover:text-white"
                        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
