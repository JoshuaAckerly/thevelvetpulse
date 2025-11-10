import Container from '@/components/Container';
import Layout from '@/components/Layout';

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen">
                <Container className="py-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#6633ff] mb-4">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-300">
                            Get in touch with The Velvet Pulse
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div>
                            <h2 className="text-2xl font-bold text-[#6633ff] mb-6">Send us a message</h2>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#6633ff] focus:outline-none"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#6633ff] focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Subject</label>
                                    <input 
                                        type="text" 
                                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#6633ff] focus:outline-none"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea 
                                        rows={5}
                                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-[#6633ff] focus:outline-none resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="w-full px-6 py-3 bg-[#6633ff] hover:bg-[#7c4dff] text-white rounded-lg font-semibold transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#6633ff] mb-6">Get in touch</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold mb-2">Booking & Management</h3>
                                    <p className="text-gray-300">booking@thevelvetpulse.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Press & Media</h3>
                                    <p className="text-gray-300">press@thevelvetpulse.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">General Inquiries</h3>
                                    <p className="text-gray-300">info@thevelvetpulse.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Follow Us</h3>
                                    <div className="flex gap-4 text-[#6633ff]">
                                        <a href="#" className="hover:text-[#7c4dff] transition-colors">Instagram</a>
                                        <a href="#" className="hover:text-[#7c4dff] transition-colors">Spotify</a>
                                        <a href="#" className="hover:text-[#7c4dff] transition-colors">YouTube</a>
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