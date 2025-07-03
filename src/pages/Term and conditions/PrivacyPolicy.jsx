import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#f52d59] mb-6 text-center">Privacy Policy</h1>

        <p className="text-gray-700 mb-4">
          This Privacy Policy outlines how we collect, use, and protect your information when you use our website.
        </p>

        <h2 className="text-2xl font-semibold text-[#fdc56c] mt-8 mb-2">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect personal details such as your name, email address, phone number, and any other details you provide voluntarily.
        </p>

        <h2 className="text-2xl font-semibold text-[#fdc56c] mt-8 mb-2">2. Use of Information</h2>
        <p className="text-gray-700 mb-4">
          The information collected is used to improve your experience, send important updates, and ensure secure transactions.
        </p>

        <h2 className="text-2xl font-semibold text-[#fdc56c] mt-8 mb-2">3. Data Security</h2>
        <p className="text-gray-700 mb-4">
          We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure.
        </p>

        <p className="text-gray-700 mt-10">
          For queries, email us at <a href="mailto:support@example.com" className="text-[#f52d59] underline">support@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
