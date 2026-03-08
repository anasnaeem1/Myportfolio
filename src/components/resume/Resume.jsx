"use client";

export default function FAQSection() {
  const faqsList = [
    {
      label: "Experience",
      points: [
        "Currently completing my matriculation and eager to pursue further studies to expand my knowledge and expertise",
        "I have 2+ years of hands-on experience in web development, focusing on building modern, scalable applications.",
        "Proficient in React, Next.js, JavaScript, and UI/UX design, creating seamless user experiences.",
      ],
    },
    {
      label: "Skills",
      points: [
        "Master in HTML, CSS, and JavaScript, building dynamic and interactive web applications.",
        "Skilled in crafting responsive and user-friendly UI/UX designs.",
        "Proficient in React and Next.js, creating seamless frontend experiences.",
        "Currently working on improving interpersonal skills and confidence by interacting with people.",
        "Currently completing my matriculation and eager to further my studies in web development.",
      ],
    },
    {
      label: "Work",
      points: [
        "📱 Developed a **social app** where users can create an account, share posts, interact with others through comments, update their profiles, and follow/unfollow people.",
        "🖥️ Built this **portfolio website** to showcase my skills, projects, and achievements in web development.",
        "🚀 Currently working on new projects, and once they are ready, I will add them here!",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 w-full main-bg-color">
      <div className="mx-auto px-6 md:px-12 w-full max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block text-textGold text-xs font-medium tracking-[0.2em] uppercase mb-2">
            Background
          </span>
          <h3 className="text-4xl sm:text-5xl font-extrabold main-text-color hover:text-textGold transition duration-300 cursor-pointer">
            Resume
          </h3>
          <p className="mt-3 text-base sm:text-lg main-text-color opacity-90 max-w-lg mx-auto">
            Can’t find the answer you’re looking for? Feel free to{" "}
            <a
              className="text-textGold font-semibold hover:opacity-80 transition-opacity underline underline-offset-2"
              href="mailto:support@floatui.com"
            >
              contact us
            </a>
            .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faqsList.map((list, idx) => (
            <div
              key={idx}
              className="resume-card rounded-2xl p-6 sm:p-7 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-1 h-8 rounded-full bg-textGold" />
                <h4 className="text-xl font-semibold text-textGold">
                  {list.label}
                </h4>
              </div>
              <ul className="space-y-4">
                {list.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-textGold text-sm mt-1 shrink-0">✓</span>
                    <p className="text-sm sm:text-base main-text-color opacity-90 leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
