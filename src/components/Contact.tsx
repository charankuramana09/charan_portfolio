import React, { useState } from 'react'
import { contact } from '../data/portfolio'
import { Mail, Linkedin, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

export default function Contact() {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [honeypot, setHoneypot] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const maxLength = 1000

    // EmailJS Configuration
    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_50hg2mv';
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_9mf693q';
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'iNzV48aeRZ_-uyO44';

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        // Anti-spam check
        if (honeypot) {
            console.log('Spam detected');
            setSuccess(true); // Pretend success to fool bots
            return;
        }

        if (!message.trim()) {
            setError('Please enter a message');
            return;
        }

        setLoading(true)
        setError('')

        try {
            // Sanitize inputs
            const sanitizedName = DOMPurify.sanitize(name);
            const sanitizedEmail = DOMPurify.sanitize(email);
            const sanitizedSubject = DOMPurify.sanitize(subject || 'Portfolio Contact');
            const sanitizedMessage = DOMPurify.sanitize(message);

            const templateParams = {
                from_name: sanitizedName,
                from_email: sanitizedEmail,
                name: sanitizedName, // Used in user's playground
                email: sanitizedEmail, // Used in user's playground
                subject: sanitizedSubject,
                title: sanitizedSubject, // Map subject to title as used in playground
                message: sanitizedMessage,
                time: new Date().toLocaleString(), // Used in user's playground
                to_name: 'Charan',
                reply_to: sanitizedEmail,
            };

            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            );

            console.log('Email sent successfully:', result);
            setSuccess(true);

            // Redirect to Thank You page
            setTimeout(() => {
                navigate('/thank-you');
            }, 1000);

            // Reset form
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (err: any) {
            console.error('Failed to send email:', err);
            const errorMsg = err?.text || err?.message || 'Unknown error';
            setError(`Failed to send: ${errorMsg}. Fallback: ${contact.email}`);

            // Hide error after 8 seconds
            setTimeout(() => setError(''), 8000);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="max-w-[1400px] mx-auto px-4 py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="hidden md:block fixed w-[500px] h-[500px] bg-indigo-400/20 dark:bg-indigo-400 rounded-full blur-[100px] opacity-20 dark:opacity-10 top-[10%] left-[5%] z-[-1] animate-[floatSlow_25s_ease-in-out_infinite] pointer-events-none" />
            <div className="hidden md:block fixed w-[400px] h-[400px] bg-purple-500/20 dark:bg-purple-500 rounded-full blur-[100px] opacity-20 dark:opacity-10 bottom-[10%] right-[5%] z-[-1] animate-[floatSlow_20s_ease-in-out_infinite_reverse] pointer-events-none" />

            {/* Success Message */}
            <AnimatePresence>
                {success && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 right-6 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold rounded-xl z-50 shadow-xl backdrop-blur-md flex items-center gap-3"
                    >
                        <div className="bg-emerald-500 rounded-full p-1 text-white dark:text-slate-900">
                            <Check size={16} strokeWidth={3} />
                        </div>
                        Message sent successfully! I'll get back to you soon.
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error Message */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: 50 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 right-6 px-6 py-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-semibold rounded-xl z-50 shadow-xl backdrop-blur-md flex items-center gap-3 max-w-md"
                    >
                        <div className="bg-red-500 rounded-full p-1 text-white">
                            <AlertCircle size={16} strokeWidth={3} />
                        </div>
                        <span className="text-sm">{error}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 dark:from-white dark:via-indigo-400 dark:to-purple-500 bg-clip-text text-transparent mb-4">Let's Work Together</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">Have a project in mind? Let's discuss how we can collaborate to bring your ideas to life.</p>
            </motion.div>

            {/* Contact Wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10">
                {/* Left Side - Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white/80 dark:bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-12 border border-slate-200 dark:border-white/10 overflow-hidden shadow-lg dark:shadow-none"
                >
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full bg-[radial-gradient(circle,rgba(102,126,234,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(102,126,234,0.1)_0%,transparent_70%)] animate-[spin_20s_linear_infinite]" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">Get in Touch</h2>

                        <a href={`mailto:${contact.email}`} className="flex items-center gap-5 p-5 mb-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-indigo-500/50 hover:translate-x-2 group">
                            <span className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase mb-1 tracking-wider">Email</span>
                                <span className="block text-base text-slate-900 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{contact.email}</span>
                            </span>
                        </a>

                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 mb-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-indigo-500/50 hover:translate-x-2 group">
                            <span className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                <Linkedin size={24} />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase mb-1 tracking-wider">LinkedIn</span>
                                <span className="block text-base text-slate-900 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Connect with me</span>
                            </span>
                        </a>

                        <div className="flex items-center gap-5 p-5 mb-5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-indigo-500/50 hover:translate-x-2 group">
                            <span className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-500/20 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs text-slate-500 dark:text-slate-400 uppercase mb-1 tracking-wider">Location</span>
                                <span className="block text-base text-slate-900 dark:text-white font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Hyderabad, India</span>
                            </span>
                        </div>

                        <div className="inline-flex items-center gap-2 mt-8 px-6 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Open to full-time & freelance opportunities
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-white/80 dark:bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/10 overflow-hidden shadow-lg dark:shadow-none"
                >
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                            <div className="mb-0">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus"
                                    placeholder="Your name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    required
                                    aria-required="true"
                                />
                            </div>
                            <div className="mb-0">
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    aria-required="true"
                                />
                            </div>
                        </div>

                        {/* Honeypot field (hidden from humans) */}
                        <div className="hidden" aria-hidden="true">
                            <label htmlFor="full_name_hp">Bot Check - Do Not Fill</label>
                            <input
                                id="full_name_hp"
                                type="text"
                                name="full_name_hp"
                                tabIndex={-1}
                                value={honeypot}
                                onChange={e => setHoneypot(e.target.value)}
                                autoComplete="off"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus"
                                placeholder="What's this about?"
                                value={subject}
                                onChange={e => setSubject(e.target.value)}
                                required
                                aria-required="true"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus min-h-[180px] resize-none"
                                placeholder="Tell me about your project..."
                                maxLength={maxLength}
                                required
                                aria-required="true"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                            <div className="text-right text-xs text-slate-500 mt-2" aria-live="polite">
                                {message.length} / {maxLength} characters
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-5 mt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`relative px-10 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 border-none shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:-translate-y-1 flex items-center gap-2 overflow-hidden focus-ring ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {loading ? 'Sending Message...' : 'Send Message'}
                                    {!loading && <Send size={18} />}
                                </span>
                            </button>
                            <a
                                href={contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white px-5 py-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-indigo-500/30 focus-ring"
                            >
                                <Linkedin size={18} /> Message on LinkedIn
                            </a>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
