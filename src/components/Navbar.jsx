import { links } from "@/utils/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <div className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
      <button className="bg-gradient-to-b from-[#0B0058] to-[#490095] px-5 py-1 rounded-md">
        Request Demo
      </button>
    </div>
  );
};

export default Navbar;
