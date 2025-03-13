'use client';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#209cff] to-[#68e0cf]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à transformer votre présence en ligne ?
        </h2>
        
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10">
          Contactez notre équipe dès aujourd'hui pour discuter de votre projet et recevoir un devis gratuit personnalisé.
        </p>
        
        <Link 
          href="/contact" 
          className="inline-block px-8 py-4 bg-white text-[#04b6cb] font-bold rounded-full text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
        >
          Contactez Mike Conception
        </Link>
      </div>
    </section>
  );
}