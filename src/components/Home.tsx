import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Text } from "./text";
import { useLanguage } from '../context/LanguageContext';

export const Home = ({ onNavigate }: { onNavigate: () => void }) => {
  const { text, locale } = useLanguage();
  const infoData = text.home;

  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    fetch("/logo.svg")
      .then((res) => res.text())
      .then((svgText) => {
        if (logoContainerRef.current) {
          logoContainerRef.current.innerHTML = svgText;
          setLogoLoaded(true);
        }
      })
      .catch((err) => console.error("Error loading SVG image:", err));
  }, []);

  useEffect(() => {
    if (!logoLoaded || !logoContainerRef.current) return;

    const logoShapes = logoContainerRef.current.querySelectorAll(
      "path, line, polyline, polygon, circle, rect, ellipse"
    );

    logoShapes.forEach((shape: any) => {
      const length = shape.getTotalLength ? shape.getTotalLength() : 500;
      shape.style.strokeDasharray = length;
      shape.style.strokeDashoffset = length;
      shape.style.fill = "transparent";
      
      if (!shape.getAttribute('stroke')) {
        shape.style.stroke = "currentColor";
      }
    });

    logoContainerRef.current.classList.add("text-slate-950");

    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(logoShapes, {
      strokeDashoffset: 0,
      duration: 2.2,
      ease: "power2.inOut",
      stagger: 0.15,
    });

    tl.to(logoShapes, {
      fill: "#059669",
      duration: 1,
      ease: "power1.out",
    }, "-=0.6"); 

    return () => {
      tl.kill();
    };
  }, [logoLoaded]);

  return (
    <div className="py-12 px-4 max-w-2xl text-center flex flex-col items-center justify-center gap-6">
      
      <div 
        ref={logoContainerRef} 
        className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-2"
      />

      <Text key={locale} staggerDelay={150}>
        <h1 className="text-4xl font-extrabold text-slate-950 tracking-tight sm:text-5xl mb-4">
          {infoData.title}
        </h1>

        <h2 className="text-xl font-semibold text-emerald-600 mb-6">
          {infoData.subtitle}
        </h2>

        <p className="text-base text-slate-600 leading-relaxed mb-8">
          {infoData.description}
        </p>

        <div className="px-4 flex gap-4 justify-center">
          <a
            onClick={onNavigate}
            href="#projects"  
            className="px-6 py-3 border-2 border-emerald-600 text-emerald-400 font-medium rounded-lg hover:bg-emerald-600/10 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0">
            {infoData.button1}
          </a>
          <a 
            onClick={onNavigate} 
            href="#contact"
            className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-700 transition-colors cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0">
            {infoData.button2}
          </a>
        </div>
      </Text>
    </div>
  );
};