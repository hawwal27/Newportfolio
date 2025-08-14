import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import btnimg from "../assets/hireme.png";
import Portfolio6 from "../assets/portfolio-6.png";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex items-center justify-between px-[10%] py-[100px] bg-white relative flex-wrap overflow-hidden"
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#e0f2ff] via-white to-[#f0f7ff] -z-10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Left Content */}
      <motion.div
        className="max-w-[600px] z-10"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.span
          className="block text-[1.5rem] text-gray-600 mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Hello
        </motion.span>
        <motion.span
          className="text-[2.8rem] font-bold text-gray-900 leading-[1.3]"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          I'm <span className="text-[#0077ff]">Hawwal</span> <br />
          Frontend developer
        </motion.span>
        <motion.p
          className="mt-5 text-[1.05rem] text-gray-600 leading-[1.6]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          I am a skilled web designer with experience in creating <br />
          visually appealing and user-friendly websites.
        </motion.p>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-50}
          className="inline-block"
        >
          <motion.button
            className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-full text-[1rem] flex items-center gap-3 hover:bg-gray-700 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <img src={btnimg} alt="" className="w-5 h-5" />
            Hire Me
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Image */}
      <motion.img
        src={Portfolio6}
        alt="Profile"
        className="mt-20 w-[350px] max-w-[90%] rounded-[30px] shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        whileHover={{ scale: 1.02 }}
      />
    </section>
  );
};

export default Intro;
