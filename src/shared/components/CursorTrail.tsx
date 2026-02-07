import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorTrail() {
    const [isDesktop, setIsDesktop] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth movement settings
    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const trailX = useSpring(mouseX, springConfig);
    const trailY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Only run on desktop/pointing devices
        const checkDevice = () => {
            setIsDesktop(window.matchMedia("(pointer: fine)").matches);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        if (isDesktop) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', checkDevice);
        };
    }, [isDesktop, mouseX, mouseY]);

    if (!isDesktop) return null;

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-indigo-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-indigo-400/30 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    );
}
