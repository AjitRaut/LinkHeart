import { useState } from "react";
import UserEditCard from "./UserEditCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black lg:flex-row justify-center items-start my-10 px-4 py-6 space-y-8 lg:space-y-0 lg:space-x-12">
      <div className="bg-gray-800/90 text-gray-100 w-full max-w-md p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold text-center mb-6">Edit Profile</h2>
  <form>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">First Name:</label>
      <input
        type="text"
        value={firstName}
        className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Last Name:</label>
      <input
        type="text"
        value={lastName}
        className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Photo URL:</label>
      <input
        type="text"
        value={photoUrl}
        className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Age:</label>
      <input
        type="text"
        value={age}
        className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Gender:</label>
      <input
        type="text"
        value={gender}
        className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setGender(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">About:</label>
      <textarea
        value={about}
        rows={4}
        className="w-full p-3 bg-gray-700 text-gray-100 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={(e) => setAbout(e.target.value)}
      ></textarea>
    </div>
    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    <div className="text-center mt-6">
      <button
        type="button"
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300"
        onClick={saveProfile}
      >
        Save Profile
      </button>
    </div>
  </form>
</div>


        <UserEditCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>

      {showToast && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md">
            Profile saved successfully.
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
