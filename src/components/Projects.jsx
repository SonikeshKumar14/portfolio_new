import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";
import gt from "../assets/gt.png";
import chain from "../assets/chain.png";
import { motion } from "framer-motion";

const cards = [
  {
    image: image1,
    title: "InstaClone",
    description:
      "Developed a full-featured Instagram clone with user authentication, post creation with image uploads, like/comment functionality, and profile management",
    techStack: "ReactJs ExpressJs MongoDB JWT Tailwind CSS Cloudinary",
    github: "https://github.com/SonikeshKumar14/instaClone",
    liveSite: "https://instaclone-t1os.onrender.com/login",
  },
  {
    image: image2,
    title: "StreamApp",
    description:
      " Built a video streaming platform similar to YouTube. Implemented features like video uploads, thumbnail previews, likes/dislikes, comments, and protected routes for user profiles.",
    techStack: "ReactJs ExpressJs MongoDB Redux_Toolkit Shadcn_UI",
    github: "https://github.com/SonikeshKumar14/streamapp",
    liveSite: "https://streamapp-ufpw.onrender.com/",
  },
  {
    image: image3,
    title: "Spotify",
    description:
      "Built a music streaming platform inspired by Spotify using microservices architecture. Developed separate services for user authentication, music upload/playback, and admin control.",
    techStack:
      "ReactJs ExpressJs MongoDB Redis Microservices TypeScript Tailwind_CSS",
    github: "https://github.com/SonikeshKumar14/spotify_frontend",
    liveSite: "https://spotify-frontend-vfxk.onrender.com/",
  },
  {
    image: image4,
    title: "BlogMania",
    description:
      " Developed a responsive and professional-looking blog website using React.js Implemented state management using useState and handled side effects with useEffect for dynamic data rendering Integrated public APIs to fetch and display diverse blog content.",
    techStack: "ReactJs CSS JavaScript",
    github: "https://github.com/SonikeshKumar14/blog",
    liveSite:
      "https://6409d7a4fff70c005292f2a7--velvety-arithmetic-a2788c.netlify.app/",
  },
];

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-24">
      <div className="text-center p-popins">
        <h1 className="text-4xl font-bold" style={{ color: "#42446e" }}>
          Projects
        </h1>
        <p className="text-2xl mt-3" style={{ color: "#666666" }}>
          Things I've built so far
        </p>
      </div>
      <div className="grid md:grid-cols-3  sm:grid-cols-2 gap-8 pt-7">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg overflow-hidden">
              <img
                className="w-2xs h-28 mx-auto"
                src={card.image}
                alt="projects"
              />
              <CardContent>
                <h3 className="p-popins text-xl font-medium text-center">
                  {card.title}
                </h3>
                <p
                  className="p-popins text-[14px] mt-2 font-light card-desc"
                  style={{ color: "#666666" }}
                >
                  {card.description}
                </p>
                <br />
                <h4
                  className="p-popins font-light cd-txt"
                  style={{ color: "#666666" }}
                >
                  Tech Stack :{" "}
                  <span className="text-[12px]">{card.techStack}</span>
                </h4>
                <div className="flex justify-between text-[12px] mt-auto pt-4 items-center">
                  <a
                    href={card.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between p-popins items-center"
                  >
                    <img src={chain} className="w-5 h-5" alt="chain" />
                    <p className="underline">
                      {width <= 341 ? "Live" : "Live Preview"}
                    </p>
                  </a>
                  <a
                    href={card.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between p-popins items-center"
                  >
                    <img src={gt} className="w-5 h-5" alt="git" />
                    <p className="underline">
                      {width <= 341 ? "Code" : "View Code"}
                    </p>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
