import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';
import useAddUser from '../hooks/useAddUser';

const SignUp = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [agree, setAgree] = useState(false)
  const [displayName, setDisplayName] = useState('')
  const [dp, setDp] = useState([])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const [
    createUserWithEmailAndPassword,
    user3,
    loading3,
    error3,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error4] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, error5] = useSendEmailVerification(auth);

  const [token] = useAddUser(user1 || user2 || user3)


  useEffect(() => {

    if (token) {
      navigate(from, { replace: true });
    }

  }, [token])

  const handleAgreeTerms = () => {
    setAgree(!agree)
  }

  if (loading1 || loading2 || loading3 || updating || sending) {
    return <Loading></Loading>
  }



  const handleRegister = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('image', dp[0]);


    fetch(`https://api.imgbb.com/1/upload?key=c25e76a1eeaf524a6df2aed69f003c9d`, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(async data => {
        if (data.success) {
          await createUserWithEmailAndPassword(email, password)
          await updateProfile({ displayName: displayName, photoURL: data?.data?.url })
          await toast('Updated profile');
          await sendEmailVerification();
          await toast('Email Verification Sent')
          await signOut(auth)
          await localStorage.removeItem('accessToken')
          await navigate('/login')
        } else {
          toast.error('Image upload Failed')

        }
      })

  }



  return (
    <div className=" bg-gray-100 flex items-center py-20 bg-forBanner bg-center bg-cover">
      <div className="container mx-auto  max-w-md shadow-md hover:shadow-lg transition duration-300 md:mt-0 ">
        <div className=" p-5 sm:m-0 m-3 bg-white rounded-xl">
          <h1 className='text-primary text-center font-bold mb-5 text-3xl'>REGISTER</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Name:</label>
              <input onChange={(e) => setDisplayName(e.target.value)} type="text" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Name" />
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="text">Your Photo:</label>
              <input onChange={(e) => setDp(e.target.files)} type="file" id='dp' name='dp' className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your DP" required />
            </div>
            <div className="mb-6">
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="email">Email:</label>
              <input onChange={(e) => setEmail(e.target.value)} type="email" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Your Email" required />
            </div>
            <div>
              <label className="mr-4 font-bold inline-block mb-2 text-accent" htmlFor="password">Password:</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" className="border bg-gray-100 py-2 px-4 w-full outline-none focus:ring-2 focus:ring-indigo-400 rounded" placeholder="Password" required />
            </div>

            <div className='mt-2 flex items-center gap-2'>
              <input onChange={handleAgreeTerms} type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
              <span className="label-text text-neutral">Agree terms and conditions</span>
            </div>

            <button type='submit' disabled={!agree} className="w-full mt-6  bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300 btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">REGISTER</button>
          </form>
          <h1 className='text-center mt-3 text-neutral'>Already have an account? <Link to="/login" className='text-accent hover:underline font-semibold'>Just Log in</Link></h1>
          <div className="divider">With Social</div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow lg:h-24 card rounded-box place-items-center">
              <button onClick={() => signInWithGoogle()} className="btn  btn-ghost border-black border-2 lg:w-fit w-full gap-2 text-neutral  lg:px-6">
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

export default SignUp;