import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
                <Container className="py-16">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold text-[#6633ff] md:text-6xl">Contact Us</h1>
                        <p className="text-xl text-gray-300">Get in touch with The Velvet Pulse</p>
                    </div>

                    <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-[#6633ff]">Send us a message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-[#6633ff] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#7c4dff]"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div>
                            <h2 className="mb-6 text-2xl font-bold text-[#6633ff]">Get in touch</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="mb-2 font-semibold">Booking & Management</h3>
                                    <p className="text-gray-300">booking@thevelvetpulse.com</p>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold">Press & Media</h3>
                                    <p className="text-gray-300">press@thevelvetpulse.com</p>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold">General Inquiries</h3>
                                    <p className="text-gray-300">info@thevelvetpulse.com</p>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold">Follow Us</h3>
                                    <div className="flex gap-4 text-[#6633ff]">
                                        <a href="#" className="transition-colors hover:text-[#7c4dff]">
                                            Instagram
                                        </a>
                                        <a href="#" className="transition-colors hover:text-[#7c4dff]">
                                            Spotify
                                        </a>
                                        <a href="#" className="transition-colors hover:text-[#7c4dff]">
                                            YouTube
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};

export default Contact;
