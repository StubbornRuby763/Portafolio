import { useLanguage } from '../context/LanguageContext'; 

export const SelectLanguage = () => {
    const { locale, changeLanguage } = useLanguage();

    const availableLanguages = [
        { code: 'es', label: 'ESP' },
        { code: 'en', label: 'ENG' },
        { code: 'fr', label: 'FRA' }
    ] as const;

    return (
        <div className="flex gap-2">
            {availableLanguages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`text-sm transition-all duration-200 cursor-pointer ${
                        locale === lang.code 
                        ? 'font-bold text-emerald-600 underline decoration-2 underline-offset-4' 
                        : 'font-normal text-slate-400 hover:text-slate-600'
                    }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};