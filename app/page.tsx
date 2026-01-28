"use client";
import LatestUpdates from "./components/sections/LatestUpdates";
import FeaturedWork from "./components/sections/FeaturedWork";
import ImplementationDesigns from "./components/sections/ImplementationDesigns";
import Footer from "./components/sections/Footer";

import SkillTree from "./components/sections/SkillTree";
import SystemArsenal from "./components/sections/SystemArsenal";

import SystemStatus from "./components/ui/SystemStatus";
import MasamuneFrame from "./components/ui/MasamuneFrame";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 text-zinc-300 relative bg-[#050505] selection:bg-[var(--terminal-green)] selection:text-black">

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 max-w-[1800px] mx-auto">


        <SystemStatus />


        <div className="flex-grow flex flex-col gap-16 min-w-0 pt-4">

          <header className="flex justify-between items-end border-b-2 border-zinc-800 pb-2">
            <div>
              <div className="text-[10px] text-zinc-500 font-mono tracking-widest">
                PORTFOLIO_V2 // {new Date().getFullYear()}
              </div>
            </div>

            <nav className="flex gap-6 items-center pb-1">
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src="/icons/social_0.png" alt="X" className="relative w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src="/icons/social_1.png" alt="GH" className="relative w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" className="group relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src="/icons/social_2.png" alt="LI" className="relative w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              </a>
            </nav>
          </header>

          <div id="work" className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="p-4 border border-zinc-800 bg-zinc-900/10">
              <LatestUpdates />
            </div>
            <div>
              <FeaturedWork />
            </div>
          </div>

          <section id="blueprints">
            <ImplementationDesigns />
          </section>

          <section id="skills">
            <MasamuneFrame title="CAREER_PATH // EXPERIENCE" serial="EXP-001" className="mb-0">
              <SkillTree />
            </MasamuneFrame>
          </section>

          <section id="arsenal">
            <SystemArsenal />
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
}
