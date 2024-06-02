import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton";
import Link from "next/link";
import { fetchData } from "../../utils";
import BgEffect from "../bgEffect";
const Hero = async () => {
  const data = await fetchData();

  return (
    <section className="section overflow-x-hidden">
      <aside className="h-1/2 w-full md:w-1/2 md:h-full relative">
        <Image src={"/hero.png"} fill objectFit="contain" className="" />
      </aside>
      <aside className="w-full md:w-1/2 self-center flex flex-col gap-3">
        <div className="absolute md:left-80 md:top-40 top-[65%] left-[30%] -z-20">
          <BgEffect />
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
      </aside>
    </section>
  );
};

export default Hero;
