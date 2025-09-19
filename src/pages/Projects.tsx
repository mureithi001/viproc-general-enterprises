import { useState, useEffect } from 'react';
import { MapPin, Calendar, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, Project } from '../data/projects';

interface StatItem {
  icon: any;
  number: string;
  label: string;
}

const ProjectCarousel = ({ 
  images, 
  title,
  slideDuration = 3000 // Set to 3 seconds per slide
}: { 
  images: string[], 
  title: string,
  slideDuration?: number 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides
  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, slideDuration);

    return () => clearInterval(timer);
  }, [images.length, isPaused, slideDuration]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <img
        src={images[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className="w-full h-full object-contain"
      />
      {images.length > 1 && (
        <>
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
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

const StatCard = ({ stat }: { stat: StatItem }) => {
  const IconComponent = stat.icon;
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-center mb-3">
        <IconComponent className="w-8 h-8 text-[#3A65A9]" />
      </div>
      <div className="text-3xl font-serif font-bold text-[#3A65A9] mb-2">
        {stat.number.toString()}
      </div>
      <div className="text-[#818286] font-medium">{stat.label}</div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <div className="flex flex-wrap items-center text-gray-600 text-sm mb-4 gap-2">
          <span className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {project.location}
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {project.year}
          </span>
          <span>•</span>
          <span className="flex items-center">
            <Zap className="w-4 h-4 mr-1" />
            {project.capacity}
          </span>
        </div>
        
        <div className="mb-6">
          <ProjectCarousel images={project.images} title={project.title} />
        </div>
      </div>
      
      <div className="prose max-w-none">
        <p className="text-gray-700 mb-4">{project.description}</p>
        {project.additionalDetails && (
          <p className="text-gray-700 mb-6">{project.additionalDetails}</p>
        )}
        
        <div className="mt-6">
          <h4 className="font-semibold text-lg text-gray-900 mb-3">Project Highlights</h4>
          <ul className="space-y-2">
            {project.highlights?.map((highlight, i) => (
              <li key={i} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const stats: StatItem[] = [
    { icon: Zap, number: '150+', label: 'Lines Deployed' },
    { icon: MapPin, number: '25+', label: 'Sites Served' },
    { icon: Calendar, number: '100+', label: 'Installations Completed' },
    { icon: Award, number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
            Packaging Installations & Integrations
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Selected portfolio of packaging machinery installations, end‑of‑line integrations, and commissioning projects across East Africa.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Our Projects</h2>
            <div className="w-20 h-1 bg-yellow-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
