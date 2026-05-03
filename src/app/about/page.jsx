"use client";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import Resume from "../../components/resume/Resume";
import { motion } from "framer-motion";

const PROFILE_IMAGE =
  "https://res.cloudinary.com/datcr1zua/image/upload/v1777728151/671635019_1320515259412850_4993520274333201661_n-removebg-preview_pcr64m.png";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});

const STACK = ["React", "Next.js", "JavaScript", "Tailwind CSS", "Framer Motion", "UI craft"];

const statCards = [
  { value: "+15", label: "Projects completed" },
  { value: "+2", label: "Years experience" },
  { value: "PK", label: "Karachi, remote-friendly" },
];

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden relative w-full main-bg-color">
      <header className="relative min-h-screen flex flex-col lg:flex-row items-stretch lg:items-center justify-center w-full isolate pb-16 lg:pb-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 right-[8%] w-[420px] h-[420px] rounded-full bg-textGold/14 blur-[110px]" />
          <div className="absolute top-1/4 -left-28 w-[340px] h-[340px] rounded-full bg-[#632128]/28 blur-[100px]" />
          <div className="absolute bottom-[-5%] right-0 w-[480px] h-[320px] rounded-full bg-[#632128]/18 blur-[110px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,640px)] h-[min(90vw,640px)] rounded-full bg-gradient-to-br from-[#333333]/40 via-transparent to-[#632128]/10 blur-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage: `linear-gradient(rgba(191,161,129,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99,33,40,0.35) 1px, transparent 1px)`,
              backgroundSize: "56px 56px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-textGold/25 to-transparent" />
        </div>

        <div className="hidden lg:flex fixed left-4 xl:left-8 top-0 bottom-0 flex-col justify-between py-24 z-20 pointer-events-none">
          <span
            className="main-text-color text-xs font-light tracking-[0.3em] uppercase opacity-70"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Web Developer
          </span>
          <span
            className="main-text-color text-xs font-light tracking-[0.3em] opacity-70"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {currentYear}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-[1280px] mx-auto px-6 lg:px-14 pt-24 lg:pt-0 gap-14 lg:gap-10 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 flex-1 w-full lg:max-w-xl xl:max-w-[38rem]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#632128]/35 bg-gradient-to-r from-[#632128]/12 to-transparent backdrop-blur-sm mb-8">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#632128] shadow-[0_0_12px_rgba(99,33,40,0.7)] animate-pulse" />
              <span className="text-xs sm:text-sm main-text-color/90 tracking-wide font-medium">
                Building interfaces • Open to collaborations
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full">
              {statCards.map((item) => (
                <div
                  key={item.label}
                  className="min-w-[6.75rem] flex-1 sm:flex-none px-4 sm:px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] border-t-[#632128]/45 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md"
                >
                  <p className="text-xl sm:text-2xl font-bold main-text-color leading-none tracking-tight">{item.value}</p>
                  <p className="main-text-color text-xs sm:text-sm font-light opacity-75 mt-1.5 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>

            <h1
              className={`${unbounded.className} text-[clamp(3.25rem,10vw,3rem)]font-bold tracking-tight mb-3 leading-[0.92]`}
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              <span className="block main-text-color">Hello</span>
              <span className="block mt-1 bg-gradient-to-r from-textGold via-[#d4b896] to-[#632128]/90 bg-clip-text text-transparent">
                I&apos;m Anas
              </span>
            </h1>
            <p className="main-text-color text-base sm:text-lg opacity-90 mb-2 max-w-lg leading-relaxed">
            Web developer and creative builder who fixes broken layouts for fun and lowkey enjoys when CSS starts acting up
            </p>
            <p className="main-text-color/60 text-sm mb-8 max-w-md">
            React · Next.js · JavaScript · Tailwind CSS · Framer Motion · UI craft
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {STACK.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-textGold/25 bg-textGold/[0.07] text-textGold/95 font-medium tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2 main-text-color text-xs font-light tracking-[0.25em] uppercase opacity-55"
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-textGold/40" />
              Scroll to read more
              <span className="inline-block translate-y-px">↓</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="w-full lg:w-[46%] max-w-lg lg:max-w-none flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[min(100%,26rem)] sm:max-w-[min(100%,30rem)] lg:max-w-[min(100%,28rem)] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#632128]/22 via-[#333333]/12 to-transparent rounded-[1.35rem] blur-2xl -z-10 scale-110" />
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#632128]/14 to-[#1a1a1a]/28 rounded-[1.35rem] blur-lg -z-10" />
              <div className="relative flex items-center justify-center rounded-[1.35rem] overflow-hidden border border-[#632128]/30 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.65)] bg-gradient-to-b from-[#404040] to-[#333333]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 via-transparent to-[#262626]/18 z-10 pointer-events-none" />
                <Image
                  src={PROFILE_IMAGE}
                  alt="Anas — web developer portrait"
                  width={640}
                  height={800}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="w-full h-auto max-h-[min(78vh,540px)] object-contain object-center relative z-0"
                  priority
                />
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#632128]/40 rounded-tr-[1.35rem] pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#632128]/40 rounded-bl-[1.35rem] pointer-events-none hidden sm:block" />
            </div>
          </motion.div>
        </div>
      </header>

      <div className="relative h-px w-full max-w-4xl mx-auto px-6">
        <div className="h-full bg-gradient-to-r from-transparent via-[#632128]/45 to-transparent" />
      </div>

      <section
        className="relative w-full overflow-hidden border-t border-white/[0.06]"
        style={{ backgroundColor: "#141210" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#632128]/[0.07] via-transparent to-textGold/[0.04] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-[#632128]/50 via-textGold/25 to-transparent pointer-events-none" />

        <div className="relative w-full max-w-[1100px] mx-auto px-6 sm:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-flex items-center gap-2 text-textGold text-sm font-medium tracking-[0.2em] uppercase mb-4">
              <span className="h-px w-6 bg-textGold/50" />
              Who I am
              <span className="h-px w-6 bg-textGold/50" />
            </span>
            <h2 className="font-extrabold text-textGold tracking-tight text-[clamp(36px,5vw,64px)] drop-shadow-[0_0_40px_rgba(191,161,129,0.15)]">
              About Me
            </h2>
            <p className="main-text-color opacity-85 text-base sm:text-lg mt-4 max-w-lg mx-auto leading-relaxed">
              if you want to know somethings about me read below
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:p-8 lg:border-l-[3px] lg:border-l-[#632128]/50 lg:rounded-l-none lg:rounded-r-2xl backdrop-blur-sm">
                <div className="absolute -left-px top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-textGold/25 to-transparent hidden lg:block" />
                <h3 className="text-2xl sm:text-3xl font-semibold main-text-color mb-6">
                  My Journey as a <span className="text-textGold">Web Developer</span>
                </h3>
                <div className="space-y-5 sm:space-y-6 main-text-color text-base sm:text-lg leading-[1.92] [&>p]:text-pretty max-w-[65ch]">
                  <p className="text-[1.05em] sm:text-lg font-medium tracking-[-0.01em] text-white/92">
                    I started learning HTML and CSS in 2023 while working as a salesman, and spent a lot of time practicing CSS
                    until I discovered Tailwind, which made designing much easier.
                  </p>
                  <p>
                    Then I moved on to JavaScript, learned the basics, and practiced extensively with pure JavaScript before
                    finding React and Node.js, which made development more efficient.
                  </p>
                  <p>
                    I built my first full{" "}
                    <span className="relative cursor-pointer underline underline-offset-[0.28em] decoration-1 decoration-textGold/45 hover:decoration-textGold hover:text-textGold transition-colors duration-200 uppercase tracking-[0.14em] text-[0.92em] font-semibold align-baseline whitespace-nowrap">
                      social
                    </span>{" "}
                    website using the MERN stack, and later discovered Next.js, where I focused on server side rendering and
                    continued improving my skills.
                  </p>
                  <p>
                    Using Next.js, I developed an ecommerce website called{" "}
                    <span className="relative cursor-pointer underline underline-offset-[0.28em] decoration-1 decoration-textGold/45 hover:decoration-textGold hover:text-textGold transition-colors duration-200 uppercase tracking-[0.12em] text-[0.92em] font-semibold whitespace-nowrap">
                      Urban Buy
                    </span>
                    , and during that time I also worked on a Shopify app called Guide Protection, where I handled debugging
                    and store related issues.
                  </p>
                  <p>
                    I love working on ideas that push boundaries and create meaningful experiences. Whether it&apos;s
                    problem-solving, designing clean interfaces, or optimizing performance, I&apos;m always up for a challenge.
                  </p>
                  <p>
                    My approach is simple—write clean, scalable code, stay curious, and keep learning. Let&apos;s build
                    something great together.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.08]">
                  {STACK.map((skill) => (
                    <span
                      key={`bio-${skill}`}
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-[#632128]/15 border border-[#632128]/25 main-text-color opacity-90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#632128]/20 to-[#1a1512] border border-[#632128]/25 main-text-color shadow-[0_16px_48px_-24px_rgba(99,33,40,0.4)]">
                  <span className="text-textGold font-semibold block mb-3 text-sm tracking-wide uppercase opacity-90">
                    Stack &amp; craft
                  </span>
                  <p className="text-sm leading-relaxed opacity-90 mb-4">
                    Day-to-day I ship with React, Next.js, Tailwind, and Framer Motion — with an eye on performance and
                    accessibility.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {STACK.slice(0, 5).map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-black/30 border border-white/10">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 main-text-color hover:border-textGold/20 transition-colors">
                  <span className="text-2xl font-bold text-textGold block mb-1">2+</span>
                  <span className="text-xs font-medium opacity-90 leading-snug">Years in web development</span>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 main-text-color hover:border-textGold/20 transition-colors">
                  <span className="text-2xl font-bold text-textGold block mb-1">15+</span>
                  <span className="text-xs font-medium opacity-90 leading-snug">Projects shipped</span>
                </div>
                <div className="col-span-2 p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 main-text-color">
                  <span className="text-textGold font-semibold block mb-2 text-sm">Focus</span>
                  <p className="text-sm leading-relaxed opacity-90">
                    Responsive layouts, component systems, micro-interactions, and maintainable codebases.
                  </p>
                </div>
                <div className="col-span-2 p-4 sm:p-5 rounded-2xl bg-textGold/10 border border-textGold/25 main-text-color">
                  <span className="text-textGold font-semibold block mb-2 text-sm">Open to</span>
                  <p className="text-sm leading-relaxed opacity-90">
                    Collaborations, freelance projects &amp; internship opportunities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Resume />
    </div>
  );
};
export default About;
