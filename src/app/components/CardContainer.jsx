import React from 'react';
import Card from "./Card";

const CardContainer = ({ children }) => {
  return (
    <div className="grid ">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return (
            child
          );
        }
        return null;
      })}
    </div>
  );
};

export default CardContainer;
