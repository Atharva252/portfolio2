"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import to avoid SSR issues
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

const LottieViewer = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1e3c72] to-[#2a5298]">
      
      {/* Layered Backgrounds */}
      <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] opacity-10 bg-cover z-0"></div>
      <div className="absolute inset-0 bg-stars z-0" />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 drop-shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="drop-shadow-2xl"
        >
          <Player
            autoplay
            loop
            src="/animations/developer-wave.json" // Replace with cool Lottie animation
            style={{ height: "320px", width: "320px" }}
          />
        </motion.div>

        <motion.p
          className="mt-6 text-lg md:text-xl opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I build creative digital experiences with code and design.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default LottieViewer;
