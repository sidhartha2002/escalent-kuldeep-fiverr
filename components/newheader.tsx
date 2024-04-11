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

/*  */
/*  */
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Social Sampling",
    href: "/methods/social-sampling",
    description: "",
  },
  {
    title: "Telephone research CATI",
    href: "/methods/telephone-research-CATI",
    description: "",
  },
  {
    title: "Online research CAWI",
    href: "/methods/online-research-CAWI",
    description: "",
  },
  {
    title: "Interviews with video call",
    href: "/methods/interviews-with-video-call",
    description: "",
  },
];

/*  */

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
      // className={`border-transparent-white pl-20 pr-20 ${colorClass}  fixed left-0 top-0 z-40 w-full bg-opacity-80  backdrop-blur-[12px] `}
      className={`border-transparent-white pl-20  pr-20 ${colorClass}  fixed left-0 top-0 z-40 w-full bg-opacity-80  backdrop-blur-[12px] `}
    >
      <Container className="h-navigation-height flex items-center justify-center ">
        <Link
          className={`text-md z-50 flex items-center ${logoVisible}`}
          href="/"
        >
          {/* <Logo className="mr-4 h-[1.8rem] w-[1.8rem]" /> */}
          <img
            className="ml-11 mr-4 h-[1.8rem] w-[1.8rem]"
            src="/images/logo.svg"
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
            src="/images/logo-white.svg"
            height={20}
            width={20}
            color="#fff"
            alt=""
          />
        </Link>

        <div
          className={classNames(
            "transition-[visibility] md:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500"
          )}
        >
          {/* Sarthak Add nav here */}
          {/*  */}
          <NavigationMenuDemo />
          {/*  */}
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

function NavigationMenuDemo() {
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

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${navLinkColor} text-base`}>
            Audience
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 bg-white p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-7">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gray-300 bg-gradient-to-b p-6 text-[#530095] no-underline outline-none focus:shadow-md"
                    href="/audience"
                    style={{
                      color: "#530095",
                      backgroundColor: "rgb(209, 213, 219)",
                      // @ts-ignore
                      "&:hover": {
                        color: "#64ffda",
                      },
                    }}
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <img src="/images/logo1.svg" alt="" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Audiences
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      About our Audiences
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="B2B audiences" href="/audience/b2b">
                {/* Re-usable components built using Radix UI and Tailwind CSS. */}
              </ListItem>
              <ListItem
                title="Investors & finance"
                href="/audience/investors-finance"
              >
                {/* How to install dependencies and structure your app. */}
              </ListItem>
              <ListItem
                title="Leaders & experts"
                href="/audience/leaders-experts"
              >
                {/* Styles for headings, paragraphs, lists...etc */}
              </ListItem>
              <ListItem
                title="Healthcare & life sciences"
                href="/audience/healthcare-life-sciences"
              >
                {/* Styles for headings, paragraphs, lists...etc */}
              </ListItem>
              <ListItem
                title="Social & consumer"
                href="/audience/social-consumer"
              >
                {/* Styles for headings, paragraphs, lists...etc */}
              </ListItem>
              <ListItem
                title="Media & advertising"
                href="/audience/media-advertising"
              >
                {/* Styles for headings, paragraphs, lists...etc */}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={`${navLinkColor} text-base`}>
            Methods
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {" "}
            {/* className={`${navLinkColor} text-base`} */}
            <ul
              className={`grid w-[400px] gap-3 bg-[#530095] p-4 md:w-[300px] md:grid-cols-1 lg:w-[400px] ${navLinkColor}`}
            >
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="text-white"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={`${navLinkColor} mx-5`}>
              Solutions
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navLinkColor} ml-12 mr-5 text-sm`}
            >
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={`${navLinkColor} text-sm`}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p> */}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
