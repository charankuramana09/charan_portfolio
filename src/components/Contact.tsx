import React, { useState } from 'react'
import { contact } from '../data/portfolio'
import { motion } from 'framer-motion'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!message.trim()) return alert('Please enter a message')
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`
        const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject || 'Portfolio contact')}&body=${body}`
        // open default mail client
        window.location.href = mailto
    }

    return (
        <section id="contact" className="max-w-5xl mx-auto px-6 py-12">
            <h3 className="font-heading text-2xl mb-6">Let's Work Together</h3>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-6">
                <div className="card">
                    <h4 className="font-semibold mb-3">Get in Touch</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">✉️</div>
                            <div>
                                <div className="text-xs text-slate-500">Email</div>
                                <a href={`mailto:${contact.email}`} className="text-sm text-slate-700">{contact.email}</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">in</div>
                            <div>
                                <div className="text-xs text-slate-500">LinkedIn</div>
                                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-700">Connect with me</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">📍</div>
                            <div>
                                <div className="text-xs text-slate-500">Location</div>
                                <div className="text-sm text-slate-700">Hyderabad, India</div>
                            </div>
                        </div>

                        <div className="mt-4 p-4 rounded border border-green-100 bg-green-50">
                            <div className="font-medium">Available for work</div>
                            <div className="text-sm text-slate-600">Open to full-time & freelance opportunities</div>
                        </div>
                    </div>
                </div>

                <form className="card space-y-3" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm text-slate-600 mb-1" htmlFor="name">Name</label>
                            <input id="name" name="name" aria-label="Name" className="w-full p-3 rounded border" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label className="block text-sm text-slate-600 mb-1" htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" aria-label="Email" className="w-full p-3 rounded border" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm text-slate-600 mb-1" htmlFor="subject">Subject</label>
                        <input id="subject" name="subject" className="w-full p-3 rounded border" placeholder="What's this about?" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>

                    <div>
                        <label className="block text-sm text-slate-600 mb-1" htmlFor="message">Message</label>
                        <textarea id="message" name="message" aria-label="Message" className="w-full p-3 rounded border" rows={6} placeholder="Tell me about your project..." required value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>

                    <div className="flex items-center justify-between">
                        <button type="submit" aria-label="Send message" className="btn-3d">
                            <span className="btn-inner px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full">Send Message</span>
                        </button>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 underline">Or message me on LinkedIn</a>
                    </div>
                </form>
            </motion.div>
        </section>
    )
}
