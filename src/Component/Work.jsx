import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
     {
    image: "https://media.istockphoto.com/id/1192403701/photo/residential-housing-background.jpg?s=1024x1024&w=is&k=20&c=F0b-l2QTN1Gmhwjz5XMGL8zJ-8dtoB4iNB108w6G6Us=",
    title: "Real Estate Platform",
    link: "https://agentweb-1oii.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=870&auto=format&fit=crop",
    title: "E-commerce Website",
    link: "https://e-commerce-qgfm.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1656264142377-22ae3fefdbc3?q=80&w=870&auto=format&fit=crop",
    title: "Autoray-Web",
    link: "https://auto-ray-pcla.vercel.app/",
  },
  {
    image: "https://media.istockphoto.com/id/1036559046/photo/portfolio-and-wealth-management-with-risk-diversification-concept.jpg?s=1024x1024&w=is&k=20&c=qYCCpFMU4cVkSoDrdUvLU4olIj-uhH3RXuTJBSEtUio=",
    title: "Personal Portfolio",
    link: "https://your-portfolio.com",
  },
  {
    image: "https://media.istockphoto.com/id/1223969682/vector/online-education-learning-management-system-concept.jpg?s=1024x1024&w=is&k=20&c=D3LYo6N4s2WV_9ZpRSLcsW89pqJLDResGOnVNWxqQw0=",
    title: "L-M-S",
    link: "https://lms-by-hawwal-irul.vercel.app/",
  },
  {
    image: "https://images.unsplash.com/photo-1548524238-a971a4a3b523?q=80&w=464&auto=format&fit=crop",
    title: "Cow-Horn marketing",
    link: "https://cow-horn.vercel.app/",
  },
 
];

const Works = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          My <span className="text-blue-500">Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-2xl shadow overflow-hidden"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
