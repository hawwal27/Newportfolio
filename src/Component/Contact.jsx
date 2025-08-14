import React from "react";
import Walmart from "../assets/walmart.png";
import Adobe from "../assets/adobe.png";
import Microsoft from "../assets/microsoft.png";
import Facebook from "../assets/facebook.png";
import FacebookIcon from "../assets/facebook-icon.png";
import TwitterIcon from "../assets/twitter.png";
import YouTubeIcon from "../assets/youtube.png";
import InstagramIcon from "../assets/instagram.png";

const Contact = () => {
  return (
    <section
      id="contactPage"
      className="py-20 px-[10%] bg-[#f9f9f9] font-['Inter']"
    >
      {/* === Clients Section === */}
      <div id="clients" className="text-center mb-16">
        <h1 className="text-[2.5rem] font-bold text-[#222] mb-4">My Client</h1>
        <p className="text-gray-600 text-lg mb-8">
          {/* You can add a description here if needed */}
        </p>
        <div className="flex justify-center items-center flex-wrap gap-10 mt-5">
          {[Walmart, Adobe, Microsoft, Facebook].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Client Logo"
              className="w-[120px] transition-all duration-300 hover:scale-105"
            />
          ))}
        </div>
      </div>

      {/* === Contact Section === */}
      <div id="contact" className="text-center">
        <h1 className="text-[2.5rem] font-bold text-[#222] mb-4">Contact Me</h1>
        <span className="text-gray-700 text-lg max-w-[600px] mx-auto block mb-10 leading-relaxed">
          Let’s create something great together—send me a message!
        </span>

        <form className="flex flex-col items-center gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full max-w-[500px] p-[14px] px-[18px] border border-gray-300 rounded-lg text-base outline-none focus:border-[#0077ff] transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full max-w-[500px] p-[14px] px-[18px] border border-gray-300 rounded-lg text-base outline-none focus:border-[#0077ff] transition-colors"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full max-w-[500px] p-[14px] px-[18px] border border-gray-300 rounded-lg text-base outline-none focus:border-[#0077ff] transition-colors"
          ></textarea>

          <button
            type="submit"
            className="px-7 py-3 bg-[#222] text-white rounded-full text-base hover:bg-[#444] transition-transform duration-200 hover:scale-105"
          >
            Submit
          </button>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mt-8">
            {[FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon].map(
              (icon, idx) => (
                <img
                  key={idx}
                  src={icon}
                  alt="Social Icon"
                  className="w-[30px] h-[30px] grayscale hover:grayscale-0 hover:scale-110 transition-all cursor-pointer"
                />
              )
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
