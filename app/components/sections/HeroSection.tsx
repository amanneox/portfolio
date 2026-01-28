import React from "react";
import AnimatedText from "../ui/AnimatedText";
import { useContentStore } from "../../store/contentStore";

const HeroSection: React.FC = () => {
    const { name, role, skills } = useContentStore(state => state.hero);

    return (
        <section className="mb-16">
            {/* Name & Intro */}
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2 hud-text">
                    <AnimatedText speed={30}>{name}</AnimatedText>
                </h1>
                <p className="text-lg text-zinc-400">
                    {role}
                </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span
                        key={skill}
                        className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-zinc-700 text-zinc-400 hover:border-[var(--terminal-green)] hover:text-[var(--terminal-green)] transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {/* Resume Download */}
            <div className="mt-8">
                <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-cyan-400 uppercase tracking-widest group transition-colors"
                >
                    <span className="w-2 h-2 bg-zinc-800 group-hover:bg-cyan-400 transition-colors" />
                    [ resume_download ]
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
