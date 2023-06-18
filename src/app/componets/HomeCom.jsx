"use client";

import React, { useEffect } from "react";
import downloadbtn from "../../app/../../public/assets/downloadBtnDark.a0f01343 (1).svg";
import heroImg from "../../app/../../public/assets/image (28).png";
import brand1 from "../../app/../../public/assets/image (24).png";
import brand2 from "../../app/../../public/assets/image (25).png";
import brand3 from "../../app/../../public/assets/image (26).png";
import brand4 from "../../app/../../public/assets/image (27).png";
import brand5 from "../../app/../../public/assets/image (29).png";
import Image from "next/image";
import Card from "./Card";
import img1 from "../../app/../../public/assets/image (30).png";
import img2 from "../../app/../../public/assets/image (31).png";
import img3 from "../../app/../../public/assets/image (33).png";
import img4 from "../../app/../../public/assets/image (34).png";
import phoneboy from "../../app/../../public/assets/image (32).png";
import investImg from "../../app/../../public/assets/zero_investment.d5743aab (1).svg";
import earnImg from "../../app/../../public/assets/Fin_products.0e8a0582 (1).svg";
import quickImg from "../../app/../../public/assets/quick_payout.1d689e09.svg";
import traninigImg from "../../app/../../public/assets/Icon_support.c8382fc1 (1).svg";
import customerImg from "../../app/../../public/assets/customerSupport.5780cd23 (1).svg";
import finaImg from "../../app/../../public/assets/financialProduct.1b3d6eec.svg";
import zetEffectImg from "../../app/../../public/assets/image (35).png";
import downloadImg from "../../app/../../public/assets/downloadBtnDark.a0f01343 (1).svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  const choose = [
    {
      img: investImg,
      title: "Zero Investment",
      desc: "Build your business without any investment",
    },
    {
      img: quickImg,
      title: "Quick Payout",
      desc: "Direct Payout in your bank account in short time",
    },
    {
      img: earnImg,
      title: "Limitless Earnings",
      desc: "Direct Payout in your bank account in short time",
    },
    {
      img: traninigImg,
      title: "Training & Upskilling",
      desc: "Get trained by finance and sales experts",
    },
    {
      img: customerImg,
      title: "Customer Support",
      desc: "Access tools and content to build relationship",
    },
    {
      img: finaImg,
      title: "Financial Products",
      desc: "Trustworthy & high-rated products & categories",
    },
  ];
  const services = [
    {
      img: img1,
      name: "credit cards",
      desc: "100% Contactless Application Process with Instant Approval From Top Banks.",
      color: "#ecfeeb",
    },
    {
      img: img2,
      name: "loans",
      desc: "100% online process. Instant offers. Affordable Rate of Interest on loans.",
      color: "#fff0ca",
    },
    {
      img: img3,
      name: "buy now pay later",
      desc: "Short-term financing that allows consumers to make purchases and pay for them over time.",
      color: "#ffeee7",
    },
    {
      img: img4,
      name: "saving accounts",
      desc: "ZET offers range of savings account that suits your personal needs for the banking.",

      color: "#fef4e6",
    },
  ];
  return (
    <div className="w-full center flex-col">
      {/* Hero section */}
      <div className="hero-section center w-full md:h-[35rem] mt-10 ">
        <div className="container  bg-[#e9f4ff] flex md:justify-around items-center justify-center h-[70%] p-2">
          <div className="left flex flex-col gap-4 justify-center items-center py-4 md:justify-normal md:items-start ">
            <p className="font-bold text-4xl text-center">
              Become a Financial Advisor and{" "}
              <span className="text-[#264efe]">Earn Rs.1 Lakh/Month</span>
            </p>
            <p>No investment required</p>
            <Image src={downloadbtn} alt="downloadbtn" />
          </div>
          <div className="hidden md:block right w-96 ">
            <Image
              src={heroImg}
              alt="hero-image"
              className="relative bottom-12"
            />
          </div>
        </div>
      </div>

      {/* Top brands */}
      <div className="container flex justify-center items-center flex-col gap-12 my-10">
        <div className="text-center">
          <h2 className="font-bold text-xl md:text-2xl">Top Brands on ZET</h2>
          <p className="md:text-xl">
            We are trusted by best brand in the country
          </p>
        </div>
        <div className="flex overflow-x-auto gap-2 justify-between w-full">
          <div className="border-black border-[0.2px] rounded-md">
            <Image src={brand2} alt="hero-image" />
          </div>
          <div className="border-black border-[0.2px] rounded-md">
            <Image src={brand2} alt="hero-image" />
          </div>
          <div className="border-black border-[0.2px] rounded-md">
            <Image src={brand3} alt="hero-image" />
          </div>
          <div className="border-black border-[0.2px] rounded-md">
            <Image src={brand4} alt="hero-image" />
          </div>
          <div className="border-black border-[0.2px] rounded-md">
            <Image src={brand5} alt="hero-image" />
          </div>
        </div>
      </div>

      {/* products on ZET */}
      <div className="w-full bg-[#eff7ff] center">
        <div className="container ">
          <div className="text-center my-16">
            <h2 className="font-bold text-xl md:text-2xl">Products on ZET</h2>
            <p className="md:text-xl">
              We are trusted by best brand in the country
            </p>
          </div>

          <div
            className="grid md:grid-cols-2  grid-cols-1  gap-4 m-auto pb-4"
            data-aos="fade-up"
          >
            {services.map((item) => {
              return (
                <Card
                  img={item.img}
                  title={item.name}
                  desc={item.desc}
                  color={item.color}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ZET effect */}
      <div className=" mt-28 w-[125%] bg-[#145cc5] center h-[80vh] -rotate-6 ">
        <div
          className="container bg-[#407fd9] h-[50%]  bg-contain bg-no-repeat flex justify-end items-center -rotate-3 py-40 rounded-md "
          id="zetEffect"
        >
          <div className=" bg-transparent text-center  text-white flex flex-col gap-8 md:px-10 px-0 justify-center items-center w-full md:w-[50%] p-20">
            <h3 className="uppercase font-bold text-xl">The zet effect</h3>
            <p className="font-extrabold md:text-3xl leading-relaxed">
              14 Lakh+ Financial Advisor across India are using ZET to increase
              their income.
            </p>
            <div
              class=" bg-gray-200 h-3 w-full rounded-full"
              x-data="{val: 90, start: 1}"
              x-init="setTimeout(()=> start = val, 100)"
            >
              <div
                class="  bg-gradient-to-br from-red-500 to-red-800 h-3 w-1 rounded-full  transition-all "
                style={{
                  width: 0,
                  transitionDuration: "3s",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}
      <div className="w-full center p-10 mt-5">
        <div className="container flex md:flex-row flex-col gap-40  items-center ">
          <div className="left -screen bg-contain bg-no-repeat  " id="choose">
            <div className="text-xl  text-center md:text-start">
              <h2 className="md:text-2xl font-bold ">
                Why <span className="text-[#145cc5] ">Choose Us</span>
              </h2>
              <p>Why we are loved by our customers</p>
            </div>
            <div className="img hidden md:block mt-10">
              <Image src={phoneboy} />
            </div>
          </div>
          <div className="right grid md:grid-cols-2 grid-cols-1 gap-y-20 gap-x-40 w-full ml-20 md:ml-0">
            {choose.map((item) => {
              return (
                <div className="w-60" data-aos="fade-up">
                  <Image src={item.img} />
                  <h3 className="font-bold text-xl mt-5">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* steps */}

      <div className="w-[125%]  center h-screen bg-[#0a2540] md:-rotate-12 -rotate-6 md:my-56 mt-8 mb-6 ">
        <div className=" text-white  flex flex-col items-center gap-16 md:gap-36 md:rotate-12 rotate-6  px-24 ">
          <div className="text-center ">
            <h4 className="font-bold text-xl">Start Earning in 3 Easy Steps</h4>
            <p>We have create the app the make your earning easy</p>
          </div>
          <div className="flex gap-10 md:gap-20 flex-col-reverse md:flex-row items-center ">
            <div className="left flex flex-col items-center gap-5 md:items-start ">
              <div className="step uppercase bg-[#538bff] w-28  rounded-md font-bold text-center  py-3 px-4">
                step 1
              </div>
              <div className=" text-[#9ecfff] text-xl md:text-3xl font-bold">
                Download the App and Sign up as a ZET agent
              </div>
              <Image src={downloadImg} />
            </div>
            <div className="right md:w-[40%]">
              <Image src={heroImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
