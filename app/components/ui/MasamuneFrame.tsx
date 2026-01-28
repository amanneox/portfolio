import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface MasamuneFrameProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
    serial?: string;
}

const MasamuneFrame: React.FC<MasamuneFrameProps> = ({ children, title, className = "", serial = "MS-001" }) => {
    const frameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (frameRef.current) {
            // Animate corner borders
            animate(frameRef.current.querySelectorAll('.corner-bolt'), {
                scale: [0, 1],
                rotate: '1turn',
                delay: stagger(100),
                duration: 800
            });

            // Animate main container borders (expand from center)
            // Animate main container borders (expand from center)
            const mainContainer = frameRef.current.querySelector('.main-container');
            if (mainContainer) {
                animate(mainContainer, {
                    opacity: [0, 1],
                    scaleX: [0.95, 1],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });
            }
        }
    }, []);

    return (
        <div ref={frameRef} className={`relative ${className}`}>
            {/* Top Bar with Title */}
            <div className="flex items-end mb-0">
                <div className="bg-zinc-800 text-zinc-100 px-4 py-1.5 text-xs font-bold font-mono tracking-widest clip-path-slant relative z-10">
                    {title}
                </div>
                <div className="h-[2px] bg-zinc-800 flex-grow mb-[2px] relative origin-left animate-grow-width">
                    <div className="absolute right-0 bottom-0 h-1 w-12 bg-[var(--terminal-green)]" />
                </div>
                <div className="text-[10px] font-mono text-zinc-600 px-2 mb-1">
                    S/N: {serial}
                </div>
            </div>

            {/* Main Content Container */}
            <div className="main-container relative border-x-2 md:border-x-4 border-b-2 md:border-b-4 border-zinc-900 bg-zinc-900/30 p-4 md:p-8 opacity-0">
                {/* Corner Bolts */}
                <div className="corner-bolt absolute -top-[6px] -left-[6px] w-6 h-6 border-t-2 border-l-2 border-zinc-600 bg-zinc-950 z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shadow-inner" />
                </div>
                <div className="corner-bolt absolute -top-[6px] -right-[6px] w-6 h-6 border-t-2 border-r-2 border-zinc-600 bg-zinc-950 z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shadow-inner" />
                </div>
                <div className="corner-bolt absolute -bottom-[6px] -left-[6px] w-6 h-6 border-b-2 border-l-2 border-zinc-600 bg-zinc-950 z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shadow-inner" />
                </div>
                <div className="corner-bolt absolute -bottom-[6px] -right-[6px] w-6 h-6 border-b-2 border-r-2 border-zinc-600 bg-zinc-950 z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shadow-inner" />
                </div>

                {/* Technical Markings */}
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-1 h-12 bg-zinc-800 flex flex-col justify-between py-1">
                    <div className="w-full h-[1px] bg-zinc-500" />
                    <div className="w-full h-[1px] bg-zinc-500" />
                    <div className="w-full h-[1px] bg-zinc-500" />
                </div>

                <div className="absolute top-0 right-10 w-[1px] h-full bg-zinc-800/50 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </div>

            {/* Bottom Tag */}
            <div className="flex justify-between items-start mt-1">
                <div className="w-32 h-1 bg-zinc-800 clip-path-slant-reverse" />
                <div className="text-[9px] text-zinc-700 font-mono tracking-[0.2em] uppercase">
                    Industrial Standard // 2026
                </div>
            </div>

            <style jsx>{`
                .clip-path-slant {
                    clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
                }
                .clip-path-slant-reverse {
                    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
                }
                @keyframes grow-width {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
                .animate-grow-width {
                    animation: grow-width 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default MasamuneFrame;
