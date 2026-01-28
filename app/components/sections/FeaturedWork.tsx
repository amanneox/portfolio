"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, stagger } from "animejs";
import AnimatedText from "../ui/AnimatedText";
import CyberFrame from "../ui/CyberFrame";
import { useContentStore } from "../../store/contentStore";

const FeaturedWork: React.FC = () => {
    const workGridRef = useRef<HTMLDivElement>(null);
    const projects = useContentStore(state => state.projects);

    useEffect(() => {
        if (workGridRef.current) {
            animate(workGridRef.current.children, {
                scale: [0.95, 1],
                opacity: [0, 1],
                delay: stagger(200, { start: 500 }),
                easing: 'easeOutExpo'
            });
        }
    }, [projects]);

    return (
        <section>
            <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-cyan-400" />
                <h3 className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    <AnimatedText delay={800}>System Modules / Work</AnimatedText>
                </h3>
            </div>

            <div ref={workGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
                {projects.map((project, i) => (
                    <CyberFrame
                        key={project.label}
                        label={project.label}
                        className="min-h-[280px] flex flex-col justify-end group cursor-pointer border-zinc-700/50 transition-all duration-500 hover:border-cyan-500/50 relative overflow-hidden"
                    >
                        {project.image && (
                            <div className="absolute inset-0 bg-zinc-950/50 transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                        <div className="relative z-10 px-5 float-end pb-5">
                            <div className="w-12 h-[1px] bg-zinc-700 mb-3 group-hover:bg-cyan-400 transition-colors duration-300" />

                            <div className="flex flex-col gap-1">
                                <h4 className="text-lg font-bold text-zinc-100 hud-text tracking-wide group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                                    <span className="text-xs text-zinc-500 font-mono font-normal group-hover:text-cyan-500/70">
                                        {(i + 1).toString().padStart(2, '0')} //
                                    </span>
                                    {project.title}
                                </h4>
                                <p className="text-zinc-500 text-xs leading-relaxed max-w-[90%] group-hover:text-zinc-400 transition-colors">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </CyberFrame>
                ))}
            </div>
        </section>
    );
};

export default FeaturedWork;
