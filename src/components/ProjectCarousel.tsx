import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCarouselProps {
  images: string[];
  alt: string;
}

const ProjectCarousel = ({ images, alt }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  // Preload images and get their dimensions
  useEffect(() => {
    const img = new Image();
    img.src = images[0];
    img.onload = () => {
      // Calculate aspect ratio and set max dimensions
      const maxWidth = 800; // Max width for the carousel
      const maxHeight = 600; // Max height for the carousel
      let width = img.width;
      let height = img.height;

      // Maintain aspect ratio while fitting within max dimensions
      if (width > maxWidth) {
        const ratio = maxWidth / width;
        width = maxWidth;
        height = height * ratio;
      }
      
      if (height > maxHeight) {
        const ratio = maxHeight / height;
        height = maxHeight;
        width = width * ratio;
      }

      setImageDimensions({ width, height });
    };
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg" 
         style={{ height: `${imageDimensions.height}px`, maxHeight: '80vh' }}>
      {/* Main image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`${alt} - Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProjectCarousel;
