import React from 'react';
import { useParams } from 'react-router-dom';
import astroCourseData from './courseData';
import { Clock, BookOpen, Phone } from 'lucide-react';

const AstroCourseDetail = () => {
  const { id } = useParams();
  const course = astroCourseData.find(c => c.id === parseInt(id));

  if (!course) return <div className="text-center text-xl text-red-500 py-10">Course not found!</div>;

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center lg:items-start">
        {/* Left Content */}
        <div className="flex-1">
          <span className="text-sm font-semibold text-green-500 bg-green-100 px-3 py-1 rounded-full inline-block mb-4">
            FREE CERTIFICATE
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#f52d59] mb-3">
            {course.title}
          </h1>

          <p className="text-gray-700 text-md mb-5 max-w-xl">
            Master this topic with our free astrology course! Learn to analyze charts, signs, and apply Vedic principles. Perfect for beginners to advance their spiritual knowledge.
          </p>

          <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
            <Clock size={18} />
            <span>{course.duration}</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap mb-6">
            {course.skills.map(skill => (
              <span key={skill} className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-5">
            <button className="bg-[#f52d59] text-white px-6 py-3 rounded-md font-medium hover:opacity-90">
              Learn for Free
            </button>
          </div>

          <p className="text-sm text-gray-600 flex items-center gap-2">
            <Phone size={16} /> For enquiries call: <a href="tel:18002102020" className="text-[#f52d59] font-semibold">18002102020</a>
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[450px] h-auto rounded-xl overflow-hidden">
          <img src={course.image} alt={course.title} className="rounded-xl shadow-md w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AstroCourseDetail;
