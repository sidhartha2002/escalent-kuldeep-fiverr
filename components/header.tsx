"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "./button";
import { Container } from "./container";
import { HamburgerIcon } from "./icons/hamburger";
import { Logo } from "./icons/logo";
import classNames from "classnames";

import "./HoverNav/nav.css";
import { nav } from "./HoverNav/nav";
import { flushSync } from "react-dom";

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
  const logoWhiteVisible =
    scrollPosition > scrollThreshold ? "opacity-0" : "opacity-100";
  const searchColor = scrollPosition > scrollThreshold ? "#530095" : "#fff";
  const navLinkColor =
    scrollPosition > scrollThreshold ? "text-[#530095]" : "text-white";

  const iconStyle = {
    transition: "fill 0.3s ease", // Smooth transition effect
  };
  const handleHover = () => {
    // iconStyle.fill = "#0077b5"; // Change color on hover to LinkedIn blue
  };

  const handleLeave = () => {
    // iconStyle.fill = "white"; // Reset color on leave
  };

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

  /*  */
  const [activeSub, _setActiveSub] = useState<null | number>(null);
  const isTranstioningRef = useRef(false);
  const prevSubRef = useRef<null | number>(null);

  const updateNavigation = (id: number | null) => {
    if (prevSubRef.current && id) {
      document.documentElement.style.setProperty(
        "--subnav-direction",
        prevSubRef.current < id ? "1" : "-1"
      );
    }
    _setActiveSub(id);
  };

  const setActiveSub = useCallback(
    async (id: number | null) => {
      if (isTranstioningRef.current || id === activeSub) return;

      isTranstioningRef.current = true;
      if (document.startViewTransition) {
        const transition = document.startViewTransition(() => {
          flushSync(() => {
            updateNavigation(id);
          });
        });
        await transition.finished;
      } else {
        updateNavigation(id);
      }

      isTranstioningRef.current = false;
      prevSubRef.current = id;
    },
    [activeSub]
  );
  /*  */

  return (
    <header
      className={` border-transparent-white pl-20  pr-20 ${colorClass}  fixed left-0 top-0 z-40 w-full bg-opacity-80  backdrop-blur-[12px] `}
    >
      <Container className="h-navigation-height flex items-center justify-center ">
        <Link
          className={`text-md z-50 flex items-center ${logoVisible}`}
          href="/"
        >
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
        <Link
          className={`text-md z-50 flex items-center ${logoWhiteVisible}`}
          href="/"
        >
          {/* <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> */}
          <img
            className="ml-11 mr-4 h-[1.8rem] w-[1.8rem]"
            src="/logo.svg"
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
          {/* <nav
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
                <Link href="/industries/automotive-and-mobility/">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/solutions/market-analysis/market-assessment">
                  Solutions
                </Link>
              </li>
            </ul>
          </nav> */}

          <nav onPointerLeave={() => setActiveSub(null)}>
            <ul className={`group flex items-center`}>
              {nav.map((item) => (
                <li
                  key={item.id}
                  className={`relative`}
                  onPointerEnter={() => setActiveSub(item.id)}
                >
                  {!item.subnavigation && !item.subnavigation2 && (
                    <Link
                      href={item.href}
                      className={`${navLinkColor} peer px-2 py-2 `}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.subnavigation && (
                    <>
                      <button
                        className={`peer block px-2 py-2 ${navLinkColor}`}
                        onFocus={() => setActiveSub(item.id)}
                        onClick={() => setActiveSub(item.id)}
                        aria-expanded={activeSub === item.id}
                        aria-controls={`subnav-${item.id}`}
                      >
                        <a href={item.href} className={`${navLinkColor}`}>
                          {item.title}
                        </a>
                      </button>
                      <div
                        id={`subnav-${item.id}`}
                        className="absolute left-0 top-full hidden w-[500px] rounded-lg bg-white p-1 text-black [view-transition-name:subnav] peer-aria-expanded:block"
                      >
                        <div className="absolute -top-2 left-8 h-0 w-0 border-b-[12px] border-l-[12px] border-r-[12px] border-b-white border-l-transparent border-r-transparent" />
                        <div className="flex [view-transition-name:subnavcontent]">
                          {item.leftBar && (
                            <div className="min-h-[300px] w-[140px] rounded-sm bg-gray-100 px-4 py-5">
                              <p className="text-sm">{item.leftBar}</p>
                            </div>
                          )}
                          <div className="w-full">
                            <ul className="grid grid-cols-2 gap-2 p-4">
                              {item.subnavigation.map((subitem) => (
                                <li key={subitem.title}>
                                  <Link href={subitem.href}>
                                    {subitem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            {item.bottomBar && (
                              <div className="mt-4 rounded-md bg-gray-100 p-4">
                                <p className="text-sm uppercase">
                                  {item.bottomBar.title}
                                </p>
                                <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
                                  {item.bottomBar.links.map((link) => (
                                    <li key={link.title}>
                                      <Link href={link.href}>{link.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {item.subnavigation2 && (
                    <>
                      <button
                        className={`peer block px-2 py-2 ${navLinkColor}`}
                        onFocus={() => setActiveSub(item.id)}
                        onClick={() => setActiveSub(item.id)}
                        aria-expanded={activeSub === item.id}
                        aria-controls={`subnav-${item.id}`}
                      >
                        {item.title}
                      </button>
                      <div
                        id={`subnav-${item.id}`}
                        className="absolute left-0 top-full hidden w-[500px] rounded-lg bg-white p-1 text-black [view-transition-name:subnav] peer-aria-expanded:block"
                      >
                        <div className="absolute -top-2 left-8 h-0 w-0 border-b-[12px] border-l-[12px] border-r-[12px] border-b-white border-l-transparent border-r-transparent" />
                        <div className="flex [view-transition-name:subnavcontent]">
                          {item.leftBar && (
                            <div className="min-h-[300px] w-[140px] rounded-sm bg-gray-100 px-4 py-5">
                              <p className="text-sm">{item.leftBar}</p>
                            </div>
                          )}
                          <div className="w-full p-4">
                            <Link
                              className="text-sm uppercase"
                              href={item.subnavigation2.href}
                            >
                              {item.subnavigation2.title}
                            </Link>
                            <ul className="grid grid-cols-2 gap-2 p-4">
                              {item.subnavigation2.links.map((link) => (
                                <li key={link.title}>
                                  <Link href={link.href}>{link.title}</Link>
                                </li>
                              ))}
                            </ul>
                            {item.bottomBar && (
                              <div className="mt-4 rounded-md bg-gray-100 p-4">
                                <p className="text-sm uppercase">
                                  {item.bottomBar.title}
                                </p>
                                <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
                                  {item.bottomBar.links.map((link) => (
                                    <li key={link.title}>
                                      <Link href={link.href}>{link.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="ml-auto mt-5 flex h-full items-center ">
          <Link className="mr-6 text-sm" href="#">
            <span className={`text-3xl hover:text-[#00b5ac] ${navLinkColor}`}>
              escalent
            </span>
          </Link>

          <Link href={""}>
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              xmlns="http://www.w3.org/2000/svg"
              style={iconStyle} // Apply inline styles
              onMouseEnter={handleHover} // Handle hover event
              onMouseLeave={handleLeave}
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke={searchColor}
                strokeWidth={"2"}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
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
