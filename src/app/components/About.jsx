import React from 'react';
import Card from "./Card";
import Question from "./Question";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <div className="flex gap-8 mb-16">
      <div className="flex flex-col justify-end">
        <img
          className="p-2 w-[58rem]"
          alt="image"
          src="/fisichango.png"
        />
      </div>
      <AboutCards />
    </div>

  );
};

export default About;