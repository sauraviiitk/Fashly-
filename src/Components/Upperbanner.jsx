import React, { useState } from "react";

function Upperbanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/image/banner2.png",
        "/image/banner3.png",
        "/image/banner4.png",
        "/image/banner5.png",
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative w-[80%] mx-auto mt-5 overflow-hidden">
            {/* Slider container */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </div>

            {/* Previous button */}
            <button
                className="absolute top-[40%] sm:top-[50%] md:top-1/2 -translate-y-1/2 left-4 md:left-6 lg:left-8 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                onClick={prevSlide}
            >
                &#10094;
            </button>

            {/* Next button */}
            <button
                className="absolute top-[40%] sm:top-[50%] md:top-1/2 -translate-y-1/2 right-4 md:right-6 lg:right-8 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                onClick={nextSlide}
            >
                &#10095;
            </button>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} transition-colors`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default Upperbanner;
