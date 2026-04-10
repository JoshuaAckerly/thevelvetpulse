import Container from '@/components/Container';
import Layout from '@/components/Layout';
import { trackFormSubmission } from '@/hooks/use-google-analytics';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Track form submission
            trackFormSubmission('contact_form', {
                subject: formData.subject,
            });

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setSubmitMessage('Thank you! Your message has been sent successfully.');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
                setSubmitMessage('There was an error sending your message. Please try again.');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setSubmitStatus('error');
            setSubmitMessage('There was an error sending your message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {submitStatus === 'success' && (
                                    <div className="rounded-lg border border-green-500 bg-green-500/20 px-4 py-3 text-green-300">{submitMessage}</div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="rounded-lg border border-red-500 bg-red-500/20 px-4 py-3 text-red-300">{submitMessage}</div>
                                )}
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium">Message</label>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 focus:border-[#6633ff] focus:outline-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-lg bg-[#6633ff] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#7c4dff] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
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
