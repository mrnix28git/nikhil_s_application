import React from 'react';

const partners = [
  { id: 1, name: "Economic Times", logo: "/images/img_economictimes.png" },
  { id: 2, name: "Jagran", logo: "/images/img_jagran.png" },
  { id: 3, name: "NDTV", logo: "/images/img_ndtv.png" },
  { id: 4, name: "India Today", logo: "/images/img_indiatoday.png" },
  { id: 5, name: "Hindustan Times", logo: "/images/img_hindustantimes.png" }
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">
          <span className="text-black">Featured </span>
          <span className="text-purple">On</span>
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map(partner => (
            <div key={partner.id} className="w-32 h-16 flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;