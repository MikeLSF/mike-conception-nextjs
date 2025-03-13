import Image from 'next/image';
import ServiceCarousel from '../components/ServiceCarousel';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Image principale avec overlay */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/images/mikeconception_accueil_2025.jpg"
          alt="Mike Conception"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        
        {/* Décorations ajustées */}
        <div className="absolute left-0 bottom-0 transform translate-x-[-30%] translate-y-[20%]">
          <Image
            src="/images/ligne_gauche.png"
            alt="Décoration gauche"
            width={300}
            height={800}
          />
        </div>

        <div className="absolute right-0 top-1/4 transform translate-x-[30%]">
          <Image
            src="/images/rond_droite.png"
            alt="Décoration ronde droite"
            width={150}
            height={150}
          />
        </div>

        <div className="absolute right-0 bottom-0 transform translate-y-[30%]">
          <Image
            src="/images/ligne_droite.png"
            alt="Décoration droite"
            width={300}
            height={800}
          />
        </div>

        {/* Grand dégradé qui couvre tout le texte */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-full h-64 top-1/2 left-0 right-0 transform -translate-y-1/2 bg-gradient-to-r from-[#209cff] to-[#68e0cf] opacity-50"></div>
          
          {/* Texte central au-dessus du dégradé */}
          <div className="relative z-10 text-center px-4 w-full">
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)] mb-4">
              Mike conception
            </h1>
            
            <p className="text-xl md:text-3xl text-white uppercase mb-6">
              L&apos;expertise IT sur mesure : <br />
              IA, branding, réseaux & innovation.
            </p>
            
            {/* Texte avec contour vert 1px et intérieur transparent */}
            <p className="text-xl md:text-3xl uppercase font-bold text-transparent px-4 py-2 relative">
              <span className="absolute inset-0 text-xl md:text-3xl uppercase font-bold text-transparent px-4 py-2" 
                    style={{
                      WebkitTextStroke: '1px #00ff24',
                      textStroke: '1px #00ff24'
                    }}>
                AI & IT solutions for a smarter business
              </span>
              AI & IT solutions for a smarter business
            </p>
          </div>
        </div>
      </div>
      
      {/* Section "Pourquoi nous choisir" */}
      <WhyChooseUs />

      {/* Ajout du carousel de services */}
      <ServiceCarousel />
      
      {/* Section CTA */}
      <CTASection />
    </main>
  );
}