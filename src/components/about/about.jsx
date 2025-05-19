"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[url('/about_background.jpg')] bg-cover bg-center bg-no-repeat text-white px-6 py-20"
    >
      <div className="bg-black/70 backdrop-blur-sm min-h-full w-full px-6 py-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I am currently a final-year BSc IT student with a strong passion for developing intelligent and accessible software solutions. My expertise spans full-stack web development, machine learning, and cybersecurity. One of my key projects, Botanical Eye, is an AI-powered plant disease detection system that includes voice assistance and visual feedback to help users, including those with visual impairments. Beyond technical skills, I have conducted cybersecurity awareness workshops, led teams as an NSS leader, and actively participated in various technical competitions. Whether working on real-time chat applications, AI-driven assistants, or visually appealing portfolios, I strive to create technology that is both powerful and user-friendly, aiming to blend innovation with inclusivity and practical impact.
        </motion.p>
      </div>
    </section>
  );
}