import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile_photo.png";

const roles = ["Python Developer", "AI/ML Enthusiast", "Full Stack Developer"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(currentRole.slice(0, displayedText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const handleResumeClick = () => {
    window.open("/Rupali_Khalkar_Resume.pdf", "_blank");
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 pb-10"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground mb-2"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4"
            >
              Hi, I am <span className="gradient-text">Rupali Khalkar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 h-8"
            >
              I am a{" "}
              <span className="text-secondary font-medium">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A passionate Computer Engineering student with hands-on experience
              in Python, Data Science, and AI/ML. I specialize in building
              predictive models, full-stack web applications, and applying
              machine learning techniques to solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button
                size="lg"
                onClick={handleResumeClick}
                className="bg-primary hover:bg-primary/90 neon-glow transition-all duration-300 text-primary-foreground font-medium px-8"
              >
                <FileText className="w-5 h-5 mr-2" />
                Check Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50 blur-2xl animate-pulse" />

              {/* Profile ring */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-card overflow-hidden flex items-center justify-center">
                  <img
                    src={profilePhoto}
                    alt="Rupali Khalkar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
