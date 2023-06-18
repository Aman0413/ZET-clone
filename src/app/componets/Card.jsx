import React from "react";
import Image from "next/image";

function Card({ img, title, desc, color }) {
  const styles = {
    backgroundColor: color,
    "&:hover": {
      backgroundColor: "white",
    },
  };
  return (
    <div
      className="Card flex  md:w-[80%] md:h-60 rounded-lg flex-col md:flex-row p-6 justify-center items-center gap-10 hover:bg-white "
      style={styles}
    >
      <div className="left md:w-72 w-20">
        <Image src={img} alt="logo" />
      </div>
      <div className="right text-center md:text-start ">
        <p className="uppercase font-bold text-xl">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
