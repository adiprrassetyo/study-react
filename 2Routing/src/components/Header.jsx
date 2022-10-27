import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className="w-100 text-white">
      <nav className="m-auto w-[90%] p-[20px] mt-4 bg-[#23BA91]">
        <ul className="flex justify-between w-[20%] font-semibold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
