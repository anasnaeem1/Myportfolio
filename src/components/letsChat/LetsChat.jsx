import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

export default function LetsChat() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-[#1b1b1b] z-0 pointer-events-none">
      <div className="flex items-end justify-center h-full w-full px-3 sm:px-4 md:px-6 pb-16 sm:pb-20 md:pb-24">
        <h1
          className={`${unbounded.className} text-[#b9afa2] mb-[50px] md:mb-0 whitespace-nowrap text-center overflow-hidden w-full min-w-0 flex justify-center items-center`}
          style={{
            fontSize: "clamp(3rem, 5.5vw, 9rem)",
          }}
        >
          Let&apos;s Chat
        </h1>
      </div>
    </div>
  );
}
