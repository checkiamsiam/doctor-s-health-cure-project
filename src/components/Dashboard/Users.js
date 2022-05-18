import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Users = () => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const { isLoading, data: allUser, refetch } = useQuery(['allusers', user], () => fetch('http://localhost:5000/users', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => {
    if (res.status === 403) {
      signOut(auth)
      localStorage.removeItem('accessToken')
      navigate('/')
      return
    }
    return res.json()
  }))



  if (loading || isLoading) {
    return <Loading></Loading>
  }


  return (
    <div className=' mt-5'>
      <h1 className='text-center text-accent italic'>My Review</h1>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="text-center  py-3">Serial</th>
                  <th className="text-center  py-3">User</th>
                  <th className="text-center  py-3">Current State</th>
                  <th className="text-center  py-3">Authorization</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {allUser?.map((u , index) => <tr key={index} className="text-gray-700">
                  <td className="text-center py-3 border">
                    {index + 1} {u.email === user.email && '(YOU)'}
                  </td>
                  <td className="text-center py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight rounded-md text-white bg-neutral "> {u.email} </span>
                  </td>
                  <td className="text-center py-3 text-ms font-semibold border"><span class="badge">{u.role}</span></td>
                  <td className="text-center py-3 text-sm border"><button class="btn btn-xs">Make Admin</button></td>
                </tr>)}

              </tbody>
            </table>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Users;