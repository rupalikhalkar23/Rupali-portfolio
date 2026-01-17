import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const filters = ["ALL", "AI/ML", "WEB APPS"];

const projects = [
  {
    title: "AgroShop",
    category: "WEBSITE",
    description: "Built an agricultural e-commerce platform with separate User and Admin panels. Integrated weather, subsidies, market prices, product ordering, cart, and ratings.",
    image: "src/assets/frontpage-agro.png",
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    date: "Sept 2024 – Nov 2024",
    githubLink: "https://github.com/rupalikhalkar23",
  },
  {
    title: "NagarSathi: Civic Issue Reporting App",
    category: "WEB APPS",
    description: "a civic issue reporting system enabling citizens to report and track local municipal issues, improving communication between the public and authorities.",
    image: "src/assets/frontpage-nagar.png",
    techStack: ["Flask", "react", "MongoDB", "Tailwind CSS"],
    date: "2025",
    githubLink: "https://github.com/rupalikhalkar23",
  },
  {
    title: "CollegeKart: E-commerce Website",
    category: "WEBSITES",
    description: "CollegeKart is a simple platform that brings essential college resources and services into one place, making student life easier and more organized.",
    image: "src/assets/frontpage-collegekart.png",
    techStack: ["react", "MongoDB","Express","Tailwind CSS"],
    date: "2025",
    githubLink: "https://github.com/rupalikhalkar23",
  },
  {
    title: "AI-Generated Image Detector",
    category: "AI/ML",
    description: "Built a CNN-based model to classify real vs. AI-generated images with high accuracy. Developed a Flask web app for real-time image upload and detection.",
    image: "src/assets/frontpage-aidetect.png",
    techStack: ["Python", "TensorFlow", "Flask", "CNN"],
    date: "2025",
    githubLink: "https://github.com/rupalikhalkar23",
  },
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "ALL" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading gradient-text">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I have worked on various projects ranging from AI/ML applications to full-stack web development. Here are some of my featured projects.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${
                activeFilter === filter ? "filter-btn-active" : "filter-btn-inactive"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl overflow-hidden project-card group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary mb-3">{project.date}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Code Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
