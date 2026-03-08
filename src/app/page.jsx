"use client";
import ServiceSetion from "../components/serviceSection/ServiceSection";
import MyWork from "../components/work/MyWork";
import Hero from "../components/hero/Hero";
import SkillsSection from "../components/skills/Skills";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative w-full main-bg-color">
      {/* Smooth scroll container */}
      <div className="scroll-smooth">
        {/* Hero Section - Full Viewport Height */}
        <section className="relative w-full">
          <Hero />
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#b9afa2]/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#b9afa2]/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Service Section */}
        <section className="relative w-full">
          <ServiceSetion />
        </section>

        {/* Skills Section */}
        <section className="relative w-full">
          <SkillsSection />
        </section>

        {/* My Work Section */}
        <section className="relative w-full">
          <MyWork />
        </section>
      </div>
    </main>
  );
}
