import React from "react";

const TechStack = () => {
  return (
    <div className="mt-28">
      <div className="text-center p-popins">
        <h1 className="text-4xl font-bold" style={{ color: "#42446e" }}>
          My Tech Stack
        </h1>
        <p className="text-2xl pt-5" style={{ color: "#666666" }}>
          Technologies I've been working with recently
        </p>
      </div>
      <div className="grid md:grid-cols-6 place-items-center sm:grid-cols-3 gap-[84px] mt-16 icon-xm">
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="html"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="css"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="js"
          />
        </div>
        <div className="w-[120px] h-[120px] flex items-center icon-sz">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="tail"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            alt="mongo"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="node"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="exp"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="redux"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
            alt="redis"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            className="w-[120px] h-[120px]"
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="post"
          />
        </div>
        <div className="w-[120px] h-[120px] icon-sz">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="git"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
