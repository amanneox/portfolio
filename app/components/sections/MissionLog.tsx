import React from "react";
import { useContentStore } from "../../store/contentStore";

const MissionLog: React.FC = () => {
    const { missions } = useContentStore(state => state);

    return (
        <section className="relative">
            {/* Removed section title as it's now in MasamuneFrame */}

            <div className="relative">
                {/* Main Vertical Circuit Line */}
                <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--terminal-green)]/50 via-zinc-700 to-zinc-800">
                    {/* Pulse traveling down the line */}
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[var(--terminal-green)] to-transparent animate-pulse" />
                </div>

                <div className="space-y-0">
                    {missions.map((mission, index) => {
                        const isFirst = index === 0;

                        // Define styles based on status
                        let containerClasses = "border-zinc-800/50 bg-zinc-900/20";
                        let statusColor = "text-zinc-600";
                        let statusText = "PROC_COMPLETE";
                        let nodeStyle = "bg-zinc-800 border-zinc-600";
                        let titleColor = "text-zinc-400";
                        let companyColor = "text-zinc-500";
                        let dimEffect = "opacity-60 hover:opacity-100";

                        if (mission.status === 'ACTIVE') {
                            containerClasses = "border-[var(--terminal-green)]/30 bg-[var(--terminal-green)]/5";
                            statusColor = "text-[var(--terminal-green)]";
                            statusText = ">> RUNNING";
                            nodeStyle = "bg-[var(--terminal-green)] border-[var(--terminal-green)] shadow-[0_0_15px_var(--terminal-green)]";
                            titleColor = "text-zinc-100";
                            companyColor = "text-[var(--terminal-green)]";
                            dimEffect = "opacity-100";
                        } else if (mission.status === 'ROOT_ACCESS') {
                            containerClasses = "border-[var(--terminal-green)]/40 bg-[var(--terminal-green)]/5";
                            statusColor = "text-[var(--terminal-green)]";
                            statusText = "ROOT_ACCESS // CORE_MODULE";
                            nodeStyle = "bg-[var(--terminal-green)] border-[var(--terminal-green)] shadow-[0_0_10px_var(--terminal-green)]";
                            titleColor = "text-zinc-200";
                            companyColor = "text-[var(--terminal-green)]";
                            dimEffect = "opacity-90 hover:opacity-100";
                        }

                        return (
                            <div
                                key={index}
                                className={`relative pl-10 pr-4 py-5 border-l-0 border-b transition-all duration-300 ${containerClasses} ${dimEffect}`}
                            >
                                {/* Circuit Node */}
                                <div className={`absolute left-[6px] top-6 w-3 h-3 border-2 z-10 transition-all ${nodeStyle}`}>
                                    {mission.status === 'ACTIVE' && (
                                        <div className="absolute -inset-1 bg-[var(--terminal-green)] rounded-sm animate-ping opacity-30" />
                                    )}
                                </div>

                                {/* 90-Degree Connector */}
                                <div className="absolute left-[14px] top-[28px] w-6 h-[2px] bg-zinc-700" />

                                {/* Content Grid */}
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                    {/* Left: Timestamp & Status */}
                                    <div className="w-full md:w-44 flex-shrink-0 flex flex-col gap-1">
                                        <div className="font-mono text-[11px] text-zinc-500 tracking-widest">
                                            {mission.year}
                                        </div>
                                        <div className={`font-mono text-[10px] tracking-widest flex items-center gap-2 ${statusColor}`}>
                                            <span>{statusText}</span>
                                            {mission.status === 'ACTIVE' && (
                                                <span className="w-1.5 h-4 bg-[var(--terminal-green)] animate-blink" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Right: Details */}
                                    <div className="flex-grow">
                                        <div className="flex items-baseline gap-3 mb-1">
                                            <h3 className={`text-base md:text-lg font-bold tracking-wide ${titleColor}`}>
                                                {mission.role}
                                            </h3>
                                            <span className={`font-mono text-xs ${companyColor}`}>
                                                @{mission.company}
                                            </span>
                                        </div>

                                        <p className="text-sm text-zinc-500 max-w-xl leading-relaxed">
                                            {mission.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Active Scanner Line */}
                                {mission.status === 'ACTIVE' && (
                                    <div className="absolute inset-x-0 bottom-0 h-[1px] overflow-hidden">
                                        <div className="w-[50%] h-full bg-gradient-to-r from-transparent via-[var(--terminal-green)] to-transparent animate-scan" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 0.8s step-end infinite;
                }
                @keyframes scan {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(300%); }
                }
                .animate-scan {
                    animation: scan 2.5s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default MissionLog;
