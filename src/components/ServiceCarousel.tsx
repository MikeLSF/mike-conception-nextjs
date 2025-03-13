'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Définition des services
const services = [
  {
    id: 1,
    title: "Consultance informatique",
    description: "Assurez-vous que votre infrastructure informatique est en phase avec vos objectifs à long terme.",
    image: "/images/consultance-informatique.jpg",
    link: "/services/consultance-informatique"
  },
  {
    id: 2,
    title: "Infrastructure informatique",
    description: "Associez nos services de consultance informatique pour une gestion proactive de votre infrastructure.",
    image: "/images/infrastructure-informatique.jpg",
    link: "/services/infrastructure-informatique"
  },
  {
    id: 3,
    title: "Intelligence Artificielle",
    description: "Boostez votre productivité avec des solutions d'IA sur mesure, adaptées aux besoins de votre entreprise.",
    image: "/images/ia-solutions.jpg",
    link: "/services/intelligence-artificielle"
  },
  {
    id: 4,
    title: "Réseaux",
    description: "Optimisez vos connexions, sécurisez vos données et assurez une performance optimale avec nos solutions réseaux.",
    image: "/images/reseaux.jpg",
    link: "/services/reseaux"
  },
  {
    id: 5,
    title: "Branding",
    description: "Créez une identité de marque forte et cohérente qui vous distingue de la concurrence.",
    image: "/images/branding.jpg",
    link: "/services/branding"
  },
  {
    id: 6,
    title: "SEO",
    description: "Améliorez votre visibilité en ligne et attirez plus de trafic qualifié grâce à nos stratégies d'optimisation.",
    image: "/images/seo.jpg",
    link: "/services/seo"
  }
];

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('none'); // 'left', 'right', or 'none'
  const [animationPhase, setAnimationPhase] = useState('default'); // 'exit', 'enter', or 'default'

  // Calcul des indices pour la vue carousel
  const prevIndex = (activeIndex - 1 + services.length) % services.length;
  const nextIndex = (activeIndex + 1) % services.length;
  const prevPrevIndex = (activeIndex - 2 + services.length) % services.length;
  const nextNextIndex = (activeIndex + 2) % services.length;

  // Fonction pour naviguer au slide précédent
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('left');
    setAnimationPhase('exit');
    
    setTimeout(() => {
      setActiveIndex(prevIndex);
      setAnimationPhase('enter');
      
      setTimeout(() => {
        setAnimationPhase('default');
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  // Fonction pour naviguer au slide suivant
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('right');
    setAnimationPhase('exit');
    
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setAnimationPhase('enter');
      
      setTimeout(() => {
        setAnimationPhase('default');
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  // Navigation directe à un index spécifique
  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    
    const newDirection = index > activeIndex ? 'right' : 'left';
    
    setIsAnimating(true);
    setDirection(newDirection);
    setAnimationPhase('exit');
    
    setTimeout(() => {
      setActiveIndex(index);
      setAnimationPhase('enter');
      
      setTimeout(() => {
        setAnimationPhase('default');
        setIsAnimating(false);
      }, 500);
    }, 300);
  };

  // Autoplay
  useEffect(() => {
    if (isAnimating) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  // Styles pour les différentes cartes selon l'état d'animation
  const getLeftCardStyle = () => {
    if (animationPhase === 'default') {
      return {
        opacity: 0.4,
        transform: 'scale(0.8) translateX(-10%)',
        transition: 'all 300ms ease'
      };
    }
    
    if (direction === 'right') {
      if (animationPhase === 'exit') {
        // La carte de gauche va devenir invisible (sort vers la gauche)
        return {
          opacity: 0,
          transform: 'scale(0.7) translateX(-30%)',
          transition: 'all 300ms ease'
        };
      } else { // enter
        // Une nouvelle carte arrive de la droite pour devenir la carte de gauche
        return {
          opacity: 0.4,
          transform: 'scale(0.8) translateX(-10%)',
          transition: 'all 500ms ease'
        };
      }
    } else { // direction === 'left'
      if (animationPhase === 'exit') {
        // La carte de gauche va devenir la carte du centre
        return {
          opacity: 0.7,
          transform: 'scale(0.9) translateX(10%)',
          transition: 'all 300ms ease'
        };
      } else { // enter
        // La carte nouvelle de gauche arrive
        return {
          opacity: 0.4,
          transform: 'scale(0.8) translateX(-10%)',
          transition: 'all 500ms ease'
        };
      }
    }
  };

  const getCenterCardStyle = () => {
    if (animationPhase === 'default') {
      return {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'all 300ms ease'
      };
    }
    
    if (direction === 'right') {
      if (animationPhase === 'exit') {
        // La carte du centre va devenir la carte de gauche
        return {
          opacity: 0.7,
          transform: 'scale(0.9) translateX(-10%)',
          transition: 'all 300ms ease'
        };
      } else { // enter
        // La carte de droite devient la carte du centre
        return {
          opacity: 1,
          transform: 'scale(1)',
          transition: 'all 500ms ease'
        };
      }
    } else { // direction === 'left'
      if (animationPhase === 'exit') {
        // La carte du centre va devenir la carte de droite
        return {
          opacity: 0.7,
          transform: 'scale(0.9) translateX(10%)',
          transition: 'all 300ms ease'
        };
      } else { // enter
        // La carte de gauche devient la carte du centre
        return {
          opacity: 1,
          transform: 'scale(1)',
          transition: 'all 500ms ease'
        };
      }
    }
  };

  const getRightCardStyle = () => {
    if (animationPhase === 'default') {
      return {
        opacity: 0.4,
        transform: 'scale(0.8) translateX(10%)',
        transition: 'all 300ms ease'
      };
    }
    
    if (direction === 'right') {
      if (animationPhase === 'exit') {
        // La carte de droite va devenir la carte du centre
        return {
          opacity: 0.7,
          transform: 'scale(0.9) translateX(-10%)',
          transition: 'all 300ms ease'
        };
      } else { // enter
        // Une nouvelle carte arrive de la droite
        return {
          opacity: 0.4,
          transform: 'scale(0.8) translateX(10%)',
          transition: 'all 500ms ease'
        };
      }
    } else { // direction === 'left'
      if (animationPhase === 'exit') {
        // La carte de droite va disparaître (sort vers la droite)
        return {
          opacity: 0,
          transform: 'scale(0.7) translateX(30%)',
          transition: 'all 300ms ease'
        };
      } else { // enter
        // La carte du centre devient la carte de droite
        return {
          opacity: 0.4,
          transform: 'scale(0.8) translateX(10%)',
          transition: 'all 500ms ease'
        };
      }
    }
  };

  const getMobileCardStyle = () => {
    if (animationPhase === 'default') {
      return {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'all 500ms ease'
      };
    }
    
    if (animationPhase === 'exit') {
      return {
        opacity: 0,
        transform: direction === 'right' ? 'scale(0.9) translateX(-10%)' : 'scale(0.9) translateX(10%)',
        transition: 'all 300ms ease'
      };
    } else { // enter
      return {
        opacity: 1,
        transform: 'scale(1)',
        transition: 'all 500ms ease'
      };
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#04b6cb]">
          <span className="relative inline-block">
            Nos Services
            <span className="absolute -bottom-2 left-1/2 w-16 h-1 bg-[#04b6cb] transform -translate-x-1/2"></span>
          </span>
        </h2>
        
        {/* Version desktop */}
        <div className="hidden lg:flex justify-center items-center gap-4">
          {/* Carte gauche */}
          <div 
            className="w-1/4 cursor-pointer"
            onClick={prevSlide}
            style={getLeftCardStyle()}
          >
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full">
              <div className="relative h-[200px]">
                <Image 
                  src={animationPhase === 'enter' && direction === 'right' 
                    ? services[prevPrevIndex].image 
                    : services[prevIndex].image}
                  alt={animationPhase === 'enter' && direction === 'right'
                    ? services[prevPrevIndex].title
                    : services[prevIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {animationPhase === 'enter' && direction === 'right'
                    ? services[prevPrevIndex].title
                    : services[prevIndex].title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {animationPhase === 'enter' && direction === 'right'
                    ? services[prevPrevIndex].description
                    : services[prevIndex].description}
                </p>
                <p className="mt-3 text-right text-sm text-gray-600">
                  En savoir plus →
                </p>
              </div>
            </div>
          </div>
          
          {/* Carte centrale (active) */}
          <div 
            className="w-1/3"
            style={getCenterCardStyle()}
          >
            <Link href={
              animationPhase === 'enter'
                ? direction === 'right'
                  ? services[nextIndex].link
                  : services[prevIndex].link
                : services[activeIndex].link
            }>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md h-full">
                <div className="relative h-[250px]">
                  <Image 
                    src={
                      animationPhase === 'enter'
                        ? direction === 'right'
                          ? services[nextIndex].image
                          : services[prevIndex].image
                        : services[activeIndex].image
                    }
                    alt={
                      animationPhase === 'enter'
                        ? direction === 'right'
                          ? services[nextIndex].title
                          : services[prevIndex].title
                        : services[activeIndex].title
                    }
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {
                      animationPhase === 'enter'
                        ? direction === 'right'
                          ? services[nextIndex].title
                          : services[prevIndex].title
                        : services[activeIndex].title
                    }
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    {
                      animationPhase === 'enter'
                        ? direction === 'right'
                          ? services[nextIndex].description
                          : services[prevIndex].description
                        : services[activeIndex].description
                    }
                  </p>
                  <p className="mt-3 text-right text-sm text-gray-600">
                    En savoir plus →
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Carte droite */}
          <div 
            className="w-1/4 cursor-pointer"
            onClick={nextSlide}
            style={getRightCardStyle()}
          >
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full">
              <div className="relative h-[200px]">
                <Image 
                  src={animationPhase === 'enter' && direction === 'left'
                    ? services[nextNextIndex].image
                    : services[nextIndex].image}
                  alt={animationPhase === 'enter' && direction === 'left'
                    ? services[nextNextIndex].title
                    : services[nextIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {animationPhase === 'enter' && direction === 'left'
                    ? services[nextNextIndex].title
                    : services[nextIndex].title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                  {animationPhase === 'enter' && direction === 'left'
                    ? services[nextNextIndex].description
                    : services[nextIndex].description}
                </p>
                <p className="mt-3 text-right text-sm text-gray-600">
                  En savoir plus →
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Version mobile */}
        <div className="lg:hidden">
          <div 
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden h-full"
            style={getMobileCardStyle()}
          >
            <Link href={services[activeIndex].link}>
              <div className="relative h-[200px]">
                <Image 
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mt-2 text-lg font-semibold text-gray-900">{services[activeIndex].title}</h3>
                <p className="mt-3 text-sm text-gray-600">
                  {services[activeIndex].description}
                </p>
                <p className="mt-3 text-right text-sm text-gray-600">
                  En savoir plus →
                </p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-8 flex justify-center space-x-4">
          <button 
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-2 disabled:opacity-50"
            aria-label="Précédent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[40px] w-[40px] text-gray-600 hover:text-[#04b6cb]">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-4.28 9.22a.75.75 0 000 1.06l3 3a.75.75 0 101.06-1.06l-1.72-1.72h5.69a.75.75 0 000-1.5h-5.69l1.72-1.72a.75.75 0 00-1.06-1.06l-3 3z" clipRule="evenodd"></path>
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-2 disabled:opacity-50"
            aria-label="Suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[40px] w-[40px] text-gray-600 hover:text-[#04b6cb]">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        
        {/* Indicateurs (points) */}
        <div className="flex justify-center mt-4 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-[#04b6cb] w-4' : 'bg-gray-300'
              }`}
              aria-label={`Aller au service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}