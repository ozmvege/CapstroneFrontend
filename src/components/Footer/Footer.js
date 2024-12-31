import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import images from '../../constants/images';
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#94ba43] text-primary py-8">
      <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div>
          <NavLink to="/">
            <img
              src={images['Logo']}
              alt="Little Lemon Logo"
              className="h-10"
            />
          </NavLink>
        </div>

        {/* Dormant Links Section */}
        <div>
          <h4 className="font-bold text-lg mb-4">Dormant Links</h4>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-markazi text-lg" : "text-primary font-markazi text-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Reservations"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-markazi text-lg" : "text-primary font-markazi text-lg"
                }
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/OrderOnline"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-markazi text-lg" : "text-primary font-markazi text-lg"
                }
              >
                Order Online
              </NavLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#Menu"
                className="text-primary font-markazi text-lg"
              >
                Menu
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#About"
                className="text-primary font-markazi text-lg"
              >
                About
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Info</h4>
          <p>
            Little Lemon<br />
            Example Street<br />
            23162 City<br />
            0217123-6123
          </p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Social Media</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-400"
              >
                <FaTwitter className="text-xl" />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-400"
              >
                <FaFacebookF className="text-xl" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-yellow-400"
              >
                <FaYoutube className="text-xl" />
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
