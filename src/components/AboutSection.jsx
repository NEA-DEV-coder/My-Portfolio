import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import portImg from "../assets/images/pro-2.png";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 bg-[#111827] overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute left-[-200px] top-[-100px] w-[600px] h-[600px] rounded-full blur-[140px] opacity-20"
        style={{
          background: `
            radial-gradient(circle,
            #3b82f6 0%,
            #8b5cf6 50%,
            transparent 80%)
          `,
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-6">
        {/* TOP CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <div className="relative p-4 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl"></div>

              <img
                src={portImg}
                alt="Ebuka"
                className="w-[320px] rounded-2xl relative z-10"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>

            <p className="text-gray-300 leading-relaxed">
              I am a passionate Front-End Developer focused on building
              responsive and interactive web applications using modern
              technologies like React, Tailwind CSS, and JavaScript. I enjoy
              transforming complex problems into clean, user-friendly
              experiences.
            </p>
          </div>
        </div>

        {/* FULL WIDTH SCROLLING SKILLS */}
        <div className="relative mt-20 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#111827] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#111827] to-transparent z-10"></div>

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[1, 2].map((_, index) => (
              <div key={index} className="flex gap-6">
                <Skill
                  icon={<FaReact className="text-[#61DAFB]" />}
                  name="React"
                />
                <Skill
                  icon={<SiTailwindcss className="text-[#38BDF8]" />}
                  name="Tailwind"
                />
                <Skill
                  icon={<FaGitAlt className="text-[#F05032]" />}
                  name="Git"
                />
                <Skill
                  icon={<FaHtml5 className="text-[#E34F26]" />}
                  name="HTML5"
                />
                <Skill
                  icon={<FaCss3Alt className="text-[#1572B6]" />}
                  name="CSS3"
                />
                <Skill
                  icon={<FaJs className="text-[#F7DF1E]" />}
                  name="JavaScript"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => (
  <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-xl min-w-[200px] backdrop-blur-md hover:scale-105 transition">
    <div className="text-3xl">{icon}</div>
    <span className="text-gray-300">{name}</span>
  </div>
);

export default AboutSection;
