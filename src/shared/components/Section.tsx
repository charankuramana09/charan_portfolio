import React from 'react'
import { motion } from 'framer-motion'
import { directionVariant, stagger } from '../../motion/variants'

type Props = {
    children: React.ReactNode
    className?: string
    direction?: 'left' | 'right' | 'up' | 'down'
    id?: string
}

export default function Section({ children, className = '', direction = 'up', id }: Props) {
    const variants = directionVariant(direction, 36, 0.44)
    return (
        <motion.section id={id} className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <motion.div variants={variants}>
                    {children}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}
