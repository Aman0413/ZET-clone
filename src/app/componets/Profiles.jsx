import React from "react";
import Image from "next/image";

function Profiles({ img, name, position }) {
  return (
    <div className="Profiles flex flex-col justify-center gap-2 text-xs md:text-[16px] lg:text-xl font-light">
      <div className="md:w-56 w-16">
        <Image src={img} className="w-full" />
      </div>
      <p>{name}</p>
      <p className="tex-[#969fb3] ">{position}</p>
    </div>
  );
}

export default Profiles;
