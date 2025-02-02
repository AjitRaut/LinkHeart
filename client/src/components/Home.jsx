import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/feed");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-black"
      style={{
        backgroundImage:
          "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')",
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl text-center max-w-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          No New Matches Right Now!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Check back later to discover your perfect match.
        </p>

        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:scale-110 hover:shadow-2xl transition-all"
        >
          Discover Matches
        </button>
      </div>
    </div>
  );
};

export default Home;
