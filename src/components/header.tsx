'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

// Définition des items de navigation et leurs sous-menus
const navItems = [
  { 
    name: 'Accueil', 
    path: '/',
    submenu: null
  },
  { 
    name: 'Agence web', 
    path: '/agence-web',
    submenu: [
      {
        title: 'Création de site web',
        description: 'Augmentez votre visibilité et crédibilité en ligne avec un site web performant, conçu pour attirer plus de clients.',
        icon: '☁️',
        path: '/agence-web/creation-site-web'
      },
      {
        title: 'Création d\'e-commerce',
        description: 'Transformez votre activité avec une boutique en ligne, accessible à l\'échelle mondiale 24/7.',
        icon: '🛒',
        path: '/agence-web/creation-ecommerce'
      },
      {
        title: 'SEO (Search Engine Optimization)',
        description: 'Boostez la visibilité de votre site web sur Google et attirez du trafic qualifié grâce à nos stratégies SEO.',
        icon: '🔍',
        path: '/agence-web/seo'
      },
      {
        title: 'SEA (Search Engine Advertising)',
        description: 'Attirez des clients ciblés rapidement avec des campagnes publicitaires payantes optimisées pour vos objectifs.',
        icon: '📊',
        path: '/agence-web/sea'
      },
      {
        title: 'SMO',
        description: 'Augmentez votre notoriété en ligne et stimulez la croissance de votre entreprise grâce à une stratégie sociale sur mesure.',
        icon: '👍',
        path: '/agence-web/smo'
      },
      {
        title: 'Graphisme',
        description: 'Renforcez l\'identité de votre marque avec un design unique qui capte l\'attention et engage vos clients.',
        icon: '🎨',
        path: '/agence-web/graphisme'
      }
    ]
  },
  { 
    name: 'Développement d\'applications', 
    path: '/developpement-applications',
    submenu: [
      {
        title: 'Application web',
        description: 'Solutions sur mesure pour automatiser vos processus métier et améliorer votre productivité.',
        icon: '💻',
        path: '/developpement-applications/application-web'
      },
      {
        title: 'Application mobile',
        description: 'Restez connecté avec vos clients grâce à des applications mobiles iOS et Android performantes.',
        icon: '📱',
        path: '/developpement-applications/application-mobile'
      }
    ]
  },
  { 
    name: 'Services numériques', 
    path: '/services-numeriques',
    submenu: [
      {
        title: 'Consultance informatique',
        description: 'Expertise et conseils stratégiques pour optimiser votre infrastructure IT et votre stratégie digitale.',
        icon: '🧠',
        path: '/services-numeriques/consultance-informatique'
      },
      {
        title: 'Infrastructure informatique',
        description: 'Solutions complètes pour gérer, sécuriser et optimiser votre parc informatique et vos réseaux.',
        icon: '🖥️',
        path: '/services-numeriques/infrastructure-informatique'
      },
      {
        title: 'Intelligence Artificielle',
        description: 'Intégrez des solutions d\'IA innovantes pour automatiser vos processus et analyser vos données.',
        icon: '🤖',
        path: '/services-numeriques/intelligence-artificielle'
      }
    ]
  },
  { 
    name: 'Contact', 
    path: '/contact',
    submenu: null
  },
  { 
    name: 'À propos', 
    path: '/a-propos',
    submenu: null
  },
  { 
    name: 'Jobs', 
    path: '/jobs',
    submenu: null
  }
];

// Clé unique pour forcer le remontage du composant après une mise à jour
const HEADER_VERSION = "v1.0.4"; // Incrémenter cette version pour forcer le remontage

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const submenuRefs = useRef({});
  
  // S'assurer que le code ne s'exécute que côté client pour éviter les erreurs d'hydration
  useEffect(() => {
    setMounted(true);
    
    // Force un rechargement du composant après le montage initial
    const timer = setTimeout(() => {
      // Technique pour forcer un re-rendu sans provoquer d'effets secondaires
      setMounted(state => state);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const handleClickOutside = (event) => {
      if (activeSubmenu !== null && submenuRefs.current[activeSubmenu]) {
        if (!submenuRefs.current[activeSubmenu].contains(event.target)) {
          setActiveSubmenu(null);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeSubmenu, mounted]);
  
  // Fermer le sous-menu quand on change de page
  useEffect(() => {
    if (!mounted) return;
    
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  }, [pathname, mounted]);

  // Gestion du sous-menu
  const handleSubmenuToggle = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  // Ajuster la position du sous-menu en fonction de sa position à l'écran
  const getSubmenuPosition = (index) => {
    // Les index des deux derniers items avec sous-menus
    const lastSubmenuItems = [3]; // Services numériques
    
    if (lastSubmenuItems.includes(index)) {
      return { right: 0, left: 'auto' };
    }
    
    return { left: 0, right: 'auto' };
  };

  // Rendre uniquement le contenu statique côté serveur
  if (!mounted) {
    return (
      <header className="bg-[#04b6cb] sticky top-0 z-50" key={`header-ssr-${HEADER_VERSION}`}>
        <div className="container mx-auto flex justify-between items-center h-14">
          <Link href="/" className="pl-4">
            <div className="relative h-6 w-24">
              {/* Espace réservé pour le logo */}
            </div>
          </Link>
          <nav className="hidden md:flex h-full">
            {navItems.map((item) => (
              <div key={item.name} className="relative h-full">
                <div className="h-full px-3 flex items-center">
                  <span className="text-white text-sm">{item.name}</span>
                </div>
              </div>
            ))}
          </nav>
          <div className="md:hidden p-2 mr-2">
            {/* Espace réservé pour le menu burger */}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-[#04b6cb] sticky top-0 z-50" key={`header-csr-${HEADER_VERSION}`}>
      <div className="container mx-auto flex justify-between items-center h-14">
        {/* Logo - avec espacement de 5px en haut et en bas */}
        <Link href="/" className="pl-4 z-10 flex items-center h-full">
          {/* Container avec marges précises de 5px haut/bas */}
          <div className="py-[5px] flex items-center h-full">
            {/* Le logo adapte sa taille en conservant son ratio tout en respectant l'espace */}
            <Image 
              src="/images/logoblancseul.png" 
              alt="Mike Conception" 
              width={70}
              height={35}
              priority
              className="object-contain h-full w-auto"
            />
          </div>
        </Link>

        {/* Menu de navigation - Desktop */}
        <nav className="hidden md:flex h-full">
          {navItems.map((item, index) => (
            <div 
              key={item.name}
              className="relative h-full" 
              ref={(el) => (submenuRefs.current[index] = el)}
            >
              <button
                className={`h-full px-3 text-white hover:text-white/80 font-medium text-sm relative flex items-center
                  ${pathname === item.path || pathname.startsWith(item.path + '/') ? 'bg-[#03a0b3] text-white' : ''}
                  ${activeSubmenu === index ? 'bg-[#03a0b3] text-white' : ''}
                `}
                onClick={() => item.submenu ? handleSubmenuToggle(index) : null}
                onMouseEnter={() => item.submenu ? setActiveSubmenu(index) : null}
              >
                {item.name}
                {item.submenu && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    className={`w-4 h-4 inline-block ml-1 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`}
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              {/* Sous-menu - ajusté pour être positionné correctement */}
              {item.submenu && activeSubmenu === index && (
                <div 
                  className="absolute mt-0 w-[600px] bg-white rounded-b-lg shadow-lg overflow-hidden z-50"
                  style={getSubmenuPosition(index)}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-[#04b6cb] mr-2">✨</span>
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mt-4">
                      {item.submenu.map((subitem, subindex) => (
                        <Link 
                          key={subindex} 
                          href={subitem.path}
                          className="flex items-start gap-3 group"
                        >
                          <div className="text-2xl mt-1">{subitem.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-900 group-hover:text-[#04b6cb] transition-colors">
                              {subitem.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {subitem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 border-t flex justify-center">
                    <Link 
                      href="/contact"
                      className="flex items-center justify-center text-gray-700 hover:text-[#04b6cb]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Contactez-nous
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Menu burger - Mobile */}
        <button 
          className="md:hidden z-10 p-2 mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#04b6cb] z-40 overflow-y-auto pt-16">
            <nav className="flex flex-col px-4 py-6">
              {navItems.map((item, index) => (
                <div key={index} className="py-2 border-b border-[#03a0b3]">
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex justify-between items-center w-full py-2 text-left font-medium text-white ${
                          activeSubmenu === index ? 'bg-[#03a0b3] rounded px-2' : ''
                        }`}
                        onClick={() => handleSubmenuToggle(index)}
                      >
                        {item.name}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor" 
                          className={`w-5 h-5 transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`}
                        >
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {activeSubmenu === index && (
                        <div className="ml-4 mt-2 space-y-2 bg-white rounded-lg p-4">
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subindex}
                              href={subitem.path}
                              className="block py-2 text-gray-700 hover:text-[#04b6cb]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="flex items-center">
                                <span className="mr-2">{subitem.icon}</span>
                                {subitem.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`block py-2 font-medium text-white ${
                        pathname === item.path ? 'bg-[#03a0b3] rounded px-2' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}