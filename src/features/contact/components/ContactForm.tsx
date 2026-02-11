import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, AlertCircle, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { config } from '../../../data/config';
import { strings } from '../../../data/strings';

const ContactForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const maxLength = 1000;

    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (honeypot) {
            setSuccess(true);
            return;
        }

        if (!message.trim()) {
            setError(strings.contact.errorEmptyMessage);
            return;
        }

        setLoading(true);
        setError('');

        try {
            const templateParams = {
                from_name: DOMPurify.sanitize(name),
                from_email: DOMPurify.sanitize(email),
                subject: DOMPurify.sanitize(subject || 'Portfolio Contact'),
                message: DOMPurify.sanitize(message),
                time: new Date().toLocaleString(),
                to_name: 'Charan',
                reply_to: DOMPurify.sanitize(email),
            };

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                { publicKey: EMAILJS_PUBLIC_KEY }
            );

            setSuccess(true);
            setTimeout(() => navigate('/thank-you'), 1000);

            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (err: any) {
            console.error('Failed to send email:', err);
            const errorMsg = err?.text || err?.message || 'Unknown error';
            setError(`Failed to send: ${errorMsg}. Please try email instead.`);
            setTimeout(() => setError(''), 8000);
        } finally {
            setLoading(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/80 dark:bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-white/10 overflow-hidden shadow-lg dark:shadow-none"
        >
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
                        {strings.contact.successMessage}
                    </motion.div>
                )}
            </AnimatePresence>

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

            <form onSubmit={handleSubmit} autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="name">{strings.contact.formName}</label>
                        <input
                            id="name"
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus"
                            placeholder="Your name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="email">{strings.contact.formEmail}</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus"
                            placeholder="your@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="hidden" aria-hidden="true">
                    <input type="text" value={honeypot} onChange={e => setHoneypot(e.target.value)} tabIndex={-1} />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="subject">{strings.contact.formSubject}</label>
                    <input
                        id="subject"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus"
                        placeholder="What's this about?"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide" htmlFor="message">{strings.contact.formMessage}</label>
                    <textarea
                        id="message"
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/50 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none form-input-focus min-h-[180px] resize-none"
                        placeholder="Tell me about your project..."
                        maxLength={maxLength}
                        required
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
                            {loading ? 'Sending Message...' : strings.contact.submitButton}
                            {!loading && <Send size={18} />}
                        </span>
                    </button>
                    <a
                        href={config.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white px-5 py-3 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-indigo-500/30 focus-ring"
                    >
                        <Linkedin size={18} /> Message on LinkedIn
                    </a>
                </div>
            </form>
        </motion.div>
    );
};

export default React.memo(ContactForm);
