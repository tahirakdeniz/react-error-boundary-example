import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  if (count > 5) {
    throw new Error("Count exceeded 5!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          onClick={handleIncrease}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
