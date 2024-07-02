"use client";
import React, { useState } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import clsx from "clsx";
import { IconGitHub, IconInstagram, IconLinkedin } from "@/components/icons";
import Link from "next/link";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const socialLinks = [
    {
      icons: <IconGitHub />,
      link: "/",
    },
    {
      icons: <IconInstagram />,
      link: "/",
    },
    {
      icons: <IconLinkedin />,
      link: "/",
    },
  ];
  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div
        className={clsx("md:px-[100px] min-h-screen", {
          "blur-sm brightness-75 overflow-hidden h-[calc(100vh-100px)] min-h-0 max-h-[calc(100vh-100px)]":
            isMenuOpen,
        })}
      >
        <div className="w-10 hidden md:block fixed left-5 bottom-0">
          <ol className="after:block after:w-[1px] after:h-[90px] after:bg-lightest-slate after:mx-auto flex flex-col items-center">
            {socialLinks.map((social, index) => (
              <li key={index} className="last:mb-10">
                <Link
                  href={social.link}
                  className="hover:text-green hover:-translate-y-1 transition-all p-[10px] block "
                >
                  {social.icons}
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="w-10 hidden md:block fixed right-5 bottom-0">
          <ol className="after:block after:w-[1px] after:h-[90px] after:bg-lightest-slate after:mx-auto flex flex-col items-center">
            <li className="my-10">
              <Link
                href={"mailto:trieuphan0211@gmail.com"}
                className="hover:text-green hover:-translate-y-1 text-[12px] transition-all p-[10px] block font-mono"
                style={{ writingMode: "vertical-rl" }}
              >
                trieuphan0211@gmail.com
              </Link>
            </li>
          </ol>
        </div>
        {children}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
