'use client';

const features = [
  {
    title: "Innovation",
    description: "Nous restons à la pointe des dernières technologies pour vous offrir des solutions performantes."
  },
  {
    title: "Qualité",
    description: "Chaque projet est traité avec rigueur et souci du détail."
  },
  {
    title: "Accompagnement",
    description: "Nous sommes à vos côtés à chaque étape de votre transformation digitale."
  },
  {
    title: "Expertise reconnue",
    description: "Une équipe d'experts dédiée à votre réussite digitale."
  },
  {
    title: "Solutions personnalisées",
    description: "Chaque projet est unique, nous concevons des solutions sur mesure."
  },
  {
    title: "Support continu",
    description: "Notre équipe est là pour vous accompagner même après la mise en ligne de vos projets."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#04b6cb]">
          Pourquoi Choisir Mike Conception ?
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700">
            Chez Mike Conception, nous sommes passionnés par la création de solutions digitales innovantes qui propulsent votre entreprise vers le succès. Notre équipe d'experts s'engage à fournir des services personnalisés, adaptés à vos besoins spécifiques, pour vous aider à atteindre vos objectifs commerciaux.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#04b6cb]">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}