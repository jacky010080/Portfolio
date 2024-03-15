import { Link } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {path: "/", name: "home"},
  {path: "/projects", name: "my projects"},
  {path: "/contact", name: "contact"},
];

export default function Nav({ containerStyles, linkStyles, sheetStyles, underlineStyles }) {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <a 
            href={link.path} 
            key={index} 
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span 
                initial={{y: "-100%"}}
                animate={{ y:0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </a>
        )
      })}
    </nav>
  )
}