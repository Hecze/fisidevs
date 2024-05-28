import React from 'react';
import Card from "./Card";
import Question from "./Question";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col justify-end">
        <img
          className="p-2 w-[58rem]"
          alt="image"
          src="/fisichango.png"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent">
          
        </div>
      </div>
      <AboutCards />
    </div>

  );
};

export default About;