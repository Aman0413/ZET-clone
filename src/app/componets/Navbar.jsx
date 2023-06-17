"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/zet_new_logo.7adcc993.svg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="Navbar w-full py-4 bg-white flex justify-center items-center font-light md:text-xl  flex-col">
      <div className="container flex justify-between items-center">
        <div className="logo w-20 md:w-28">
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <ul className="md:flex items-center gap-8 hidden">
            <li className="hover:text-[rgb(32,116,240)]">Home</li>
            <li className="hover:text-[rgb(32,116,240)]">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-[rgb(32,116,240)]">Partner With Us</li>
            <li className="hover:text-[rgb(32,116,240)]">Blog</li>
            <button className="btn btn-primary bg-[rgb(32,116,240)] px-4 py-2 rounded-md text-center text-white">
              Download ZET
            </button>
          </ul>
          {!show && (
            <RxHamburgerMenu
              className="md:hidden text-2xl "
              onClick={handleClick}
            />
          )}
          {show && <RxCross2 className=" text-2xl" onClick={handleClick} />}
        </div>
      </div>
      {show && (
        <div className="bg-white w-full py h-screen flex justify-center items-center mt-4 border-t-[1px] border-[#808080]">
          <ul className="md:hidden flex flex-col items-center gap-14">
            <li className="hover:text-[rgb(32,116,240)]">Home</li>
            <li className="hover:text-[rgb(32,116,240)]">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-[rgb(32,116,240)]">Partner With Us</li>
            <li className="hover:text-[rgb(32,116,240)]">Blog</li>
            <li>Download ZET</li>
            <button className="btn btn-primary bg-[rgb(32,116,240)] px-4 py-2 rounded-md text-center text-white">
              Download ZET
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
