import React from 'react';
import CardsGrid from '../organism/CardsGrid/CardsGrid';
import FAQSection from '../organism/FAQSection/FAQSection';



const AboutGrid = () => {
  return (
    <div className="flex flex-col max-w-[48rem] gap-6 px-6">
      <CardsGrid />
      <FAQSection />
    </div>
  );
};

export default AboutGrid;