"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "animejs";

interface AnimatedTextProps {
    children: string;
    className?: string;
    speed?: number;
    delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, className, speed = 50, delay = 0 }) => {
    const elementRef = useRef<HTMLSpanElement>(null);
    const originalText = children;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

    useEffect(() => {
        if (!elementRef.current) return;

        const animation = {
            value: 0
        };

        animate(animation, {
            value: 100,
            duration: originalText.length * speed,
            easing: 'linear',
            delay: delay,
            update: (anim: any) => {
                if (!elementRef.current) return;
                const progress = Math.floor((animation.value / 100) * originalText.length);
                const currentText = originalText
                    .split('')
                    .map((char, index) => {
                        if (index < progress) return char;
                        if (char === ' ') return ' ';
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');

                elementRef.current.innerText = currentText;
            },
            complete: () => {
                if (elementRef.current) elementRef.current.innerText = originalText;
            }
        });

    }, [originalText, speed, delay]);

    return <span ref={elementRef} className={className}>{originalText}</span>;
};

export default AnimatedText;
