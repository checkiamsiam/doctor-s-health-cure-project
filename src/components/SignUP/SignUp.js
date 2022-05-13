import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className=" bg-gray-100 flex items-center py-20 bg-forBanner bg-center bg-cover">
      <div className="container mx-auto  max-w-md shadow-md hover:shadow-lg transition duration-300 md:mt-0 ">
        <div className=" p-5 sm:m-0 m-3 bg-white rounded-xl">
          <h1 className='text-primary text-center font-bold mb-5 text-3xl'>REGISTER</h1>
          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Name:</label>
            <input type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Name" />
          </div>
          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Email:</label>
            <input type="email" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" />
          </div>
          <div>
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Password:</label>
            <input type="password" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Password" />
          </div>
          
          <div className='mt-2 flex items-center gap-2'>
          <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
            <span className="label-text text-neutral">Agree terms and conditions</span>
          </div>

          <button className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">REGISTER</button>
          <h1 className='text-center mt-3 text-neutral'>Already have an account? <Link to="/login" className='text-accent hover:underline font-semibold'>Just Log in</Link></h1>
          <div className="divider">With Social</div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow lg:h-24 card rounded-box place-items-center">
              <button className="btn  btn-ghost border-black border-2 lg:w-fit w-full gap-2 text-neutral  lg:px-6">
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

export default SignUp;