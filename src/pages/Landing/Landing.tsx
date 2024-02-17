import React from 'react';
import { useState } from 'react';

const Landing = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <></>
  );
};

export default Landing;

