import Image from "next/image";
import AnasN from "../../public/AnasN.jpg";
import Button from "../components/button/Button";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import Card from "../components/card/Card";

const zenKakuGothic = Zen_Kaku_Gothic_New({
  weight: ["400", "500", "700"], // Choose desired font weights
  subsets: ["latin"], // Specify subsets
  style: "normal",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-100px)]
 px-6 md:px-12 lg:px-20 gap-12 md:gap-20"
      >
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src={AnasN}
            height={500}
            width={500}
            alt="Anas N"
            className="object-contain opacity-95"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-[800px] w-full flex flex-col gap-12 text-center md:text-left">
          <h3
            className={`text-4xl md:text-[40px] font-normal tracking-wide text-[#b9afa2] ${zenKakuGothic.className}`}
          >
            Anas N is a creative web developer who loves coding.
          </h3>

          <div className="flex flex-col gap-6">
            <p
              className={`text-xl md:text-[20px] font-normal tracking-wide text-[#b9afa2] ${zenKakuGothic.className}`}
            >
              Born and raised in Karachi, Pakistan, I began my web development
              journey in 2023. Currently, I'm seeking opportunities to grow my
              skills. My future plan is to dive deeper into web development and
              explore more programming languages over time.
            </p>

            {/* Button Section */}
            <div className="flex justify-center md:justify-start">
              <Button />
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center h-[250px] overflow-hidden relative">
        <div className="scrolling-text">
          <h1
            className={`text-4xl md:text-8xl font-normal tracking-wide text-[#b9afa2] ${playfair.className}`}
          >
            Services Provide For My Clients.
          </h1>
        </div>
      </section>

      <section
        className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-100px)]
 px-6 md:px-12 lg:px-20 gap-12 md:gap-20"
      >
      <Card/>
      </section>
    </>
  );
}
