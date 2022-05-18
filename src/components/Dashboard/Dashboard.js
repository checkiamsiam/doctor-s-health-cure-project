import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAllUser from '../hooks/UseAllUser';
import Loading from '../Loading/Loading';

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  const { isLoading, allUser, refetch } = useAllUser(user);


  if (loading || isLoading) {
    return <Loading></Loading>
  }

  const currentUser = allUser.find(u => u?.email === user?.email)





  return (
    <div className='container mx-auto pt-20 lg:flex'>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content lg:block hidden">
          {/* <!-- Sidebar content here --> */}
          <li className='font-semibold text-accent'><Link to='/dashboard'>My Appointment</Link></li>
          <li className='font-semibold text-accent'><Link to='/dashboard/myreview'>My Reviews</Link></li>
          {currentUser.role === 'admin' && <li className='font-semibold text-accent'><Link to='/dashboard/users'>All Users</Link></li>}
        </ul>
      </div>
      <div className='w-full'>
        <h1 className='text-primary text-4xl font-bold text-center '>Dashboard</h1>
        <div className="text-center lg:hidden block px-5">
          <Link to='/dashboard' className="tab tab-bordered ">My Appointment</Link>
          <Link to='/dashboard/myreview' className="tab tab-bordered ml-2">My Reviews</Link>
          {currentUser.role === 'admin' && <Link to='/dashboard/users' className="tab tab-bordered ml-2">All Users</Link>}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;