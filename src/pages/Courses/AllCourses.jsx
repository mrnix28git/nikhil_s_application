import React, { useState } from 'react';
import astroCourseData from './courseData';
import { BookOpen, Clock } from 'lucide-react';
import { useNavigate, } from 'react-router-dom';

const categories = [
    'Vedic Astrology',
    'Horoscope Reading',
    'Planetary Knowledge',
    'Panchang & Muhurat',
    'Remedies & Healing',
    'Advanced Astrology'
];

const AstroCourses = () => {
    const [selectedCategory, setSelectedCategory] = useState('Vedic Astrology');
    const navigate = useNavigate();


    const filteredCourses = astroCourseData.filter(course =>
        course.category === selectedCategory
    );

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <h1 className="text-3xl font-bold text-[#f52d59] text-center mb-10">
                Discover Our <span className="text-black">Free Astrology Courses</span>
            </h1>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Sidebar */}
                <aside className="lg:w-1/4">
                    {categories.map(cat => {
                        const count = astroCourseData.filter(c => c.category === cat).length;
                        return (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`w-full text-left px-4 py-3 mb-2 rounded-md border text-sm font-medium ${selectedCategory === cat
                                    ? 'bg-[#f52d59] text-white'
                                    : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                                    }`}
                            >
                                {cat} <span className="ml-2 text-gray-500">({count})</span>
                            </button>
                        );
                    })}
                </aside>

                {/* Course Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4">
                    {filteredCourses.map(course => (
                        <div
                            key={course.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="h-40 w-full object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-md font-bold mb-2">{course.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    <span className="font-semibold">Skills:</span> {course.skills.join(', ')}
                                </p>
                                <div className="flex items-center text-sm text-gray-500 gap-4 mb-4">
                                    <span className="flex items-center gap-1"><BookOpen size={16} /> {course.learners}</span>
                                    <span className="flex items-center gap-1"><Clock size={16} /> {course.duration}</span>
                                </div>
                                <div className="flex justify-between gap-2">
                                    <button
                                        onClick={() => navigate(`/courses/${course.id}`)}
                                        className="border border-[#f52d59] text-[#f52d59] px-4 py-2 rounded-md text-sm hover:bg-[#f52d59]/10 transition"
                                    >
                                        View Program
                                    </button>

                                    <button className="bg-[#f52d59] text-white px-4 py-2 rounded-md text-sm hover:bg-[#e94962] transition">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AstroCourses;
