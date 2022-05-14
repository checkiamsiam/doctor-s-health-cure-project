import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';


const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const [
    signInWithEmailAndPassword,
    user3,
    loading3,
    error3,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending2, error] = useSendPasswordResetEmail(auth);


  if (loading1 || loading2 || loading3 || sending2) {
    return <Loading></Loading>
  }

  // if (user3) {
  //   if (user3.emailVerified) {
  //     navigate(from)


  //   } else {
  //     signOut(auth)
  //     toast('Your Email is not verify. Verify to Login')

  //   }
  // }
  
  if (user1 || user2 || user3) {
    navigate(from)
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password)




  }

  const handleResetPass = async () => {
    if (email.length > 4) {
      await sendPasswordResetEmail(email)
      await toast('Password Reset-able email sent')
    } else {
      await toast('Enter Email First')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center py-20 bg-forBanner bg-center bg-cover">
      <div className="container mx-auto  max-w-md shadow-md hover:shadow-lg transition duration-300 md:mt-0 ">
        <div className=" p-5 sm:m-0 m-3 bg-white rounded-xl">
          <h1 className='text-primary text-center font-bold mb-5 text-3xl'>Login</h1>

          <div className="mb-6">
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Email:</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" />
          </div>
          <div>
            <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Password" />
          </div>

          <span onClick={handleResetPass} className="text-sm test-neutral inline-block  hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">Forget Password?</span>

          <button onClick={handleLogin} className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">LOGIN</button>
          <h1 className='text-center mt-3 text-neutral'>Don't have any account? <Link to="/signup" className='text-accent hover:underline  font-semibold'>Create New</Link></h1>
          <div className="divider">With Social</div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow lg:h-24 card rounded-box place-items-center">
              <button onClick={() => signInWithGoogle()} className="btn  btn-ghost border-black border-2 lg:w-fit w-full gap-2 text-neutral lg:px-6">
                <FcGoogle />
                Google
              </button>
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-grow  card lg:h-24 rounded-box place-items-center">
              <button onClick={() => signInWithFacebook()} className="btn  lg:w-fit w-full btn-secondary gap-2 text-base-100 ">
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