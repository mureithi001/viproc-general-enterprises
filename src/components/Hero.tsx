import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Keyboard, A11y } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Types
interface SlideData {
  image: {
    src: string;
    alt: string;
    priority: boolean;
  };
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  highlights: string[];
}

interface ImageLoadState {
  [key: number]: boolean;
}

// Constants
const SLIDE_DURATION = 6000;
const PARALLAX_INTENSITY = 0.5;

const Hero: React.FC = () => {
  // State
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState<ImageLoadState>({});
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  
  // Refs
  const swiperRef = useRef<SwiperClass | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  
  // Motion preferences
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Optimized parallax transforms
  const backgroundY = useTransform(
    scrollYProgress, 
    [0, 1], 
    ['0%', `${PARALLAX_INTENSITY * 100}%`]
  );
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 0.8]);

  // Slide data - memoized for performance
  const slides: SlideData[] = useMemo(() => [
    {
      image: { 
        src: '/hero/200128-Temp-Website-picture-1 (1).png', 
        alt: 'Floating solar installation on a pristine lake at golden hour', 
        priority: true 
      },
      title: 'Power More. Use Less Land.',
      description: 'Revolutionary floating solar technology that delivers up to 30% higher yields while preserving valuable land and water resources.',
      ctaLabel: 'Discover Technology',
      ctaTo: '/services',
      highlights: ['30% Higher Yield', 'Zero Land Use', 'Rapid Deployment', 'Infinite Scalability']
    },
    {
      image: { 
        src: '/hero/WhatsApp Image 2025-08-17 at 21.33.43.jpeg', 
        alt: 'Mountain reservoir with floating solar arrays reducing water evaporation', 
        priority: false 
      },
      title: 'Protect Water. Cut Costs.',
      description: 'Reduce evaporation by up to 70% while generating clean energy, creating a dual benefit for water conservation and cost reduction.',
      ctaLabel: 'View Case Studies',
      ctaTo: '/about',
      highlights: ['70% Less Evaporation', 'Lower Operations', 'Weather Resilient', 'AI Monitoring']
    },
    {
      image: { 
        src: '/hero/image.png', 
        alt: 'Industrial complex with integrated floating solar systems', 
        priority: false 
      },
      title: 'Scale Clean Power Fast.',
      description: 'Modular floating solar systems engineered for rapid deployment and maximum ROI across industrial and municipal applications.',
      ctaLabel: 'Request Quote',
      ctaTo: '/contact',
      highlights: ['Modular Design', 'Proven ROI', 'Low Maintenance', 'Grid Integration']
    },
    {
      image: {
        src: '/hero/hero section.jpg',
        alt: 'Rooftop solar array under clear blue sky with mountain backdrop',
        priority: false,
      },
      title: 'Rooftop Solar, Real Savings',
      description: 'High-efficiency rooftop PV delivering dependable power and long-term cost reductions for facilities of any size.',
      ctaLabel: 'Explore Solar PV',
      ctaTo: '/services',
      highlights: ['High Efficiency', 'Cost Savings', 'Fast Installation', 'Proven Durability'],
    },
  ], []);

  // Image preloading with enhanced error handling
  const preloadImages = useCallback(() => {
    slides.forEach((slide, index) => {
      const img = new Image();
      const timeoutId = setTimeout(() => {
        console.warn(`Image ${index} took too long to load`);
      }, 10000);

      img.onload = () => {
        clearTimeout(timeoutId);
        setImagesLoaded(prev => ({ ...prev, [index]: true }));
      };
      
      img.onerror = () => {
        clearTimeout(timeoutId);
        console.error(`Failed to load image: ${slide.image.src}`);
        setImagesLoaded(prev => ({ ...prev, [index]: false }));
      };
      
      img.src = slide.image.src;
    });
  }, [slides]);

  // Navigation functions
  const prevSlide = useCallback(() => {
    setHasUserInteracted(true);
    swiperRef.current?.slidePrev();
  }, []);

  const nextSlide = useCallback(() => {
    setHasUserInteracted(true);
    swiperRef.current?.slideNext();
  }, []);

  const goToSlide = useCallback((index: number) => {
    setHasUserInteracted(true);
    swiperRef.current?.slideToLoop(index);
  }, []);

  const togglePlayback = useCallback(() => {
    if (isPlaying) {
      swiperRef.current?.autoplay?.stop();
      setIsPlaying(false);
    } else {
      swiperRef.current?.autoplay?.start();
      setIsPlaying(true);
    }
    setHasUserInteracted(true);
  }, [isPlaying]);

  // Keyboard navigation
  const handleKeyNavigation = useCallback((e: React.KeyboardEvent<HTMLElement>) => {
    const actions: Record<string, (ev: React.KeyboardEvent<HTMLElement>) => void> = {
      'ArrowLeft': () => prevSlide(),
      'ArrowRight': () => nextSlide(),
      'Home': () => goToSlide(0),
      'End': () => goToSlide(slides.length - 1),
      ' ': (ev) => { ev.preventDefault(); togglePlayback(); },
      'Spacebar': (ev) => { ev.preventDefault(); togglePlayback(); },
    };

    const action = actions[e.key as keyof typeof actions];
    if (action) {
      e.preventDefault();
      action(e);
    }
  }, [prevSlide, nextSlide, goToSlide, togglePlayback, slides.length]);

  // Effects
  useEffect(() => {
    setIsLoaded(true);
    preloadImages();
  }, [preloadImages]);

  // Animation variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      y: 20 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      scale: 1.05,
      y: -3,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  const currentSlide = slides[current];
  const allImagesLoaded = Object.keys(imagesLoaded).length === slides.length && 
                         Object.values(imagesLoaded).every(Boolean);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[55vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      role="region"
      aria-roledescription="image carousel"
      aria-label="Featured floating solar solutions"
      tabIndex={0}
      onKeyDown={handleKeyNavigation}
    >
      {/* Mobile layout: image carousel above, content below */}
      <div className="md:hidden w-full">
        <div className="w-full h-[55vh] relative bg-slate-900">
          <Swiper
            modules={[Autoplay, EffectFade, Keyboard, A11y]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop
            keyboard={{ enabled: true }}
            a11y={{ prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide' }}
            autoplay={
              shouldReduceMotion || hasUserInteracted
                ? false
                : {
                    delay: SLIDE_DURATION,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
            className="w-full h-full"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="relative">
                <img
                  src={slide.image.src}
                  alt={slide.image.alt}
                  className={`w-full h-full object-cover object-center brightness-90 contrast-110 transition-opacity duration-700 ${
                    imagesLoaded[idx] ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ objectPosition: 'center' }}
                  loading={slide.image.priority ? 'eager' : 'lazy'}
                  decoding="async"
                  sizes="100vw"
                />
                {!imagesLoaded[idx] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse" />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile content below image */}
        <motion.div
          className="px-6 py-8 text-center text-white max-w-3xl mx-auto"
          variants={contentVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-amber-100 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {currentSlide.title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-slate-200 mb-6 leading-relaxed"
            variants={itemVariants}
          >
            {currentSlide.description}
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg inline-flex items-center space-x-2 group transition-all duration-300"
                aria-label={currentSlide.ctaLabel}
              >
                <span>Request Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop layout (md and up): original parallax background with overlaid content */}
      <div className="hidden md:block w-full h-full">
      {/* Enhanced Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: shouldReduceMotion ? 0 : backgroundY }}
      >
        <Swiper
          modules={[Autoplay, EffectFade, Keyboard, A11y]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          }}
          autoplay={
            shouldReduceMotion || hasUserInteracted 
              ? false 
              : { 
                  delay: SLIDE_DURATION, 
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }
          }
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
          className="absolute inset-0"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative">
              <div className="absolute inset-0 bg-slate-900">
                <picture>
                  {/* Mobile source (<=640px). Using desktop image for consistency on mobile */}
                  <source media="(max-width: 640px)" srcSet={slide.image.src} />
                  {/* Desktop/tablet source (fallback to existing) */}
                  <source media="(min-width: 641px)" srcSet={slide.image.src} />
                  <img
                    src={slide.image.src}
                    alt={slide.image.alt}
                    className={`absolute inset-0 w-full h-full object-cover object-center brightness-90 contrast-110 transition-opacity duration-700 ${
                      imagesLoaded[idx] ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ objectPosition: 'center' }}
                    loading={slide.image.priority ? 'eager' : 'lazy'}
                    decoding="async"
                    sizes="100vw"
                    srcSet={`${slide.image.src} 1x`}
                  />
                </picture>
                
                {/* Loading placeholder */}
                {!imagesLoaded[idx] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse" />
                )}
                
                {/* Dynamic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Parallax overlay */}
        <motion.div 
          className="absolute inset-0 bg-slate-900/20" 
          style={{ opacity: shouldReduceMotion ? 0.2 : overlayOpacity }} 
        />
      </motion.div>

      {/* Solar rays effect */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none hidden sm:block"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3], 
            scale: [0.8, 1.1, 0.8],
            rotate: [-10, 10, -10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-amber-300/20 via-amber-400/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-radial from-blue-300/15 via-blue-400/8 to-transparent rounded-full blur-2xl" />
        </motion.div>
      )}

      {/* Main Content */}
      <motion.div
        className="relative z-30 text-center text-white px-6 lg:px-8 max-w-6xl mx-auto"
        style={{ y: shouldReduceMotion ? 0 : textY }}
        variants={contentVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Title with enhanced typography */}
        <motion.h1
          className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-amber-100 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {currentSlide.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          variants={itemVariants}
        >
          {currentSlide.description}
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-6 mb-12"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl inline-flex items-center space-x-3 group transition-all duration-300"
              aria-label={currentSlide.ctaLabel}
            >
              <span>Request Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>

        {/* Live region for screen readers */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {current + 1} of {slides.length}: {currentSlide.title}
        </div>
      </motion.div>
    
      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0 }}
          animate={{ 
            y: [0, 8, 0], 
            opacity: allImagesLoaded ? 1 : 0 
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            opacity: { delay: 2, duration: 1 },
          }}
        >
          <div className="flex flex-col items-center space-y-1 text-white/60 text-sm">
            <span>Explore below</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>
      )}
      </div>
    </section>
  );
};

export default Hero;
