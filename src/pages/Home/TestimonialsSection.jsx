import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const testimonials = [
  {
    id: 1,
    name: "Prashant Sharma",
    image: "/images/img_image.png",
    text: "I\'ve been studying Vedic Astrology with Academy of Vedic Vidya for the past 6 months, and the transformation in my understanding has been remarkable. The instructors are incredibly knowledgeable and patient, making complex concepts accessible. The live classes and one-on-one mentorship have been invaluable in my learning journey."
  },
  {
    id: 2,
    name: "Anjali Patel",
    image: "/images/img_image_343x458.png",
    text: "The Tarot Card Reading course exceeded all my expectations. The curriculum is comprehensive, and the practical sessions gave me the confidence to start reading for clients. What sets this academy apart is their continued support even after course completion. I\'m now running my own successful tarot consultation business!"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    image: "/images/img_image_1.png",
    text: "As someone who was skeptical about Vedic sciences, I was amazed by the scientific approach taken in the Vastu Shastra course. The principles are explained with logical reasoning, and the results I\'ve seen after implementing these principles in my home have been tangible. Highly recommend for both believers and skeptics alike."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          <span className="text-black">What Our </span>
          <span className="text-purple">Students Say About Us</span>
        </h2>
        
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-auto"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{testimonial.name}</h3>
                      <p className="text-gray-700">{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={prevTestimonial}
          >
            <img src="/images/img_icon_black_900_36x36.svg" alt="Previous" className="w-6 h-6 transform rotate-180" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={nextTestimonial}
          >
            <img src="/images/img_icon_black_900_36x36.svg" alt="Next" className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-purple' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="primary"
            className="rounded-[10px] mx-auto"
            onClick={() => window.location.href = '/testimonials'}
          >
            View More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;