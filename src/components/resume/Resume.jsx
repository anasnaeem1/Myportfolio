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
    <section className="py-[90px] w-full flex flex-col items-start bg-gray-900">
      <div className="mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white hover:text-[#BFA181] transition duration-300 cursor-pointer">
            Resume
          </h3>
          <p className="mt-4 text-lg sm:text-xl text-gray-400">
            Can’t find the answer you’re looking for? Feel free to{" "}
            <a
              className="text-indigo-400 font-semibold"
              href="mailto:support@floatui.com"
            >
              contact us
            </a>
            .
          </p>
        </div>
        <div className="mt-12 divide-y divide-gray-700">
          {faqsList.map((list, idx) => (
            <div key={idx} className="py-8 sm:flex gap-x-12">
              {/* FAQ Label */}
              <div className="max-w-sm sm:w-1/3">
                <h4 className="text-2xl font-semibold text-[#C4A77D]">
                  {list.label}
                </h4>
              </div>

              {/* Points List */}
              <ul className="flex-1 space-y-6">
                {list.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#C4A77D] text-lg">✔</span>
                    <p className="text-lg text-gray-400 leading-relaxed">
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
