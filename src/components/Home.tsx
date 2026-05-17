import { Text } from "./text";
import { useLanguage } from '../context/LanguageContext';
export const Home = ({onNavigate}: { onNavigate: () => void }) => {
  const { text, locale } = useLanguage();
  const infoData = text.home;

  return (
    <div className="py-12 px-4 max-w-2xl text-center">
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
              className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-700 transition-colors cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0">
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