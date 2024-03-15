'use client';

import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/yen-jung-chen-35218519a/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/jacky010080",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/profile.php?id=100004547341299",
    name: <RiFacebookFill />,
  },
];

export default function Socials({ containerStyles, iconsStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}