import React from 'react';
import Card from "./Card";

const CardContainer = ({ children }) => {
  return (
    <div className="grid gap-3 grid-flow-dense auto-rows-[11rem] w-full h-full " style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(22rem, 1fr))' }}>
      {children}
    </div>
  );
};

export default CardContainer;
