import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; 
import { SelectLanguage } from "./SelectLanguage";

export const TopBar = ({ onNavigate }: {onNavigate: () => void}) => {
    const { text } = useLanguage();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="flex items-center justify-between w-full h-[10vh] shadow-sm bg-white px-4 md:px-6 relative z-50 border-b border-slate-100">
            <div 
                className="absolute bottom-0 left-0 h-[3px] bg-emerald-500 transition-all duration-75 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="flex items-center">
                <a href="#home" onClick={() => { onNavigate(); setIsOpen(false); }} className="hover:opacity-60 transition-opacity">
                    <img src="/assets/logo.svg" alt="Lawn Studios logo" className="w-16 h-16 md:w-20 md:h-20 object-contain"/>
                </a>
            </div>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="block md:hidden text-slate-600 focus:outline-none z-50"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            <div className={`
                fixed md:static top-[10vh] left-0 w-full md:w-auto bg-white md:bg-transparent
                flex flex-col md:flex-row items-center gap-6 p-6 md:p-0 text-slate-600 font-medium
                shadow-md md:shadow-none transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}
                md:flex
            `}>
                <a href="#home" onClick={() => { onNavigate(); setIsOpen(false); }} className="hover:text-emerald-600 transition-colors w-full text-center md:w-auto">
                    {text.topBar.Home}
                </a>
                
                <a href="#projects" onClick={() => { onNavigate(); setIsOpen(false); }} className="hover:text-emerald-600 transition-colors w-full text-center md:w-auto">
                    {text.topBar.Projects}
                </a>
                
                <a href="#contact" onClick={() => { onNavigate(); setIsOpen(false); }} className="hover:text-emerald-600 transition-colors w-full text-center md:w-auto">
                    {text.topBar.Contact}
                </a>
                
                <span className="hidden md:inline text-slate-300">|</span>

                <div className="pt-4 md:pt-0 border-t border-slate-100 md:border-none w-full flex justify-center md:w-auto">
                    <SelectLanguage />
                </div>
            </div>
        </nav>
    );
};