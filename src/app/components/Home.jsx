import React from 'react';

const Home = () => {
  return (
    <div className="h-[14.5rem] min-[440px]:h-[22rem] sm:h-[25rem] md:h-[30rem] lg:h-[34rem] 2xl:h-[60rem] w-full flex justify-center">
      <img
        className=" w-4/5 z-20 mt-[-2rem] sm:mt-[-4rem] md:mt-[-6rem] 2xl:mt-[-10rem] "
        alt="image"
        src="/principal.svg"
      />
      <img
        className=" w-full absolute top-[12rem] sm:top-[18rem]  md:top-[22rem]  2xl:top-[36rem] left-0 z-50"
        alt="image"
        src="/diffuser2.svg"
      />
      <img
        className=" w-full h-[18rem] md:h-[30rem]  2xl:h-[56rem]  absolute top-0 left-0 z-10"
        alt="image"
        src="/items.svg"
      />
    </div>
  );
};

export default Home;