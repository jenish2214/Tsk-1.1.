import React, { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useAutoScroll } from "../contexts/AutoScrollContext";


class CarouselController {
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      cardsToShow: 1,
      autoScroll: true,
      autoScrollInterval: 5000,
      transitionDuration: 500,
      ...options
    };
    
    this.currentIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.scrollLeft = 0;
    this.autoScrollTimer = null;
    this.resizeTimer = null;
    this.externalAutoScrollEnabled = true;
    this.pauseAutoScrollCallback = null;
    
    this.init();
  }

  init() {
    this.setupResponsive();
    this.setupEventListeners();
    this.updateLayout();
    this.startAutoScroll();
  }

  setupResponsive() {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      let newCardsToShow;
      
      if (width <= 640) {
        newCardsToShow = 1; 
      } else if (width <= 1024) {
        newCardsToShow = 2; 
      } else {
        newCardsToShow = 3; 
      }
      
      if (newCardsToShow !== this.options.cardsToShow) {
        this.options.cardsToShow = newCardsToShow;
        this.currentIndex = Math.min(this.currentIndex, this.getMaxIndex());
        this.updateLayout();
      }
    };

    
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(updateCardsToShow, 100);
    });
    
    updateCardsToShow();
  }

  setupEventListeners() {
    
    this.container.addEventListener('mousedown', this.handleMouseDown.bind(this));
    this.container.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.container.addEventListener('mouseup', this.handleMouseUp.bind(this));
    this.container.addEventListener('mouseleave', this.handleMouseUp.bind(this));
    
   
    this.container.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: false });
    this.container.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
    this.container.addEventListener('touchend', this.handleTouchEnd.bind(this));
    
    
    this.container.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  handleMouseDown(e) {
    this.isDragging = true;
    this.startX = e.pageX - this.container.offsetLeft;
    this.scrollLeft = this.container.scrollLeft;
    this.container.style.cursor = 'grabbing';
    this.stopAutoScroll();
    if (this.pauseAutoScrollCallback) {
      this.pauseAutoScrollCallback();
    }
  }

  handleMouseMove(e) {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = e.pageX - this.container.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.container.scrollLeft = this.scrollLeft - walk;
  }

  handleMouseUp() {
    this.isDragging = false;
    this.container.style.cursor = 'grab';
    this.startAutoScroll();
  }

  handleTouchStart(e) {
    this.isDragging = true;
    this.startX = e.touches[0].pageX - this.container.offsetLeft;
    this.scrollLeft = this.container.scrollLeft;
    this.stopAutoScroll();
    if (this.pauseAutoScrollCallback) {
      this.pauseAutoScrollCallback();
    }
  }

  handleTouchMove(e) {
    if (!this.isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - this.container.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.container.scrollLeft = this.scrollLeft - walk;
  }

  handleTouchEnd() {
    this.isDragging = false;
    this.startAutoScroll();
  }

  goToSlide(index) {
    const maxIndex = this.getMaxIndex();
    this.currentIndex = Math.max(0, Math.min(index, maxIndex));
    this.updateLayout();
  }

  goToPrevious() {
    const maxIndex = this.getMaxIndex();
    this.currentIndex = this.currentIndex === 0 ? maxIndex : this.currentIndex - 1;
    this.updateLayout();
  }

  goToNext() {
    const maxIndex = this.getMaxIndex();
    this.currentIndex = this.currentIndex >= maxIndex ? 0 : this.currentIndex + 1;
    this.updateLayout();
  }

  getMaxIndex() {
    const totalCards = this.container.querySelectorAll('.carousel-card').length;
    return Math.max(0, totalCards - this.options.cardsToShow);
  }

  updateLayout() {
    const track = this.container.querySelector('.carousel-track');
    if (!track) return;

    const translateX = -(this.currentIndex * (100 / this.options.cardsToShow));
    track.style.transform = `translateX(${translateX}%)`;
    
   
    this.updateDots();
  }

  updateDots() {
    const dots = this.container.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  startAutoScroll() {
    if (!this.options.autoScroll || !this.externalAutoScrollEnabled) return;
    
    this.stopAutoScroll();
    this.autoScrollTimer = setInterval(() => {
      if (!this.isDragging && this.externalAutoScrollEnabled) {
        this.goToNext();
      }
    }, this.options.autoScrollInterval);
  }

  stopAutoScroll() {
    if (this.autoScrollTimer) {
      clearInterval(this.autoScrollTimer);
      this.autoScrollTimer = null;
    }
  }

  setExternalAutoScrollState(enabled) {
    this.externalAutoScrollEnabled = enabled;
    if (enabled) {
      this.startAutoScroll();
    } else {
      this.stopAutoScroll();
    }
  }

  setPauseAutoScrollCallback(callback) {
    this.pauseAutoScrollCallback = callback;
  }

  destroy() {
    this.stopAutoScroll();
    clearTimeout(this.resizeTimer);
    
  }
}


const ClassBasedCarousel = ({ testimonials = [] }) => {
  const carouselRef = useRef(null);
  const controllerRef = useRef(null);
  const { isAutoScrollEnabled, pauseAutoScroll } = useAutoScroll();

  useEffect(() => {
    if (carouselRef.current && testimonials.length > 0) {
      controllerRef.current = new CarouselController(carouselRef.current, {
        autoScroll: true,
        autoScrollInterval: 5000
      });
      
      // Set the pause callback
      controllerRef.current.setPauseAutoScrollCallback(pauseAutoScroll);
    }

    return () => {
      if (controllerRef.current) {
        controllerRef.current.destroy();
      }
    };
  }, [testimonials, pauseAutoScroll]);

  // Update auto-scroll state when global state changes
  useEffect(() => {
    if (controllerRef.current) {
      controllerRef.current.setExternalAutoScrollState(isAutoScrollEnabled);
    }
  }, [isAutoScrollEnabled]);

  const handlePrevious = () => {
    if (controllerRef.current) {
      pauseAutoScroll(); // Pause auto-scroll when button is clicked
      controllerRef.current.goToPrevious();
    }
  };

  const handleNext = () => {
    if (controllerRef.current) {
      pauseAutoScroll(); // Pause auto-scroll when button is clicked
      controllerRef.current.goToNext();
    }
  };

  const handleDotClick = (index) => {
    if (controllerRef.current) {
      pauseAutoScroll(); // Pause auto-scroll when button is clicked
      controllerRef.current.goToSlide(index);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-8 sm:mb-12 text-center uppercase tracking-wide">
        Our Happy Customers
      </h2>
      
      <div className="relative">
        
        <button
          onClick={handlePrevious}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
        >
          <FaChevronLeft className="text-sm sm:text-base lg:text-lg" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center text-white shadow-lg transition-colors"
        >
          <FaChevronRight className="text-sm sm:text-base lg:text-lg" />
        </button>

        
        <div 
          ref={carouselRef}
          className="carousel-container overflow-hidden mx-8 sm:mx-12 lg:mx-16"
          style={{ cursor: 'grab' }}
        >
          <div className="carousel-track flex transition-transform duration-500 ease-in-out">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="carousel-card flex-shrink-0 px-2 sm:px-3 lg:px-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="bg-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 h-full">
                  <div className="text-center h-full flex flex-col justify-center">
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 flex-grow">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

     
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`carousel-dot w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === 0 ? 'active bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassBasedCarousel;
