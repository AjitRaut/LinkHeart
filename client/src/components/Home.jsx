import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/feed");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-[85vh] bg-cover bg-center  text-black"
      style={{ 
        backgroundImage:
          "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')",
      }}
    >
      <div className="bg-white bg-opacity-10 p-8 rounded-lg text-center max-w-md">
        <h1 className="text-2xl font-semibold mb-2">
          Looks like there’s no one new right now!
        </h1>
        <p className="text-black mb-8">
          Check back later to find your perfect match.
        </p>

        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 px-4 rounded-lg hover:scale-105 hover:shadow-lg transition-all"
        >
          Discover Matches
        </button>
      </div>
    </div>
  );
};

export default Home;
