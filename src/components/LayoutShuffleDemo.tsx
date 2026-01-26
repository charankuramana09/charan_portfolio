import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const COLORS = [
    '#6366f1', // indigo
    '#06b6d4', // cyan
    '#10b981', // emerald
    '#f59e0b', // amber
    '#ef4444', // red
    '#8b5cf6', // violet
    '#06b6d4',
    '#f97316',
]

function shuffle<T>(arr: T[]) {
    const a = arr.slice()
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

export default function LayoutShuffleDemo() {
    const initial = COLORS.map((c, i) => ({ id: i, color: c }))
    const [items, setItems] = useState(initial)

    useEffect(() => {
        const id = setInterval(() => {
            setItems((prev) => shuffle(prev))
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return (
        <div className="py-6">
            <h3 className="text-lg font-semibold mb-4">Layout Reorder Demo</h3>
            <motion.ul
                className="flex flex-wrap gap-4"
                style={{ listStyle: 'none', padding: 0, margin: 0 }}
            >
                {items.map((it) => (
                    <motion.li
                        key={it.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 28 }}
                        className="rounded-xl"
                        style={{
                            width: 120,
                            height: 80,
                            background: it.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 700,
                        }}
                        whileHover={{ scale: 1.04 }}
                    >
                        Box {it.id + 1}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}
