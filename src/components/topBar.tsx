import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext"; 
import { SelectLanguage } from "./SelectLanguage";

export const TopBar = ({ onNavigate }: {onNavigate: () => void}) => {
    const { text } = useLanguage();
    const [scrollProgress, setScrollProgress] = useState(0);

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
        <nav className="flex items-center justify-between w-full h-[10vh] shadow-sm bg-white px-6 relative z-10 border-b border-slate-100">

            <div 
                className="absolute bottom-0 left-0 h-[3px] bg-emerald-500 transition-all duration-75 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />

            <div className="flex items-center">
                <a href="#home" onClick={onNavigate} className="hover:opacity-60 transition-opacity">
                    <img src="/assets/logo.svg" alt="Lawn Studios logo" className="w-20 h-20 object-contain"/>
                </a>
            </div>

            <div className="flex items-center gap-6 text-slate-600 font-medium">
                <a 
                    href="#home" 
                    onClick={onNavigate} 
                    className="hover:text-emerald-600 transition-colors"
                >
                    {text.topBar.Home}
                </a>
                
                <a 
                    href="#projects" 
                    onClick={onNavigate} 
                    className="hover:text-emerald-600 transition-colors"
                >
                    {text.topBar.Projects}
                </a>
                
                <a 
                    href="#contact" 
                    onClick={onNavigate} 
                    className="hover:text-emerald-600 transition-colors"
                >
                    {text.topBar.Contact}
                </a>
                
                <span className="text-slate-300">|</span>
                
                <SelectLanguage />
            </div>
        </nav>
    );
};