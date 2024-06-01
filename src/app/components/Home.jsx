"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState({
    principal: false,
    diffuser: false,
    items: false,
  });

  const handleLoad = (imageName) => {
    setIsLoaded((prev) => ({ ...prev, [imageName]: true }));
  };

  return (
    <div className="h-[36vw] sm:h-[42vw] w-full flex flex-col justify-center relative">
      <div className="w-full flex justify-center items-center">
        <div className={`w-3/4 z-20 ${isLoaded.principal ? 'animate-fade-in-down-20' : 'opacity-0'}`}>
          <Image
            alt="principal image"
            src="/principal.svg"
            layout="responsive"
            width={1000}
            height={1000}
            onLoadingComplete={() => handleLoad('principal')}
          />
        </div>
      </div>
      <div className={`w-full mt-[-19vw] z-50 ${isLoaded.diffuser ? 'animate-fade-in-up-20' : 'opacity-0'}`}>
        <Image
          alt="diffuser image"
          src="/diffuser2.svg"
          layout="responsive"
          width={1000}
          height={1000}
          onLoadingComplete={() => handleLoad('diffuser')}
        />
      </div>
      <div className={`w-[97vw] px-[4vw]  absolute  left-0 z-10 ${isLoaded.items ? 'animate-fade-in-up-20' : 'opacity-0'}`}>
        <Image
          alt="items image"
          src="/items.svg"
          layout="responsive"
          width={1000}
          height={1000}
          onLoadingComplete={() => handleLoad('items')}
        />
      </div>
    </div>
  );
};

export default Home;
