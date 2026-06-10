import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const [modal, setModal] = useState({
    show: false,
    type: "", // "success" or "error"
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          setModal({ show: true, type: "success" });
        },
        () => {
          setLoading(false);
          setModal({ show: true, type: "error" });
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#111827] overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="absolute right-[-200px] bottom-[-200px] w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: `
            radial-gradient(circle,
            #3b82f6 0%,
            #8b5cf6 50%,
            transparent 80%)
          `,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-400 mt-4">
            Let’s build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <p className="text-gray-400 mb-8">
              I’m open to freelance projects, collaborations, and full-time
              frontend opportunities.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                Email:{" "}
                <a
                  href="mailto:contact.neadev@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  contact.neadev@gmail.com
                </a>
              </p>
              <p>Location: Nigeria</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-2xl">
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

          {/* RIGHT SIDE - FORM */}
          <div
            className="bg-white/5 border w-full lg:w-[80%]
          
          border-white/10 rounded-2xl px-3 py-2 backdrop-blur-md shadow-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <div className="flex flex-col gap-0">
                <label className="text-gray-300 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  className="w-full mt-2 px-1 py-2 bg-[#0f172a] 
                  lg:p-1
                  border border-white/10 rounded-lg
                   text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="flex flex-col gap-0">
                <label className="text-gray-300 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full mt-2 px-1 py-2 lg:p-1 bg-[#0f172a] border border-white/10 rounded-lg
                   text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="flex flex-col gap-0">
                <label className="text-gray-300 text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="number"
                  required
                  placeholder="Enter Your Phone Number"
                  className="w-full mt-2 px-1 py-2 lg:p-1 bg-[#0f172a] border border-white/10 rounded-lg
                   text-gray-300 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="flex flex-col gap-0">
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Enter Your Message"
                  rows="4"
                  className="w-full mt-2 px-1 py-2 lg:p-0 bg-[#0f172a] border border-white/10 rounded-lg
                   text-gray-300 focus:outline-none focus:border-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full lg:p-1 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white font-medium disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center z-[999] bg-black/60 backdrop-blur-sm">
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {modal.type === "success"
                ? "Message Sent!"
                : "Something Went Wrong"}
            </h3>

            <p className="text-gray-400 mb-6">
              {modal.type === "success"
                ? "Thank you for reaching out. I’ll get back to you soon."
                : "Please try again later."}
            </p>

            <button
              onClick={() => setModal({ show: false, type: "" })}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
