import React from 'react';
import { useNavigate } from 'react-router-dom';
import courseData from './courseData';
import Card from '../../components/common/Card';

const AllCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-[#f52d59]">Our Courses</h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Explore our spiritually enriching courses designed to deepen your understanding of Vedic practices.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courseData.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
            icon={course.icon}
            buttonText="View Course"
            buttonAction={() => navigate(`/courses/${course.id}`)}
            className="shadow-card"
            variant="default"
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
