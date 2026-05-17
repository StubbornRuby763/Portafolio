import { useLanguage } from '../context/LanguageContext';
import { Text } from "./text";

export const AboutUs = () => {
  const { text, locale } = useLanguage();

  const aboutText = text?.about_Us;

  if (!aboutText) return null;

  return (
    <Text key={locale} staggerDelay={150}>
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-24 text-center">

        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          {aboutText.title}
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {aboutText.description}
        </p>

        <div className="mt-10 inline-block bg-white border border-slate-100 rounded-2xl p-6 shadow-sm max-w-md mx-auto hover:shadow-md transition-shadow duration-300">
          <p className="text-base md:text-lg font-medium text-slate-800 italic">
            "{aboutText.tagline}"
          </p>
        </div>
        <div className="text-right">
          <img src="/assets/kitty.png"
          />
        </div>
      </div>
    </Text>
  );
};