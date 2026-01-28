"use client";

import React, { useRef } from "react";
import AnimatedText from "../ui/AnimatedText";
import CyberFrame from "../ui/CyberFrame";

import { useContentStore } from "../../store/contentStore";

const ImplementationDesigns: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const blueprints = useContentStore(state => state.blueprints);

    return (
        <section className="mb-24">
            <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 bg-cyan-400" />
                <h3 className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                    <AnimatedText delay={1200}>Schematics // Blueprints</AnimatedText>
                </h3>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible lg:pb-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {blueprints.map((bp, i) => (
                    <div key={i} className="min-w-[300px] md:min-w-[350px] lg:min-w-0 snap-center">
                        <CyberFrame
                            label={`SCHEMATIC_0${i + 1}`}
                            className="h-[400px] flex flex-col justify-between border-cyan-900/50 bg-cyan-950/20 hover:border-cyan-400 transition-colors group cursor-pointer relative overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-cover bg-center pointer-events-none mix-blend-luminosity"
                                style={{ backgroundImage: `url(${bp.image})` }}
                            />

                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                            <div className="p-4 relative z-10">
                                <h4 className="text-xl font-bold text-cyan-100 font-orbitron tracking-wider mb-1 mt-32">{bp.title}</h4>
                                <p className="text-[10px] text-cyan-400 uppercase tracking-widest mb-4">{bp.subtitle}</p>
                                <p className="text-xs text-zinc-400 leading-relaxed font-mono border-l-2 border-cyan-800 pl-3">
                                    {bp.description}
                                </p>
                            </div>

                            <div className="border-t border-cyan-900/50 p-4 flex justify-between items-center bg-cyan-950/20">
                                <span className="text-[9px] text-cyan-600 font-orbitron">REV. 2.4.1</span>
                                <button className="text-[10px] text-cyan-400 hover:text-cyan-200 border border-cyan-800 hover:border-cyan-400 px-3 py-1 transition-colors uppercase">
                                    View_Source
                                </button>
                            </div>
                        </CyberFrame>
                    </div>
                ))}
            </div>

            <div className="flex lg:hidden gap-1 h-1 w-full max-w-[200px] mt-2">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex-1 bg-zinc-800 first:bg-cyan-600" />
                ))}
            </div>
        </section>
    );
};

export default ImplementationDesigns;
