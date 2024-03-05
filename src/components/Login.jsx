import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleLogin = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form className="w-4/12 rounded-md  absolute p-10 bg-black text-white my-36 right-0 left-0 mx-auto bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-gray-800 "
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full rounded-lg bg-gray-800 "
        />

        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg  bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {" "}
          <span className="font-bold">
            {isSignInForm ? "New to Netflix? " : "Already a User? "}
            <span
              onClick={toggleLogin}
              className="text-gray-500 cursor-pointer"
            >
              {isSignInForm ? " Sign up now" : " Sign in now"}
            </span>{" "}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
