import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/common/HeroSection';
import FeaturesSection from './FeaturesSection';
import CoursesSection from './CoursesSection';
import BenefitsSection from './BenefitsSection';
import CertificationSection from './CertificationSection';
import GlobalReachSection from './GlobalReachSection';
import PractitionerSection from './PractitionerSection';
import PartnersSection from './PartnersSection';
import EnrollmentSection from './EnrollmentSection';
import TestimonialsSection from './TestimonialsSection';
import SupportSection from './SupportSection';
import FooterCTA from '@/components/common/AdsCamp';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <BenefitsSection />
        <CertificationSection />
        <GlobalReachSection />
        <PractitionerSection />
        <PartnersSection />
        <EnrollmentSection />
        <TestimonialsSection />
        <SupportSection />
      </main>
      <FooterCTA />
      
      <Footer />
    </div>
  );
};

export default HomePage;