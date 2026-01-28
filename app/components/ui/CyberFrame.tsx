import React from "react";

interface CyberFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    label?: string;
}

const CyberFrame: React.FC<CyberFrameProps> = ({ children, label, className, ...props }) => {
    return (
        <div className={`relative border border-zinc-800 bg-zinc-900/30 p-4 ${className}`} {...props}>
            {/* Notched Corners (Pseudo-elements could work, but SVGs are sharper) */}
            <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-white/50" />
            <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-white/50" />
            <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-white/50" />
            <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-white/50" />

            {/* Label */}
            {label && (
                <div className="absolute -top-3 left-6 bg-[#050505] px-2 text-[10px] text-zinc-500 tracking-widest uppercase border border-zinc-800">
                    {label}
                </div>
            )}

            {children}
        </div>
    );
};

export default CyberFrame;
