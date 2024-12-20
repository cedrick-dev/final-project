import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  // State to track the current active panel
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of content for the carousel
  const panels = [
    {
      title: "University History",
      content:
        "Here is the history of our university, showcasing its journey from inception to its present state.",
      buttonText: "Learn More",
      link: "/university",
    },
    {
      title: "Organizational Chart",
      content:
        "This chart displays the structure of our organization, highlighting the key departments and roles.",
      buttonText: "View Chart",
      link: "/comstudy",
    },
    {
      title: "Mission and Vision",
      content:
        "Learn about our mission and vision, which guide our commitment to excellence and community service.",
      buttonText: "Read More",
      link: "/missionvision",
    },
  ];

  // Function to go to the previous panel
  const prevPanel = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? panels.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next panel
  const nextPanel = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === panels.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto h-[400px] md:h-[450px] lg:h-[500px] relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden h-full">
        {/* Panels */}
        <div
          className="flex transition-transform duration-500 h-full items-center"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {panels.map((panel, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 bg-transparent rounded-md shadow-lg h-full"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                {panel.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-center mb-4 px-6">
                {panel.content}
              </p>
              <Link
                to={panel.link}
                className="mainButton px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
              >
                {panel.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
        <button
          onClick={prevPanel}
          className="text-white  p-2 md:p-3 lg:p-4 rounded-full hover:bg-blue-700 transition group"
        >
          <span className="arrow-icon group-hover:animate-left-arrow"> &#60; </span>
        </button>
        <button
          onClick={nextPanel}
          className="text-white  p-2 md:p-3 lg:p-4 rounded-full hover:bg-blue-700 transition group"
        >
          <span className="arrow-icon group-hover:animate-right-arrow"> &#62; </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
