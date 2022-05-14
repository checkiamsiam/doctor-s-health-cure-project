import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading></Loading>
  }
  if (!user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    signOut(auth)
    toast('Your Email is not verify. Verify to Login')
  }
  return children;
};

export default RequireAuth;