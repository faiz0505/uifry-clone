import React from "react";
import Image from "next/legacy/image";
const CustomUser = ({ src, style }) => {
  return (
    <figure
      className={`rounded-full border border-black bg-slate-400 relative ${style} overflow-hidden`}
    >
      <Image
        src="/mobile_image1.png"
        layout="fill"
        objectFit="contain"
        className=" object-center"
      />
    </figure>
  );
};

export default CustomUser;
