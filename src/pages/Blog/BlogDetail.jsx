import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from './BlogData'; // static or fetched

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));
  const navigate = useNavigate();

  if (!blog) return <div className="p-10 text-center text-red-500">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-[#f52d59] hover:underline"
      >
        ← Back to Blogs
      </button>
      <h1 className="text-3xl font-bold text-[#f52d59] mb-4">{blog.title}</h1>
      <img src={blog.icon} alt={blog.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-gray-700 text-lg leading-relaxed">{blog.fullText || blog.description}</p>
    </div>
  );
};

export default BlogDetail;
