import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAutoScroll } from "../contexts/AutoScrollContext";

const originalTestimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Fashion Enthusiast",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    id: 2,
    name: "Alex K.",
    role: "Style Blogger",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    id: 3,
    name: "James L.",
    role: "Customer",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
  }
];


const createInfiniteTestimonials = () => {
  return [...originalTestimonials, ...originalTestimonials];
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const { isAutoScrollEnabled, pauseAutoScroll } = useAutoScroll();
  
  const testimonials = createInfiniteTestimonials();
  const totalOriginal = originalTestimonials.length;

  const goToPrevious = () => {
    pauseAutoScroll();
    if (currentIndex === 0) {
      setCurrentIndex(totalOriginal - 1);
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const goToNext = () => {
    pauseAutoScroll(); 
    setCurrentIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (!isAutoScrollEnabled) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 3000); 

    return () => clearInterval(interval);
  }, [isAutoScrollEnabled]);

  
  useEffect(() => {
    if (currentIndex === totalOriginal) {
   
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalOriginal]);

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-10" style={{ fontFamily: 'Satoshi, sans-serif' }}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-8 uppercase">
        Our Happy Customers
      </h2>

      <div className="relative">
        
      
<button
  onClick={goToPrevious}
  className="
    absolute top-1/2 -translate-y-1/2 z-10
    w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
    bg-black text-white rounded-full flex items-center justify-center shadow
    hover:bg-gray-800 transition-colors
    left-2 sm:left-4 md:left-6 lg:left-10
  "
>
  <FaChevronLeft />
</button>


<button
  onClick={goToNext}
  className="
    absolute top-1/2 -translate-y-1/2 z-10
    w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
    bg-black text-white rounded-full flex items-center justify-center shadow
    hover:bg-gray-800 transition-colors
    right-2 sm:right-4 md:right-6 lg:right-10
  "
>
  <FaChevronRight />
</button>


        <div className="overflow-hidden">
          <div 
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-full flex-shrink-0 flex justify-center">
                <div className="bg-gray-100 p-6 sm:p-8 lg:p-10 max-w-2xl" style={{
                  borderTopLeftRadius: '83.5px',
                  borderTopRightRadius: '0px', 
                  borderBottomLeftRadius: '0px',
                  borderBottomRightRadius: '83.5px'
                }}>
                  <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 text-center">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg sm:text-xl lg:text-2xl">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base lg:text-lg">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden">
        {originalTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              pauseAutoScroll();
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === (currentIndex % totalOriginal) ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 