import projects from "../config/projects";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

function ProjectCard({ title, description, technologies, link, image }: ProjectProps) {
  return (
    <div className="group relative flex flex-col items-start">
      {image && (
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <img src={image} alt="" className="h-8 w-8" />
        </div>
      )}
      <h2 className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        {link ? (
          <a 
            className="hover:text-teal-500 dark:hover:text-teal-400" 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute inset-0 z-20"></span>
            {title}
          </a>
        ) : (
          title
        )}
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div id="projects" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
            I've worked on a variety of projects, from mobile apps to web applications. Here are a few that I'm proud of.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
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
                <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-50 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
