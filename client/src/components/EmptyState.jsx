import React from "react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-br bg-white text-black">
      <img
        src="/images/match-illustration.jpg"
        alt="It's a match illustration"
        className="w-80"
      />

      <h1 className="text-2xl font-semibold mb-2">
        Looks like there’s no one new right now!
      </h1>
      <p className="text-black mb-8">
        Check back later to find your perfect match.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-white hover:scale-105 transform transition duration-300"
      >
        Discover Matches
      </button>
    </div>
  );
};

export default EmptyState;
