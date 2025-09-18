import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Constants
const PARALLAX_INTENSITY = 0.5;

const Hero: React.FC = () => {
  // State
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersDataSaver, setPrefersDataSaver] = useState(false);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const [mobileUserPlayed, setMobileUserPlayed] = useState(false);
  
  // Refs
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

  // Static hero content
  const heroContent = {
    title: 'Packaging Machinery Supplier.',
    description:
      'Viproc General Enterprises supplies a wide variety of packaging and processing machinery from leading global manufacturers.',
    ctaLabel: 'Explore Packaging Machines',
    ctaTo: '/services',
  };

  // No keyboard navigation needed for a background video

  // Effects
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Detect slow connection / data saver for network-aware behavior
  useEffect(() => {
    if (typeof navigator !== 'undefined' && (navigator as any).connection) {
      try {
        const connection = (navigator as any).connection;
        const slowTypes = ['slow-2g', '2g'];
        const isSlow = slowTypes.includes(connection.effectiveType);
        const saveData = Boolean(connection.saveData);
        setPrefersDataSaver(isSlow || saveData);
      } catch {
        setPrefersDataSaver(false);
      }
    }
  }, []);

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

  // Derived (for animations only)
  const allImagesLoaded = true;

return (
  <section
    ref={heroRef}
    className="relative min-h-[55vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-gray-800 to-dark"
    role="region"
    aria-roledescription="video"
    aria-label="Featured packaging solutions"
    tabIndex={0}
  >
    {/* Mobile layout: overlay content inside video */}
    <div className="md:hidden w-full">
      <div className="w-full h-[55vh] relative bg-dark">
        <video
          ref={mobileVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay={!prefersDataSaver}
          muted
          loop={!prefersDataSaver}
          playsInline
          preload="metadata"
          poster="/site-images/poster.jpg"
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src="/hero/hero-section.mp4" type="video/mp4" />
          <source src="/hero/hero-section.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40" />

        {/* Mobile overlay content */}
        <motion.div
          className="absolute inset-0 px-6 py-8 text-center text-white flex flex-col items-center justify-center"
          variants={contentVariants}
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
        >
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-light via-primary/70 to-light bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-light/90 mb-6 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            {heroContent.description}
          </motion.p>
          <motion.div className="flex justify-center" variants={itemVariants}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Link
                to={heroContent.ctaTo}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg inline-flex items-center space-x-2 group transition-all duration-300"
                aria-label={heroContent.ctaLabel}
              >
                <span>{heroContent.ctaLabel}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Play button overlay for slow connections */}
          {prefersDataSaver && !mobileUserPlayed && (
            <button
              className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-white/90 text-dark font-semibold shadow"
              onClick={() => {
                const v = mobileVideoRef.current;
                if (v) {
                  v.play().then(() => setMobileUserPlayed(true)).catch(() => setMobileUserPlayed(true));
                }
              }}
            >
              Play Video
            </button>
          )}
        </motion.div>
      </div>
    </div>

    {/* Desktop layout (md and up): original parallax background with overlaid content */}
    <div className="hidden md:block w-full h-full">
      {/* Enhanced Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: shouldReduceMotion ? 0 : backgroundY }}
      >
        <video
          ref={desktopVideoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay={!prefersDataSaver}
          muted
          loop={!prefersDataSaver}
          playsInline
          preload="auto"
          poster="/site-images/poster.jpg"
          onCanPlay={() => setIsLoaded(true)}
        >
          <source src="/hero/hero-section.mp4" type="video/mp4" />
          <source src="/hero/hero-section.webm" type="video/webm" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-transparent to-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40" />
      </motion.div>

      {/* Parallax overlay */}
      <motion.div 
        className="absolute inset-0 bg-dark/20" 
        style={{ opacity: shouldReduceMotion ? 0.2 : overlayOpacity }} 
      />

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
          className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-light via-primary/70 to-light bg-clip-text text-transparent"
          variants={itemVariants}
        >
          {heroContent.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-light/90 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
          variants={itemVariants}
        >
          {heroContent.description}
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-6 mb-12"
          variants={itemVariants}
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Link
              to={heroContent.ctaTo}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl inline-flex items-center space-x-3 group transition-all duration-300"
              aria-label={heroContent.ctaLabel}
            >
              <span>{heroContent.ctaLabel}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>
        {/* Live region intentionally omitted for static video background */}
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
