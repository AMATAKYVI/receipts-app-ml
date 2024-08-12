import React, { FC } from 'react';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Login form here */}
      <div className=" flex flex-col justify-between p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Logo XYZ</div>
        </div>
        <div className="w-[50%] mx-auto">
          <form action="">
            <div className="text-3xl font-semibold">Create account</div>
            <div className=" text-center cursor-pointer py-2 px-3 w-full border mt-4 rounded-md">
              Sign up with Google
            </div>
            <div className="flex items-center justify-center my-4">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-500">OR</span>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="mb-4">
              <label htmlFor="firstname" className="font-semibold text-sm">
                First name
              </label>
              <input
                placeholder="Enter your first name"
                type="text"
                name="firstname"
                id="firstname"
                className="w-full border-2 p-2 rounded-md px-5 mt-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="font-semibold text-sm">
                Email
              </label>
              <input
                placeholder="Enter your email"
                type="email"
                name="email"
                id="email"
                className="w-full border-2 p-2 rounded-md px-5 mt-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-semibold text-sm">
                Password
              </label>
              <input
                placeholder="Create a password"
                type="password"
                name="password"
                id="password"
                className="w-full border-2 p-2 rounded-md px-5 mt-2"
              />
              {/* <span className="text-xs font-light">
                Must be 8 characters long
              </span> */}
            </div>
            <button className="w-full text-white bg-sky-600 text-center py-3 px-5 rounded-md mt-5">
              Create account
            </button>
          </form>
        </div>
        <div className="text-center pb-2 text-sm mt-3">
          Need an account?
          <span className="font-semibold ml-2">Sign up here</span>
        </div>
      </div>
      {/* login banner here */}
      <div className="relative">
        {/* background image */}
        <img
          src="/banner_3.jpg"
          alt=""
          className="object-cover h-full w-full"
        />
        <div className="absolute bottom-[30%] left-4 right-4 bg-gray-200 bg-opacity-50 backdrop-blur-sm rounded-lg text-white font-semibold p-4">
          <p className="text-5xl">
            Short cut your work, with our pdf ai and more.
          </p>
          <p>Summarize your pdf file below 30 seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
