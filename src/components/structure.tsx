import { useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { TopBar } from "./topBar";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { AboutUs } from "./AboutUs";
import { Foot } from "./foot";

export const App = () => {
  const { locale } = useLanguage();
  const [navTick, setNavTick] = useState(0);

  const triggerAnimation = () => {
    setNavTick(prev => prev + 1);
  };

  const animationKey = `${locale}-${navTick}`;

  return (
    <div className="scroll-smooth bg-slate-50 min-h-screen">

      <header className="fixed top-0 left-0 w-full z-50">
        <TopBar onNavigate={triggerAnimation} />
      </header>

      <main className="flex flex-col w-full overflow-x-hidden">

        <section id="home" className="w-full min-h-screen md:h-screen flex items-center justify-center bg-emerald-50 pt-20 px-4">
          <Home key={animationKey} onNavigate={triggerAnimation} />
        </section>
        <section id="projects" className="w-full h-auto min-h-screen md:min-h-screen flex items-center justify-center bg-white py-20 md:py-0 px-4">
          <Projects key={animationKey} />
        </section>

        <section id="skills" className="w-full h-auto min-h-screen md:min-h-screen flex items-center justify-center bg-emerald-50 py-20 md:py-0 px-4">
          <Skills key={animationKey} />
        </section>

        <section id="aboutUs" className="w-full h-auto min-h-screen md:min-h-screen flex items-center justify-center bg-white relative py-20 md:py-0 px-4">
          <AboutUs key={animationKey} />
        </section>

        <section id="contact" className="w-full h-auto min-h-screen md:min-h-screen flex items-center justify-center bg-emerald-50 py-20 md:py-0 px-4">
          <Contact key={animationKey} />
        </section>

      </main>

      <footer className="py-6 text-center text-sm text-slate-500 bg-white">
        <Foot/>
      </footer>
    </div>
  );
};