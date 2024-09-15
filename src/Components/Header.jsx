import React from "react";
import Browse from "./Browse";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between px-8 w-screen py-2 bg-gradient-to-b from-black content-center">
      {/* Netflix Logo */}
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
      />

      {/* User Icon */}
      <div className="flex">
        {user ? (
          <>
            <img
              className="w-10 h-10 align-center rounded mt-3"
              src={user.photoURL || "default-profile.png"}
              alt="User Icon"
            />
            <button
              onClick={handleSignOut}
              className="font-semibold text-white ml-3"
            >
              (sign out)
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/signin")}
            className="font-semibold text-white ml-3"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
