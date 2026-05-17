import { useLanguage } from "../context/LanguageContext"; 
import { Text } from "./text";

export const Skills = () => {
  const { text, locale } = useLanguage();

  const { title, description, ...categories } = text.skills;

  const categoryTitles: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Databases",
    stylingUI: "Styling & UI",
    workflowUtils: "Workflow & Utils"
  };

  return (
    <Text key={locale} staggerDelay={150}>
      
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl font-bold text-slate-950 mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-600 text-lg">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {(Object.keys(categories) as Array<keyof typeof categories>).map((key) => {
          const skillList = categories[key];
          
          return (
            <div 
              key={key} 
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200/60 pb-2">
                {categoryTitles[key] || key}
              </h3>

              <div className="flex flex-col gap-3">
                {skillList.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 bg-white border border-slate-200/50 rounded-xl p-2.5 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-slate-50 rounded-lg p-1.5">
                      <img 
                        src={skill.image} 
                        alt={skill.tech} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {skill.tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </Text>
  );
};