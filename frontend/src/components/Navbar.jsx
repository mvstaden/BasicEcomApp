import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaRegUser, FaSignInAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
const middleLinks = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/about",
    title: "About",
  },
  {
    id: 3,
    href: "/products",
    title: "Products",
  },
  {
    id: 4,
    href: "/contact",
    title: "Contact Us",
  },
];
const Navbar = () => {
  return (
    <nav className="bg-gray-300 py-3 px-5 flex items-center justify-between">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className="flex gap-3">
        {middleLinks.map(({ id, href, title }) => (
          <li key={id}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <span>
          <Link to="/account">
            <FaRegUser />
          </Link>
        </span>
        <span>
          <Link to="/sign-in">
            <FaSignInAlt />
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
