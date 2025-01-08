import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { FiHome, FiUser, FiSearch, FiHeart } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-600 shadow-md fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Left: Logo */}
        <Link
          to="/home"
          className="flex items-center text-white font-bold text-2xl"
        >
          <FiHeart className="h-8 w-8 mr-2" />
          LinkHeart
        </Link>

        <div className="flex-1 flex items-center justify-center px-2">
          <div className="w-full max-w-md relative">
            <FiSearch className="absolute inset-y-0 left-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
        </div>

        {user && (
          <div className="flex items-center space-x-4">
            <span className="text-white hidden sm:block">
              Welcome, {user.firstName}
            </span>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src={user.photoUrl}
                  alt="User Avatar"
                />
              </button>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/connections"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Connections
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/requests"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Requests
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <MdLogout className="inline-block h-5 w-5 mr-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
