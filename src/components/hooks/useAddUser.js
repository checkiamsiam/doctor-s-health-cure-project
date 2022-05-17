import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


const useAddUser = user => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token, setToken] = useState('');
  if (user) {
    navigate(from)
  }

  useEffect(() => {
    if (user?.user?.email) {

      fetch('http://localhost:5000/users', {
        method: 'POST',
        body: JSON.stringify({ 'email': user?.user?.email }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(data => { })
    }
  }, [user])
  return [token]
}

export default useAddUser;

  //   fetch(`http://localhost:5000/users/${user?.user?.email}`, {
      //   method: 'PUT',
      //   body: JSON.stringify({ 'email': user?.user?.email }),
      //   headers: {
      //     'Content-type': 'application/json',
      //   },
      // })
      //   .then(res => res.json())
      //   .then(data => { })