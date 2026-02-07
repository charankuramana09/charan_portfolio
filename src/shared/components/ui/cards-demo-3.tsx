"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export default function CardDemo() {
    return (
        <Card>
            <CardSkeletonContainer>
                <Skeleton />
            </CardSkeletonContainer>
            <CardTitle>Damn good card</CardTitle>
            <CardDescription>
                A card that showcases a set of tools that you use to create your
                product.
            </CardDescription>
        </Card>
    );
}

const Skeleton = () => {
    const letters = ['C', 'H', 'A', 'R', 'A', 'N']
    const items = letters.map((l, i) => ({ id: i + 1, label: l }))
    return (
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
            <div className="flex flex-row shrink-0 justify-center items-center gap-2">
                {items.map((it) => (
                    <motion.div
                        key={it.id}
                        className={cn("h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.02)]", `circle-${it.id}`)}
                        animate={{
                            scale: [1, 1.14, 1],
                            translateY: [0, -8, 0],
                            borderRadius: ['12px', '50%', '12px'],
                        }}
                        transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.9, delay: (it.id - 1) * 0.12 }}
                    >
                        <InlineIcon char={it.label} />
                    </motion.div>
                ))}

                <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
                    <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                        <Sparkles />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Sparkles = () => {
    const randomMove = () => Math.random() * 2 - 1;
    const randomOpacity = () => 0.4 + Math.random() * 0.6;
    const random = () => Math.random();
    return (
        <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{ duration: random() * 2 + 4, repeat: Infinity, ease: "linear" }}
                    style={{ position: "absolute", top: `${random() * 100}%`, left: `${random() * 100}%`, width: `2px`, height: `2px`, borderRadius: "50%", zIndex: 1 }}
                    className="inline-block bg-black dark:bg-white"
                ></motion.span>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div className={cn("max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group", className)}>
            {children}
        </div>
    );
};

export const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <h3 className={cn("text-lg font-semibold text-gray-800 dark:text-white py-2", className)}>{children}</h3>
    );
};

export const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <p className={cn("text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm", className)}>{children}</p>
    );
};

export const CardSkeletonContainer = ({ className, children, showGradient = true }: { className?: string; children: React.ReactNode; showGradient?: boolean }) => {
    return (
        <div className={cn("h-[15rem] md:h-[20rem] rounded-xl z-40", className, showGradient && "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]")}>{children}</div>
    );
};

const InlineIcon = ({ char }: { char: string }) => {
    return <span className="text-white font-bold text-lg">{char}</span>;
};
