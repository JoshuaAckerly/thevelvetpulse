import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Banner from '@/components/Banner';
import Container from '@/components/Container';
import Newsletter from '@/components/Newsletter';
import Navigation from '@/components/Navigation';
import TourAnnouncements from '@/components/TourAnnouncements';
import Footer from '@/components/Footer';

// Mock Inertia Link
vi.mock('@inertiajs/react', () => ({
    Link: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
        <a href={href} className={className}>{children}</a>
    ),
}));

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
    Mail: () => <svg data-testid="mail-icon" />,
}));

// Mock env
vi.mock('../env', () => ({
    getLoginUrl: (project: string) => `https://${project}.example.com/login`,
}));

describe('Banner', () => {
    it('renders the band name heading', () => {
        render(<Banner />);
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Velvet Pulse');
    });

    it('has animation class', () => {
        const { container } = render(<Banner />);
        expect(container.firstChild).toHaveClass('animate-in');
    });
});

describe('Container', () => {
    it('renders children', () => {
        render(<Container><span>hello</span></Container>);
        expect(screen.getByText('hello')).toBeInTheDocument();
    });

    it('applies default max-width class', () => {
        const { container } = render(<Container><span /></Container>);
        expect(container.firstChild).toHaveClass('max-w-6xl');
    });

    it('merges additional className', () => {
        const { container } = render(<Container className="extra-class"><span /></Container>);
        expect(container.firstChild).toHaveClass('extra-class');
        expect(container.firstChild).toHaveClass('max-w-6xl');
    });
});

describe('Newsletter', () => {
    it('renders the newsletter signup heading', () => {
        render(<Newsletter />);
        expect(screen.getByText('Newsletter Signup')).toBeInTheDocument();
    });
});

describe('Navigation', () => {
    it('renders all navigation links', () => {
        render(<Navigation />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Music')).toBeInTheDocument();
        expect(screen.getByText('Tours')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
    });

    it('links have correct hrefs', () => {
        render(<Navigation />);
        expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
        expect(screen.getByText('Music').closest('a')).toHaveAttribute('href', '/music');
    });
});

describe('TourAnnouncements', () => {
    it('renders tour heading', () => {
        render(<TourAnnouncements />);
        expect(screen.getByText('TOUR')).toBeInTheDocument();
    });

    it('renders announcements heading', () => {
        render(<TourAnnouncements />);
        expect(screen.getByText('Latest Announcements')).toBeInTheDocument();
    });

    it('renders tour dates', () => {
        render(<TourAnnouncements />);
        expect(screen.getByText(/New Orleans/)).toBeInTheDocument();
        expect(screen.getByText(/Austin/)).toBeInTheDocument();
    });
});

describe('Footer', () => {
    it('renders the brand name', () => {
        render(<Footer />);
        expect(screen.getByText('The Velvet Pulse')).toBeInTheDocument();
    });

    it('renders copyright notice', () => {
        render(<Footer />);
        expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
    });

    it('renders legal links', () => {
        render(<Footer />);
        expect(screen.getByText('Terms of Service')).toBeInTheDocument();
        expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    });

    it('renders social links with accessible labels', () => {
        render(<Footer />);
        expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /spotify/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
    });
});
