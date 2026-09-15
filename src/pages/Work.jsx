import { usePageMeta } from "../lib/usePageMeta";

export default function Work() {
  usePageMeta(
    "Our Work & Projects",
    "See the technology solutions and projects we've built for clients and the community."
  );

  const projects = [
    {
      id: "irieflow",
      name: "IrieFlow",
      description: "A comprehensive point-of-sale and inventory management system designed for small businesses, featuring offline sync, multi-user support, and comprehensive reporting.",
      techStack: ["React", "Node.js", "SQLite", "Tailwind CSS"],
      githubUrl: "https://github.com/Native-254/irieflow",
      features: [
        "Offline-first capability",
        "Inventory tracking",
        "Sales reporting",
        "Multi-location support",
        "User role management"
      ],
      image: "/src/assets/cash-stack.webp" // Using available asset as placeholder
    },
    {
      id: "irietrade",
      name: "IrieTrade",
      description: "An automated NYSE trading bot that implements algorithmic trading strategies with risk management, backtesting capabilities, and real-time market analysis.",
      techStack: ["Python", "Pandas", "TA-Lib", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/Native-254/IrieTrade",
      features: [
        "Automated trading strategies",
        "Risk management controls",
        "Backtesting engine",
        "Real-time market data",
        "Performance analytics"
      ],
      image: "/src/assets/wire-cart.webp" // Using available asset as placeholder
    },
    {
      id: "makinidrivingschool",
      name: "Makini Driving School Management",
      description: "A complete management system for driving schools featuring student tracking, lesson scheduling, payment processing, and exam preparation tools.",
      techStack: ["Vue.js", "Express.js", "MongoDB", "Vuetify"],
      githubUrl: "https://github.com/Native-254/makinidrivingschool",
      features: [
        "Student enrollment & tracking",
        "Lesson & instructor scheduling",
        "Payment processing",
        "Exam management",
        "Progress reporting"
      ],
      image: "/src/assets/books-stack.webp" // Using available asset as placeholder
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
      <p className="mono-eyebrow text-yolk mb-2">Our Work</p>
      <h1 className="font-display font-black text-4xl md:text-5xl text-paper max-w-2xl">
        Technology Solutions We've Built
      </h1>
      <p className="mt-4 text-steel max-w-xl leading-relaxed">
        Explore the projects and solutions we've developed to solve real-world
        problems for businesses, individuals, and educational institutions.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="bg-ink2 border border-line rounded-md overflow-hidden shadow-hover flex flex-col h-full"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={`${project.name} illustration`}
                className="w-full h-48 object-cover"
              />
              {/* GitHub Ribbon */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 text-xs font-mono text-yolk/70 hover:text-yolk"
              >
                View on GitHub
              </a>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h2 className="font-display font-black text-xl mb-3">{project.name}</h2>
              <p className="text-ink/60 flex-1 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <p className="mono-eyebrow text-yolk mb-1">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-yolk/20 text-yolk px-2 py-1 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-5">
                <p className="mono-eyebrow text-yolk mb-1">Key Features</p>
                <ul className="space-y-2 text-ink/60">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-0.5">
                        ◆
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub Button */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 border border-line text-paper font-mono px-4 py-2 rounded-sm hover:border-yolk hover:text-yolk transition-colors"
              >
                View Project on GitHub <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <p className="text-ink/60 max-w-md mx-auto">
          Interested in a custom technology solution for your business or
          organization? Let's discuss how we can build something tailored to
          your specific needs.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-yolk text-ink font-mono font-bold px-5 py-3 rounded-sm hover:bg-paper transition-colors"
        >
          Discuss Your Project <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}