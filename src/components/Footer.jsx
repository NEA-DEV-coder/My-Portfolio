import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Tech Stack",
      href: "#tech-stack",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <footer className="relative bg-[#0f172a] border-t border-white/10 overflow-hidden">
      {/* Subtle Glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[-200px] w-[600px] h-[600px] rounded-full blur-[160px] opacity-10"
        style={{
          background: `
            radial-gradient(circle,
            #3b82f6 0%,
            #8b5cf6 50%,
            transparent 80%)
          `,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">Ebuka Nwafor</h3>
            <p className="text-gray-400 mt-4 max-w-sm">
              Front-End Developer passionate about building interactive and
              scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="gap-2 text-gray-400 grid lg:grid-cols-2 lg:text-lg">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition relative group"
                  >
                    {link.name}
                    <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <div className="flex justify-center md:justify-start gap-6 text-2xl">
              <a
                href="https://github.com/Ebus042"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/chukwu-ebuka-079926379/"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/NEA_DEV_coder"
                className="text-gray-400 hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ebuka Nwafor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
