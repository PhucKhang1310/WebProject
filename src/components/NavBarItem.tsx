import { type ReactNode } from "react";

interface NavBarItemProps {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
}

export const NavBarItem = ({ children, isIcon, link }: NavBarItemProps) => {
  var textStyle = `h-15 flex justify-center items-center text-2xl text-white hover:bg-green-400 font-thin transition-colors duration-200 cursor-pointer ${
    isIcon ? "px-2" : "px-5"
  }`;
  return <div className={textStyle}>{children}</div>;
};
