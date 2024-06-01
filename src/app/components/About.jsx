"use client"
import React, { useState, useEffect } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import AboutGrid from './templates/AboutGrid';
import { useInView } from 'react-intersection-observer';

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const About = () => {
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
    <div className={`flex flex-col-reverse xl:flex-row xl:flex-nowrap justify-center gap-8 items-center px-4 ${jetbrains.className} mt-12 sm:mt-24`}>
      <div
        ref={ref}
        className={`flex flex-col items-center w-full xl:w-1/2 md:w-auto pl-4 md:pl-0 h-full transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-down-10' : 'opacity-0'}`}
      >
        <img
          className="p-2 w-full hidden md:grid max-w-[45vw] mt-0 xl:mt-48 2xl:mt-12"
          alt="image"
          src="/monogrande.svg"
        />
      </div>
      <AboutGrid className="md:w-auto xl:max-w-[42rem]" />
    </div>
  );
};

export default About;
