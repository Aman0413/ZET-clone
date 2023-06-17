import React from "react";
import Navbar from "../componets/Navbar";
import AboutHero from "../componets/AboutHero";
import Footer from "../componets/Footer";
import Image from "next/image";
import img1 from "../../app../../../public/assets/image.png";
import feature1 from "../../app../../../public/assets/image (2).png";
import feature2 from "../../app../../../public/assets/image (3).png";
import feature3 from "../../app../../../public/assets/image (4).png";
import feature4 from "../../app../../../public/assets/image (5).png";
import feature5 from "../../app../../../public/assets/image (6).png";
import inv1 from "../../app../../../public/assets/image (7).png";
import inv2 from "../../app../../../public/assets/image (8).png";
import inv3 from "../../app../../../public/assets/image (9).png";
import inv4 from "../../app../../../public/assets/image (10).png";
import Profiles from "../componets/Profiles";
import pr1 from "../../app../../../public/assets/image (11).png";
import pr2 from "../../app../../../public/assets/image (12).png";
import pr3 from "../../app../../../public/assets/image (13).png";
import pr4 from "../../app../../../public/assets/image (14).png";
import pr5 from "../../app../../../public/assets/image (15).png";
import pr6 from "../../app../../../public/assets/image (16).png";
import FounderProfile from "../componets/FounderProfile";
import founder1 from "../../app../../../public/assets/image (19).png";
import founder2 from "../../app../../../public/assets/image (20).png";
import founder3 from "../../app../../../public/assets/image (21).png";
import bottomBg from "../../app../../../public/assets/image (23).png";

function page() {
  const profile = [
    {
      img: pr1,
      name: "Kunal Shah",
      position: "Founder, CRED",
    },
    {
      img: pr2,
      name: "Gaurav Munjal",
      position: "Founder, UNACADEMY",
    },
    {
      img: pr3,
      name: "Aakrit Vaish",
      position: "Co-founder, HAPTIK",
    },
    {
      img: pr4,
      name: "harshil mathur",
      position: "Founder, RAZORPAY",
    },
    {
      img: pr5,
      name: "Vidit Aatrey",
      position: "Founder, MEESHO",
    },
    {
      img: pr6,
      name: "Amrish Rau",
      position: "CEO, PINELABS",
    },
  ];

  const founders = [
    {
      img: founder1,
      name: "Manish Shara",
      position: "Co-Founder & CEO",
    },
    {
      img: founder2,
      name: "Yash Desai",
      position: "Co-founder",
    },
    {
      img: founder3,
      name: "Lokesh Agarwal",
      position: "CTO",
    },
  ];
  return (
    <div>
      <AboutHero />

      <div className="w-full center flex-col">
        {/* over the years */}
        <div className="container center flex-col py-7 text-xl md:text-4xl md:py-10">
          <div className="font-bold md:py-10">
            How we evolved over the years
          </div>
          <Image src={img1} className=" py-7 overflow-x-auto " />
        </div>
        {/* got featured */}
        <div className="h-56 bg-[rgb(250,251,254)]  flex flex-col gap-4 py-10 px-4 justify-center text-xl md:w-full md:h-[400px] md:text-4xl md:justify-center md:items-center ">
          <div className="container flex flex-col gap-9 w-full">
            <div className="font-bold ">Got Featured</div>
            <div className="flex  gap-3 justify-between ">
              <Image src={feature1} className="w-16 md:w-40 lg:w-60" />
              <Image src={feature2} className="w-16 md:w-40 lg:w-60" />
              <Image src={feature3} className="w-16 md:w-40 lg:w-60" />
              <Image src={feature4} className="w-16 md:w-40 lg:w-60" />
              <Image src={feature5} className="w-16 md:w-40 lg:w-60" />
            </div>
          </div>
        </div>
        {/* meet the inevestors
         */}
        <div className="w-full center">
          <div className="container flex items-center justify-center flex-col py-20">
            <div className="top md:text-5xl font-bold w-full">
              <h2 className="my-11">Meet the Investors</h2>
              <div className="flex justify-between flex-wrap ">
                <Image src={inv1} className="w-16 md:w-40 lg:w-60" />
                <Image src={inv2} className="w-16 md:w-40 lg:w-60" />
                <Image src={inv3} className="w-16 md:w-40 lg:w-60" />
                <Image src={inv4} className="w-16 md:w-40 lg:w-60" />
              </div>
            </div>

            {/* profiles */}
            <div className="profiles w-full center mt-28 ">
              <div className="w-full grid grid-cols-3 gap-x-16 p-5 gap-y-16">
                {profile.map((item) => {
                  return (
                    <Profiles
                      img={item.img}
                      name={item.name}
                      position={item.position}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* our founders */}
        <div className="w-full flex justify-center items-center flex-col bg-[#eff7ff] py-20">
          <div className="text-center flex flex-col gap-3 ">
            <h2 className="md:text-4xl text-3xl font-bold">
              Meet our Founders
            </h2>
            <p className="md:text-2xl text-xl font-light">
              Few words from founders desk
            </p>
          </div>
          <div className="container flex justify-around mt-20 flex-wrap ">
            {founders.map((item) => {
              return (
                <FounderProfile
                  img={item.img}
                  name={item.name}
                  position={item.position}
                />
              );
            })}
          </div>
        </div>
        {/* aboutus bottom image */}
        <div>
          <Image src={bottomBg} className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default page;
