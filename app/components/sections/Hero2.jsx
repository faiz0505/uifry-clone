import React from "react";
import CustomButton from "../CustomButton";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className=" h-[70vh] md:h-[80vh] w-full bg-black rounded grid grid-cols-1 lg:grid-cols-2 paddings !pr-0 overflow-hidden relative">
      <div className="h-72 w-72 rounded-full border border-white absolute md:-top-[15%] md:-right-[15%] -top-[40%] -right-[50%]" />
      <div className="h-80 w-80 rounded-full border border-white absolute md:-top-[20%] md:-right-[16%] -top-[40%] -right-[50%]" />
      <div className="h-96 w-96 rounded-full border border-white absolute md:-top-[25%] md:-right-[19%] -top-[45%] -right-[60%]" />
      <aside className="w-full text-white flex flex-col gap-3 justify-center items-start">
        <h1 className=" font-clashDisplayBold text-3xl">
          ready to get started?
        </h1>
        <p className="text-sm font-light">
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
        <CustomButton
          text={"Download App"}
          radius="sm"
          className="bg-white"
          endContent={<i class="fa-brands fa-apple text-xl"></i>}
        />
      </aside>
      <aside className="w-full h-full relative ">
        <figure className="">
          <Image
            src={"/hero2.png"}
            layout="fill"
            objectFit="contain"
            className=" absolute z-10"
          />
        </figure>
      </aside>
      <div className="h-72 w-72 rounded-full border border-white absolute md:top-[75%] md:-left-[15%] -bottom-[40%] -left-[50%]" />
      <div className="h-80 w-80 rounded-full border border-white absolute md:top-[70%] md:-left-[16%] -bottom-[40%] -left-[50%]" />
      <div className="h-96 w-96 rounded-full border border-white absolute md:top-[65%] md:-left-[19%] -bottom-[45%] -left-[60%]" />
    </section>
  );
};

export default Hero2;
