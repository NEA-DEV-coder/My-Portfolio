import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-[#0f172a]/70 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          Ebuka<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 text-gray-300">
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

        {/* Mobile Toggle */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0f172a] border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-300">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-blue-400 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
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
      )}
    </nav>
  );
};

export default Navbar;
