import React from 'react';
import Hero from '../components/home/Hero';
import Proof from '../components/home/Proof';
import HowItWorks from '../components/home/HowItWorks';
import CoursesPricing from '../components/home/CoursesPricing';
import Comparison from '../components/home/Comparison';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Proof />
      <HowItWorks />
      <CoursesPricing />
      <Comparison />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
