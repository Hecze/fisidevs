import React from 'react';

const Home = () => {
  return (
    <div className="h-52 min-[320px]:h-80 lg:h-screen w-full flex justify-center">
      <img
        className=" w-3/4 max-w-[90vw] z-20 absolute  sm:top-[-1rem]"
        alt="image"
        src="/principal.svg"
      />
      <img
        className=" w-full absolute top-[10rem]  lg:top-[56vh] left-0 z-50"
        alt="image"
        src="/diffuser2.svg"
      />

      <img
        className=" w-full h-[15rem] lg:h-[56rem]  absolute top-0 left-0 z-10"
        alt="image"
        src="/items.svg"
      />
    </div>


  );
};

export default Home;