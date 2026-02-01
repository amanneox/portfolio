import React, { useState, useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { useContentStore } from "../../store/contentStore";

const SkillTree: React.FC = () => {
    const { missions } = useContentStore(state => state);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedMission = missions[selectedIndex];

    useEffect(() => {
        if (containerRef.current) {
            animate(containerRef.current.querySelectorAll('.timeline-tab'), {
                opacity: [0, 1],
                translateY: [-10, 0],
                delay: stagger(100, { start: 200 }),
                easing: 'easeOutQuad'
            });
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const detailsPanel = containerRef.current.querySelector('.details-panel');
            if (detailsPanel) {
                animate(detailsPanel, {
                    opacity: [0, 1],
                    translateX: [20, 0],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        }
    }, [selectedIndex]);

    return (
        <section ref={containerRef} className="flex flex-col gap-0">
            <div className="flex flex-wrap border-b border-zinc-800">
                {missions.map((mission, index) => {
                    const isSelected = index === selectedIndex;
                    const isActive = mission.status === 'ACTIVE' || mission.status === 'ROOT_ACCESS';

                    return (
                        <button
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`timeline-tab relative px-4 py-3 font-mono text-xs transition-all border-b-2 -mb-[2px]
                                ${isSelected
                                    ? 'text-cyan-400 border-cyan-400 bg-cyan-500/5'
                                    : 'text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-zinc-900/30'
                                }
                            `}
                        >
                            <span className="font-bold">{mission.company}</span>
                            <span className="hidden sm:inline text-zinc-600 ml-2">
                                {mission.year.split(' - ')[1]}
                            </span>
                            {isActive && (
                                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Details Panel */}
            <div className="details-panel bg-zinc-900/30 border border-t-0 border-zinc-800 p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-zinc-100 font-mono">
                                {selectedMission.role.replace('_', ' ')}
                            </h3>
                            <span className={`px-2 py-0.5 text-[10px] font-mono border
                                ${selectedMission.status === 'ACTIVE' || selectedMission.status === 'ROOT_ACCESS'
                                    ? 'text-cyan-400 border-cyan-400/50'
                                    : 'text-zinc-500 border-zinc-700'
                                }
                            `}>
                                {selectedMission.status}
                            </span>
                        </div>
                        <div className="text-sm text-cyan-500 font-mono">
                            @{selectedMission.company}
                        </div>
                    </div>

                    <div className="text-xs text-zinc-500 font-mono bg-zinc-900 px-3 py-2 border border-zinc-800">
                        <span className="text-zinc-600">TIMELINE:</span> {selectedMission.year}
                    </div>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl border-l-2 border-cyan-500/30 pl-4 font-mono">
                    {selectedMission.description}
                </p>

                {/* Progress Indicator */}
                <div className="mt-6 flex items-center gap-2">
                    {missions.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedIndex(i)}
                            className={`h-1 transition-all ${i === selectedIndex
                                ? 'w-8 bg-cyan-400'
                                : 'w-4 bg-zinc-700 hover:bg-zinc-600'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillTree;
