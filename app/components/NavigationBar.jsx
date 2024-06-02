import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const NavigationBar = () => {
  const links = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/" },
    { title: "Pricing", path: "/" },
    { title: "Features", path: "/" },
  ];
  return (
    <nav className="flex justify-between items-center py-4">
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

      <div>
        <CustomButton
          text={"Download"}
          color="primary"
          size="sm"
          className="px-8 rounded"
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
