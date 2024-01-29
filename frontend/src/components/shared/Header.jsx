import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-7 bg-white">
      <div className="container flex items-center justify-between gap-5 flex-wrap">
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>

          <div className="flex items-center gap-[10px] cursor-pointer">
            <div className="w-[10px] h-[10px] bg-success rounded-full" />
            <span>Dhaka</span>
            <FaChevronDown />
          </div>
        </div>

        <nav>
          <ul className="flex items-center gap-[30px] text-lg">
            <li className="transition-all hover:text-primary">
              <Link to="#">Menu</Link>
            </li>
            <li className="transition-all hover:text-primary">
              <Link to="#">Orders</Link>
            </li>
            <li className="transition-all hover:text-primary">
              <Link to="#">Login</Link>
            </li>
            <li className="transition-all hover:text-primary">
              <Link to="#">
                <IoBagHandle />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-[10px] text-lg font-bold">
          <MdCall />
          <span>+91 9800 098 998</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
