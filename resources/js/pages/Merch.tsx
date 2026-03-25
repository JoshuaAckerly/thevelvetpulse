import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Merch = () => {
    const merchandise = [
        {
            id: 1,
            name: 'Velvet Pulse T-Shirt',
            price: '$25.00',
            image: '/images/tshirt-placeholder.jpg',
            category: 'Apparel',
        },
        {
            id: 2,
            name: 'Latest Album - Vinyl',
            price: '$35.00',
            image: '/images/vinyl-placeholder.jpg',
            category: 'Music',
        },
        {
            id: 3,
            name: 'Band Hoodie',
            price: '$45.00',
            image: '/images/hoodie-placeholder.jpg',
            category: 'Apparel',
        },
        {
            id: 4,
            name: 'Tour Poster',
            price: '$15.00',
            image: '/images/poster-placeholder.jpg',
            category: 'Accessories',
        },
        {
            id: 5,
            name: 'Signed CD',
            price: '$20.00',
            image: '/images/cd-placeholder.jpg',
            category: 'Music',
        },
        {
            id: 6,
            name: 'Logo Sticker Pack',
            price: '$8.00',
            image: '/images/stickers-placeholder.jpg',
            category: 'Accessories',
        },
    ];

    return (
        <Layout title="Merchandise">
            <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
                <Container className="py-16">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-[#6633ff] md:text-6xl">Merchandise</h1>
                        <p className="text-xl text-gray-300">Official Velvet Pulse gear</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {merchandise.map((item) => (
                            <div key={item.id} className="overflow-hidden rounded-lg bg-zinc-800/50 transition-colors hover:bg-zinc-800/70">
                                <div className="flex aspect-square items-center justify-center bg-zinc-700">
                                    <span className="text-sm text-gray-400">{item.category}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold">{item.name}</h3>
                                    <p className="mb-4 text-sm text-gray-400">{item.category}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-[#6633ff]">{item.price}</span>
                                        <button className="rounded-lg bg-[#6633ff] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#7c4dff]">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default Merch;
