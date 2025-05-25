import React from 'react';

import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-purple relative overflow-hidden">
      {/* Background Particles */}
      <img 
        src="/images/img_canvas_particlesjscanvasel.png" 
        alt="Background Particles" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              India's No.1 Academy For
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              Vedic & Occult Science​ Courses
            </h2>
            <p className="text-base md:text-lg font-poppins font-medium mb-6">
              We offer In-demand Vedic and occult science courses for all with globally recognized certificate
            </p>
            
            <Button 
              variant="secondary"
              className="rounded-[10px] mb-8"
              onClick={() => window.location.href = '/courses'}
            >
              Explore Courses
              <img src="/images/img_vector_black_900_15x15.svg" alt="Arrow" className="ml-2 w-4 h-4" />
            </Button>
            
            <p className="text-base font-inter font-semibold mb-4">
              Over 1 Lakh Satisfied Learners Globally
            </p>
            
            <div className="flex -space-x-3">
              <img src="/images/img_image_attachmentfull_85x85.png" alt="Student" className="w-[85px] h-[85px] rounded-full border-2 border-white" />
              <img src="/images/img_image_attachmentfull_7.png" alt="Student" className="w-[85px] h-[85px] rounded-full border-2 border-white" />
              <img src="/images/img_image_attachmentfull_8.png" alt="Student" className="w-[85px] h-[85px] rounded-full border-2 border-white" />
              <img src="/images/img_image_attachmentfull_9.png" alt="Student" className="w-[85px] h-[85px] rounded-full border-2 border-white" />
              <img src="/images/img_image_attachmentfull_75x75.png" alt="Student" className="w-[75px] h-[75px] rounded-full border-2 border-white" />
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="/images/img_image_attachmentfull_563x563.png" 
              alt="Vedic Guru" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;