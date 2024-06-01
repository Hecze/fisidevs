import React from 'react';
import CardsGrid from '../organism/CardsGrid/CardsGrid';
import FAQSection from '../organism/FAQSection/FAQSection';

const AboutGrid = ({ className }: { className: string }) => {
  return (
    <div className={"flex flex-col gap-6 max-w-[70rem] " + className}>
      <CardsGrid />
      <FAQSection />
    </div>
  );
};

export default AboutGrid;
