import React from 'react';

const GlobalReachSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/images/img_image_attachmentfull_340x605.png" 
              alt="World Map showing global reach" 
              className="max-w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-2xl font-medium text-black-light mb-2">
              Our Courses Are Popular in
            </h2>
            <h3 className="text-2xl font-bold text-purple mb-6">
              United States
            </h3>
            
            <p className="text-sm mb-2">
              Our course is trusted by learners in 50+ countries, offering a world-class education 
              tailored to a global audience. Designed for professionals, students, and enthusiasts, it 
              combines expert instruction, real-world applications, and interactive learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;