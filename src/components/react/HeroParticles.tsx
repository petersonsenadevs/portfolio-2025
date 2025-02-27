import React, { useEffect, useState, useRef } from "react";
import { useStore } from "@nanostores/react";
import { currentLang } from "../../i18n/store";
import { translations } from "../../i18n/translations";
import LanguageSync from "../react/LanguageSync";

declare global {
  interface Window {
    particlesJS: any;
  }
}

const HeroParticles: React.FC = () => {
  const lang = useStore(currentLang);
  const [isMounted, setIsMounted] = useState(false);
  const particlesContainer = useRef<HTMLDivElement>(null); // Reference to the container

  const initParticles = () => {
    if (
      window.particlesJS && 
      particlesContainer.current // Cheeck if the reference exists
    ) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 40, density: { enable: true, value_area: 900 } },
          color: { value: "#0792d1" },
          shape: { type: "edge", stroke: { width: 1, color: "#0792d1" } },
          opacity: { value: 0.6, random: true },
          size: { value: 15, random: true },
          line_linked: { enable: true, distance: 150, color: "#0792d1", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2, random: true, out_mode: "out" },
        },
        interactivity: {
          detect_on: "window",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
          modes: { grab: { distance: 150, line_linked: { opacity: 0.8 } } },
        },
        retina_detect: true,
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Clean up particles.js
      if (particlesContainer.current) {
        particlesContainer.current.innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    if (isMounted) { // Only run if the component is mounted
      if (!window.particlesJS) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
        script.async = true;
        script.onload = initParticles;
        document.body.appendChild(script);
      } else {
        initParticles();
      }
    }
  }, [isMounted]); // Dependencies array

  if (!isMounted) return null;

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <LanguageSync />
      <div 
        id="particles-js" 
        ref={particlesContainer} // Assign the reference
        className="absolute inset-0 z-0 w-full" 
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6">
        {translations.hero.title[lang]}
      </h1>
      <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-8 text-gray-400 dark:text-gray-600">
        {translations.hero.subtitle[lang]}
      </p>
      <div className="flex justify-center gap-8">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="px-8 py-3 bg-[color:var(--color-primary)] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          {translations.hero.buttons.contact[lang]}
        </button>
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="px-8 py-3 border-2 border-[color:var(--color-primary)] text-[color:var(--color-primary)] text-sm font-medium  rounded-lg hover:bg-white/20 transition-colors"
        >
          {translations.hero.buttons.projects[lang]}
        </button>
      </div>
    </div>
    <style>{`
      #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #06d1ff, #053046, #4169e1);
      }

      [data-theme="light"] #particles-js {
        background: linear-gradient(135deg, #a0c4ff, #c0eaff, #f0f9ff);
      }
    `}</style>
      
    </div>
  );
};

export default HeroParticles;

