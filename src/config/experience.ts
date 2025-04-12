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
    title: "Team Lead, Development & Integration",
    company: "Sunshine Coast Council",
    location: "Sunshine Coast, QLD",
    period: "July 2023 - Present",
    description: [
      "Lead a team of 10 developers, implementing DevOps and DevSecOps practices including Continuous Deployment",
      "Developed and launched a cross-platform council application using .NET MAUI, improving user accessibility and engagement",
      "Led complex software development for the TechnologyOne Property & Ratings project, replacing the core enterprise system",
      "Integrated numerous council systems and business processes, including custom-built applications to streamline operations"
    ],
    skills: ["C#", ".NET MAUI", "Azure", "DevOps", "CI/CD", "DevSecOps", "TechnologyOne"]
  },
  {
    title: "General Manager IT and Digital",
    company: "Brand Collective",
    location: "Melbourne, VIC",
    period: "March 2015 - December 2022",
    description: [
      "Led entire IT and digital operations with Infrastructure, Operations and Development teams reporting to the CEO",
      "Architected and developed a cloud-native solution integrating internal enterprise systems with external platforms",
      "Built .NET solution with clean architecture, Function Apps, CosmosDB, ServiceBus and API Management with React frontend",
      "Facilitated real-time processing across multiple channels (eBay, The Iconic, Amazon, Myer) to increase product availability"
    ],
    skills: [".NET", "React", "Azure", "CosmosDB", "ServiceBus", "API Management", "DevOps"]
  },
  {
    title: "Infrastructure Manager",
    company: "Pacific Brands",
    location: "Melbourne, VIC",
    period: "April 2012 - February 2015",
    description: [
      "Managed 11 direct reports across Applications and Retail Support Teams with responsibility for multiple enterprise platforms",
      "Architected and executed comprehensive IT Infrastructure strategy, reducing expenditure by 60%",
      "Negotiated Microsoft Enterprise Agreement including Office 365, Intune and CRM cloud components",
      "Migrated 3000+ users from locally hosted Exchange to Microsoft 365, saving over $300k per annum"
    ],
    skills: ["Infrastructure", "Microsoft 365", "Cloud Migration", "Data Centre", "Vendor Management"]
  }
];

export default experience;