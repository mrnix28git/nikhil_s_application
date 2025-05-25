import React, { useState } from 'react';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';

const EnrollmentSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    city: '',
    country: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      course: '',
      city: '',
      country: ''
    });
  };

  return (
    <section className="py-16 bg-gradient-purple">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-2">
              Take Your Next Step Towards 
            </h2>
            <h3 className="text-4xl font-bold text-gold mb-8">
              Vedic Science
            </h3>
            
            <img 
              src="/images/img_image_attachmentfull_527x527.png" 
              alt="Vedic Science Illustration" 
              className="max-w-full h-auto hidden md:block"
            />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-center mb-6">
              Get the Course Details
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputField
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                
                <InputField
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <InputField
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mb-4"
                required
              />
              
              <div className="relative mb-4">
                <div className="flex">
                  <div className="bg-[#0000000c] flex items-center px-2 border border-[#e5e5e5] rounded-l-md">
                    <img src="/images/img_div_itiflag.png" alt="Flag" className="w-5 h-3 mr-2" />
                    <span className="text-[#595959] font-bold text-xs">+1</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 px-3 py-2 bg-[#e7e7e7] border border-[#e5e5e5] rounded-r-md focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-[#444444] font-caudex font-bold text-sm mb-2">
                  Course Interested In <span className="text-red-500">*</span>
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#e7e7e7] border border-[#e5e5e5] rounded-md focus:outline-none"
                  required
                >
                  <option value="">-Select-</option>
                  <option value="vedic-astrology">Vedic Astrology</option>
                  <option value="numerology">Vedic Numerology</option>
                  <option value="vastu">Vastu Shastra</option>
                  <option value="tarot">Tarot Card Reading</option>
                  <option value="reiki">Reiki Healing</option>
                  <option value="pranic">Pranic Healing</option>
                  <option value="akashic">Akashic Records</option>
                  <option value="acupressure">Acupressure</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-[#444444] font-caudex font-bold text-sm mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    placeholder="Your City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  
                  <InputField
                    placeholder="Your Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="text-xs text-[#444444] mb-6">
                <p>
                  By submitting this form, you acknowledge and agree to our 
                  <a href="/terms" className="text-[#3a6cae] underline mx-1">Terms and</a>
                  <a href="/conditions" className="text-[#3a6cae] underline">Conditions</a>, 
                  and you consent to receiving promotional calls and SMS 
                  messages on the number provided, which may be sent through a 
                  third-party platform.
                </p>
              </div>
              
              <Button
                type="submit"
                variant="secondary"
                className="w-48 py-2 rounded-md mx-auto block"
              >
                Get Course Details
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;