import React, { useEffect, useState } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init'
import { useLocation, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';


const MyAppointment = () => {
  const { pathname } = useLocation();
  const [user] = useAuthState(auth)
  const [data, setData] = useState([])
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      if (user) {
        fetch(`http://localhost:5000/booked?email=${user.email}`, {
          method: 'GET',
          headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
        })
          .then(res => {
            if (res.status === 403) {
              signOut(auth)
              localStorage.removeItem('accessToken')
              navigate('/')
              return
            }
            return res.json()
          })
          .then(data => {
            setData(data)
            setLoading(false)
          })
      }
    } catch (err) {
      console.log(err);
    }
  }, [pathname, user])

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className=' mt-5'>
      <h1 className='text-center text-accent italic'>My Appointments</h1>

      {data ? <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="text-center  py-3">Serial</th>
                  <th className="text-center  py-3">Treatment</th>
                  <th className="text-center  py-3">Date</th>
                  <th className="text-center  py-3">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data?.map((a, index) => <tr key={index} className="text-gray-700">
                  <td className="text-center py-3 border">
                    {index + 1}
                  </td>
                  <td className="text-center py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {a.treatmentName} </span>
                  </td>
                  <td className="text-center py-3 text-ms font-semibold border">{a.date}</td>
                  <td className="text-center py-3 text-sm border">{a.time}</td>
                </tr>)}

              </tbody>
            </table>


          </div>
        </div>
      </section> :
        <h1 className='text-red-400 text-center mt-5 lg:text-4xl text-3xl'>You don't have any appointment</h1>
      }
    </div>
  );
};

export default MyAppointment;