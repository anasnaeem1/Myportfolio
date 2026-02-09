"use client";
import Image from "next/image";
import Anas from "../../../public/Anas.png";
import AnasN2 from "../../../public/AnasN2.jpg";
import uxui from "../../../public/5741168.jpg";
import guide from "../../../public/guides.jpeg";
import CarePod from "../../../public/carepod.jpg";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Button from "../../components/button/Button";
import { Unbounded } from "next/font/google";
import Resume from "../../components/resume/Resume";
import { motion } from "framer-motion";
// import Link from "next/link";

const unbounded = Unbounded({
  weight: ["400", "500", "700"], // Choose the weights you need
  subsets: ["latin"],
  style: "normal",
});

const zenKakuGothic = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"], // Choose desired font weights
  subsets: ["latin"], // Specify subsets
  style: "normal",
});

const PhotosOfAnas = [
  {
    id: 2,
    label: "React & Next.js",
    url: "/",
    image: Anas,
    desc: "Designing beautiful & functional interfaces",
  },
  {
    id: 1,
    label: "UI/UX Design",
    url: "/",
    image: AnasN2,
    desc: "Designing beautiful & functional interfaces",
  },
];


const slideDown = "y : -300";
const slideUp = "y : 300";
const slideRight = "x : 300";
const slideLeft = "x : -300";
const photosLength = PhotosOfAnas.length;


const About = () => {
  return (
    <div className="overflow-x-hidden relative w-full main-bg-color">
      {/* Header Section */}
      <header
        className={`flex  flex-col lg:flex-row items-center justify-evenly gap-4 md:gap-20 ${
          PhotosOfAnas.length >= 3 ? "py-[70px]" : "lg:py-[250px] py-[90px]"
        } `}
      >
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.3,
          }}
          className="max-w-[500px] w-full flex flex-col items-center gap-4"
        >
          {[
            { word: "Creative", size: "clamp(30px, 6vw, 55px)" },
            { word: "Web Developer", size: "clamp(26px, 5vw, 48px)" },
            { word: "Ambitious", size: "clamp(28px, 5vw, 50px)" },
            { word: "Learner", size: "clamp(29px, 5vw, 52px)" },
          ].map(({ word, size }, index) => (
            // <h1
            //   key={index}
            //   className="font-semibold uppercase tracking-wide bg-gradient-to-r from-[#b9afa2] to-[#ffffff40] bg-clip-text text-transparent transition-transform duration-300 hover:scale-105"
            //   style={{ fontSize: size }}
            // >
            //   {word}
            // </h1>
            <h1
            key={index}
            className="inline-block font-semibold uppercase main-text-color transition-transform duration-300 hover:scale-105"
            style={{ fontSize: size }}
          >
            {word}
          </h1>
          ))}
        </motion.div>

        <div className="max-w-[800px] max-h-[850px] overflow-hidden rounded-xl">
          <div
            className={`grid gap-4  ${
              PhotosOfAnas.length === 3 ? "grid-cols-2 " : "h-full grid-cols-2"
            }`}
          >
            {PhotosOfAnas.map((item, index) => (
              <motion.div
              initial={{ opacity: 0, y: index / 2 === 0  ? -300 : 300 ,}}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={item.id}
                className={`flex max-h-[350px] justify-center h-full items-center rounded-xl shadow-md overflow-hidden
              ${
                PhotosOfAnas.length === 3 && index === 2
                  ? "col-span-2 max-h-[350px] h-full"
                  : ""
              }`}
              >
                <Image
                  src={item.image}
                  height={500}
                  width={500}
                  alt="Gallery Image"
                  className={`w-full h-full ${
                    PhotosOfAnas.length === 3 && index === 2
                      ? "object-contain"
                      : "object-cover"
                  } rounded-xl`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </header>

      <hr />

      {/* About Section */}
      <section className="flex items-center justify-center py-32 w-full bg-darkBg relative">
        <div className="w-full max-w-[1100px] px-8">
          {/* Title */}
          <h2 className="font-extrabold text-textGold tracking-wide text-[clamp(40px,6vw,80px)] mb-12 text-center">
            About Me
          </h2>

          {/* Bio Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left Side (Bio Text) */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="text-3xl font-semibold main-text-color">
                Passionate Frontend Developer 👨‍💻
              </h3>
              <p className="main-text-color text-lg leading-[1.8]">
                I'm a <strong>self-taught developer</strong> with a deep passion
                for crafting seamless and visually engaging user experiences.
                With expertise in{" "}
                <span className="text-textGold font-medium">React</span>
                and <span className="text-textGold font-medium">Next.js</span>,
                I focus on building{" "}
                <strong>modern, user-friendly, and efficient</strong> web
                applications.
              </p>
              <p className="main-text-color text-lg leading-[1.8]">
                I love working on ideas that push boundaries and create
                meaningful experiences for users. Whether it’s **problem-solving
                🧩, designing clean interfaces 🎨, or optimizing performance
                ⚡**, I’m always up for a challenge.
              </p>
              <p className="main-text-color text-lg leading-[1.8]">
                My approach to development is simple—**write clean, scalable
                code**, stay curious, and always keep learning. Let’s build
                something great together! 🚀
              </p>
            </div>

            <hr className="md:hidden" />

            {/* Right Side (Divider + Quick Info) */}
            <div className="md:col-span-5 space-y-6">
              {/* Visual Divider */}
              <div className="w-[4px] hidden md:flex h-[clamp(140px,15vw,200px)] bg-gray-500 rounded-full mx-auto md:mx-0"></div>

              {/* Quick Facts */}
              <ul className="space-y-5 main-text-color text-lg leading-[1.8]">
                <li className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span>
                    <strong>2+ years</strong> of hands-on experience in{" "}
                    <br className="hidden md:block" />
                    web development.
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  💡 Skilled in **React, Next.js, JavaScript, and UI/UX
                  Design**.
                </li>
                <li className="flex items-center gap-3">
                  📚 Constantly learning & adapting to **new technologies**.
                </li>
                <li className="flex items-center gap-3">
                  🔧 Focused on **building scalable & responsive applications**.
                </li>
                <li className="flex items-center gap-3">
                  👥 Open to **collaborations, projects, and internship
                  opportunities**.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Resume />
    </div>
  );
};
export default About;
