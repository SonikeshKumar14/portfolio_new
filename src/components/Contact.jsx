import React, { useState, useEffect } from "react";
import git from "../assets/git.png";
import linkin from "../assets/linkin.png";
import { motion } from "framer-motion";

const Contact = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex mt-32 justify-between items-center"
    >
      <div className="text-center font-medium" style={{ color: "#42446E" }}>
        <p className="leading-none md:text-3xl">{"{005}"}</p>
        <p className="text-[10px] md:text-[18px]">sonikesh</p>
      </div>
      <div className="flex items-center">
        <p className="dm-sans p-5 ml-sz" style={{ color: "#42446E" }}>
          sonikeshkumar@gmail.com
        </p>
        {width > 672 && (
          <>
            <p className="dm-sans p-5" style={{ color: "#42446E" }}>
              sanikeshkumar@gmail.com
            </p>
            <a
              href="https://github.com/SonikeshKumar14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5"
            >
              <img className="w-6 h-6" src={git} alt="git" />
            </a>
            <a
              href="https://www.linkedin.com/in/sonikeshkumar-7101b621b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-7 h-7" src={linkin} alt="linkin" />
            </a>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
