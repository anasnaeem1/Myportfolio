"use client";

import idkWhat from "../../../public/idkwhat.png";
import SocialImage from "../../../public/social.jpg";
import travelWebsite from "../../../public/travelWebsite.jpg";
import WorkSection from "../../components/work/WorkSection";

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

export default function WorkPage() {
  return (
    <WorkSection
      projects={work}
      maxProjects={3}
    />
  );
}
