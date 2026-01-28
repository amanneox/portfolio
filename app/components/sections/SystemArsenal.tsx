import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { useContentStore } from "../../store/contentStore";

const SystemArsenal: React.FC = () => {
    const { arsenal } = useContentStore(state => state);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            animate(containerRef.current.querySelectorAll('.skill-card'), {
                opacity: [0, 1],
                translateY: [20, 0],
                delay: stagger(100, { start: 300 }),
                easing: 'easeOutQuad'
            });

            animate(containerRef.current.querySelectorAll('.tech-chip'), {
                scale: [0.8, 1],
                opacity: [0, 1],
                delay: stagger(30, { start: 600 }),
                easing: 'easeOutQuad'
            });
        }
    }, [arsenal]);

    return (
        <section ref={containerRef} className="border border-zinc-800 bg-zinc-900/30 p-6 mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono">
                    Skills & Technology
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {arsenal.map((group, index) => (
                    <div key={index} className="skill-card opacity-0">
                        <div className="text-[10px] text-cyan-500 font-mono uppercase tracking-widest mb-3 border-b border-zinc-800 pb-2">
                            {group.category.replace('_', ' & ')}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item, i) => (
                                <span
                                    key={i}
                                    className="tech-chip px-2 py-1 text-xs text-zinc-300 bg-zinc-900 border border-zinc-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SystemArsenal;
