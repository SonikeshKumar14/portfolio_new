import { useScroll } from "@/ScrollContext";
import React, { useEffect } from "react";
import photo from "../assets/profile.jpeg";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Home = () => {
  const { scrollTarget, setScrollTarget } = useScroll();
 
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setScrollTarget(null);
    }
  }, [scrollTarget, setScrollTarget]);

  return (
    <motion.div initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6, ease: "easeOut"}} className="mt-40 px-4 md:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center gap-10">
        <div className="flex-1 items-center md:text-left">
          <p className="text-4xl md:text-6xl font-semibold md:text-left ml-2.5 p-popins text-center" style={{color: '#42446e'}}>
            Hi <span className="animate-wave">👋</span>, <br />
            My name <br />
            is{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #00C0FD, #E70FAA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sonikesh
            </span>{" "}
            <br />I build things for web
          </p>
        </div>
        <div className="md:w-70 md:h-70 w-52 h-52 rounded-full  flex justify-center md:justify-end">
          <div
            className="w-full h-full rounded-full p-[9px]"
            style={{
              background: "linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%)",
            }}
          >
            <img
              src={photo}
              className="w-full h-full object-cover rounded-full border-4 border-white"
              alt="photo"
            />
          </div>
        </div>
      </div>
      <section id="techstack"><TechStack /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <br />
      <br />
      <hr className="border-t-2" style={{color: '#666666'}}/>
      <div className="mt-7 flex justify-end">
        <p className="p-popins italic" style={{color: '#666666'}}>"Strive for progress, not perfection"</p>
      </div>
    </motion.div>
  );
};

export default Home;
