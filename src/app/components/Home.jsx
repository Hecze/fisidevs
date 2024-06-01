import React from 'react';

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <img
        className=" w-3/4 max-w-[90vw] z-20 absolute top-[-1rem]"
        alt="image"
        src="/principal.svg"
      />
      <img
        className=" w-full h-screen absolute top-[30vh] left-0 z-50"
        alt="image"
        src="/diffuser2.svg"
      />

      <img
        className=" w-full h-[56rem]  absolute top-0 left-0 z-10"
        alt="image"
        src="/items.svg"
      />
    </div>


  );
};

export default Home;