"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Botanical Eye",
    description: "AI-powered plant disease detection system with voice assistant integration.",
    link: "https://github.com/Atharva252/plant-_disease_detection-Botanical_eye-",
  },
  {
    title: "Ai- Assistant for Health Checker",
    description: "AI-powered Health Checker Assistant system using dataset",
    link: "https://github.com/Atharva252/Ai-_Assistant_for_Health_care",
  },
  {
    title: "PRODIGY_WD_01",
    description: "HTML-based project showcasing fundamental web layout and structure.",
    link: "https://github.com/Atharva252/PRODIGY_WD_01",
  },
  {
    title: "PRODIGY_WD_02",
    description: "CSS project demonstrating responsive design and custom styling.",
    link: "https://github.com/Atharva252/PRODIGY_WD_02",
  },
  {
    title: "PRODIGY_WD_05",
    description: "Advanced CSS project focused on layout techniques and animations.",
    link: "https://github.com/Atharva252/PRODIGY_WD_05",
  },
];

const Projects = () => {
  return (
    <section className="p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-2">{project.description}</p>
            <a
              href={project.link}
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
