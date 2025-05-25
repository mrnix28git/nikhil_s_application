import React from 'react';

const PractitionerSection = () => {
  return (
    <section className="bg-gradient-purple py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-2xl font-medium mb-6">
              Become a Certified Practitioner Today!
            </h2>
            
            <ul className="space-y-4 text-base font-poppins">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Globally recognized certification from Academy of Vedic Vidya.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>100% Live Online Training.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Taught by 10+ years of experienced Industry Experts.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No prior experience is required to do this course.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Industry Approved Certificate upon completion.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/images/img_image_attachmentfull_359x540.png" 
              alt="Certification" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PractitionerSection;