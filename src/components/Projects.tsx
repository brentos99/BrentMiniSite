import projects from "../config/projects";

export default function Projects() {
  return (
    <div id="projects" className="py-20 sm:py-28 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            I've worked on a variety of impactful projects spanning mobile, web, and enterprise applications. Here are a few highlights.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center mr-2 mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-3">
                  {project.link ? (
                    <a 
                      className="hover:text-teal-500 dark:hover:text-teal-400" 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400 flex-grow">{project.description}</p>
                
                <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(3).map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <div className="mt-4">
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
