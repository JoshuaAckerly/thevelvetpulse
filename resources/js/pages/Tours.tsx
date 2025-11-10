import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Tours = () => {
    const tourDates = [
        {
            date: '2024-03-15',
            venue: 'Madison Square Garden',
            city: 'New York, NY',
            status: 'On Sale'
        },
        {
            date: '2024-03-18',
            venue: 'The Forum',
            city: 'Los Angeles, CA',
            status: 'Sold Out'
        },
        {
            date: '2024-03-22',
            venue: 'United Center',
            city: 'Chicago, IL',
            status: 'On Sale'
        },
        {
            date: '2024-03-25',
            venue: 'Red Rocks Amphitheatre',
            city: 'Morrison, CO',
            status: 'On Sale'
        }
    ];

    return (
        <Layout title="Tours">
            <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen">
                <Container className="py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#6633ff] mb-4">
                            Tour Dates
                        </h1>
                        <p className="text-xl text-gray-300">
                            Experience The Velvet Pulse live
                        </p>
                    </div>

                    <div className="space-y-4">
                        {tourDates.map((tour, index) => (
                            <div
                                key={index}
                                className="bg-zinc-800/50 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-zinc-800/70 transition-colors"
                            >
                                <div className="flex-1">
                                    <div className="text-lg font-semibold text-[#6633ff]">
                                        {new Date(tour.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                    <div className="text-xl font-bold">{tour.venue}</div>
                                    <div className="text-gray-400">{tour.city}</div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    {tour.status === 'Sold Out' ? (
                                        <span className="px-6 py-2 bg-gray-600 text-gray-300 rounded-full font-semibold">
                                            Sold Out
                                        </span>
                                    ) : (
                                        <button className="px-6 py-2 bg-[#6633ff] hover:bg-[#7c4dff] text-white rounded-full font-semibold transition-colors">
                                            Buy Tickets
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default Tours;