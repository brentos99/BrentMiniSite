interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Sunshine Coast Council App",
    description: "A cross-platform mobile application using .NET MAUI for iOS and Android that improves user accessibility and engagement by integrating with existing systems, providing bin day reminders, disaster alerts, service requests, and more.",
    technologies: ["C#", ".NET MAUI", "Azure", "DevOps", "CI/CD", "TechnologyOne"],
    image: "/images/scc-app.png",
    link: "https://www.sunshinecoast.qld.gov.au/council/contact-council/site-help/scc-app",
  },
  {
    title: "Brand Collective eCommerce Integration",
    description: "A scalable cloud-native solution that seamlessly integrated enterprise systems with external platforms to enable real-time processing of orders, sales, customer and inventory updates across multiple channels including eBay, The Iconic, Amazon, and Myer.",
    technologies: [".NET", "React", "Azure", "CosmosDB", "ServiceBus", "API Management", "Function Apps"],
    image: "/images/utopia.png",
  },
  {
    title: "TechnologyOne Property & Ratings",
    description: "Led the complex software development for replacing the core enterprise system and integrating numerous council systems and business processes, including the custom-built Development.I application, to streamline operations and enhance data accuracy.",
    technologies: [".NET", "C#", "SQL Server", "TechnologyOne", "Integration", "DevOps"],
    image: "/images/t1.png",
  },
  {
    title: "Microsoft 365 Migration",
    description: "Migrated over 3000 users from locally hosted Exchange 2007 including over 14TB of data to Microsoft 365, saving the business over $300k per annum while implementing modern collaboration tools.",
    technologies: ["Microsoft 365", "Exchange", "Azure", "Cloud Migration", "PowerShell"],
    image: "/images/m365.png",
  },
];

export default projects;