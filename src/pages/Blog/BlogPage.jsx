import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/common/Card';
import blogData from './BlogData'; // ✅ External data import

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-[#f52d59]">Our Spiritual Blogs</h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Discover articles, guides, and insights on spirituality, rituals, temples, and more.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            icon={post.icon}
            buttonText="Read More"
            buttonAction={() => navigate(`/blogs/${post.id}`)} // ✅ Works with BlogDetail
            className="shadow-card"
            variant="default"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
