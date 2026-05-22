"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useCookies } from "next-client-cookies";

const NAVIGATION_LINKS = [
  {
    id: 1,
    title: "home",
    url: "/",
  },
  {
    id: 2,
    title: "templates",
    url: "/template",
  },
  {
    id: 3,
    title: "features",
    url: "/features",
  },
  {
    id: 4,
    title: "howItWorks",
    url: "/how-it-works",
  },
  {
    id: 5,
    title: "login",
    url: "/login",
  },
  {
    id: 6,
    title: "getStarted",
    url: "/get-started",
  },
];

const Navbar = () => {
  const [isBgColour, setisBgColour] = useState(true);
  const [active, setActive] = useState(false);
  const [language, setLanguage] = useState("en");

  const cookies = useCookies();

  const t = useTranslations("Navbar");

  const showNavbar = () => {
    setActive(!active);
  };

  const selectLanguage = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    cookies.set("NEXT_LOCALE", e.target.value);
    window.location.reload();
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

  useEffect(() => {
    const storedLanguage = cookies.get("NEXT_LOCALE");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [cookies]);

  return (
    <div
      className={`flex justify-between h-20 w-full max-w-(--screen-max) pl-6 z-50 fixed  transition duration-700 ${
        isBgColour ? "bg-transparent" : "bg-accent/90"
      }`}
    >
      <Link href="/" className="flex items-center gap-3">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-orange-400 shadow-md">
            <div className="h-5 w-5 rounded-md bg-white" />
          </div>

          <span className="text-3xl font-bold tracking-tight text-neutral-900">
            <h1>{t("title")}</h1>
          </span>
        </div>
        {/* <Image
          src="/logo.svg"
          alt="Classic Car Dealer Logo"
          width={120}
          height={80}
        /> */}
      </Link>
      <div
        className={`lg:items-center translate-y-0 top-[-100vh]  lg:top-0 lg:flex lg:flex-row lg:w-fit fixed lg:relative left-0 bg-accent/90 h-full w-full flex flex-col items-center justify-center gap-6 transition transform duration-1000 lg:bg-transparent ${
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
            className=" lg:h-full lg:px-6 transition duration-300 hover:bg-[#585454cc] text-primary font-semibold font-poppins flex items-center text-2xl py-10 w-full justify-center lg:text-base lg:py-0 text-nowrap"
            onClick={showNavbar}
          >
            {t(link.title)}
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-between pr-6 gap-4">
        <select
          className=" text-primary font-poppins border-accent"
          onChange={selectLanguage}
          value={language}
        >
          <option value="en">En</option>
          <option value="sv">Sv</option>
        </select>
        <Link
          href={"/login"}
          className="hidden lg:flex lg:h-full lg:px-6 transition duration-300 hover:bg-[#585454cc] text-primary font-semibold font-poppins items-center text-2xl py-10  justify-center lg:text-base lg:py-0 text-nowrap"
          onClick={showNavbar}
        >
          {t("login")}
        </Link>
        <Button
          className="hidden lg:flex h-fit my-auto"
          variant="primary"
          size="md"
        >
          {t("getStarted")}
        </Button>
      </div>
      <FaBars className="lg:hidden h-full mr-6" onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
