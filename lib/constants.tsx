import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Audience",
    path: "/audience",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "B2B audiences", path: "/audience/b2b" },
      { title: "Investors & finance", path: "/audience/investors-finance" },
      { title: "Leaders & experts", path: "/audience/leaders-experts" },
      {
        title: "Healthcare & life sciences",
        path: "/audience/healthcare-life-sciences",
      },
      { title: "Social & consumer", path: "/audience/social-consumer" },
      { title: "Media & advertising", path: "/audience/media-advertising" },
    ],
  },
  {
    title: "Methods",
    path: "#",
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Social Sampling", path: "/methods/social-sampling" },
      {
        title: "Telephone research CATI",
        path: "/methods/telephone-research-CATI",
      },
      { title: "Online research CAWI", path: "/methods/online-research-CAWI" },
      {
        title: "Interviews with video call",
        path: "/methods/interviews-with-video-call",
      },
    ],
  },
  {
    title: "Solutions",
    path: "/",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "About Us",
    path: "/about",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
