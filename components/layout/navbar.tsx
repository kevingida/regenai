"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useCookies } from "next-client-cookies";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import useScreenSize from "@/lib/useScreenSize";

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
    title: "dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [isBgColour, setisBgColour] = useState(true);
  const [active, setActive] = useState(false);
  const [language, setLanguage] = useState("en");

  const cookies = useCookies();
  const t = useTranslations("Navbar");
  const { isLarge } = useScreenSize();

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
      className={`flex justify-between h-15 w-full max-w-(--screen-max) pl-6 z-50 fixed transition duration-700 bg-accent`}
    >
      <FaBars className="lg:hidden h-full mr-6" onClick={showNavbar} />

      {/* LOGO */}
      <Link href="/" className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-orange-400 shadow-md">
            <div className="h-5 w-5 rounded-md bg-white" />
          </div>

          <span className="text-3xl font-bold tracking-tight text-neutral-900">
            <h1>{t("title")}</h1>
          </span>
        </div>
      </Link>
      {/* NAVIGATION MENU */}
      <div
        className={`lg:items-center translate-y-0 top-[-100vh]  lg:top-0 lg:flex lg:flex-row lg:w-fit fixed lg:relative left-0 bg-accent/95 h-full w-full flex flex-col items-center justify-center gap-6 transition transform duration-1000 lg:bg-transparent ${
          active && isLarge && "translate-y-full"
        } `}
      >
        <FaTimes
          className="absolute top-8 left-8 text-3xl lg:hidden"
          onClick={showNavbar}
        />

        {NAVIGATION_LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className=" lg:h-full lg:px-6 transition duration-300 hover:bg-accent-secondary text-primary font-semibold font-poppins flex items-center text-2xl py-10 w-full justify-center lg:text-base lg:py-0 text-nowrap"
            onClick={showNavbar}
          >
            {t(link.title)}
          </Link>
        ))}
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-row justify-between pr-6 gap-4">
        <select
          className=" text-primary font-poppins border-accent"
          onChange={selectLanguage}
          value={language}
        >
          <option value="en">En</option>
          <option value="sv">Sv</option>
        </select>
        <Show when="signed-out">
          <SignInButton>
            <div className="hidden lg:flex lg:h-full lg:px-6 transition duration-300 hover:bg-accent-secondary text-primary font-semibold font-poppins items-center text-2xl py-10  justify-center lg:text-base lg:py-0 text-nowrap">
              {t("login")}
            </div>
          </SignInButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
        <Show when="signed-out">
          <Button
            className="hidden lg:flex h-fit my-auto"
            variant="primary"
            size="md"
          >
            {t("getStarted")}
          </Button>
        </Show>
      </div>
    </div>
  );
};

export default Navbar;
