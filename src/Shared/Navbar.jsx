import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useCart from "../hook/UseCart";
import { AuthContext } from "../Providers/AuthProvider";
import { SiGoogleclassroom } from "react-icons/si";
import { MdDarkMode } from "react-icons/md";
import { RiMoonClearLine } from "react-icons/ri";
import { useState } from 'react';
import { ModeContext } from "../Providers/ModeProvider";
import useInstructor from "../hook/useInstructor";
import useAdmin from "../hook/useAdmin";
const Navbar = () => {
  
  const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
  const { user, logOut } = useContext(AuthContext)
  console.log(user);
  const [cart] = useCart();
  const profilePhoto = [];
  const Name = []
  for (const i in user) {
    if (i == 'photoURL') { profilePhoto.push(user[i]) }
    if (i == 'displayName') { Name.push(user[i]) }
  }
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }
  const { darkMode, handleModeToggle } = useContext(ModeContext)
  const navOptions = <>
    <li className={`font-bold me-8  ${darkMode ? ' text-white' : 'text-purple-700'}`}>
      <NavLink to="/">Home</NavLink>
    </li>
    <li className={`font-bold me-8  ${darkMode ? ' text-white' : 'text-purple-700'}`}>
      <NavLink to="/instructors">Instructors</NavLink>
    </li>
    <li className={`font-bold me-8  ${darkMode ? ' text-white' : 'text-purple-700'}`}>
      <NavLink to="/classes">Classes</NavLink>
    </li>
    {user ? <li className={`font-bold me-8  ${darkMode ? ' text-white' : 'text-purple-700'}`}>
      <NavLink to="/dashboard/studenthome">Dashboard</NavLink>
    </li> : ''}
    {  !isAdmin && !isInstructor && user? <li className="relative">
      <NavLink to="/dashboard/mycart">
        <button className="relative">
          <SiGoogleclassroom className={`text-2xl font-bold ${darkMode ? ' text-white' : 'text-purple-700'}`} />
          {cart.length > 0 && (
            <div className="badge badge-secondary  bg-pink-600 font-bold text-sm absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
              {cart.length}
            </div>
          )}
        </button>
      </NavLink>
    </li> : ""}




  </>
  return (

    <div>
      <div className={`navbar fixed z-50 ${darkMode ? 'bg-black text-white' : 'bg-blue-200'}    ps-0 pe-0  md:ps-32 md:pe-32`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-52">
              {navOptions}
              {
                user ? <div className="flex flex-col">
                  <div className="avatar mb-3">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12 mt-2 ">
                      <a id="not-clickable">
                        <span className="text-xs"><img className="object-cover rounded-full h-full min-w-full" src={profilePhoto[0]} alt="" /></span></a>
                      <Tooltip anchorSelect="#not-clickable" className='text-dark bg-light'>
                        <button className='text-dark bg-light border-0 '>{Name[0] ? Name[0] : <div className="">

                        </div>}</button>
                      </Tooltip>

                    </div>
                  </div>

                  <button onClick={handleLogOut} className="btn btn-sm border-0 bg-pink-600 text-white font-bold me-5 md:me-0">Logout</button>
                </div> : <>
                  <Link to="/login" className="btn btn-sm border-0 bg-pink-600 text-white font-bold me-5 md:me-0">Login</Link>
                </>
              }
            </ul>

          </div>
          <img src="images/logo.png" className="w-36 md:w-48 " alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}

          </ul>
        </div>
        <div className="navbar-end">
          <div> <span className={`navbar `}>

            <span onClick={handleModeToggle}>
              {darkMode ? <RiMoonClearLine className="text-3xl font-bold bg-purple-400 p-1 text-white rounded-2xl"></RiMoonClearLine > : <MdDarkMode className="text-3xl font-bold bg-slate-100 p-1 text-purple-600 rounded-2xl"></MdDarkMode>}
            </span>
          </span></div>
          {
            user ? <div className="md:flex hidden items-center">
              <div className="avatar ">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12 me-2 ">
                  <a id="not-clickable">
                    <span className="text-xs"><img className="object-cover rounded-full h-full min-w-full" src={profilePhoto[0]} alt="" /></span></a>
                  <Tooltip anchorSelect="#not-clickable" className='text-dark bg-light'>
                    <button className='text-dark bg-light border-0 '>{Name[0] ? Name[0] : <div className="">

                    </div>}</button>
                  </Tooltip>

                </div>
              </div>
              <button onClick={handleLogOut} className="btn btn-sm border-0 bg-pink-600 text-white  font-bold me-5 md:me-0">Logout</button>
            </div> : <>
              <Link to="/login" className="btn btn-sm border-0 bg-pink-600 text-white font-bold me-5 md:me-0">Login</Link>

            </>
          }
        </div>
      </div>
    </div>

  );
};

export default Navbar;