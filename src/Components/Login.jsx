import { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const nameValue = isSignInForm ? "" : name.current?.value || "";

    // Validate input data
    let message = "";
    if (!isSignInForm) {
      // Sign Up validation
      if (!/^[a-zA-Z\s]{2,}$/.test(nameValue)) {
        message =
          "Name must contain only alphabets and be at least 2 characters long";
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
        message = "Please enter a valid email address";
      } else if (passwordValue.length < 6) {
        message = "Password must be at least 6 characters long";
      }
    } else {
      // Sign In validation
      if (!emailValue || !passwordValue) {
        message = "Please enter both email and password";
      }
    }

    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up:", user);
          return updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://plus.unsplash.com/premium_photo-1674343963928-d67007d2ae74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
          });
        })
        .then((user) => {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              photoURL: photoURL,
              displayName: displayName,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User logged in:", user);
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              photoURL: photoURL,
              displayName: displayName,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear error message when switching forms
  };

  return (
    <>
      <Header />
      <div className="relative">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="absolute w-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 p-8 rounded-md text-white">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <div className="mb-4">
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-gray-700 rounded text-sm"
              />
            </div>
          )}

          <div className="mb-4">
            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-gray-700 rounded text-sm"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-3 bg-gray-700 rounded text-sm"
            />
          </div>

          {errorMessage && (
            <p className="font-bold text-red-500 mb-4">{errorMessage}</p>
          )}

          <button
            className="w-full py-3 bg-red-600 rounded text-sm font-bold mb-4 hover:bg-red-700"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {isSignInForm && (
            <div className="text-center text-gray-400 text-sm mb-6">
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          <div className="text-center text-gray-400 text-sm">
            <span className="mr-1">
              {isSignInForm ? "New to Netflix?" : "Already registered?"}
            </span>
            <span
              onClick={toggleSignInForm}
              className="text-white cursor-pointer hover:underline"
            >
              {isSignInForm ? "Sign Up Now" : "Sign In"}
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
