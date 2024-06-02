import React from "react";
import CustomButton from "../CustomButton";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

const Footer = () => {
  return (
    <footer className="py-10">
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
        <div className=" flex flex-col gap-2">
          <h1 className="text-xl font-clashDisplayBold text-main">Logo</h1>
          <Link href={"mailto:faizali786313@gmail.com"} target="_blank">
            <p className="text-xs !lowercase">
              <span className="text-main mr-1.5">
                <i class="fa-solid fa-envelope"></i>
              </span>
              faizali786313@gmail.com
            </p>
          </Link>
          <p className="text-xs ">
            <span className="text-main mr-1.5">
              <i class="fa-solid fa-phone"></i>
            </span>
            8421932820
          </p>
        </div>
        <div>
          <h1 className=" font-clashDisplaySemibold text-lg mb-3">Links</h1>
          <ul className="grid gap-2 text-xs font-clashDisplayMedium">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
          </ul>
        </div>
        <div>
          <h1 className=" font-clashDisplaySemibold text-lg mb-3">Legel</h1>
          <ul className="grid gap-2 text-xs font-clashDisplayMedium">
            <li>terms of use</li>
            <li>privacy policy</li>
            <li>cookie policy</li>
          </ul>
        </div>
        <div>
          <h1 className=" font-clashDisplaySemibold text-lg mb-3">Product</h1>
          <ul className="grid gap-2 text-xs font-clashDisplayMedium">
            <li>take tour</li>
            <li>live chat</li>
            <li>reveiws</li>
          </ul>
        </div>
        <div>
          <h1 className=" font-clashDisplaySemibold text-lg mb-3">
            Newsletter
          </h1>
          <ul className="grid gap-2 text-xs font-clashDisplayMedium">
            <li>Stay up to date</li>
            <li className=" relative">
              <input
                type="text"
                placeholder="Your email"
                className="p-2 border"
              />
              <CustomButton
                text={"Subscribe"}
                color="primary"
                radius="sm"
                size="sm"
                className="absolute"
              />
            </li>
          </ul>
        </div>
      </section>
      <Divider className="my-5" />
      <section className="flex justify-center text-xs">
        <p>Copyright 2022 uifry.com all rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
