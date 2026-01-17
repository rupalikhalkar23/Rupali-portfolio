import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    title: "Python with Data Science & AI/ML Intern",
    company: "Sumago Infotech",
    duration: "Jan 2025 – Jun 2025",
    achievements: [
      "🐍 Gained hands-on experience in Python programming, data analysis, and machine learning.",
      "📊 Worked on building predictive models and applying AI/ML techniques to real-world datasets.",
      "🔬 Developed skills in data preprocessing, visualization, and model evaluation.",
      "🤖 Applied machine learning algorithms to solve practical business problems.",
      "📈 Created data visualizations using Matplotlib and other Python libraries.",
    ],
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Data Analysis"],
  },
  {
    icon: Award,
    title: "Python with Data Science & AI/ML Certification",
    company: "Sumago Infotech",
    duration: "2025",
    achievements: [
      "📚 Completed comprehensive training in Python programming and data science.",
      "🧠 Learned machine learning fundamentals and advanced techniques.",
      "💻 Built predictive models and applied AI/ML techniques to real-world datasets.",
      "📊 Developed expertise in data preprocessing, visualization, and model evaluation.",
    ],
    skills: ["Python", "Machine Learning", "Data Science", "AI/ML", "Deep Learning"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Experience & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and certifications in data science and software development.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow z-10" />

              {/* Content */}
              <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <exp.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                      <p className="text-xs text-primary mt-1">{exp.duration}</p>
                    </div>
                  </div>

                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-semibold text-foreground">Skills:</span>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground mt-4 font-medium">
                    {exp.duration}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
