import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <img 
              src="/images/img_image_attachmentfull_93x93.png" 
              alt="Professional Certification" 
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-gold text-xl font-semibold mb-2">Professional</h3>
            <p className="text-sm">Certification</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/images/img_image_attachmentfull_10.png" 
              alt="Live Online Classes" 
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-gold text-xl font-semibold mb-2">100% Live</h3>
            <p className="text-sm">Online Classes</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/images/img_image_attachmentfull_11.png" 
              alt="Placement Support" 
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-gold text-xl font-semibold mb-2">100% Placement</h3>
            <p className="text-sm">Support</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/images/img_image_attachmentfull_12.png" 
              alt="One on One Mentorship" 
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-gold text-xl font-semibold mb-2">1 On 1</h3>
            <p className="text-sm">Mentorship</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;