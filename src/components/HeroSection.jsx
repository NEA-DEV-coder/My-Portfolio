import heroImg from "../assets/images/pro-image.png";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/variants";

const HeroSection = () => {
  return (
    <motion.section
      id="about"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative py-5 bg-[#111827] overflow-hidden scroll-mt-24"
    >
      <div
        className="absolute right-[-250px] top-[-150px] w-[800px] h-[800px] rounded-full blur-[140px]"
        style={{
          background: `
        radial-gradient(circle at center,
        #3b82f6 0%,
        #8b5cf6 25%,
        #7c3aed 45%,
        #4f46e5 65%,
        #1e1b4b 80%,
        transparent 100%)
      `,
        }}
      />
      <div
        className="absolute left-[-200px] bottom-[-200px] w-[700px] h-[700px] rounded-full blur-[160px] opacity-40"
        style={{
          background: `
        radial-gradient(circle,
        #2563eb 0%,
        #9333ea 40%,
        transparent 75%)
      `,
        }}
      />

      <div
        className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px]
       bg-blue-500 opacity-30 blur-[120px] rounded-full"
      ></div>
      <div
        className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px]
       bg-purple-600 opacity-25 blur-[120px] rounded-full"
      ></div>
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div>
          <h1 className="text-5xl font-bold text-white">Ebuka Nwafor</h1>

          <p className="text-blue-400 text-xl mt-4">Front-End Developer</p>

          <p className="text-gray-300 mt-6 max-w-lg">
            Building interactive & responsive web experiences.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white">
              <a href="#projects">View Projects</a>
            </button>

            <button className="px-6 py-3 border border-gray-500 hover:border-blue-400 transition rounded-lg text-gray-300">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 relative flex justify-center items-center">
          {/* Inner Glow Behind Image */}
          <div
            className="absolute w-[450px] h-[450px] rounded-full blur-[120px] opacity-60"
            style={{
              background: `
        radial-gradient(circle,
        #3b82f6 0%,
        #8b5cf6 40%,
        transparent 70%)
      `,
            }}
          ></div>

          {/* Glass Frame */}
          <div className="relative p-3 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={heroImg}
              alt="Ebuka"
              className="w-[350px] lg:w-[420px] rounded-2xl relative z-10 drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
