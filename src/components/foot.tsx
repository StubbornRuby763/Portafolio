import { useLanguage } from '../context/LanguageContext';

export const Foot = () => {
  const { text } = useLanguage();

  const footerText = text?.foot || "Lawn Studios © 2026 | Full Stack Development & Automation";

  return (
    <footer className="w-full py-8 text-center text-sm font-medium text-slate-500 bg-slate-100 border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2">
        <span>{footerText}</span>
      </div>
    </footer>
  );
};