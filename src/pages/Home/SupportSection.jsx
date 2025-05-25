import React from 'react';
import Button from '../../components/ui/Button';

const SupportSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple rounded-tl-3xl rounded-br-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Happy to help you!</h3>
            
            <p className="mb-6 text-base font-poppins">
              Need more details? Our expert academics 
              counsellors will be happy to potiently explain 
              everything that you want to know.
            </p>
            
            <Button 
              variant="secondary"
              className="rounded-md"
              onClick={() => window.location.href = '/contact'}
            >
              Talk to an expert
            </Button>
          </div>
          
          <div className="bg-purple rounded-tr-3xl rounded-bl-3xl overflow-hidden">
            <img 
              src="/images/img_image_attachmentfull_426x284.png" 
              alt="Support Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;