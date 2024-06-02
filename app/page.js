import { Button } from "@nextui-org/button";
import Image from "next/image";
import Hero from "./components/sections/Hero";
import Featured from "./components/sections/Featured";
import NavigationBar from "./components/NavigationBar";
import Head from "next/head";
import About from "./components/sections/About";
import Faq from "./components/sections/Faq";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Featured />
      <About />
      <Faq />
    </>
  );
}
