interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const experience: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Sunshine Coast Tech",
    location: "Sunshine Coast, QLD",
    period: "2018 - Present",
    description: [
      "Lead developer for the SCC mobile application, improving community access to council services",
      "Architected and implemented cloud-based solutions using AWS and Azure",
      "Mentored junior developers and established best practices for the team"
    ],
    skills: ["React", "Node.js", "AWS", "TypeScript", "DevOps"]
  },
  {
    title: "Full Stack Developer",
    company: "Queensland Digital",
    location: "Brisbane, QLD",
    period: "2015 - 2018",
    description: [
      "Developed and maintained multiple web applications for government clients",
      "Implemented responsive designs and progressive web applications",
      "Collaborated with UX designers to improve user experience and accessibility"
    ],
    skills: ["JavaScript", "Python", "Docker", "CI/CD", "MongoDB"]
  },
  {
    title: "Web Developer",
    company: "Brisbane Web Solutions",
    location: "Brisbane, QLD",
    period: "2012 - 2015",
    description: [
      "Created e-commerce solutions for small to medium businesses",
      "Developed custom WordPress themes and plugins",
      "Provided technical support and maintenance for existing clients"
    ],
    skills: ["PHP", "WordPress", "MySQL", "jQuery", "CSS3"]
  }
];

export default experience;