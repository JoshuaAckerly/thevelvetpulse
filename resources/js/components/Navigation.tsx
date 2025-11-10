import { Link } from '@inertiajs/react';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Tours', href: '/tours' },
    { name: 'About', href: '/about' },
];

export default function Navigation() {
    return (
        <nav className="flex space-x-8">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                    {item.name}
                </Link>
            ))}
        </nav>
    );
}