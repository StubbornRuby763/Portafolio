import { useLanguage } from "../context/LanguageContext"; 
import { Text } from "./text";

export const Projects = () => {
  const { text, locale, locals } = useLanguage();
  
  const { title, description, button, ...allProjects } = text.projects;
  const githubUrl =  locals.github || "https://github.com"; 

  return (
    <div className="flex flex-col items-center w-full px-4">
      <Text key={locale} staggerDelay={150}>        
        
        <div className="text-center max-w-2xl mb-12 mx-auto">
          <h2 className="text-3xl font-bold text-slate-950 mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto mb-12">
          {(Object.keys(allProjects) as Array<keyof typeof allProjects>)
            .filter((key) => typeof allProjects[key] === "object" && allProjects[key] !== null)
            .map((key) => {
              const project = allProjects[key];
              return (
                <a 
                  key={key} 
                  href={project.link || "#"} 
                  target="_blank"             
                  rel="noopener noreferrer"   
                  className="flex flex-col bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 justify-between cursor-pointer hover:-translate-y-1 block"
                >
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <hr className="border-slate-100 mb-4" />
                    <div className="flex flex-wrap gap-3">
                      {project.using?.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 rounded-lg px-2.5 py-1"
                        >
                          <img 
                            src={item.image} 
                            alt={item.tech} 
                            className="w-4 h-4 object-contain" 
                          />
                          <span className="text-xs font-medium text-slate-700 capitalize">
                            {item.tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </a> 
              );
            })}
        </div>

        <div className="flex justify-center w-full mt-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-slate-900 border border-transparent px-6 py-3 rounded-xl shadow-sm hover:bg-slate-800 transition-all duration-300 group active:scale-95 cursor-pointer"
          >
            <img 
              src="/assets/github.svg" 
              alt="GitHub" 
              className="w-6 h-6 invert group-hover:scale-110 transition-transform duration-300" 
            />
            <span className="text-sm font-semibold text-white">
              {text.projects.button} 
            </span>
          </a>
        </div>

      </Text>
    </div>  
  );
};