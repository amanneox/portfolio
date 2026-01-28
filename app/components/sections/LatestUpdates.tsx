"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import AnimatedText from "../ui/AnimatedText";
import CyberFrame from "../ui/CyberFrame";
import { useContentStore } from "../../store/contentStore";

const LatestUpdates: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const updates = useContentStore(state => state.updates);

    useEffect(() => {
        if (gridRef.current) {
            animate(gridRef.current.children, {
                translateY: [20, 0],
                opacity: [0, 1],
                delay: stagger(100, { start: 500 }),
                easing: 'easeOutQuad'
            });
        }
    }, [updates]);

    return (
        <section className="mb-24">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-[var(--terminal-green)] animate-pulse" />
                <h3 className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    <AnimatedText delay={400}>Incoming Transmission // Work_Stream</AnimatedText>
                </h3>
            </div>

            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {updates.map((item, i) => (
                    <CyberFrame
                        key={i}
                        label={`LOG_0${i + 1}`}
                        className="min-h-[220px] flex flex-col justify-end hover:border-[var(--terminal-green)] transition-all duration-300 group opacity-0 relative overflow-hidden"
                    >

                        {item.image && (
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 filter grayscale"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                        )}


                        <div className="relative z-10 p-2">
                            <h4 className="text-sm font-bold text-zinc-200 group-hover:text-[var(--terminal-green)] transition-colors mb-2 font-mono tracking-wide">
                                {item.title}
                            </h4>

                            <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed mb-4 border-l border-zinc-800 pl-2">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-1 mt-auto border-t border-zinc-800 pt-3">
                                {item.tags.map((tag, t) => (
                                    <span key={t} className="text-[9px] text-zinc-600 font-mono bg-zinc-900/50 px-1.5 py-0.5 border border-zinc-800/50 group-hover:border-[var(--terminal-green)]/30 group-hover:text-[var(--terminal-green)] transition-all">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </CyberFrame>
                ))}
            </div>
        </section>
    );
};

export default LatestUpdates;
