import React from 'react';

const CardsContainer = ({ children }) => {
  return (
    <div className="grid gap-3 grid-flow-dense auto-rows-[10rem] w-full h-full " style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(21rem, 1fr))' }}>
      <div className="bg-blue-700 col-span-1 row-span-2 hidden"/>
      <div className="bg-red-700  col-span-1 row-span-2  md:col-span-2 md:row-span-1 hidden"/>
      <div className="bg-yellow-700 col-span-1 row-span-1 hidden"/>
      <div className="bg-red-200 col-span-1 row-span-1 hidden"/>
      {children}
    </div>
  );
};

export default CardsContainer;
