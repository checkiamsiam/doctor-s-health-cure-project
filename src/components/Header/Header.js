import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { GrClose } from 'react-icons/gr';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);
  const firstLetter = user?.displayName?.slice(0, 1);
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  const [show, setShow] = useState(false);
  const [transparent, setTransparent] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar1 = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar

      setShow(true);
    } else { // if scroll up show the navbar
      setShow(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);

  };


  const controlNavbar2 = () => {
    if (window.scrollY >= 250) {

      setTransparent(false);
    } else {
      setTransparent(true);
    }
  }

  window.addEventListener('scroll', controlNavbar1);
  window.addEventListener('scroll', controlNavbar2);






  return (
    <div className={`fixed top-0 w-full z-30 showNav ${show && 'hideNav'} ${transparent ? 'bg-transparent' : 'bg-[#e0dede]'}`}>
      <div className="navbar container mx-auto">
        <div className="flex-none">
          <button onClick={toggleDrawer} className="btn btn-square btn-ghost lg:block hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-primary"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">Health Cure</Link>
        </div>
        <div className="flex-none">
          {user ? <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              {user?.photoURL ? <div className="w-9 rounded-full">
                <img src={user.photoURL} alt='' />
              </div>
                :
                <div className="avatar placeholder">
                  <div className="bg-primary-focus text-neutral-content rounded-full w-9">
                    <span className="text-3xl">{firstLetter}</span>
                  </div>
                </div>}
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li className='text-center text-primary '>{user?.displayName}</li>
              <li className='text-center mb-2 text-primary'>{user?.email}</li>
              <li className='text-accent'><Link to="user_settings">Settings</Link></li>
              <li onClick={() => signOut(auth)} className='text-accent'><button>Logout</button></li>
            </ul>
          </div>
            :

            <div className="md:ml-5">
              <Link to="/login" className="btn btn-accent text-base-100 font-bold bg-gradient-to-r from-primary to-accent">Log in</Link>
            </div>}




          <button onClick={toggleDrawer} className="btn btn-square btn-ghost lg:hidden block ml-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-[#008000]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      <Drawer

        zIndex
        open={isOpen}
        onClose={toggleDrawer}
        direction='top'
        className='bla bla bla bg-neutral hidden lg:block'
      >
        <div className='relative'>

          <ul className=" py-20 flex flex-wrap justify-center  gap-6  p-4 overflow-y-auto bg-base-100 text-base-content">
            <li onClick={toggleDrawer}><NavLink to="/" className="btn btn-ghost text-primary">Home</NavLink></li>
            <li onClick={toggleDrawer}><NavLink to="/appointment" className="btn btn-ghost text-primary">Appointment</NavLink></li>
            <li onClick={toggleDrawer}><NavLink to="/reviews" className="btn btn-ghost text-primary">Reviews</NavLink></li>
            <li onClick={toggleDrawer}><NavLink to="/about" className="btn btn-ghost text-primary">About</NavLink></li>

            <li onClick={toggleDrawer}><NavLink to="/contact" className="btn btn-ghost text-primary">Contact Us</NavLink></li>
          </ul>

          <button onClick={toggleDrawer} className="btn btn-ghost btn-circle absolute top-2 right-5 text-2xl "><GrClose /></button>
        </div>
      </Drawer>
      <Drawer

        zIndex
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla bg-neutral  lg:hidden'
      >
        <div className='relative'>

          <ul className=" py-20  text-center  gap-3  p-4 overflow-y-auto bg-base-100 text-base-content">
            <li onClick={toggleDrawer}><NavLink to="/" className="btn btn-ghost text-primary">Home</NavLink></li>
            <li onClick={toggleDrawer}><NavLink to="/appointment" className="btn btn-ghost text-primary">Appointment</NavLink></li>
            <li onClick={toggleDrawer}><NavLink to="/reviews" className="btn btn-ghost text-primary">Reviews</NavLink></li>
            <li onClick={toggleDrawer}><NavLink to="/about" className="btn btn-ghost text-primary">About</NavLink></li>

            <li onClick={toggleDrawer}><NavLink to="/contact" className="btn btn-ghost text-primary">Contact Us</NavLink></li>
          </ul>

          <button onClick={toggleDrawer} className="btn btn-ghost btn-circle absolute top-2 right-5 text-2xl "><GrClose /></button>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;