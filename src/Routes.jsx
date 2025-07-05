import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import AboutUs from './pages/About Us/AboutUs';

import BlogPage from './pages/Blog/BlogPage';
import BlogDetail from './pages/Blog/BlogDetail';
import TermsAndConditions from './pages/Term and conditions/TermsAndConditions';
import PrivacyPolicy from './pages/Term and conditions/PrivacyPolicy';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FooterCTA from './components/common/AdsCamp';
import AllCourses from './pages/Courses/AllCourses';
import CourseDetail from './pages/Courses/CourseDetail';
import AstroCourseDetail from './pages/Courses/AstroCourseDetail';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/courses/:id" element={<AstroCourseDetail />} />
      </Routes>
      <Footer />
      <FooterCTA />
    </Router>
  );
};

export default AppRoutes;