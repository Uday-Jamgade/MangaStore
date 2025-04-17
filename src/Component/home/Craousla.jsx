import React, { useState, useEffect } from 'react';


const Craousla = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://wallpapercave.com/wp/wp5073942.jpg',
    'https://th.bing.com/th/id/OIP.1rE-oeF4IVBaPcBEy0VE_gHaEK?rs=1&pid=ImgDetMain',
    'https://wallpapercave.com/wp/wp10491859.jpg',
    'https://wallpapers.com/images/hd/jujutsu-kaisen-4k-anime-characters-hccbh0fp7rl24yd0.jpg',
    'https://th.bing.com/th/id/OIP.qv-1VEy9xWj1NiTOIF3SawHaEK?rs=1&pid=ImgDetMain',
    // 'https://th.bing.com/th/id/OIP.KH99sL96K_d6khpSqUWd_wHaEK?rs=1&pid=ImgDetMai',
    // 'https://th.bing.com/th/id/OIP.-QPDHNWZxQTQELuA3c1EMgHaEK?rs=1&pid=ImgDetMain',
    // 'https://th.bing.com/th/id/OIP.KH99sL96K_d6khpSqUWd_wHaEK?rs=1&pid=ImgDetMain',
    // 'https://th.bing.com/th/id/OIP.-QPDHNWZxQTQELuA3c1EMgHaEK?rs=1&pid=ImgDetMain',
    // 'https://th.bing.com/th/id/OIP.HfV8OlcQgAcyg2x8og9bRwHaEK?rs=1&pid=ImgDetMain',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-4xl object-cover  mx-auto py-10 bg-zinc-600">
    <div className="relative overflow-hidden">
      <div className=" flex  bg-zinc-600 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="w-full h-full  flex-shrink-0" />
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-5">
        <button onClick={prevSlide} className="p-2 bg-gray-800 text-white rounded-full">❮</button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-5">
        <button onClick={nextSlide} className="p-2 bg-gray-800 text-white rounded-full">❯</button>
      </div>
    </div>
  </div>
  );
};

export default Craousla;
