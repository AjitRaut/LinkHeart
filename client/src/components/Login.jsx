import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/home");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/feed");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-4">
      <div className="w-full max-w-[420px] bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {isLoginForm ? "Login" : "Sign Up"}
        </h2>
        <form>
          {!isLoginForm && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm text-gray-300 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  placeholder="Enter your first name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  placeholder="Enter your last name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
              Email ID
            </label>
            <input
              type="text"
              id="email"
              value={emailId}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-red-500 text-center text-sm mb-4">
              {error}
            </div>
          )}
          <button
            type="button"
            onClick={isLoginForm ? handleLogin : handleSignUp}
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition duration-300"
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
        </form>
        <p
          className="text-center text-sm text-gray-400 mt-4 cursor-pointer hover:text-purple-400"
          onClick={() => setIsLoginForm((value) => !value)}
        >
          {isLoginForm
            ? "New User? Sign Up Here"
            : "Existing User? Login Here"}
        </p>
      </div>
    </div>
  );
};

export default Login;
