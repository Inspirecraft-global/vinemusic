import React, { useState } from 'react';
import logo from '../../src/assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
import OpenBar, { CloseBar } from '../assets/icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'About us', path: '/#about-us' },
    { name: 'Artists', path: '/artists' },
    { name: 'RELEASES', path: '/release' },
    { name: 'Media', path: '/media' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <div className="w-full z-50 navbar h-[88px] font-lato flex justify-between items-center px-6 lg:px-10 rounded-full  top-0 left-0 right-0">
      <img src={logo} alt="logo" className="object-cover h-[63px] w-[176px]" />

      {/* Desktop Links */}
      <div className="hidden font-lato lg:flex gap-5 text-sm">
        {navLinks.map((link) =>
          link.path === '/#about-us' ? (
            <a
              key={link.path}
              href={link.path}
              className="font-semibold uppercase text-[#17090B] hover:text-[#4B0082] transition-colors"
            >
              {link.name}
            </a>
          ) : (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'font-extrabold uppercase text-[#4B0082] border-b-2 pb-3 border-[#4B0082]'
                  : 'font-semibold uppercase text-[#17090B]'
              }
            >
              {link.name}
            </NavLink>
          )
        )}
      </div>

      {/* Desktop Button */}
      <NavLink
        to="/contact-us"
        className="hidden lg:block font-extrabold px-8 py-4 rounded-full text-white  uppercase bg-[#4B0082]"
      >
        Contact Us
      </NavLink>

      {/* Hamburger for mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseBar /> : <OpenBar />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute  top-[130px] left-0 w-full mx-auto bg-white shadow-lg py-6 px-4 flex flex-col gap-4 lg:hidden z-50">
          {navLinks.map((link) =>
            link.path === '/#about-us' ? (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className="font-semibold uppercase text-[#17090B] hover:text-[#4B0082] transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)} // close menu on click
                className={({ isActive }) =>
                  isActive
                    ? 'font-extrabold uppercase text-[#4B0082] border-b-2 border-[#4B0082]'
                    : 'font-semibold uppercase text-[#17090B]'
                }
              >
                {link.name}
              </NavLink>
            )
          )}
          <NavLink
            to="/contact-us"
            className="px-8 uppercase justify-center items-center flex py-6 mt-4 rounded-full text-white font-bold text-sm bg-[#4B0082]"
          >
            Start Your Experience
          </NavLink>
        </div>
      )}
    </div>
  );
}
