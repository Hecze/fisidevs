import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const CardsContainer = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% de la vista
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`grid gap-3 grid-flow-dense auto-rows-[10rem] w-full h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-up-10' : 'opacity-0'}`}
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(21rem, 1fr))' }}
    >
      <div className="bg-blue-700 col-span-1 row-span-2 hidden"/>
      <div className="bg-red-700 col-span-1 row-span-2 md:col-span-2 md:row-span-1 hidden"/>
      <div className="bg-yellow-700 col-span-1 row-span-1 hidden"/>
      <div className="bg-red-200 col-span-1 row-span-1 hidden"/>
      {children}
    </div>
  );
};

export default CardsContainer;
