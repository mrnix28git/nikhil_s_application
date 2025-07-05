import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/ui/Button';

const courses = [
  {
    id: 1,
    title: "Vedic Astrology Course",
    description: "Astrology explores the influence of celestial bodies on human life, offering insights into personality, relationships, and destiny based on cosmic patterns.",
    icon: "/images/img_image_attachmentfull_6.png"
  },
  {
    id: 2,
    title: "Vedic Numerology Course",
    description: "Numerology is the mystical study of numbers and their influence on our lives, revealing deeper insights into personality, destiny, career and life patterns.",
    icon: "/images/img_image_attachmentfull_5.png"
  },
  {
    id: 3,
    title: "Pranic Healing Course",
    description: "Pranic Healing is a holistic energy therapy that balances the body\'s natural energy field, promoting physical, emotional, and mental well-being.",
    icon: "/images/img_image_attachmentfull_4.png"
  },
  {
    id: 4,
    title: "Reiki Healing Course",
    description: "Reiki healing is a gentle, distance energy healing that promotes relaxation, balance, and overall well-being by channeling universal life force energy.",
    icon: "/images/img_image_attachmentfull_3.png"
  },
  {
    id: 5,
    title: "Akashic Records Course",
    description: "Akashic Records is a cosmic library of the soul, revealing past, present, and future to guide you toward clarity, purpose, and spiritual growth and healing transformation.",
    icon: "/images/img_image_attachmentfull_2.png"
  },
  {
    id: 6,
    title: "Vastu Shastra Course",
    description: "Vastu Shastra is an ancient Indian science of architecture, harmonizing living spaces with natural energies for enhanced well-being and prosperity.",
    icon: "/images/img_image_attachmentfull_1.png"
  },
  {
    id: 7,
    title: "Tarot Card Reading Course",
    description: "Unlock the wisdom of Tarot Cards with our course, guiding you through card meanings, intuitive interpretations, and practical readings for personal growth.",
    icon: "/images/img_image_attachmentfull_89x89.png"
  },
  {
    id: 8,
    title: "Acupressure Course",
    description: "Learn Acupressure : A holistic technique using finger pressure on key points to relieve stress, enhance wellness, and restore balance naturally.",
    icon: "/images/img_image_attachmentfull.png"
  }
];

const CoursesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-2">
          <span className="text-black">Courses </span>
          <span className="text-purple">Offered</span>
        </h2>

        <p className="text-center text-base mb-12 max-w-4xl mx-auto">
          We offer a wide range of occult science courses designed to deepen your understanding of ancient vedic wisdom. Explore our expertly crafted programs in:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <Card
              key={course.id}
              title={course.title}
              description={course.description}
              icon={course.icon}
              buttonAction={() => window.location.href = `/courses`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="primary"
            className="rounded-[10px] mx-auto"
            onClick={() => window.location.href = '/courses'}
          >
            View All Courses
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;