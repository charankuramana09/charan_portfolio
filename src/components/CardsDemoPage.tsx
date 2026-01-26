import React from 'react'
import Section from './Section'
import CardDemo from './ui/cards-demo-3'

export default function CardsDemoPage() {
    return (
        <Section id="cards-demo" direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
            <div className="text-center mb-8">
                <div className="text-sm text-primary-600">Demos</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">Interactive Cards</h2>
                <p className="text-slate-600 mt-2">Small UI demo useful for hero / showcases</p>
            </div>
            <div className="grid place-items-center">
                <CardDemo />
            </div>
        </Section>
    )
}
