import { useLanguage } from "../context/LanguageContext";
import { Text } from "./text";

export const Contact = () => {
  const { text, locale, locals } = useLanguage(); 

  const contactText = text?.Contact;
  const gmail = locals.gmail;
  const insta = locals.insta;
  const discord = locals.discord;

  const SendGmail = () => {
    if (!gmail) return;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${gmail}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-16 flex flex-col items-center justify-center">
      <Text key={locale} staggerDelay={150}>
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-center">
          {text.home.button2}
        </h2>

        <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed text-center">
          {contactText}
        </p>

        <div className="flex flex-wrap justify-center gap-6 items-center w-full">
          <a 
            href={insta}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-slate-200/80 px-5 py-3 rounded-xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group"
          >
            <img src="/assets/insta.svg" alt="Instagram" className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">Instagram</span>
          </a>

          <a 
            href={discord}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white border border-slate-200/80 px-5 py-3 rounded-xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group"
          >
            <img src="/assets/discord.svg" alt="Discord" className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300" />
            <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">Discord</span>
          </a>

          <button
            onClick={SendGmail}
            className="flex items-center gap-3 bg-slate-900 border border-transparent px-5 py-3 rounded-xl shadow-sm hover:bg-slate-800 transition-all duration-300 group relative active:scale-95"
          >
            <img src="/assets/gmail.svg" alt="Gmail" className="w-6 h-6 invert group-hover:invert-0 transition-all duration-300" />
            <span className="text-sm font-semibold text-white">Gmail</span>
          </button>
        </div>

      </Text> 
    </div>
  );
};