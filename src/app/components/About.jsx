import React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import AboutGrid from './templates/AboutGrid';

const jetbrains = JetBrains_Mono({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
  });

const About = () => {
  return (
    <div className={`flex flex-col-reverse md:flex-row justify-center flex-wrap gap-8  px-4 ${jetbrains.className}`}>
      <div className="flex flex-col justify-end w-full md:w-auto pl-4 md:pl-0">
        <img
          className="p-2 w-[56rem] max-w-[90vw]"
          alt="image"
          src="/monogrande.svg"
        />
      </div>
      <AboutGrid className="w-full md:w-auto" />
    </div>
  );
};

export default About;
