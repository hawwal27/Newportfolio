import React from "react";
import { motion } from "framer-motion";
import FacebookIcon from "../assets/facebook-icon.png";
import TwitterIcon from "../assets/twitter.png";
import YouTubeIcon from "../assets/youtube.png";
import InstagramIcon from "../assets/instagram.png";

const Footer = () => {
  const socials = [FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon];
  const navLinks = [
    { name: "Home", href: "#intro" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#111] text-white py-8 px-[10%] font-['Inter'] border-t border-gray-700">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <motion.div
          className="text-lg font-bold tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hawwal<span className="text-[#0077ff]">.</span>
        </motion.div>

        {/* Navigation */}
        <motion.ul
          className="flex gap-6 text-sm"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href={link.href}
                className="hover:text-[#0077ff] transition-colors"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {socials.map((icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.2, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={icon}
                alt="Social Icon"
                className="w-[22px] h-[22px] grayscale hover:grayscale-0 transition-all"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        className="text-center text-gray-400 text-sm mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} Hawwal. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
