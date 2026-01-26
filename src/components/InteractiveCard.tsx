import React, { useEffect, useRef } from 'react'

export interface InteractiveCardProps {
    className?: string
    style?: React.CSSProperties
    width?: number | string
    height?: number | string
    maxRotate?: number // degrees
    translateMultiplier?: number // px
    perspective?: number
    resetOnLeave?: boolean
    children?: React.ReactNode
}

export default function InteractiveCard({
    className,
    style,
    width = '340px',
    height = '340px',
    maxRotate = 4,
    translateMultiplier = 18,
    perspective = 1000,
    resetOnLeave = true,
    children,
}: InteractiveCardProps) {
    const el = useRef<HTMLDivElement | null>(null)
    const raf = useRef<number | null>(null)

    // targets
    const tx = useRef(0)
    const ty = useRef(0)
    const trX = useRef(0)
    const trY = useRef(0)

    // current (animated) values
    const cx = useRef(0)
    const cy = useRef(0)
    const crX = useRef(0)
    const crY = useRef(0)

    useEffect(() => {
        const node = el.current
        if (!node) return

        const lerp = (a: number, b: number, n = 0.15) => a + (b - a) * n

        const frame = () => {
            cx.current = lerp(cx.current, tx.current)
            cy.current = lerp(cy.current, ty.current)
            crX.current = lerp(crX.current, trX.current)
            crY.current = lerp(crY.current, trY.current)

            const transform = `perspective(${perspective}px) translate3d(${cx.current.toFixed(2)}px, ${cy.current.toFixed(2)}px, 0px) rotateX(${crX.current.toFixed(2)}deg) rotateY(${crY.current.toFixed(2)}deg)`
            node.style.transform = transform
            raf.current = requestAnimationFrame(frame)
        }

        raf.current = requestAnimationFrame(frame)
        return () => {
            if (raf.current) cancelAnimationFrame(raf.current)
        }
    }, [perspective])

    function handleMove(e: React.MouseEvent | React.TouchEvent) {
        const node = el.current
        if (!node) return
        const rect = node.getBoundingClientRect()
        const clientX = 'touches' in e ? (e.touches[0].clientX) : (e as React.MouseEvent).clientX
        const clientY = 'touches' in e ? (e.touches[0].clientY) : (e as React.MouseEvent).clientY
        const px = (clientX - (rect.left + rect.width / 2)) / rect.width
        const py = (clientY - (rect.top + rect.height / 2)) / rect.height

        // translate scale based on distance
        tx.current = px * translateMultiplier
        ty.current = py * translateMultiplier

        // rotate: invert X so moving right -> rotateY negative
        trY.current = -px * maxRotate
        trX.current = py * maxRotate
    }

    function handleLeave() {
        if (resetOnLeave) {
            tx.current = 0
            ty.current = 0
            trX.current = 0
            trY.current = 0
        }
    }

    return (
        <div
            ref={el}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onTouchMove={handleMove}
            onTouchEnd={handleLeave}
            style={{ width, height, transformStyle: 'preserve-3d', transition: 'box-shadow 220ms ease', willChange: 'transform' }}
            className={`interactive-card relative rounded-2xl ${className || ''}`}
        >
            <div className="absolute inset-0 rounded-2xl bg-white/0 shadow-soft" aria-hidden />
            <div className="relative z-10 w-full h-full" style={style}>{children}</div>
        </div>
    )
}
