/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconHex, Logo } from "@/components/icons";
import clsx from "clsx";
import Menu from "@/components/menu/Menu";
import { ButtonShadow } from "@/components/buttons";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}) => {
  // Menu link
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
  // Close menu when window is resized
  const onResize = (e: Event) => {
    if ((e.currentTarget as Window).innerWidth > 768) {
      setIsMenuOpen(false);
    }
  };
  // Add event listener to window resize
  useEffect(() => {
    window.addEventListener("resize", onResize);
    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <div className="h-[100px] flex justify-center items-center font-mono">
      <nav className="h-[54px] w-full px-6 md:px-10 flex justify-between">
        <Link
          href={"/"}
          className="relative w-11 h-11 hover:-translate-x-1 hover:-translate-y-1 transition-all group z-10"
        >
          <div className="transition-all absolute w-full h-full top-0 left-0 text-green group-hover:translate-x-1 group-hover:translate-y-[3px]">
            <IconHex />
          </div>
          <div className="w-full h-full relative ">
            <Logo />
          </div>
        </Link>
        <div className="hidden md:flex items-center">
          <ol className="list-none w-full text-lightest-slate flex">
            {menuLink.map((item, index) => (
              <li
                key={index}
                style={{ counterIncrement: "item 1" }}
                className={` flex p-[10px] relative before:content-['0'counter(item)'.'] text-center items-center before:text-green before:block before:mr-1 text-[13px] text-lightest-slate`}
              >
                <Link href={item.link} className="  hover:text-green   ">
                  {item.title}
                </Link>
              </li>
            ))}{" "}
          </ol>
          <Link
            href={"/"}
            className={`w-max ml-[15px] h-max py-[12px] px-[16px] rounded text-green border-green border leading-none hover:-translate-x-1 hover:-translate-y-1 transition-all hover:shadow-button `}
          >
            Resume
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="z-10 p-4 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="h-6 relative w-[30px] ">
              <div
                className={clsx(
                  `w-[30px] h-[2px]  bg-green transition-all absolute top-1/2 rounded before:block before:w-[120%] before:h-[2px] before:absolute before:-top-[10px] before:bg-green before:right-0 before:rounded before:transition-all after:block after:w-[80%] after:h-[2px] after:absolute after:top-[10px]  after:bg-green after:right-0 after:rounded after:transition-all`,
                  {
                    "rotate-[225deg] before:top-0 before:w-full before:opacity-0 after:w-full after:bottom-0 after:-rotate-90 after:-translate-y-[10px]":
                      isMenuOpen,
                  }
                )}
              ></div>
            </div>
          </button>
          <Menu isOpen={isMenuOpen} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
