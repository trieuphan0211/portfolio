import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ButtonShadow } from "@/components/buttons";

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  const menuLink = [
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Experience",
      link: "/#experience",
    },
    {
      title: "Work",
      link: "/#work",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <aside
      className={clsx(
        "z-[2]  flex items-center justify-center fixed top-0 right-0 w-3/4 bottom-0 bg-light-navy py-[50px] px-[10px] font-mono  transition-all ",
        {
          "translate-x-0 ": isOpen,
          "translate-x-full": !isOpen,
        }
      )}
    >
      <nav className="w-full flex flex-col items-center">
        <ol className="list-none w-full text-lightest-slate flex flex-col">
          {menuLink.map((item, index) => (
            <li
              key={index}
              style={{ counterIncrement: "item 1" }}
              className={`mx-auto mb-[10px] w-full relative before:content-['0'counter(item)'.'] before:mb-[5px] text-center before:block before:text-green before:text-sm text-[clamp(14px,4vw,18px)]`}
            >
              <Link
                href={item.link}
                className="pt-[3px] px-5 pb-6 hover:text-green  w-full block"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ol>
        <Link
          href={"/"}
          className={`mt-[10%] mx-auto w-max py-[18px] px-[50px] rounded text-green border-green border leading-none hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-button `}
        >
          Resume
        </Link>
      </nav>
    </aside>
  );
};

export default Menu;
