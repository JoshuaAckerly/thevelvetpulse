import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Merch = () => {
    const merchandise = [
        {
            id: 1,
            name: 'Velvet Pulse T-Shirt',
            price: '$25.00',
            image: '/images/tshirt-placeholder.jpg',
            category: 'Apparel'
        },
        {
            id: 2,
            name: 'Latest Album - Vinyl',
            price: '$35.00',
            image: '/images/vinyl-placeholder.jpg',
            category: 'Music'
        },
        {
            id: 3,
            name: 'Band Hoodie',
            price: '$45.00',
            image: '/images/hoodie-placeholder.jpg',
            category: 'Apparel'
        },
        {
            id: 4,
            name: 'Tour Poster',
            price: '$15.00',
            image: '/images/poster-placeholder.jpg',
            category: 'Accessories'
        },
        {
            id: 5,
            name: 'Signed CD',
            price: '$20.00',
            image: '/images/cd-placeholder.jpg',
            category: 'Music'
        },
        {
            id: 6,
            name: 'Logo Sticker Pack',
            price: '$8.00',
            image: '/images/stickers-placeholder.jpg',
            category: 'Accessories'
        }
    ];

    return (
        <Layout title="Merchandise">
            <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen">
                <Container className="py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#6633ff] mb-4">
                            Merchandise
                        </h1>
                        <p className="text-xl text-gray-300">
                            Official Velvet Pulse gear
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {merchandise.map((item) => (
                            <div
                                key={item.id}
                                className="bg-zinc-800/50 rounded-lg overflow-hidden hover:bg-zinc-800/70 transition-colors"
                            >
                                <div className="aspect-square bg-zinc-700 flex items-center justify-center">
                                    <span className="text-gray-400 text-sm">{item.category}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{item.category}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-[#6633ff]">
                                            {item.price}
                                        </span>
                                        <button className="px-4 py-2 bg-[#6633ff] hover:bg-[#7c4dff] text-white rounded-lg font-semibold transition-colors">
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