import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PastPujasHighlights = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            scroll('right');
        }, 3000); // change speed here (ms)

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const videos = [
        {
            src: 'https://www.youtube.com/embed/RlUOflRHZ8U',
            title: 'Maa Ganga Ka Pavitra Abhishek',
        },
        {
            src: 'https://www.youtube.com/embed/_y_VRb9HbMM',
            title: 'Hanuman Garhi, Ayodhya – Puja & Chad...',
        },
        {
            src: 'https://www.youtube.com/embed/_y_VRb9HbMM',
            title: 'Hanuman Garhi, Ayodhya – Puja & Chad...',
        },
        {
            src: 'https://www.youtube.com/embed/_y_VRb9HbMM',
            title: 'Hanuman Garhi, Ayodhya – Puja & Chad...',
        },
        {
            src: 'https://www.youtube.com/embed/_y_VRb9HbMM',
            title: 'Hanuman Garhi, Ayodhya – Puja & Chad...',
        },
        {
            src: 'https://www.youtube.com/embed/_y_VRb9HbMM',
            title: 'Hanuman Garhi, Ayodhya – Puja & Chad...',
        },
        {
            src: 'https://www.youtube.com/embed/6nQoW7LVVY0',
            title: 'Shani Jayanti Puja & Chadhava',
        },
    ];

    return (
        <div className="py-10 px-4 bg-white">
            <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Experience Highlights from Our Past Pujas and Chadhavas
                </h2>
                <p className="text-gray-600 mt-2">
                    Your full video recording - including your name and gotra chanting - will be shared with you after your puja is performed.
                </p>
            </div>

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                >
                    <ChevronLeft />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-10"
                >
                    {videos.map((video, index) => (
                        <div key={index} className="flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden shadow-md bg-gray-100">
                            <iframe
                                title={video.title}
                                src={video.src}
                                className="w-full h-96"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default PastPujasHighlights;
