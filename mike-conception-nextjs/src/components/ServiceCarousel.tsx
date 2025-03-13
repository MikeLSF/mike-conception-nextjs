'use client';
import { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(1);

  // Fonction pour naviguer vers la gauche
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  // Fonction pour naviguer vers la droite
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calcul des indices des cartes à gauche et droite
  const leftIndex = activeIndex === 0 ? services.length - 1 : activeIndex - 1;
  const rightIndex = activeIndex === services.length - 1 ? 0 : activeIndex + 1;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#04b6cb]">Nos Services</h2>
        
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto">
          {/* Version desktop */}
          <div className="hidden lg:flex w-full justify-center items-center gap-4">
            {/* Carte gauche */}
            <div className="w-1/4 opacity-40 scale-90">
              <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-40 relative">
                  <Image 
                    src={services[leftIndex].image}
                    alt={services[leftIndex].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{services[leftIndex].title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {services[leftIndex].description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Carte centrale */}
            <div className="w-1/3 z-10">
              <div className="bg-white rounded shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <Image 
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl">{services[activeIndex].title}</h3>
                  <p className="text-gray-600 mt-2">
                    {services[activeIndex].description}
                  </p>
                  <p className="mt-4 text-right text-[#04b6cb]">
                    En savoir plus →
                  </p>
                </div>
              </div>
            </div>
            
            {/* Carte droite */}
            <div className="w-1/4 opacity-40 scale-90">
              <div className="bg-white rounded shadow overflow-hidden">
                <div className="h-40 relative">
                  <Image 
                    src={services[rightIndex].image}
                    alt={services[rightIndex].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{services[rightIndex].title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {services[rightIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Version mobile */}
          <div className="w-full lg:hidden">
            <div className="bg-white rounded shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl">{services[activeIndex].title}</h3>
                <p className="text-gray-600 mt-2">
                  {services[activeIndex].description}
                </p>
                <p className="mt-4 text-right text-[#04b6cb]">
                  En savoir plus →
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-6">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Indicateurs */}
          <div className="flex items-center space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-[#04b6cb]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}