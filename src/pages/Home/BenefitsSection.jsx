import React from 'react';
import Card from '../../components/common/Card';

const benefits = [
  {
    id: 1,
    title: "Comprehensive Learning",
    description: "Experience the depth of ancient wisdom with our occult science courses at the Academy of Vedic Vidya. Unlock the secrets of Vedic knowledge",
    icon: "/images/img_image_attachmentfull_20.png"
  },
  {
    id: 2,
    title: "Flexible Learning Support",
    description: "At the Academy of Vedic Vidya, we provide tailored learning options to fit your schedule. Access course materials anytime, enjoy live sessions",
    icon: "/images/img_image_attachmentfull_19.png"
  },
  {
    id: 3,
    title: "Dedicated Class Moderators",
    description: "Our class moderators ensure a smooth and engaging learning experience. They manage sessions, resolve queries promptly, and provide personalized support",
    icon: "/images/img_image_attachmentfull_18.png"
  },
  {
    id: 4,
    title: "1 to 1 Mentorship",
    description: "Experience personalized guidance with our 1 to 1 Mentorship program. Work directly with expert mentors to deepen your understanding, overcome challenges",
    icon: "/images/img_image_attachmentfull_17.png"
  },
  {
    id: 5,
    title: "100% Live Online Classes",
    description: "Join our engaging, real-time online classes from anywhere in the world. Interact with experienced instructors, ask questions, and participate in live discussions.",
    icon: "/images/img_image_attachmentfull_16.png"
  },
  {
    id: 6,
    title: "Backup Class Videos",
    description: "Never miss a lesson with our backup class videos. Access recorded sessions anytime, ensuring you can review course content, reinforce your learning.",
    icon: "/images/img_image_attachmentfull_15.png"
  },
  {
    id: 7,
    title: "Globally Recognized Certification",
    description: "Earn a recognized professional certification upon completion of our courses. Showcase your expertise in Vedic sciences with a certificate",
    icon: "/images/img_image_attachmentfull_14.png"
  },
  {
    id: 8,
    title: "Regd. Under Govt. of India",
    description: "The Academy of Vedic Vidya is a wholly owned edtech brand of SkillEnable Edutech Private Limited, one of the world\'s leading education companies. SkillEnable is registered under the Ministry of Corporate Affairs, Government of India, and is also recognized by Startup India",
    icon: "/images/img_image_attachmentfull_13.png"
  },
  {
    id: 9,
    title: "Placement Support",
    description: "The Academy of Vedic Vidya offers dedicated placement support, ensuring students turn their skills into successful careers with industry-recognized certifications and real-world guidance.",
    icon: "/images/img_image_attachmentfull_101x101.png"
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-12">
          <span className="text-black">Why Choose </span>
          <span className="text-purple text-2xl">Academy of Vedic Vidya?</span>
        </h2>
        
        <p className="text-center text-sm mb-12 max-w-4xl mx-auto">
          At the Academy of Vedic Vidya, we are dedicated to spreading the timeless knowledge of Vedic sciences, helping individuals discover the power within 
          themselves through ancient teachings. Our institute specializes in offering online occult science courses, like : Astrology, Numerology, Vastu, Palmistry, Tarot 
          Reading and more. These courses are taught by expert practitioners with decades of experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(benefit => (
            <Card
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              buttonText={null}
              variant="gradient"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;