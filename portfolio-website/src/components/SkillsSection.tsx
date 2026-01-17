import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚡" },
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "📜" },
      { name: "PHP", icon: "🐘" },
      { name: ".Net", icon: "🔷" },
    ],
  },
  {
    title: "Data Science & AI/ML",
    skills: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "Keras", icon: "🔥" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Matplotlib", icon: "📈" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "Tailwind CSS", icon: "💨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "Flask", icon: "🌶️" },
    ],
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", icon: "🗄️" },
      { name: "SQLite", icon: "📦" },
      { name: "Mongoose", icon: "🍃" },
      { name: "Git", icon: "📂" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with to build amazing projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:neon-glow transition-all duration-500"
            >
              <h3 className="text-xl font-heading font-semibold text-center mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-badge flex items-center gap-2 cursor-default"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
