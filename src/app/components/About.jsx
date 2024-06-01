import React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import AboutGrid from './templates/AboutGrid';

const jetbrains = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const About = () => {
  return (
    <div className={`flex flex-col-reverse xl:flex-row xl:flex-nowrap justify-center gap-8 items-center px-4 ${jetbrains.className} mt-12 sm:mt-24`}>
      <div className="flex flex-col items-center w-full xl:w-1/2 md:w-auto pl-4 md:pl-0 h-full">
        <img
          className="p-2 w-full hidden md:grid max-w-[45vw] mt-0 xl:mt-48 2xl:mt-12 "
          alt="image"
          src="/monogrande.svg"
        />
      </div>
      <AboutGrid className="md:w-auto xl:max-w-[42rem]" />
    </div>
  );
};

export default About;
