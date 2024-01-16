"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";
import { Container } from "./container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/logo";
import classNames from "classnames";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures that the effect runs only once on mount
  const scrollThreshold = 200;
  // Determine the color class based on the scroll position
  const colorClass =
    scrollPosition > scrollThreshold
      ? "bg-white text-[#530095]"
      : "bg-[#530095]  text-white";
  const logoVisible =
    scrollPosition > scrollThreshold ? "opacity-100" : "opacity-0";

  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header
      className={` border-transparent-white pl-20  pr-20 ${colorClass}  fixed left-0 top-0 z-10 w-full bg-opacity-80  backdrop-blur-[12px] `}
    >
      <Container className="h-navigation-height flex ">
        <Link className={`text-md flex items-center ${logoVisible}`} href="/">
          {/* <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> */}
          <img
            className="ml-11 mr-4 h-[1.8rem] w-[1.8rem]"
            src="/logo1.svg"
            height={20}
            width={20}
            color="#530095"
            alt=""
          />
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          <nav
            className={classNames(
              "top-navigation-height bg-background fixed left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0"
            )}
          >
            <ul
              className={classNames(
                "[&_li]:border-grey-dark flex h-full flex-col p-6 md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b md:[&_li]:border-none",
                "[&_a:hover]:text-grey [&_a]:h-navigation-height ease-in [&_a]:flex [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors",
                hamburgerMenuIsOpen && "[&_a]:translate-y-0"
              )}
            >
              <li>
                <Link href="#">Industries</Link>
              </li>
              <li>
                <Link href="#">Solutions</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Expertise</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">About</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Thought Leadership</Link>
              </li>
              <li>
                <Link href="#">Careers & Culture</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto mt-5 flex h-full items-center ">
          <Link className="mr-6 text-sm" href="#">
            Connect
          </Link>
          <Button href="#">Search</Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};