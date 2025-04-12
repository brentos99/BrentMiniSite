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
    description: "A mobile application designed and developed for Sunshine Coast Council. Provides bin day reminders, disaster alerts, guided walks, service request tracking, and MyCouncil login. Improved backend processes and reduced customer service effort by up to 5 minutes per request.",
    technologies: ["C#", ".NET MAUI", "Azure", "OpenAI API", "T1", "Confirm"],
    image: "/images/scc-app.png",
    link: "https://www.sunshinecoast.qld.gov.au/Living-and-Community/Sunshine-Coast-Mobile-App",
  },
  {
    title: "Utopia eCommerce Middleware",
    description: "A multi-channel integration platform handling over $50M annually in online sales across Magento, BigCommerce, Myer, Amazon, eBay, The Iconic, and Apparel 21. Automated product syncing, sales ingest, inventory management, and return workflows.",
    technologies: ["C#", ".NET", "Azure Functions", "REST APIs", "Apparel 21", "Magento", "Amazon MWS"],
    image: "/images/utopia.png",
  },
  {
    title: "FebFifty",
    description: "A fitness challenge platform encouraging people to run 50km in February while supporting mental health charities. Includes social tracking, GPS map uploads, user feeds, and custom profiles.",
    technologies: ["React", "Vite", "Tailwind", "Node.js", "MongoDB", "Azure"],
    link: "https://febfifty.com",
    image: "/images/febfifty.png",
  },
  {
    title: "AI Development Tools",
    description: "Internal developer tools powered by OpenAI for code summarization, review assistance, automated documentation, and code generation across council systems.",
    technologies: ["Python", "C#", "OpenAI API", "LangChain", "Azure DevOps"],
    image: "/images/ai-tools.png",
  },
];

export default projects;