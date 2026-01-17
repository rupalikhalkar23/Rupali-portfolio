import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    institution: "Dr. DY Patil College of Information & Technology",
    degree: "B.E. in Computer Engineering",
    location: "Pune, Maharashtra",
    duration: "2025 – Present (Currently in 2nd Year)",
    grade: "Currently Pursuing",
    description:
      "Currently pursuing Bachelor's degree in Computer Engineering, focusing on software development, data structures, algorithms, and modern programming paradigms. Actively working on projects involving AI/ML and full-stack development.",
  },
  {
    icon: School,
    institution: "Government Polytechnic, Nashik",
    degree: "Diploma in Computer Science",
    location: "Nashik, Maharashtra",
    duration: "Completed 2025",
    grade: "93%",
    description:
      "Completed diploma in Computer Science with distinction, achieving 93% marks. Gained strong foundation in programming, database management, web development, and software engineering principles. Participated in various technical projects and competitions.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading gradient-text">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational journey has equipped me with strong technical foundations and problem-solving skills.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start gap-6 mb-12 ml-4 md:ml-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 md:-left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary neon-glow z-10" />

              {/* Content Card */}
              <div className="flex-1 glass rounded-2xl p-6 hover:neon-glow transition-all duration-500 ml-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <edu.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-secondary mt-1">{edu.location}</p>
                    <p className="text-xs text-primary/80 mt-1">{edu.duration}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary">Grade: </span>
                  <span className="text-sm text-foreground">{edu.grade}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                <p className="text-xs text-muted-foreground mt-4 font-medium">
                  {edu.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
