import React from "react";
import { motion } from "framer-motion";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Skills = () => {
  const skillsData = [
    {
      img: UIDesign,
      title: "UI/UX Design",
      desc: "Designing user interfaces with seamless and intuitive experiences.",
      link: "https://your-uiux-project-link.com",
    },
    {
      img: WebDesign,
      title: "Website Design",
      desc: "Creating responsive and engaging websites tailored to user needs.",
      link: "https://your-website-project-link.com",
    },
    {
      img: AppDesign,
      title: "App Design",
      desc: "Designing mobile and desktop apps with user-centered principles.",
      link: "https://your-app-project-link.com",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-5 bg-white text-center font-['Inter'] overflow-hidden"
    >
      <motion.h2
        className="text-[2.5rem] font-bold mb-2 text-[#222]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        What I Do
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 max-w-[700px] mx-auto mb-10 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: false }}
      >
        Passionate and results-driven, I bring creativity, innovation, and
        technical expertise to every project. With a strong foundation in web
        development, design, and problem-solving, I thrive in dynamic
        environments, embracing growth and learning. Let's build something
        amazing together!
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8">
        {skillsData.map((skill, idx) => (
          <motion.a
            key={idx}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex flex-col items-center w-[280px] bg-[#f9f9f9] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -6 }}
          >
            <motion.img
              src={skill.img}
              alt={skill.title}
              className="w-[60px] h-[60px] object-contain mb-5"
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div>
              <h3 className="text-lg text-[#111] font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
