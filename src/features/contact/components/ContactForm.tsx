import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, AlertCircle, User, Mail, Tag, MessageSquare, Loader2 } from 'lucide-react';
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

            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
                publicKey: EMAILJS_PUBLIC_KEY,
            });

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

    const inputBase =
        'form-input-focus w-full rounded-xl border border-slate-200 bg-white/60 py-3.5 pl-11 pr-4 text-slate-900 placeholder-slate-400 outline-none dark:border-white/10 dark:bg-slate-950/40 dark:text-white dark:placeholder-slate-500';
    const iconCls = 'pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card tile-spotlight relative p-7 md:p-9"
        >
            {/* toasts */}
            <AnimatePresence>
                {success && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed right-6 top-24 z-50 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-4 font-semibold text-emerald-600 shadow-xl backdrop-blur-md dark:text-emerald-400"
                    >
                        <span className="rounded-full bg-emerald-500 p-1 text-white">
                            <Check size={16} strokeWidth={3} />
                        </span>
                        {strings.contact.successMessage}
                    </motion.div>
                )}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed right-6 top-24 z-50 flex max-w-md items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-6 py-4 font-semibold text-red-600 shadow-xl backdrop-blur-md dark:text-red-400"
                    >
                        <span className="rounded-full bg-red-500 p-1 text-white">
                            <AlertCircle size={16} strokeWidth={3} />
                        </span>
                        <span className="text-sm">{error}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a message</h3>
            <p className="mt-2 mb-6 text-slate-600 dark:text-slate-400">
                Fill in the form and I&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {strings.contact.formName}
                        </label>
                        <div className="relative">
                            <User size={17} className={iconCls} />
                            <input id="name" className={inputBase} placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                            {strings.contact.formEmail}
                        </label>
                        <div className="relative">
                            <Mail size={17} className={iconCls} />
                            <input id="email" type="email" className={inputBase} placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>
                </div>

                <div className="hidden" aria-hidden="true">
                    <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} />
                </div>

                <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {strings.contact.formSubject}
                    </label>
                    <div className="relative">
                        <Tag size={17} className={iconCls} />
                        <input id="subject" className={inputBase} placeholder="What's this about?" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {strings.contact.formMessage}
                    </label>
                    <div className="relative">
                        <MessageSquare size={17} className="pointer-events-none absolute left-3.5 top-4 text-slate-400" />
                        <textarea
                            id="message"
                            className="form-input-focus min-h-[150px] w-full resize-none rounded-xl border border-slate-200 bg-white/60 py-3.5 pl-11 pr-4 text-slate-900 placeholder-slate-400 outline-none dark:border-white/10 dark:bg-slate-950/40 dark:text-white dark:placeholder-slate-500"
                            placeholder="Tell me about your project..."
                            maxLength={maxLength}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="mt-1.5 text-right text-xs text-slate-400" aria-live="polite">
                        {message.length} / {maxLength}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className={`focus-ring group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-gradient bg-[length:200%_auto] px-8 py-4 font-semibold text-white shadow-glow transition-[background-position] duration-500 hover:bg-right ${
                        loading ? 'cursor-not-allowed opacity-80' : ''
                    }`}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {loading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Sending…
                            </>
                        ) : (
                            <>
                                {strings.contact.submitButton} <Send size={18} className="transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </span>
                </button>
            </form>
        </motion.div>
    );
};

export default React.memo(ContactForm);
