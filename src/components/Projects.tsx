interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export function Project({ title, description, technologies, link, image }: ProjectProps) {
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
    <div className="sm:px-8 mt-16 sm:mt-20">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              Projects
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              I've worked on a variety of projects, from mobile apps to web applications. Here are a few that I'm proud of.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Project
                title="SCC App"
                description="Mobile application for Sunshine Coast Council focused on enhancing community engagement and service accessibility."
                technologies={["React Native", "TypeScript", "AWS"]}
              />
              <Project
                title="FebFifty"
                description="A fitness challenge platform to encourage participants to run 50km in February while raising money for charity."
                technologies={["React", "Node.js", "MongoDB"]}
                link="https://febfifty.com"
              />
              <Project
                title="AI Development Tools"
                description="Suite of developer tools leveraging AI to streamline code review, documentation, and testing processes."
                technologies={["Python", "OpenAI API", "DevOps"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
