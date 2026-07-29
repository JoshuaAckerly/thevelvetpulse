import { Head } from '@inertiajs/react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogType?: 'website' | 'article' | 'music.song' | 'music.album';
    ogImage?: string;
    canonicalUrl?: string;
}

const SITE_NAME = 'The Velvet Pulse';
const DEFAULT_DESCRIPTION =
    'Experience the electrifying sound of The Velvet Pulse — indie rock that pushes boundaries. Latest music, tour dates, and merch.';
const DEFAULT_KEYWORDS =
    'The Velvet Pulse, indie rock, live music, tour dates, merch, alternative rock';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export default function SEO({
    title,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    ogType = 'website',
    ogImage = DEFAULT_OG_IMAGE,
    canonicalUrl,
}: SEOProps) {
    const fullTitle = title ? `${title} - ${SITE_NAME}` : SITE_NAME;

    return (
        <Head>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={SITE_NAME} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        </Head>
    );
}
