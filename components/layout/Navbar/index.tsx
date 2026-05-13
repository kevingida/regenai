"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { NAVIGATION_LINKS } from "./static";

const Navbar = () => {
  const [isBgColour, setisBgColour] = useState(true);
  const [active, setActive] = useState(false);

  const t = useTranslations("Navbar");

  const showNavbar = () => {
    setActive(!active);
  };

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 90) {
        setisBgColour(true);
      } else {
        setisBgColour(false);
      }
    };
    window.addEventListener("scroll", changeColour);
  }, []);

  return (
    <div
      className={`flex justify-between h-20 w-full max-w-(--screen-max) pl-6 z-50 fixed  transition duration-700 ${
        isBgColour ? "bg-primary" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <h1>{t("title")}</h1>
        {/* <Image
          src="/logo.svg"
          alt="Classic Car Dealer Logo"
          width={120}
          height={80}
        /> */}
      </Link>
      <div
        className={`lg:items-center translate-y-0 top-[-100vh] lg:top-0 lg:flex lg:flex-row lg:w-fit fixed lg:relative left-0 bg-primary/90 h-full w-full flex flex-col items-center justify-center gap-6 transition transform duration-1000 lg:bg-transparent ${
          active && "translate-y-full"
        } `}
      >
        <FaTimes
          className="absolute top-8 right-8 text-3xl lg:hidden"
          onClick={showNavbar}
        />

        {NAVIGATION_LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className=" lg:h-full lg:px-6 transition duration-300 hover:bg-[#585454cc] flex items-center text-2xl py-10 w-full justify-center lg:text-base lg:py-0 text-nowrap"
            onClick={showNavbar}
          >
            {t(link.title)}
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-between ">
        <Link
          href={"/login"}
          className="hidden lg:flex lg:h-full lg:px-6 transition duration-300 hover:bg-[#585454cc] items-center text-2xl py-10  justify-center lg:text-base lg:py-0 text-nowrap"
          onClick={showNavbar}
        >
          {t("login")}
        </Link>
        <button className="hidden lg:flex lg:h-full lg:px-6 transition duration-300 hover:bg-[#585454cc] items-center text-2xl py-10  justify-center lg:text-base lg:py-0 text-nowrap">
          {t("getStarted")}
        </button>
      </div>
      <FaBars className="lg:hidden h-full mr-6" onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
