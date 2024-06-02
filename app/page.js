import Hero from "./components/sections/Hero";
import Featured from "./components/sections/Featured";
import NavigationBar from "./components/NavigationBar";
import About from "./components/sections/About";
import Faq from "./components/sections/Faq";
import Footer from "./components/sections/Footer";
import Hero2 from "./components/sections/Hero2";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Featured />
      <About />
      <Faq />
      <Hero2 />
      <Footer />
    </>
  );
}
