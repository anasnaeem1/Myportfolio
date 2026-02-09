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
  {
    id: 3,
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


const Dashboard = () => {
  return (
    <div className="overflow-x-hidden relative w-full bg-[#171717]">
      <header
        className={`flex  flex-col lg:flex-row items-center justify-evenly gap-4 md:gap-20 ${
          PhotosOfAnas.length >= 3 ? "py-[70px]" : "lg:py-[250px] py-[90px]"
        } `}
      >
        <div className="h-screen w-full flex justify-center">
        <h1 className="text-4xl font-semibold">Contact us</h1>
        </div>
     
      </header>
    </div>
  );
};
export default Dashboard;
