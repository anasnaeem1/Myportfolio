"use client";
import Image from "next/image";
import { Unbounded } from "next/font/google";
import Resume from "../../components/resume/Resume";
import { motion } from "framer-motion";

const ACCENT = "#675C3B";
const ACCENT_RGB = "103, 92, 59";

const PROFILE_IMAGE =
  "https://res.cloudinary.com/datcr1zua/image/upload/v1782239487/726953850_1982541949070797_6428019913512591332_n-removebg-preview_znn77x.png";

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

const sideCards = [
  {
    span: "col-span-2",
    title: "Stack & craft",
    highlight: true,
    body: "Day-to-day I ship with React, Next.js, Tailwind, and Framer Motion — with an eye on performance and accessibility.",
    tags: STACK.slice(0, 5),
  },
  { span: "", title: "2+", subtitle: "Years in web development", stat: true },
  { span: "", title: "15+", subtitle: "Projects shipped", stat: true },
  {
    span: "col-span-2",
    title: "Focus",
    body: "Responsive layouts, component systems, micro-interactions, and maintainable codebases.",
  },
  {
    span: "col-span-2",
    title: "Open to",
    body: "Collaborations, freelance projects & internship opportunities.",
    accent: true,
  },
];

const StatCard = ({ value, label }) => (
  <div
    className="min-w-[6.75rem] flex-1 sm:flex-none px-4 sm:px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md transition-colors duration-300 hover:border-[#675C3B]/35"
    style={{ borderTopColor: `rgba(${ACCENT_RGB}, 0.45)`, borderTopWidth: "1px" }}
  >
    <p className="text-xl sm:text-2xl font-bold main-text-color leading-none tracking-tight">{value}</p>
    <p className="main-text-color text-xs sm:text-sm font-light opacity-75 mt-1.5 leading-snug">{label}</p>
  </div>
);

const SideCard = ({ card }) => {
  if (card.highlight) {
    return (
      <div
        className="col-span-2 p-5 sm:p-6 rounded-2xl border main-text-color"
        style={{
          background: `linear-gradient(to bottom right, rgba(${ACCENT_RGB}, 0.18), rgba(20, 18, 16, 0.9))`,
          borderColor: `rgba(${ACCENT_RGB}, 0.28)`,
          boxShadow: `0 16px 48px -24px rgba(${ACCENT_RGB}, 0.35)`,
        }}
      >
        <span className="text-textGold font-semibold block mb-3 text-sm tracking-wide uppercase opacity-90">
          {card.title}
        </span>
        <p className="text-sm leading-relaxed opacity-90 mb-4">{card.body}</p>
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-black/30 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (card.stat) {
    return (
      <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 main-text-color hover:border-[#675C3B]/25 transition-colors duration-300">
        <span className="text-2xl font-bold text-textGold block mb-1">{card.title}</span>
        <span className="text-xs font-medium opacity-90 leading-snug">{card.subtitle}</span>
      </div>
    );
  }

  return (
    <div
      className={`${card.span} p-4 sm:p-5 rounded-2xl border main-text-color transition-colors duration-300 ${
        card.accent
          ? "border-[#675C3B]/30 bg-[#675C3B]/10 hover:border-[#675C3B]/45"
          : "bg-white/[0.04] border-white/10 hover:border-[#675C3B]/20"
      }`}
    >
      <span className="text-textGold font-semibold block mb-2 text-sm">{card.title}</span>
      <p className="text-sm leading-relaxed opacity-90">{card.body}</p>
    </div>
  );
};

const About = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-x-hidden relative w-full main-bg-color">
      <header className="relative min-h-screen flex flex-col lg:flex-row items-stretch lg:items-center justify-center w-full isolate pb-16 lg:pb-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 right-[8%] w-[420px] h-[420px] rounded-full bg-textGold/12 blur-[110px]" />
          <div
            className="absolute top-1/4 -left-28 w-[340px] h-[340px] rounded-full blur-[100px]"
            style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.22)` }}
          />
          <div
            className="absolute bottom-[-5%] right-0 w-[480px] h-[320px] rounded-full blur-[110px]"
            style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.14)` }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,640px)] h-[min(90vw,640px)] rounded-full blur-[80px]"
            style={{
              background: `linear-gradient(to bottom right, rgba(51, 51, 51, 0.35), transparent, rgba(${ACCENT_RGB}, 0.08))`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage: `linear-gradient(rgba(191,161,129,0.45) 1px, transparent 1px),
                linear-gradient(90deg, rgba(${ACCENT_RGB}, 0.3) 1px, transparent 1px)`,
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
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-8"
              style={{
                borderColor: `rgba(${ACCENT_RGB}, 0.35)`,
                background: `linear-gradient(to right, rgba(${ACCENT_RGB}, 0.12), transparent)`,
              }}
            >
              <span
                className="w-2 h-2 shrink-0 rounded-full animate-pulse"
                style={{
                  backgroundColor: ACCENT,
                  boxShadow: `0 0 12px rgba(${ACCENT_RGB}, 0.65)`,
                }}
              />
              <span className="text-xs sm:text-sm main-text-color/90 tracking-wide font-medium">
                Building interfaces • Open to collaborations
              </span>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full">
              {statCards.map((item) => (
                <StatCard key={item.label} value={item.value} label={item.label} />
              ))}
            </div>

            <h1
              className={`${unbounded.className} text-[clamp(2.75rem,8vw,4.75rem)] font-bold tracking-tight mb-3 leading-[0.95]`}
            >
              <span className="block main-text-color">Hello</span>
              <span
                className="block mt-1 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, #BFA181, #d4b896, ${ACCENT})`,
                }}
              >
                I&apos;m Anas
              </span>
            </h1>

            <p className="main-text-color text-base sm:text-lg opacity-90 mb-2 max-w-lg leading-relaxed">
              Web developer and creative builder who fixes broken layouts for fun — and lowkey enjoys when CSS starts acting up.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
              {STACK.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] sm:text-xs px-3 py-1.5 rounded-full border border-[#675C3B]/25 bg-[#675C3B]/10 text-textGold/95 font-medium tracking-wide"
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
              <div
                className="absolute inset-0 rounded-[1.35rem] blur-2xl -z-10 scale-110"
                style={{
                  background: `linear-gradient(to bottom right, rgba(${ACCENT_RGB}, 0.2), rgba(51, 51, 51, 0.1), transparent)`,
                }}
              />
              <div
                className="absolute -inset-0.5 rounded-[1.35rem] blur-lg -z-10"
                style={{
                  background: `linear-gradient(to bottom right, rgba(${ACCENT_RGB}, 0.12), rgba(26, 26, 26, 0.25))`,
                }}
              />
              <div
                className="relative flex items-center justify-center rounded-[1.35rem] overflow-hidden shadow-[0_24px_60px_-18px_rgba(0,0,0,0.65)] bg-gradient-to-b from-[#404040] to-[#333333]"
                style={{ border: `1px solid rgba(${ACCENT_RGB}, 0.28)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 via-transparent to-[#262626]/18 z-10 pointer-events-none" />
                <Image
                  src={PROFILE_IMAGE}
                  alt="Anas — web developer portrait"
                  width={640}
                  height={800}
                  sizes="(max-width: 300px) 90vw, 420px"
                  className="w-full h-auto max-h-[min(78vh,540px)] object-contain object-center relative z-0"
                  priority
                />
              </div>
              <div
                className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 rounded-tr-[1.35rem] pointer-events-none hidden sm:block"
                style={{ borderColor: `rgba(${ACCENT_RGB}, 0.4)` }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 rounded-bl-[1.35rem] pointer-events-none hidden sm:block"
                style={{ borderColor: `rgba(${ACCENT_RGB}, 0.4)` }}
              />
            </div>
          </motion.div>
        </div>
      </header>

      <div className="relative h-px w-full max-w-4xl mx-auto px-6">
        <div
          className="h-full bg-gradient-to-r from-transparent to-transparent"
          style={{ backgroundImage: `linear-gradient(to right, transparent, rgba(${ACCENT_RGB}, 0.4), transparent)` }}
        />
      </div>

      <section
        className="relative w-full overflow-hidden border-t border-white/[0.06]"
        style={{ backgroundColor: "#141210" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, rgba(${ACCENT_RGB}, 0.06), transparent, rgba(191, 161, 129, 0.04))`,
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, rgba(${ACCENT_RGB}, 0.45), rgba(191, 161, 129, 0.25), transparent)`,
          }}
        />

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
            <h2
              className={`${unbounded.className} font-normal main-text-color tracking-tight text-[clamp(32px,5vw,56px)]`}
            >
              About{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, #BFA181, #d4b896, ${ACCENT})`,
                }}
              >
                Me
              </span>
            </h2>
            <p className="main-text-color opacity-80 text-base sm:text-lg mt-4 max-w-lg mx-auto leading-relaxed">
              A quick look at how I got into web development and what I care about when building products.
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
              <div
                className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm lg:rounded-l-none lg:rounded-r-2xl"
                style={{ borderLeft: `3px solid rgba(${ACCENT_RGB}, 0.45)` }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold main-text-color mb-6">
                  My Journey as a <span className="text-textGold">Web Developer</span>
                </h3>
                <div className="space-y-5 sm:space-y-6 main-text-color text-base sm:text-lg leading-[1.85] [&>p]:text-pretty max-w-[65ch]">
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
                    <span className="underline underline-offset-[0.28em] decoration-1 decoration-[#675C3B]/50 hover:decoration-textGold hover:text-textGold transition-colors duration-200 uppercase tracking-[0.14em] text-[0.92em] font-semibold whitespace-nowrap">
                      social
                    </span>{" "}
                    website using the MERN stack, and later discovered Next.js, where I focused on server side rendering and
                    continued improving my skills.
                  </p>
                  <p>
                    Using Next.js, I developed an ecommerce website called{" "}
                    <span className="underline underline-offset-[0.28em] decoration-1 decoration-[#675C3B]/50 hover:decoration-textGold hover:text-textGold transition-colors duration-200 uppercase tracking-[0.12em] text-[0.92em] font-semibold whitespace-nowrap">
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
                    My approach is simple — write clean, scalable code, stay curious, and keep learning. Let&apos;s build
                    something great together.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.08]">
                  {STACK.map((skill) => (
                    <span
                      key={`bio-${skill}`}
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-md border main-text-color opacity-90"
                      style={{
                        backgroundColor: `rgba(${ACCENT_RGB}, 0.12)`,
                        borderColor: `rgba(${ACCENT_RGB}, 0.22)`,
                      }}
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
                {sideCards.map((card) => (
                  <SideCard key={card.title} card={card} />
                ))}
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
