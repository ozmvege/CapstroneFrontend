import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import images from '../../constants/images';

export function Navbar({ showNavbar }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={`bg-[#94ba43] fixed top-0 left-0 w-full transition-transform duration-300 ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="max-w-[60%] mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <NavLink to="/">
                        <img
                            src={images['Logo']}
                            alt="Little Lemon Logo"
                            className="h-10"
                        />
                    </NavLink>
                </div>

                {/* Hamburger Menu */}
                <button
                    className="block md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <img
                        src={images['icon_hamburger_menu']}
                        alt="Menu"
                        className="h-8 w-8"
                    />
                </button>

                {/* Links for Large Screens */}
                <div className="hidden md:flex md:space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-markazi text-[24px]"
                                : "text-primary font-markazi text-[24px]"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/Reservations"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-markazi text-[24px]"
                                : "text-primary font-markazi text-[24px]"
                        }
                    >
                        Reservation
                    </NavLink>
                    <NavLink
                        to="/OrderOnline"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-400 font-markazi text-[24px]"
                                : "text-primary font-markazi text-[24px]"
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

                {/* Dropdown Menu for Small Screens */}
                <div
                    className={`${
                        isOpen ? "block" : "hidden"
                    } absolute top-full left-0 w-full bg-[#94ba43] md:hidden`}
                >
                    <NavLink
                        to="/"
                        className="block text-primary font-markazi text-[24px] p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/Reservations"
                        className="block text-primary font-markazi text-[24px] p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Reservation
                    </NavLink>
                    <NavLink
                        to="/OrderOnline"
                        className="block text-primary font-markazi text-[24px] p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Order Online
                    </NavLink>
                    <HashLink
                        smooth
                        to="/#Menu"
                        className="block text-primary font-markazi text-[24px] p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Menu
                    </HashLink>
                    <HashLink
                        smooth
                        to="/#About"
                        className="block text-primary font-markazi text-[24px] p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </HashLink>
                </div>
            </div>
        </nav>
    );
}
