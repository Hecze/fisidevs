import React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import AboutGrid from './templates/AboutGrid';

const jetbrains = JetBrains_Mono({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
  });


const About = () => {
  return (
    <div className={"flex justify-center flex-wrap gap-8 mb-16" + jetbrains.className}>
      <div className="flex flex-col justify-end">
        <img
          className="p-2 w-[58rem]"
          alt="image"
          src="/fisichango.png"
        />
      </div>
      <AboutGrid />
    </div>

  );
};

export default About;