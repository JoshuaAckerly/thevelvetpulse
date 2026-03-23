import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Tours = () => {
    const tourDates = [
        {
            date: '2024-03-15',
            venue: 'Madison Square Garden',
            city: 'New York, NY',
            status: 'On Sale',
        },
        {
            date: '2024-03-18',
            venue: 'The Forum',
            city: 'Los Angeles, CA',
            status: 'Sold Out',
        },
        {
            date: '2024-03-22',
            venue: 'United Center',
            city: 'Chicago, IL',
            status: 'On Sale',
        },
        {
            date: '2024-03-25',
            venue: 'Red Rocks Amphitheatre',
            city: 'Morrison, CO',
            status: 'On Sale',
        },
    ];

    return (
        <Layout title="Tours">
            <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
                <Container className="py-16">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-[#6633ff] md:text-6xl">Tour Dates</h1>
                        <p className="text-xl text-gray-300">Experience The Velvet Pulse live</p>
                    </div>

                    <div className="space-y-4">
                        {tourDates.map((tour, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-lg bg-zinc-800/50 p-6 transition-colors hover:bg-zinc-800/70 md:flex-row md:items-center md:justify-between"
                            >
                                <div className="flex-1">
                                    <div className="text-lg font-semibold text-[#6633ff]">
                                        {new Date(tour.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                    <div className="text-xl font-bold">{tour.venue}</div>
                                    <div className="text-gray-400">{tour.city}</div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    {tour.status === 'Sold Out' ? (
                                        <span className="rounded-full bg-gray-600 px-6 py-2 font-semibold text-gray-300">Sold Out</span>
                                    ) : (
                                        <button className="rounded-full bg-[#6633ff] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#7c4dff]">
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
