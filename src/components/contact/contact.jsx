"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen w-full bg-gradient-to-b from-purple-900 to-yellow-500 text-white flex flex-col justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Profile & Socials */}
        <motion.div
          className="flex flex-col items-center justify-center text-center space-y-6 px-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/profile.jpg"
            alt="profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-lg max-w-xs">
            Feel free to reach out for collaborations, projects, or just a tech chat!
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Atharva252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-indigo-300 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/atharva-bhintade-40ba6a270/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-indigo-300 transition" />
            </a>
            <a href="mailto:atharvabhintade@gmail.com">
              <FaEnvelope className="text-3xl hover:text-indigo-300 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
            Contact Me
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
