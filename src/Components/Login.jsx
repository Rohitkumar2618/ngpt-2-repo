import { useRef, useState } from "react";
import Header from "./Header";

import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name.current.value);

    const message = checkValidateData(
      email.current.value,
      password.current.value,
      name.current.value
    );

    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <>
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt=""
        />
      </div>

      <div className="absolute w-[400px] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#000000B3] p-8 rounded-md text-white">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign in" : "Sign up"}
          </h1>

          {!isSignInForm && (
            <div className="mb-4">
              <input
                ref={name}
                type="text"
                placeholder="Enter the full name"
                className="w-full p-3 bg-gray-800 rounded text-sm"
              />
            </div>
          )}

          <div className="mb-4">
            <input
              ref={email}
              type="text"
              placeholder="Enter the email address"
              className="w-full p-3 bg-gray-800 rounded text-sm"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="w-full p-3 bg-gray-800 rounded text-sm"
            />
          </div>

          {errorMessage && (
            <p
              className="
            font-bold 
            text-red-500
             "
            >
              {errorMessage}
            </p>
          )}

          <button
            className="w-full py-3 bg-red-600 rounded text-sm font-bold mb-4 hover:bg-red-700"
            onClick={() => handleButtonClick()}
          >
            {isSignInForm ? "Sign in" : "Sign up"}
          </button>

          <div className="text-center text-gray-400 text-sm mb-6">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          <div
            className="text-center
          cursor-pointer
           text-gray-400 text-sm"
          >
            <span
              onClick={() => toggleSignInForm()}
              className="ml-1 text-sm text-white"
            >
              {isSignInForm
                ? "New to Nextflix ? Sign Up Now"
                : "Already registered ? Sign In Now"}
            </span>
          </div>

          {/* <div className="mt-6 text-center text-gray-500 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </div> */}
        </form>
      </div>
    </>
  );
};

export default Login;
