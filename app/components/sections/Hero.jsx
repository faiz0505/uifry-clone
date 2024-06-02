import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import Link from "next/link";
import { fetchData } from "../../utils";
import { BgEffect } from "../BgEffect";
const Hero = async () => {
  const data = await fetchData();

  return (
    <section className="section overflow-x-hidden">
      <aside className=" relative">
        <div className=" ">
          <img
            src="/mobile_image2.png"
            className=" w-60 md:w-80 absolute -top-[10%] -left-[20%]"
          />
          <img src="/mobile_image1.png" className=" w-60 md:w-80" />
          <img
            src="/mobile_image1.png"
            className=" w-60 md:w-80 absolute left-[20%] top-[10%] -z-10"
          />
        </div>
      </aside>
      <aside className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <div className="self-center flex flex-col gap-3">
          <div className="absolute md:left-80 md:top-10 top-[35%] left-[30%] -z-20">
            <BgEffect key={"jhas73"} />
          </div>
          <h1 className="text-2xl md:text-3xl capitalize font-clashDisplayBold">
            make the best financial decisions
          </h1>

          <p className="text-xs font-clashDisplayLight capitalize ">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="flex gap-3">
            <CustomButton
              text={"Get started"}
              className=" self-start"
              radius="sm"
              as={Link}
              href={"/sign-up"}
              color="primary"
            />
            <CustomButton
              text={"Watch Video"}
              className=" self-start"
              radius="sm"
              as={Link}
              variant="none"
              href={"/sign-up"}
              color="primary"
            />
          </div>
        </div>
        <figure>
          <Image src={"/styled_image.png"} height={300} width={400} />
        </figure>
      </aside>
    </section>
  );
};

export default Hero;
