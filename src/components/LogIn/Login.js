import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center py-20">
      <div className="container mx-auto  max-w-md shadow-md hover:shadow-lg transition duration-300 md:mt-0 ">
        <div className=" p-5 sm:m-0 m-3 bg-white rounded-xl">
          <h1 className='text-primary text-center font-bold mb-5 text-3xl'>Login</h1>
          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Email:</label>
            <input type="email" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" />
          </div>
          <div>
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Password:</label>
            <input type="password" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Password" />
          </div>
          <span className="text-sm test-neutral inline-block  hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">forget password?</span>
          <button className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">LOGIN</button>
          <h1 className='text-center mt-3 text-neutral'>Don't have any account? <Link to="/singup" className='text-accent hover:underline'>Create New</Link></h1>
          <div className="divider">With Social</div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow lg:h-24 card rounded-box place-items-center">
              <button className="btn  lg:w-fit w-full gap-2 text-base-100 lg:px-6">
                <FcGoogle />
                Google
              </button>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-grow  card lg:h-24 rounded-box place-items-center">
              <button className="btn  lg:w-fit w-full btn-secondary gap-2 text-base-100 ">
                <FaFacebookF />
                Facebook
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;