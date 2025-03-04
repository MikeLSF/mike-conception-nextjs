import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Image principale avec overlay */}
      <div className="relative w-full h-screen">
        <Image
          src="/images/mikeconception_accueil_2025.jpg"
          alt="Mike Conception"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        
        {/* Overlay du dégradé 50% transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#209cff] to-[#68e0cf] opacity-50"></div>

        {/* Décorations */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/ligne_gauche.png"
            alt="Décoration gauche"
            width={150}
            height={500}
          />
        </div>

        <div className="absolute right-0 top-1/3 transform -translate-y-1/2">
          <Image
            src="/images/rond_droite.png"
            alt="Décoration ronde droite"
            width={200}
            height={200}
          />
        </div>

        <div className="absolute right-0 bottom-1/3">
          <Image
            src="/images/ligne_droite.png"
            alt="Décoration droite"
            width={150}
            height={300}
          />
        </div>

        {/* Texte central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] mb-4">
            MIKE CONCEPTION
          </h1>
          <p className="text-xl md:text-3xl text-white mb-6 max-w-3xl">
            L&apos;EXPERTISE IT SUR MESURE : <br />
            IA, BRANDING, RÉSEAUX & INNOVATION.
          </p>
          <p className="text-xl md:text-3xl uppercase font-bold text-transparent border-2 border-[#00ff24] px-4 py-2">
            AI & IT Solutions for a Smarter Business
          </p>
        </div>
      </div>
    </main>
  );
}