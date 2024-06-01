import React from 'react';

const Home = () => {
  return (
    <div className="h-52 min-[320px]:h-[16rem] min-[550px]:h-[22rem] sm:h-[25rem] md:h-[36rem] lg:h-[48rem] 2xl:h-screen w-full flex justify-center">
      <img
        className=" w-4/5 max-w-[90vw] z-20 absolute  lg:top-[-6rem]"
        alt="image"
        src="/principal.svg"
      />
      <img
        className=" w-full absolute top-[12rem] sm:top-[18rem]  2xl:top-[36rem] left-0 z-50"
        alt="image"
        src="/diffuser2.svg"
      />
      <img
        className=" w-full h-[20rem] md:h-[30rem]  2xl:h-[56rem]  absolute top-0 left-0 z-10"
        alt="image"
        src="/items.svg"
      />
    </div>
  );
};

export default Home;