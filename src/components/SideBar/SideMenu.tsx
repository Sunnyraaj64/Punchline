'use client';

import type { FC } from 'react';
//import { useState } from 'react';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

import { PanelMenu } from 'primereact/panelmenu';

import { HiMiniHome } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

import { SidemenuItems } from '@/constants/menuItems';

interface Props {
  className?: string;
  ishidden?: boolean;
  mode?: string;
}


export const itemRenderer = (item: any, options: any, ishidden: boolean) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {

    if (!item.items) {
      // Navigate to another link
      e.preventDefault(); // Prevent default `Link` behavior
      router.push(item.href);
    } else {
      // Trigger options.onClick if `items` exist
      options.onClick(e);
    }
  };

  return (
    <div onClick={handleClick}>
      <div className="flex flex-row justify-between items-center px-3 active:bg-[#A5ACE9] rounded-[30px]">
        <div className={`flex flex-row items-center mx-2 py-2 gap-3 overflow-clip ${!item.icon && "border-l-2 pl-2"}`}>
          {item.icon && item.icon}
          <motion.span
            className={`text-nowrap ${item.items && "font-semibold"}`}
            animate={{
              opacity: ishidden ? 0 : 1,
            }}
            initial={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            {item.label}
          </motion.span>
        </div>
        <div>{item.group && !ishidden && <FaChevronDown />}</div>
      </div>
    </div>
  );
}

const SideMenu: FC<Props> = ({ ishidden = false, mode = 'light' }) => {

  return (
    <div className="w-full flex justify-center">
      <PanelMenu model={SidemenuItems(ishidden)} className="w-full p-panel-menu-custom md:w-20rem" />
    </div >
  );
}

export default SideMenu;