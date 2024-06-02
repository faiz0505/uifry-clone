import Image from "next/legacy/image";
import React from "react";
import BgEffect from "../BgEffect";
import { fetchData } from "@/app/utils";
import Head from "next/head";
import Eclipses from "../eclipses";
const Featured = async () => {
  const { features } = await fetchData();
  // console.log(features[0].icon);
  return (
    <>
      <section className="section overflow-hidden" id="features">
        <aside className="md:w-3/5 flex flex-col gap-4">
          <div>
            <h5 className="text-xs font-clashDisplayMedium text-main">
              FEATURES
            </h5>
            <h1 className="capitalize font-clashDisplayBold text-2xl">
              uifry premium
            </h1>
          </div>
          {features.map((feature, i) => {
            return (
              <div key={i}>
                <h4 className=" font-clashDisplayMedium text-sm">
                  <span className="mr-2 text-main">
                    <i className={feature.icon} />
                  </span>
                  {feature.title}
                </h4>
                <p className=" font-clashDisplayLight text-xs text-gray-900">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </aside>
        <aside className="h-1/2 w-full md:w-1/2 md:h-full relative">
          <figure className="">
            <div className="absolute top-[12%] left-[15%]">
              <Eclipses />
            </div>
            <Image
              src={"/mobile_image1.png"}
              layout="fill"
              objectFit="contain"
              className=" rotate-[14deg]"
            />
            <div className="absolute -z-20 left-[15%] top-[30%]">
              <BgEffect />
            </div>
          </figure>
        </aside>
      </section>
      <section className="section">
        <aside className="h-1/2 w-full md:w-1/2 md:h-full relative ">
          <figure className="">
            <div className="absolute top-[10%] left-[14%]">
              <Eclipses />
            </div>
            <Image
              src={"/mobile_image2.png"}
              layout="fill"
              objectFit="contain"
              className=" rotate-[14deg]"
            />
            <div className="absolute -z-20 left-[15%] top-[30%]">
              <BgEffect />
            </div>
          </figure>
        </aside>
        <aside className="md:w-3/5 flex flex-col gap-4">
          <div>
            <h5 className="text-xs font-clashDisplayMedium text-main">
              ADVANTAGES
            </h5>
            <h1 className="capitalize font-clashDisplayBold text-2xl">
              why choose Uifry?
            </h1>
          </div>

          <div>
            <h4 className=" font-clashDisplayMedium text-lg">
              <span className="mr-2 text-main">
                <i class="fa-solid fa-bell"></i>
              </span>
              clever notifications
            </h4>
            <p className=" font-clashDisplayLight text-xs text-gray-900">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </aside>
      </section>
      <section className="section">
        <aside className="md:w-3/5 flex flex-col gap-4">
          <div>
            <h5 className="text-xs font-clashDisplayMedium text-main">
              ADVANTAGES
            </h5>
            <h1 className="capitalize font-clashDisplayBold text-2xl">
              why choose Uifry?
            </h1>
          </div>

          <div>
            <h4 className=" font-clashDisplayMedium text-lg">
              <span className="mr-2 text-main">
                <i className="" />
              </span>
              fully customizable
            </h4>
            <p className=" font-clashDisplayLight text-xs text-gray-900">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </aside>
        <aside className="h-1/2 w-full md:w-1/2 md:h-full relative">
          <figure className="">
            <div className="absolute top-[12%] left-[15%]">
              <Eclipses />
            </div>
            <Image
              src={"/mobile_image1.png"}
              layout="fill"
              objectFit="contain"
              className=" rotate-[14deg]"
            />
            <div className="absolute -z-20 left-[15%] top-[30%]">
              <BgEffect />
            </div>
          </figure>
        </aside>
      </section>
    </>
  );
};

export default Featured;
