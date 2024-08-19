import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome!</h1>
      <div className="flex flex-row space-x-4"> {/* Use flex-row and space-x-4 for horizontal spacing */}
        <Link to="/counter">
          <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Go to Counter
          </button>
        </Link>
        <Link to="/error">
          <button className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
            Go to Error Thrower
          </button>
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Home;
