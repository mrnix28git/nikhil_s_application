import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseData from './courseData';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData.find((c) => c.id === Number(id));
  const navigate = useNavigate();

  if (!course) return <div className="text-center text-red-500 py-10">Course not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <button
        onClick={() => navigate(-1)}
        className="text-[#f52d59] hover:underline mb-6"
      >
        ← Back to Courses
      </button>

      <h1 className="text-3xl font-bold text-[#f52d59] mb-4">{course.title}</h1>
      <img src={course.icon} alt={course.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <p className="text-gray-700 text-lg leading-relaxed">
        {course.description} {/* You can add fullText here if needed */}
      </p>
    </div>
  );
};

export default CourseDetail;
