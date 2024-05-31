import React from 'react';
import Card from "./Card";

const CardContainer = ({ children }) => {
  return (
    <div className="grid gap-3 grid-flow-dense auto-rows-[11rem] w-full h-full " style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(23rem, 1fr))' }}>
      <div className="bg-blue-700 col-span-1 row-span-2 hidden"/>
      <div className="bg-red-700  col-span-1 row-span-2  md:col-span-2 md:row-span-1 hidden"/>
      <div className="bg-yellow-700 col-span-1 row-span-1 hidden"/>
      <div className="bg-red-200 col-span-1 row-span-1 hidden"/>
      {children}
    </div>
  );
};

export default CardContainer;
