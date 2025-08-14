import React from "react";
import { Link } from "react-scroll";
import btnimg from "../assets/hireme.png";
import Portfolio6 from "../assets/portfolio-6.png";

const Intro = () => {
  return (
    <section
      id="intro"
      className="flex items-center justify-between px-[10%] py-[100px] bg-white relative flex-wrap"
    >
      {/* Left Content */}
      <div className="max-w-[600px] z-10">
        <span className="block text-[1.5rem] text-gray-600 mb-5">Hello</span>
        <span className="text-[2.8rem] font-bold text-gray-900 leading-[1.3]">
          I'm <span className="text-[#0077ff]">Hawwal</span> <br />
          Frontend developer
        </span>
        <p className="mt-5 text-[1.05rem] text-gray-600 leading-[1.6]">
          I am a skilled web designer with experience in creating <br />
          visually appealing and user-friendly websites.
        </p>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-50}
          className="inline-block"
        >
          <button className="mt-8 bg-gray-900 text-white px-6 py-3 rounded-full text-[1rem] flex items-center gap-3 hover:bg-gray-700 transition-all transform hover:-translate-y-[2px]">
            <img src={btnimg} alt="" className="w-5 h-5" />
            Hire Me
          </button>
        </Link>
      </div>

      {/* Right Image */}
      <img
        src={Portfolio6}
        alt="Profile"
        className="mt-20 w-[350px] max-w-[90%] rounded-[30px] shadow-[0_12px_30px_rgba(0,0,0,0.1)] animate-float"
      />
    </section>
  );
};

export default Intro;
