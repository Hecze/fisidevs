import React from 'react';

const Home = () => {
  return (
    <div className=" h-[45vw] xl:h-[62vw] 2xl:h-[45vw] w-full flex flex-col justify-center">
      <div className="w-full flex justify-center align-items-center">
      <img
        className=" w-3/4 z-20 animate-fade-in-down-20"
        alt="image"
        src="/principal.svg"
      />
      </div>
      <img
        className=" w-full mt-[-19vw]  z-50 "
        alt="image"
        src="/diffuser2.svg"
      />
      <img
        className=" w-full h-[45vw]  absolute top-0 left-0 z-10 animate-fade-in-up-20"
        alt="image"
        src="/items.svg"
      />
    </div>
  );
};

export default Home;