"use client";

import { Unbounded } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const unbounded = Unbounded({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: "normal",
});


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};


const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};



const ContactMe = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_a0zorr5",
        "template_3y28j4k",
        form,
        {
          publicKey: "XD9T2Tg4vDFJPMYqz",
        }
      );

      setSent(true);
      form.reset();

    } catch (error) {
      console.log("EMAIL ERROR:", error);
      alert(JSON.stringify(error));
    }

    setSending(false);
  };


  return (
    <section
      id="contact"
      ref={sectionRef}
      className="
   flex items-center justify-center
   py-10 md:py-14
   px-4 md:px-8
   relative overflow-hidden
   main-bg-color
   "
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="
   relative z-10
   max-w-2xl
   w-full
   "
      >
        {/* Title */}
        <motion.h2
          variants={textVariants}
          className={`
   ${unbounded.className}
   text-center
   text-[clamp(26px,5vw,46px)]
   main-text-color
   tracking-tight
   mb-3
   `}
        >
          Let's{" "}
          <span
            className="
      bg-gradient-to-r
      from-[#b9afa2]
      via-[#d4c9ba]
      to-[#b9afa2]
      bg-clip-text
      text-transparent
      "
          >
            Connect
          </span>
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="
      text-center
      text-white/60
      text-sm md:text-base
      mb-5
      "
        >
          Have a project idea or want to work together?
        </motion.p>
        {/* Resume Buttons */}
        <motion.div
          variants={textVariants}
          className="
      flex justify-center
      gap-3
      mb-6
      "
    >
      <a
        href="https://drive.google.com/file/d/1g4SBbBNxJUQPq-X7Nhm21n64dJ3K9Ki8/view?usp=sharing"
        target="_blank"
        className="
     px-4
     py-2
     rounded-lg
     text-sm
     border
     border-[#b9afa2]/30
     bg-white/[0.04]
     text-[#b9afa2]
     hover:bg-[#b9afa2]/10
     transition
     "
      >
        View Resume ↗
      </a>
      <a
      href="https://drive.google.com/uc?export=download&id=1g4SBbBNxJUQPq-X7Nhm21n64dJ3K9Ki8"
      className="
      px-4
      py-2
      rounded-lg
      text-sm
      text-black
      bg-gradient-to-r
      from-[#b9afa2]
      to-[#d4c9ba]
      transition
      hover:scale-[1.03]
      "
      >
        Download Resume ↓
      </a>
    </motion.div>
    {/* Form */}
    <motion.form
      onSubmit={sendEmail}
      variants={textVariants}
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-5 md:p-7
      shadow-xl
      space-y-3
      "
        >
          <input
            name="name"
            placeholder="Your Name"
            className="
         w-full
         rounded-lg
         bg-white/[0.06]
         border
         border-white/10
         px-4
         py-3
         text-sm
         text-white
         placeholder-white/40
         outline-none
         focus:border-[#b9afa2]/50
         "
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="
         w-full
         rounded-lg
         bg-white/[0.06]
         border
         border-white/10
         px-4
         py-3
         text-sm
         text-white
         placeholder-white/40
         outline-none
         focus:border-[#b9afa2]/50
         "
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            className="
         w-full
         rounded-lg
         bg-white/[0.06]
         border
         border-white/10
         px-4
         py-3
         text-sm
         text-white
         placeholder-white/40
         outline-none
         resize-none
         focus:border-[#b9afa2]/50
         "
          />
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px rgba(185,175,162,.25)"
            }}
            whileTap={{
              scale: .97
            }}
            className="
      w-full
      rounded-lg
      py-3
      text-sm
      font-medium
      text-black
      bg-gradient-to-r
      from-[#b9afa2]
      to-[#d4c9ba]
      "
          >
            {sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
          </motion.button>
        </motion.form>
        <motion.div
          variants={textVariants}
          className="
      flex items-center gap-3
      my-6
      "
        >
          <span className="h-px flex-1 bg-[#b9afa2]/30" />
          <span
            className="
         w-1.5 h-1.5
         rounded-full
         bg-[#b9afa2]
         shadow-[0_0_10px_#b9afa2]
         "
          />
          <span className="h-px flex-1 bg-[#b9afa2]/30" />
        </motion.div>
        <p
          className="
      text-center
      text-white/40
      text-xs
      "
        >
          I usually reply within 24 hours ✨
        </p>
      </motion.div>
    </section>
  );
};


export default ContactMe;