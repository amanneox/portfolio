import React from "react";

interface SystemTextProps {
    children: React.ReactNode;
    glitch?: boolean;
    className?: string;
}

const SystemText: React.FC<SystemTextProps> = ({ children, glitch, className }) => {
    return (
        <span className={`${glitch ? 'glitch-hover cursor-crosshair' : ''} ${className}`}>
            {children}
        </span>
    );
};

export default SystemText;
