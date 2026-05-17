import { createContext, useState, useContext } from 'react';
import es from '../../Text/es.json';
import en from '../../Text/en.json';
import fr from '../../Text/fr.json';

const languages = { es, en, fr };

type Locale = 'en' | 'es' | 'fr';

const LanguageContext = createContext<{
    locale: Locale;
    changeLanguage: (newLocale: Locale) => void;
    text: typeof es;
} | undefined>(undefined); 

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocale] = useState<Locale>('en'); 

    const changeLanguage = (newLocale: Locale) => {
        if (languages[newLocale]) {
            setLocale(newLocale);
        }
    };

    const value = {
        locale,
        changeLanguage,
        text: languages[locale]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
    }
    return context;
};