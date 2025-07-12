import React, { useEffect, useState } from "react";
import { FaBuilding } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-36 mx-1 md:mx-20 text-center md:text-left max-w-full overflow-x-hidden md:w-2/3 ">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:text-5xl text-3xl p-popins font-bold"
        style={{ color: "#42446e" }}
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="p-popins mt-9"
        style={{ color: "#666666" }}
      >
        I'm a self-taught web developer passionate about full-stack development.
        I’ve built several personal projects that helped me strengthen my skills
        in JavaScript, React, Node.js, and MongoDB. I'm eager to collaborate,
        learn, and contribute to real-world development teams.
      </motion.p>
      <br />
      <hr className="border-t-2" />
      <br />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:text-5xl text-3xl p-popins font-bold"
        style={{ color: "#42446e" }}
      >
        Education
      </motion.h1>
      <div className="mt-9 flex justify-between items-center">
        {width <= 583 ? (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins md:text-xl text-[14px]"
            style={{ color: "#666666" }}
          >
            B.Tech IT
          </motion.h2>
        ) : (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins md:text-xl text-[14px]"
            style={{ color: "#666666" }}
          >
            Bachelor in Information Technology
          </motion.h2>
        )}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:text-[10px] text-[8px] font-bold px-5 py-2 rounded-3xl"
          style={{ color: "#018C0F", backgroundColor: "#D7FFE0" }}
        >
          Full Time
        </motion.p>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <FaBuilding style={{ color: "#A7A7A7" }} />
          {width <= 583 ? (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-popins font-medium md:text-[13px] text-[10px] px-2"
              style={{ color: "#A7A7A7" }}
            >
              MSIT
            </motion.p>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-popins font-medium md:text-[13px] text-[10px] px-2"
              style={{ color: "#A7A7A7" }}
            >
              Maharaja Surajmal Institute of Technology
            </motion.p>
          )}
        </div>
        <div className="flex items-center">
          <FaCalendarAlt style={{ color: "#A7A7A7" }} />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins font-medium md:text-[13px] text-[10px] px-2"
            style={{ color: "#A7A7A7" }}
          >
            Dec 2020 - July 2024
          </motion.p>
        </div>
      </div>
      <br />
      <hr className="border-t-2" />
      <br />
      <div className="flex justify-between items-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-popins md:text-xl text-[14px]"
          style={{ color: "#666666" }}
        >
          Class 12<span className="align-super text-sm">th</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:text-[10px] text-[8px] font-bold px-5 py-2 rounded-3xl"
          style={{ color: "#018C0F", backgroundColor: "#D7FFE0" }}
        >
          Full Time
        </motion.p>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <FaBuilding style={{ color: "#A7A7A7" }} />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins font-medium md:text-[13px] text-[10px] px-2"
            style={{ color: "#A7A7A7" }}
          >
            R.P. Memorial Public School
          </motion.p>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt style={{ color: "#A7A7A7" }} />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins font-medium md:text-[13px] text-[10px] px-2"
            style={{ color: "#A7A7A7" }}
          >
            April 2018 - July 2019
          </motion.p>
        </div>
      </div>
      <br />
      <hr className="border-t-2" />
      <br />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:text-5xl text-3xl p-popins font-bold"
        style={{ color: "#42446e" }}
      >
        Work Experience
      </motion.h1>
      <div className="mt-9 flex justify-between items-center">
        {width <= 583 ? (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins md:text-xl text-[14px]"
            style={{ color: "#666666" }}
          >
            FE Dev Intern
          </motion.h2>
        ) : (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins md:text-xl text-[14px]"
            style={{ color: "#666666" }}
          >
            Frontend Development Intern
          </motion.h2>
        )}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:text-[10px] text-[8px] font-bold px-5 py-2 rounded-3xl"
          style={{ color: "#018C0F", backgroundColor: "#D7FFE0" }}
        >
          Internship
        </motion.p>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <FaBuilding style={{ color: "#A7A7A7" }} />
          <div className="flex justify-between items-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-popins font-medium md:text-[13px] text-[10px] px-2"
              style={{ color: "#A7A7A7" }}
            >
              CodeSoft
            </motion.p>
            <div className="flex items-center md:ml-20">
                  <FaMapMarkerAlt style={{ color: "#A7A7A7" }} />
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-popins font-medium md:text-[13px] text-[10px] px-2"
                    style={{ color: "#A7A7A7" }}
                  >
                    Remote
                  </motion.p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
         <FaCalendarAlt style={{ color: "#A7A7A7" }} />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-popins font-medium md:text-[13px] text-[10px] px-2"
            style={{ color: "#A7A7A7" }}
          >
            Aug 2023 - Sep 2023
          </motion.p>
        </div>
      </div>
      <br />
      <hr className="border-t-2" />
      <br />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:text-5xl sm:text-3xl  text-2xl p-popins font-bold"
        style={{ color: "#42446e" }}
      >
        Achievements
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="p-popins mt-9 leading-relaxed"
        style={{ color: "#666666" }}
      >
        <ul className="list-disc list-inside space-y-3 md:text-[18px] text-[14px]">
          <li>
            <span className="font-semibold">
              Indus Valley Partners – Coderush 3.0:
            </span>{" "}
            Participated in a hackathon organized by Indus Valley Partners.
            Completed Round 1 and Round 2, and reached the grand finale.
          </li>
          <li>
            <span className="font-semibold">
              GSSoC (GirlScript Summer of Code, Apr–Jul 2022):
            </span>{" "}
            Contributed to open source projects like a resume builder and "30
            Days JavaScript Projects" during this coding program.
          </li>
          <li>
            <span className="font-semibold">
              GeeksforGeeks – Code-A-Zone (Jul 2022):
            </span>{" "}
            Participated in a coding contest organized by GeeksforGeeks.
          </li>
          <li>
            <span className="font-semibold">
              Google Cloud Platform – Learn to Earn Program:
            </span>{" "}
            Completed 24 out of 30 quests. Earned swags and goodies for
            achievements in cloud skills.
          </li>
        </ul>
      </motion.div>
      <br />
      <br />
    </div>
  );
};

export default About;
