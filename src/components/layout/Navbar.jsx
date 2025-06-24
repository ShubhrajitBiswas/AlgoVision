import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onOpenAbout }) => {
  const [toggle, setToggle] = useState(false)

  const navLinks = [
    {
      id: "home",
      title: "Home",
      path: "/"
    },
    {
      id: "about",
      title: "About",
      onClick: onOpenAbout,
      isModal: true
    },
    {
      id: "github",
      title: "GitHub",
      external: true,
      path: "https://github.com/ShubhrajitBiswas/AlgoVision"
    }
  ];

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-md text-white px-6">
      {/* Logo */}
      <div className="flex-1 mt-3">
        <a className="btn btn-ghost normal-case text-2xl font-bold hover:text-pink-400 transition-colors duration-300 transform hover:scale-105" href="/">AlgoVision</a>
      </div>

      {/* Horizontal Menu */}
      <div className="flex-none -mt-6">
        <ul className='list-none flex flex-row justify-end items-center flex-1 space-x-10 '>
          {navLinks.map((nav, i) => (
            <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-pink-400 transition-colors duration-300 transform hover:scale-105`}
            >
              {nav.external ? (
                <a href={nav.path} target="_blank" rel="noopener noreferrer">
                  {nav.title}
                </a>
              ) : nav.isModal ? (
                <button onClick={nav.onClick} className="bg-transparent border-none text-white cursor-pointer p-0 hover:text-pink-400 transition-colors duration-300 transform hover:scale-105">
                  {nav.title}
                </button>
              ) : (
                <Link to={nav.path}>
                  {nav.title}
                </Link>
              )}
            </li>        
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
