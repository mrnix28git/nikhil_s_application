import React from 'react';

const CertificationSection = () => {
  return (
    <section className="bg-gradient-purple py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-2xl font-medium mb-6">
              Recognized by the Government of India (DPIIT)
            </h2>
            
            <div className="space-y-4 text-base font-poppins">
              <p>
                We are proud to share that SkillEnable Edutech Private Limited, the 
                parent company of Academy of Vedic Vidya, has been officially 
                recognized as a startup by the Government of India under the 
                Department for Promotion of Industry and Internal Trade (DPIIT).
              </p>
              
              <p>
                This recognition highlights our commitment to innovation and 
                excellence in the Education Technology sector, empowering 
                individuals with knowledge and skills to thrive in the modern world.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/images/img_image_attachmentfull_308x423.png" 
              alt="Government Recognition Certificate" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;