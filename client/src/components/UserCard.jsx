import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Error sending request:", err);
    }
  };

  return (
    <div className="bg-gradient-to-b mt-24 from-gray-800 to-gray-900 text-white rounded-lg shadow-lg w-96 overflow-hidden hover:scale-105 transform transition duration-300">
      <figure className="relative">
        <img
          src={photoUrl || "https://via.placeholder.com/150"}
          alt="User"
          className="w-full h-56 object-cover"
        />
      </figure>

      <div className="p-8">
        <h2 className="text-3xl font-bold capitalize text-center">
          {firstName} {lastName}
        </h2>

        {age && gender && (
          <p className="text-gray-400 text-center mt-3 text-lg">
            {age} years old, {gender}
          </p>
        )}
        <p className="text-gray-300 mt-5 text-center">
          {about || "No bio provided."}
        </p>

        <div className="flex justify-center gap-6 mt-8">
          <button
            className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="px-5 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md shadow-md transition"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
