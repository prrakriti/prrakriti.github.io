import { Menu } from "lucide-react";
import React, { useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "./ui/menubar";
import Link from "next/link";
import { links } from "@/utils/Links";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MobileNav = ({ linkStyles, underlineStyles }) => {
  const path = usePathname();

  return (
    <div>
      {/* <Menu onClick={() => setShowMenuBar((prev) => !prev)} /> */}
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Menu />
          </MenubarTrigger>
          <MenubarContent>
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.path}
                  className={`capitalize ${linkStyles}`}
                >
                  <MenubarItem>
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
                  </MenubarItem>
                </Link>
              );
            })}
          </MenubarContent>

          {/* <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem> */}
          {/* </MenubarContent> */}
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MobileNav;
