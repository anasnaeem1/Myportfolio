"use client";
import Image from "next/image";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import { Unbounded } from "next/font/google";
import idkWhat from "../../../public/idkwhat.png";
import SocialImage from "../../../public/social.jpg";
import travelWebsite from "../../../public/travelWebsite.jpg";
import { motion } from "framer-motion";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const zenKakuGothic = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const work = [
  {
    id: 1,
    label: "Social Media",
    url: "/",
    image: SocialImage,
    desc: "A feature-packed social media app to connect, share, and engage—built with passion and creativity.",
    link: "https://social-anas.vercel.app/",
  },
  {
    id: 2,
    label: "Real Change",
    url: "/",
    image: idkWhat,
    desc: "Designing beautiful & functional interfaces",
    link: "https://social-anas.vercel.app/",
  },
  {
    id: 3,
    label: "Travel Website",
    url: "/",
    image: travelWebsite,
    desc: "A sleek travel website designed for easy exploration, booking, and discovering new destinations.",
    link: "https://social-anas.vercel.app/",
  },
];

const Work = () => {
  return (
    <div className="relative w-full bg-[#171717] overflow-x-hidden">
      {/* Header Section */}
      <header className="flex items-center justify-start px-6 md:px-12 py-20">
        <h1
          className={`${unbounded.className} text-[clamp(40px,6vw,80px)] uppercase font-medium tracking-wide`}
        >
          all projects
        </h1>
      </header>
      <section className="w-full flex flex-col items-center gap-20 justify-center py-16">
        {work.slice(0, 3).map((w, index) => (
          <motion.article
            initial={{ opacity: 0, x:  index % 2 !== 0 ?  -300 : 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            key={w.id}
            className={`${
              index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
            } relative flex flex-col items-center w-full max-w-[1500px] bg-transparent shadow-none rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl group`}
          >
            {/* Image Section with Overlay */}
            <figure className="relative w-full md:max-w-[900px] overflow-hidden">
              <Image
                src={w.image}
                alt="Web Development"
                className="w-full h-full object-cover rounded-t-xl md:rounded-l-none md:rounded-r-xl transition-transform duration-500 group-hover:scale-105"
              />
            </figure>

            {/* Text Section (Better Styling) */}
            <div className="w-full md:w-1/2 px-12 py-14 text-center md:text-left flex flex-col gap-6 relative z-10 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-2 transition-all duration-500">
              <h3 className="text-[clamp(28px,3vw,36px)] font-bold text-gray-100 leading-tight">
                {w.label}
              </h3>
              <p className="text-gray-400 text-[clamp(18px,2vw,22px)] leading-relaxed tracking-wide">
                {w.desc}
              </p>
              <div className="flex justify-center md:justify-start mt-6">
                <a
                  href={w.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-textGold hover:text-black font-medium py-3 px-8 rounded-lg shadow-md hover:bg-[#d1b48c] transition-all"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};
export default Work;
