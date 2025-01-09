import React, { useState, useEffect } from "react";


const ImageSlider = () => {
  const images = [
    "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index and wrap around to simulate continuous sliding
      setCurrentIndex((prev) => {
        if (prev + 2 >= images.length) {
          return 0; // Start from the beginning if we reach the end
        }
        return prev + 2; // Slide by 2 images
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative overflow-hidden w-full h-full bg-gray-200 flex justify-center items-center" style={{ height: "350px" }}>
      <div className="flex justify-normal">
      <div
        className="flex transition-transform duration-700 "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/4 h-full gap-10">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-64 h-64  object-cover rounded-lg "
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ImageSlider;
