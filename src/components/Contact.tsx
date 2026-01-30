import React, { useState } from 'react'
import { contact } from '../data/portfolio'

function EmailIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    )
}
function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}
function LocationIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
function SendIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
    )
}

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const maxLength = 1000

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!message.trim()) return alert('Please enter a message')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setSuccess(true)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            setTimeout(() => setSuccess(false), 3000)
        }, 2000)
        // Uncomment for real mailto:
        // const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`
        // const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject || 'Portfolio contact')}&body=${body}`
        // window.location.href = mailto
    }

    return (
        <section id="contact" className="max-w-[1400px] mx-auto px-4 py-20 relative">
            {/* Background decorations */}
            <div className="hidden md:block fixed w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[100px] opacity-10 top-[10%] left-[5%] z-[-1] animate-[floatSlow_25s_ease-in-out_infinite] pointer-events-none" />
            <div className="hidden md:block fixed w-[400px] h-[400px] bg-purple-500 rounded-full blur-[100px] opacity-10 bottom-[10%] right-[5%] z-[-1] animate-[floatSlow_20s_ease-in-out_infinite_reverse] pointer-events-none" />
            <div className="hidden md:block fixed w-[350px] h-[350px] bg-pink-300 rounded-full blur-[100px] opacity-10 top-1/2 right-[20%] z-[-1] animate-[floatSlow_30s_ease-in-out_5s_infinite] pointer-events-none" />

            {/* Success Message */}
            {success && (
                <div className="fixed top-6 right-6 px-6 py-4 bg-green-100/80 border-2 border-green-400 text-green-700 font-semibold rounded-xl z-50 shadow-lg animate-[slideInRight_0.5s_ease]">
                    ✓ Message sent successfully!
                </div>
            )}

            {/* Section Header */}
            <div className="text-center mb-20 animate-fadeInDown">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4 animate-[titleGradient_5s_ease_infinite]">Let's Work Together</h1>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">Have a project in mind? Let's discuss how we can collaborate to bring your ideas to life.</p>
            </div>

            {/* Contact Wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 animate-fadeInUp">
                {/* Left Side - Contact Info */}
                <div className="relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 overflow-hidden animate-float">
                    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rounded-full bg-[radial-gradient(circle,rgba(102,126,234,0.1)_0%,transparent_70%)] animate-[rotate_20s_linear_infinite]" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-5 p-5 mb-5 bg-white/5 border border-white/10 rounded-2xl cursor-pointer transition-all duration-400 hover:bg-white/10 hover:border-indigo-300 hover:translate-x-2 relative overflow-hidden group info-item">
                            <span className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-400/20 to-purple-500/20 border border-indigo-400/30 transition-all duration-400 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-indigo-400/40 group-hover:to-purple-500/40 info-icon">
                                <EmailIcon />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs text-slate-400 uppercase mb-1 tracking-wider info-label">Email</span>
                                <span className="block text-base text-white font-medium info-value">{contact.email}</span>
                            </span>
                        </a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 mb-5 bg-white/5 border border-white/10 rounded-2xl cursor-pointer transition-all duration-400 hover:bg-white/10 hover:border-indigo-300 hover:translate-x-2 relative overflow-hidden group info-item">
                            <span className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-400/20 to-purple-500/20 border border-indigo-400/30 transition-all duration-400 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-indigo-400/40 group-hover:to-purple-500/40 info-icon">
                                <LinkedInIcon />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs text-slate-400 uppercase mb-1 tracking-wider info-label">LinkedIn</span>
                                <span className="block text-base text-white font-medium info-value">Connect with me</span>
                            </span>
                        </a>
                        <div className="flex items-center gap-5 p-5 mb-5 bg-white/5 border border-white/10 rounded-2xl transition-all duration-400 hover:bg-white/10 hover:border-indigo-300 hover:translate-x-2 relative overflow-hidden group info-item">
                            <span className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-400/20 to-purple-500/20 border border-indigo-400/30 transition-all duration-400 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-indigo-400/40 group-hover:to-purple-500/40 info-icon">
                                <LocationIcon />
                            </span>
                            <span className="flex-1">
                                <span className="block text-xs text-slate-400 uppercase mb-1 tracking-wider info-label">Location</span>
                                <span className="block text-base text-white font-medium info-value">Hyderabad, India</span>
                            </span>
                        </div>
                        <div className="inline-flex items-center gap-2 mt-8 px-6 py-4 bg-green-100/10 border border-green-400/30 rounded-full text-green-500 text-sm font-medium animate-pulse availability-badge">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-blink availability-dot" />
                            Open to full-time & freelance opportunities
                        </div>
                    </div>
                </div>
                {/* Right Side - Contact Form */}
                <div className="relative bg-gradient-to-br from-indigo-400/10 to-purple-500/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 overflow-hidden animate-float [animation-delay:2s]">
                    <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-30" style={{ background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe)', backgroundSize: '300% 300%', animation: 'gradientShift 8s ease infinite' }} />
                    <div className="relative z-10">
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 form-row">
                                <div className="mb-0 form-group">
                                    <label className="block text-sm font-semibold text-slate-200 mb-2 uppercase tracking-wide form-label" htmlFor="name">Name</label>
                                    <input id="name" name="name" className="form-input w-full px-5 py-4 rounded-xl border-2 border-white/10 bg-slate-900/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} required />
                                </div>
                                <div className="mb-0 form-group">
                                    <label className="block text-sm font-semibold text-slate-200 mb-2 uppercase tracking-wide form-label" htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" className="form-input w-full px-5 py-4 rounded-xl border-2 border-white/10 bg-slate-900/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="mb-6 form-group">
                                <label className="block text-sm font-semibold text-slate-200 mb-2 uppercase tracking-wide form-label" htmlFor="subject">Subject</label>
                                <input id="subject" name="subject" className="form-input w-full px-5 py-4 rounded-xl border-2 border-white/10 bg-slate-900/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all" placeholder="What's this about?" value={subject} onChange={e => setSubject(e.target.value)} required />
                            </div>
                            <div className="mb-6 form-group">
                                <label className="block text-sm font-semibold text-slate-200 mb-2 uppercase tracking-wide form-label" htmlFor="message">Message</label>
                                <textarea id="message" name="message" className="form-textarea w-full px-5 py-4 rounded-xl border-2 border-white/10 bg-slate-900/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all min-h-[180px] resize-vertical" placeholder="Tell me about your project..." maxLength={maxLength} required value={message} onChange={e => setMessage(e.target.value)} />
                                <div className="text-right text-xs text-slate-400 mt-2 char-counter">{message.length} / {maxLength}</div>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-5 mt-8 form-footer">
                                <button type="submit" className={`submit-button relative px-10 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-400 to-purple-500 border-none shadow-lg transition-all duration-400 overflow-hidden flex items-center gap-2 ${loading ? 'opacity-70 pointer-events-none' : ''}`}>
                                    <span className="flex items-center gap-2 relative z-10">{loading ? 'Sending...' : 'Send Message'} <SendIcon /></span>
                                    {/* Button ripple effect */}
                                    <span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 group-hover:w-[300px] group-hover:h-[300px]" />
                                    {loading && <span className="absolute w-4 h-4 top-1/2 left-1/2 -ml-2 -mt-2 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                                </button>
                                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link flex items-center gap-2 text-slate-400 hover:text-white px-5 py-3 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-indigo-300 hover:-translate-y-1">
                                    <LinkedInIcon /> Or message me on LinkedIn
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
