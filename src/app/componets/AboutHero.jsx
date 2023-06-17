import React from "react";

function AboutHero() {
  return (
    <div
      className="w-full bg-cover bg-no-repeat h-screen  md:h-[90vh] flex justify-center items-center text-white"
      id="aboutus-bg"
    >
      <div className=" text-center w-[60%]  md:w-[25%] flex flex-col justify-center items-center gap-4 ">
        <h2 className="uppercase text-4xl font-bold">Our Mission</h2>
        <p className=" text-center font-thin text-xl">
          Enabling financial inclusion for the next billion Indians & making
          their Zindagi Set. Building a platform that enables you to sell
          financial products & earn up to Rs. 1 lakh every month.
        </p>
        <p className="uppercase font-bold ">EARN BETTER. LIVE BETTER</p>
      </div>
    </div>
  );
}

export default AboutHero;
