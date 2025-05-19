"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-purple-900 to-yellow-500 text-white flex flex-col items-center justify-center px-4">
      <motion.img
        src="/profile.jpg"
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Hi, I'm <span className="text-red-900">Atharva Prakash Bhintade</span>
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Web Developer 💻",
          2000,
          "MERN Stack Enthusiast 🌐",
          2000,
          "UI/UX Designer 🎨",
          2000,
          "Tech Explorer 🚀",
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="mt-4 text-xl md:text-2xl text-gray-300"
      />

      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="https://github.com/Atharva252" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-indigo-500 transition" />
        </a>
        <a href="https://www.linkedin.com/in/atharva-bhintade-40ba6a270/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-indigo-500 transition" />
        </a>
        <a href="mailto:atharvabhintade@gmail.com">
          <FaEnvelope className="text-3xl hover:text-indigo-500 transition" />
        </a>
      </motion.div>

      <motion.a
        href="#about"
        className="mt-10 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
      >
        View My Work ↓
      </motion.a>
    </section>
  );
}