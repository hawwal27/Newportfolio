import React from "react";
import { motion } from "framer-motion";
import Walmart from "../assets/walmart.png";
import Adobe from "../assets/adobe.png";
import Microsoft from "../assets/microsoft.png";
import Facebook from "../assets/facebook.png";
import FacebookIcon from "../assets/facebook-icon.png";
import TwitterIcon from "../assets/twitter.png";
import YouTubeIcon from "../assets/youtube.png";
import InstagramIcon from "../assets/instagram.png";

const Contact = () => {
  const clients = [Walmart, Adobe, Microsoft, Facebook];
  const socials = [FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon];

  return (
    <section
      id="contactPage"
      className="py-20 px-[10%] bg-[#f9f9f9] font-['Inter'] overflow-hidden"
    >
      {/* === Clients Section === */}
      <div id="clients" className="text-center mb-16">
        <motion.h1
          className="text-[2.5rem] font-bold text-[#222] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Client
        </motion.h1>

        <motion.div
          className="flex justify-center items-center flex-wrap gap-10 mt-5"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {clients.map((logo, idx) => (
            <motion.img
              key={idx}
              src={logo}
              alt="Client Logo"
              className="w-[120px]"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>

      {/* === Contact Section === */}
      <div id="contact" className="text-center">
        <motion.h1
          className="text-[2.5rem] font-bold text-[#222] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h1>

        <motion.span
          className="text-gray-700 text-lg max-w-[600px] mx-auto block mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Let’s create something great together—send me a message!
        </motion.span>

        <form className="flex flex-col items-center gap-5">
          {["Your Name", "Your Email"].map((placeholder, idx) => (
            <motion.input
              key={idx}
              type={placeholder.includes("Email") ? "email" : "text"}
              placeholder={placeholder}
              className="w-full max-w-[500px] p-[14px] px-[18px] border border-gray-300 rounded-lg text-base outline-none focus:border-[#0077ff] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
            />
          ))}

          <motion.textarea
            rows="5"
            placeholder="Your Message"
            className="w-full max-w-[500px] p-[14px] px-[18px] border border-gray-300 rounded-lg text-base outline-none focus:border-[#0077ff] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="px-7 py-3 bg-[#222] text-white rounded-full text-base hover:bg-[#444] transition-transform"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            Submit
          </motion.button>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-5 mt-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {socials.map((icon, idx) => (
              <motion.img
                key={idx}
                src={icon}
                alt="Social Icon"
                className="w-[30px] h-[30px] grayscale cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.2, rotate: 8, filter: "grayscale(0%)" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
