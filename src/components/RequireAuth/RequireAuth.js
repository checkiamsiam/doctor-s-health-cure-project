import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if(loading){
    return <h1 className='absolute top-1/2 left-1/2'>loading...</h1>
  }
  if (!user) {
  
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;