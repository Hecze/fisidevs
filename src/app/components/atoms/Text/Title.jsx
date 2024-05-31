import React from 'react';

const Title = ({ text, className = "" }) => (
  <h1 className={"text-3xl text-white font-semibold mb-4 text-start w-full ml-2" + className}>
    {text}
  </h1>
);

export default Title;
