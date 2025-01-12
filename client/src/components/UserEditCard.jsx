import React from "react";

const UserEditCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="bg-gray-800/90 w-80 md:w-96 rounded-lg shadow-lg overflow-hidden text-gray-100 px-4">
      <div className="relative pt-4">
        <img
          src={photoUrl}
          alt="User Profile"
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-1">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Profile Details
        </h2>
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-200">Name:</span>{" "}
            {firstName + " " + lastName}
          </p>
          {age && (
            <p>
              <span className="font-semibold text-gray-200">Age:</span> {age} <span>Years old</span>
            </p>
          )}
          {gender && (
            <p>
              <span className="font-semibold text-gray-200">Gender:</span>{" "}
              {gender}
            </p>
          )}
          <p>
            <span className="font-semibold text-gray-200">About:</span>{" "}
            {about || "No additional information provided."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserEditCard;
