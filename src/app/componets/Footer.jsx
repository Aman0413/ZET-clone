import React from "react";
import logo from "../../app/../../public/assets/zet_logo_white.04e35c15.svg";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="Footer w-full h-[600px] flex justify-center text-white "
      id="footer"
    >
      <div className="container ">
        <Image src={logo} alt="logo" className="my-10" />
        <div className="bg-white h-[1px] "></div>
        <div className="flex mt-10 justify-between md:text-xl flex-wrap">
          <ul className="flex flex-col gap-6">
            <li className="uppercase">company</li>
            <li>About us</li>
            <li>Partner with us</li>
            <li>Blog</li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="uppercase">Legel</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="uppercase">Contact</li>
            <li>
              <ul className="flex items-center gap-3">
                <li>
                  <AiOutlineMail />
                </li>
                <li>hi@zetapp.in</li>
              </ul>
            </li>
            <li>
              <ul className="flex items-center gap-3">
                <li>
                  <BsTelephone />
                </li>
                <li>+91-7417274072</li>
              </ul>
            </li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="uppercase">social</li>
            <li>
              <ul className="flex gap-3">
                <li>
                  <AiFillLinkedin className="text-3xl" />
                </li>
                <li>
                  <AiOutlineInstagram className="text-3xl" />
                </li>
                <li>
                  <AiFillFacebook className="text-3xl" />
                </li>
                <li>
                  <BsTelegram className="text-3xl" />
                </li>
                <li>
                  <FaWhatsappSquare className="text-3xl" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
