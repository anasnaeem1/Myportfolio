import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  weight: ["400", "500", "700"], // Choose the weights you need
  subsets: ["latin"],
  style: "normal",
});

export default function LetsChat() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-[#1b1b1b]">
      <div className="flex items-end  justify-center h-screen w-full">
      <h1
  className={`mb-[100px] w-full flex justify-center items-center text-[#b9afa2] text-[clamp(60px,10vw,150px)] ${unbounded.className}`}
>
  Let's Chat
</h1>

      </div>
    </div>
  );
}
