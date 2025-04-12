interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Sunshine Coast App",
    description: "Mobile application for Sunshine Coast Council focused on enhancing community engagement and service accessibility.",
    technologies: ["C#",".NET MAUI", "Azure"],
  },
  {
    title: "FebFifty",
    description: "A fitness challenge platform to encourage participants to run 50km in February while raising money for charity.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://febfifty.com",
  },
  {
    title: "AI Development Tools",
    description: "Suite of developer tools leveraging AI to streamline code review, documentation, and testing processes.",
    technologies: ["Python", "OpenAI API", "DevOps"],
  },
];

export default projects;