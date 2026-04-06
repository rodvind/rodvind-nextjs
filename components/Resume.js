import Image from "next/image";
import Tools from "./Tools";

const experience = [
  {
    company: "Improving",
    role: "Senior Full-Stack Consultant / AI-Augmented Modernization Architect",
    date: "Aug 2022 – Present",
    bullets: [
      "Led the end-to-end modernization of a legacy monolith into a modular, domain-driven microservices ecosystem spanning Vue 3/TypeScript frontend and .NET backend services",
      "Designed a layered, module-centric frontend architecture (Pinia state management, API service abstraction, strongly-typed DTOs, composables) enforcing clear domain boundaries",
      "Architected containerized infrastructure using Docker Compose with automated service orchestration, database lifecycle management, NGINX routing, and versioned image delivery via GitLab Container Registry",
      "Established contract-first API governance with backend engineers, ensuring strict alignment between frontend and service models",
      "Integrated AI-assisted development tools (GitHub Copilot, Cursor AI) across the SDLC — accelerating code generation, architecture exploration, refactoring, and merge request reviews",
      "Trained engineers, Product Owners, and PMs on AI-assisted development practices, prompt engineering, and responsible AI usage guidelines",
      "Drove Agile delivery using Scrum, contributed to GitLab CI/CD automation, and established frontend testing strategy with Vitest",
      "Mentored junior developers in modern frontend architecture, microservices integration, and delivery practices",
    ],
  },
  {
    company: "Improving",
    role: "Lead Frontend Engineer",
    date: "Feb 2022 – Aug 2022",
    bullets: [
      "Developed customer-facing website and landing pages using React, TypeScript, and MUI, translating client requirements into production features",
      "Collaborated with backend engineers to develop and optimize APIs; built data visualizations using nivo and Victory",
      "Implemented end-to-end test coverage using Cypress and delivered features within sprint cadence",
    ],
  },
  {
    company: "EECOL Electric",
    role: "Full-Stack Developer",
    date: "May 2019 – Feb 2022",
    bullets: [
      "Designed and built the company e-commerce platform using Gatsby, React, and AWS; led the POC phase as acting PM",
      "Developed integration APIs bridging MuleSoft with IBM AS400 for order processing",
      "Built an order entry application using Xamarin and Python, streamlining field operations",
      "Planned and executed enterprise GitHub migration, authored deployment standards for testing, staging, and production",
      "Mentored developers on AWS services and Git workflows; introduced Agile methodology to the team",
    ],
  },
  {
    company: "ReWatt Power",
    role: "Full-Stack Developer",
    date: "Dec 2018 – May 2019",
    bullets: [
      "Built platform features using React frontend with PHP and Node.js backends",
      "Implemented CI/CD pipeline with Travis CI for automated testing and deployment to staging and production",
      "Integrated ZenHub with GitHub for sprint-based ticket management",
    ],
  },
  {
    company: "Cenovus Energy",
    role: "Engineering Information Management Technician",
    date: "Jun 2014 – May 2019",
    bullets: [
      "Collaborated with vendor to develop an enterprise document management system (EDMS) using Java",
      "Managed 2,000+ Management of Change projects across engineering operations",
      "Planned and executed multi-stage data migration from Microsoft Access to SQL Server to AWS",
    ],
  },
];

const education = [
  { school: "University of Calgary", degree: "B.Sc. Computer Science", date: "2015 – 2019" },
  { school: "Wageningen University", degree: "M.Sc. Plant Biotechnology", date: "2012 – 2013" },
];

export default function Resume() {
  return (
    <section id="my_work" className="py-6 sm:py-8 px-4 sm:px-6 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        {/* Certifications */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full sm:w-36 shrink-0">
            <span className="border-b-2 border-[#3b82f6] pb-2 text-sm text-slate-800 tracking-wider uppercase">CERTIFICATIONS</span>
          </div>
          <div className="flex-1 min-w-0">
            <a href="https://www.credly.com/badges/9cbf6658-9301-4380-9bc9-6f20277f1d1f/public_url" target="_blank" rel="noopener noreferrer" className="inline-block mr-4 mb-2">
              <Image src="/static/aws-certified-solutions-architect-associate.png" alt="AWS Solutions Architect Associate" width={80} height={80} className="h-20 w-auto max-w-full" />
            </a>
            <a href="https://www.credly.com/badges/727fab06-deac-464d-9054-584cdd10d84c/public_url" target="_blank" rel="noopener noreferrer" className="inline-block mr-4 mb-2">
              <Image src="/static/aws-certified-developer-associate.png" alt="AWS Certified Developer Associate" width={80} height={80} className="h-20 w-auto max-w-full" />
            </a>
            <a href="https://www.credly.com/badges/debc0506-c300-4f21-8331-0ff07cf4a6f6/public_url" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image src="/static/project-management-professional-pmp.png" alt="PMP" width={80} height={80} className="h-20 w-auto max-w-full" />
            </a>
          </div>
        </div>

        <hr className="border-slate-200 my-6" />

        {/* Experience */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full sm:w-36 shrink-0">
            <span className="border-b-2 border-[#3b82f6] pb-2 text-sm text-slate-800 tracking-wider uppercase">EXPERIENCE</span>
          </div>
          <div className="flex-1 min-w-0 pl-6 border-l-2 border-slate-200">
            {experience.map((job, i) => (
              <div key={i} className={`relative pl-4 ${i < experience.length - 1 ? "pb-6" : ""}`}>
                <div className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-white" />
                <div className="flex flex-col gap-0.5">
                  <strong className="font-sans text-lg text-slate-800">{job.company}</strong>
                  <span className="text-slate-600 italic">{job.role}</span>
                  <span className="text-sm text-slate-500">{job.date}</span>
                  <ul className="mt-2 pl-5 list-disc text-slate-600 text-[0.92rem] leading-relaxed space-y-1">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-200 my-6" />

        {/* Education */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full sm:w-36 shrink-0">
            <span className="border-b-2 border-[#3b82f6] pb-2 text-sm text-slate-800 tracking-wider uppercase">EDUCATION</span>
          </div>
          <div className="flex-1 min-w-0 space-y-4">
            {education.map((edu, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <strong className="font-sans text-lg text-slate-800">{edu.school}</strong>
                <span className="text-slate-600 italic">{edu.degree}</span>
                <span className="text-sm text-slate-500">{edu.date}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-200 my-6" />

        {/* Toolset */}
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-36 shrink-0">
            <span className="border-b-2 border-[#3b82f6] pb-2 text-sm text-slate-800 inline-block tracking-wider uppercase">MY TOOLSET</span>
          </div>
          <div className="flex-1 min-w-0">
            <Tools />
          </div>
        </div>
      </div>
    </section>
  );
}
