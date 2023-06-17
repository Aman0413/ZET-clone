import React from "react";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";

function FounderProfile({ img, name, position }) {
  return (
    <div className="FounderProfile w-64 p-2 text-sm md:text-xl font-light flex flex-col gap-2">
      <Image src={img} />
      <div className="flex items-center justify-between mt-2">
        <div>
          <p className="">{name}</p>
          <p>{position}</p>
        </div>
        <div>
          <AiFillLinkedin className="text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default FounderProfile;
