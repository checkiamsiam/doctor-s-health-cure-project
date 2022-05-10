import React, { useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-none">
          <button onClick={toggleDrawer} className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
          <Drawer

            zIndex
            open={isOpen}
            onClose={toggleDrawer}
            direction='top'
            className='bla bla bla'
          >
            <div className='relative'>

              <ul className=" py-20 flex flex-wrap justify-center  gap-6  p-4 overflow-y-auto bg-base-100 text-base-content">
                <li className="btn btn-ghost">Home</li>
                <li className="btn btn-ghost">About</li>
                <li className="btn btn-ghost">Appointment</li>
                <li className="btn btn-ghost">Reviews</li>

                <li className="btn btn-ghost">Contact Us</li>
              </ul>

              <button onClick={toggleDrawer} className="btn btn-ghost btn-circle absolute top-2 right-5 text-2xl"><GrClose /></button>
            </div>
          </Drawer>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Health Cure</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <div className="md:ml-5">
            <a className="btn">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;