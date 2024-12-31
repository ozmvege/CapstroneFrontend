import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import images from '../../constants/images';

export function Navbar({ showNavbar }) {
  return (
    <nav
      className={`bg-[#94ba43] fixed top-0 left-0 w-full transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[80%] mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={images['Logo']}
              alt="Little Lemon Logo"
              className="h-10"
            />
          </NavLink>
        </div>

        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-markazi text-[24px]" : "text-primary font-markazi text-[24px]"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Reservations"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-markazi text-[24px]" : "text-primary font-markazi text-[24px]"
            }
          >
            Reservation
          </NavLink>
          <NavLink
            to="/OrderOnline"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-markazi text-[24px]" : "text-primary font-markazi text-[24px]"
            }
          >
            Order Online
          </NavLink>
          <HashLink
            smooth
            to="/#Menu"
            className="text-primary font-markazi text-[24px]"
          >
            Menu
          </HashLink>
          <HashLink
            smooth
            to="/#About"
            className="text-primary font-markazi text-[24px]"
          >
            About
          </HashLink>
        </div>
      </div>
    </nav>
  );
}
