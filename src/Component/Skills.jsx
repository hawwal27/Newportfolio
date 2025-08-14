import React from "react";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-5 bg-white text-center font-['Inter']"
    >
      <h2 className="text-[2.5rem] font-bold mb-2 text-[#222]">What I Do</h2>
      <p className="text-lg text-gray-600 max-w-[700px] mx-auto mb-10 leading-relaxed">
        Passionate and results-driven, I bring creativity, innovation, and
        technical expertise to every project. With a strong foundation in web
        development, design, and problem-solving, I thrive in dynamic
        environments, embracing growth and learning. Let's build something
        amazing together!
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* === Skill Cards === */}
        {[
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
        ].map((skill, idx) => (
          <a
            key={idx}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center w-[280px] bg-[#f9f9f9] rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            <img
              src={skill.img}
              alt={skill.title}
              className="w-[60px] h-[60px] object-contain mb-5 transition-transform duration-300 hover:rotate-6 hover:scale-105"
            />
            <div>
              <h3 className="text-lg text-[#111] font-semibold mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
