import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
 
} from "@tabler/icons-react";
import { FaMicrosoft,
  FaLinux,
  FaApple,

 } from "react-icons/fa";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Windows",
      icon: (
        <FaMicrosoft  className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      to: "/os/windows",
    },

    {
      title: "Linux",
      icon: (
       <FaLinux className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      to: "/os/linux",
    },
    {
      title: "Mac OS",
      icon: (
        <FaApple  className="h-full w-full text-neutral-500 dark:text-neutral-300"/>
      ),
      to: "/os/macos",
    },
   
  ];
  return (
    <div className="flex items-center justify-center fixed bottom-0 left-0 w-full  bg-opacity-0 mb-4">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
