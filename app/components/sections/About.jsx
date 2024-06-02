import React from "react";
import Eclipses from "../eclipses";
import CustomUser from "../User";
import { BgEffect } from "../BgEffect";
const About = () => {
  return (
    <>
      <div className="flex justify-center" id="about">
        <div className="">
          <h5 className="text-center text-xs">TESTOMINAL</h5>
          <p className="capatilize text-2xl font-clashDisplayBold text-center">
            what our users say about us?
          </p>
        </div>
      </div>
      <section className="section !h-[85vh] ">
        <aside className="w-full md:w-1/2">
          <h2 className=" font-clashDisplaySemibold text-xl">
            the best financial accounting app ever!
          </h2>
          <p className="text-xs font-clashDisplayLight">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <div></div>
          <h5>nick jonas</h5>
        </aside>
        <aside className=" w-full md:w-1/2 h-1/2 md:h-full relative">
          <div className=" absolute top-20 left-14">
            <Eclipses />
          </div>
          <div className="absolute md:left-[30%] left-[35%] md:top-[40%] top-[45%]">
            <CustomUser
              size="lg"
              style={"md:h-32 md:w-32 h-24 w-24 relative"}
            />
            <div className="absolute h-10 w-10 rounded-full bg-main z-40 grid place-items-center top-[40%] -right-[15%] font-clashDisplayBold text-white">
              <i className="fa-solid fa-quote-left"></i>
            </div>
          </div>
          <div className="absolute top-[14%] left-[15%]">
            <CustomUser size="lg" style={"h-16 w-16"} />
          </div>
          <div className="absolute top-[60%] left-[5%]">
            <CustomUser size="lg" style={"h-16 w-16"} />
          </div>
          <div className="absolute md:top-[80%] top-[85%] md:left-[50%] left-[58%]">
            <CustomUser size="lg" style={"h-16 w-16"} />
          </div>
          <div className="absolute top-[25%] left-[60%]">
            <CustomUser size="lg" style={"h-16 w-16"} />
          </div>
          <div className="absolute -z-20 left-[18%] top-[35%] opacity-60">
            <BgEffect key={"sjdhfi76w7"} />
          </div>
        </aside>
      </section>
    </>
  );
};

export default About;
