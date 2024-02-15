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
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Dark Theme Landing Page</h1>
      <p className="text-lg mb-6">This is a professional and complex landing page built with React.js and Tailwind CSS.</p>
      <div className="flex items-center justify-center">
        <button onClick={decrement} className="bg-red-500 text-white font-bold px-4 py-2 mr-2">-</button>
        <span className="text-2xl font-bold">{count}</span>
        <button onClick={increment} className="bg-green-500 text-white font-bold px-4 py-2 ml-2">+</button>
      </div>
    </div>
  );
};

export default Landing;

