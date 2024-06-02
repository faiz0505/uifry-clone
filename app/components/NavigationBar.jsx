"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const NavigationBar = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "#about" },
    { title: "FAQs", path: "#faq" },
    { title: "Features", path: "#features" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flex justify-between items-center py-4 relative">
      <div className="flex items-center">
        <h1 className="text-2xl font-clashDisplayBold mr-10 text-main">Logo</h1>
        <ul className="md:flex gap-6 font-clashDisplayMedium hidden ">
          {links.map((link) => {
            return (
              <li
                key={link.title.split(" ").join("").toLowerCase()}
                className="hover:text-main"
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-3 items-center">
        <CustomButton
          text={"Download"}
          color="primary"
          size="sm"
          className="px-8 rounded"
        />
        <CustomButton
          isIconOnly={true}
          color="primary"
          radius="sm"
          size="sm"
          handleClick={onClick}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </CustomButton>
      </div>
      <div
        className={`absolute z-50 h-[100vh] w-2/4 bg-main top-0 -left-4 pt-14 px-5 ${
          !isMenuOpen && "-translate-x-[100%]"
        } transition-all duration-300 ease-in md:hidden`}
      >
        <ul className="flex flex-col gap-6 font-clashDisplayMedium text-lg">
          {links.map((link) => {
            return (
              <li
                key={link.title.split(" ").join("").toLowerCase()}
                className="hover:text-white"
              >
                <Link href={link.path} onClick={() => setIsMenuOpen(false)}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
