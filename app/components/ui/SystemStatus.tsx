import React, { useState, useEffect } from "react";
import { useContentStore } from "../../store/contentStore";

const SystemStatus: React.FC = () => {
    const { hero } = useContentStore(state => state);
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4 lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] z-50">


            <div className="lg:hidden flex items-center justify-between p-3 border border-zinc-800 bg-zinc-950">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 overflow-hidden relative grayscale">
                        <img src={hero.avatar} alt="Avatar" className="w-full h-full object-cover opacity-80" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-zinc-100 tracking-tighter uppercase leading-none mb-0.5">
                            {hero.name}
                        </div>
                        <div className="text-[9px] text-[var(--terminal-green)] font-mono tracking-widest">
                            ● {hero.status}
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-3 py-1.5 border border-zinc-700 text-[10px] font-mono uppercase bg-zinc-900 text-zinc-400 hover:text-[var(--terminal-green)] hover:border-[var(--terminal-green)] transition-all"
                >
                    {isOpen ? 'CLOSE' : 'MENU'}
                </button>
            </div>


            <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col gap-4 w-full h-full transition-all duration-300`}>


                <div className="hidden lg:block border border-zinc-800 bg-zinc-950 p-5 relative overflow-hidden group">


                    <div className="flex justify-between items-start mb-4">
                        <div className="relative">
                            <div className="w-16 h-16 bg-zinc-900 border border-zinc-700 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img src={hero.avatar} alt="Avatar" className="w-full h-full object-cover opacity-90" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                                {/* Cyan Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/40 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--terminal-green)]" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--terminal-green)]" />
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-zinc-100 tracking-tighter uppercase leading-none mb-1">
                                {hero.name}
                            </div>
                            <div className="text-[10px] text-[var(--terminal-green)] font-mono tracking-widest animate-pulse">
                                ● {hero.status}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1 font-mono text-xs border-t border-zinc-900 pt-3">
                        <div className="h-1" />

                        <div className="flex justify-between">
                            <span className="text-zinc-500">Role</span>
                            <span className="text-zinc-300">{hero.role}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-zinc-500">Location</span>
                            <span className="text-zinc-300">{hero.location}</span>
                        </div>
                    </div>
                </div>


                <div className="border border-zinc-800 bg-zinc-900/20 p-5">
                    <div className="text-[10px] text-zinc-600 font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-1 h-1 bg-zinc-500 rounded-full" />
                        NAV_UPLINK
                    </div>
                    <div className="flex flex-col gap-1">
                        {[
                            { label: 'Work_Modules', id: 'work' },
                            { label: 'Implementation_Designs', id: 'blueprints' },
                            { label: 'Work_Experience', id: 'skills' },
                            { label: 'Skills_Technology', id: 'arsenal' }
                        ].map((item, i) => (
                            <button
                                key={i}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left text-xs font-mono text-zinc-400 hover:text-[var(--terminal-green)] hover:bg-zinc-900/50 py-1.5 px-2 border-l-2 border-transparent hover:border-[var(--terminal-green)] transition-all flex justify-between group/nav"
                            >
                                <span>{item.label}</span>
                                <span className="opacity-0 group-hover/nav:opacity-100 transition-opacity">&gt;&gt;</span>
                            </button>
                        ))}
                    </div>
                </div>


                <div className="flex-grow flex flex-col justify-end">
                    <div className="border border-zinc-800 bg-zinc-900/10 p-5">
                        <div className="text-[10px] text-zinc-600 font-mono mb-3 uppercase tracking-widest flex items-center gap-2">
                            <div className="w-1 h-1 bg-zinc-500 rounded-full" />
                            DATA_RETRIEVAL
                        </div>

                        <a
                            href={hero.resumeLink || "#"}
                            download
                            className="flex items-center justify-between w-full p-3 border border-zinc-700 hover:border-[var(--terminal-green)] bg-zinc-900 hover:bg-[var(--terminal-green)]/10 text-zinc-300 hover:text-[var(--terminal-green)] transition-all group"
                        >
                            <div className="flex flex-col text-left">
                                <span className="text-xs font-bold font-mono">DOWNLOAD_RESUME</span>
                                <span className="text-[9px] text-zinc-500 group-hover:text-[var(--terminal-green)]/70">.PDF // ENCRYPTED</span>
                            </div>
                            <span className="text-lg opacity-50 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all">↓</span>
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan-fast {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(500%); }
                }
                .animate-scan-fast {
                    animation: scan-fast 2s linear infinite;
                }
            `}</style>
        </aside>
    );
};

export default SystemStatus;
