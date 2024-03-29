type NavItem = {
  id: number;
  title: string;
  href: string;
  subnavigation?: { title: string; href: string }[];
  subnavigation2?: {
    title: string;
    links: { title: string; href: string }[];
    href: string;
  };
  leftBar?: string;
  bottomBar?: {
    title: string;
    links: { title: string; href: string }[];
  };
};

export const nav: NavItem[] = [
  {
    id: 1,
    title: "Audiences",
    href: "/audience",
    subnavigation: [
      // {
      //   title: "Automotive & Mobility",
      //   href: "/audience/automotive-and-mobility/",
      // },
      { title: "B2B audiences", href: "/audience/b2b" },
      { title: "Investors & finance", href: "/audience/investors-finance" },
      { title: "Leaders & experts", href: "/audience/leaders-experts" },
      {
        title: "Healthcare & life sciences",
        href: "/audience/healthcare-life-sciences",
      },
      { title: "Social & consumer", href: "/audience/social-consumer" },
      { title: "Media & advertising", href: "/audience/media-advertising" },
    ],
    // leftBar: "Just some random text so we have different layouts.",
  },
  {
    id: 2,
    title: "Methods",
    href: "/methods",
    subnavigation: [
      // {
      //   title: "Automotive & Mobility",
      //   href: "/audience/automotive-and-mobility/",
      // },
      { title: "Social Sampling", href: "/methods/social-sampling" },
      {
        title: "Telephone research CATI",
        href: "/methods/telephone-research-CATI",
      },
      { title: "Online research CAWI", href: "/methods/online-research-CAWI" },
      {
        title: "Interviews with video call",
        href: "/methods/interviews-with-video-call",
      },
    ],
    // leftBar: "Just some random text so we have different layouts.",
  },
  /*   {
    id: 2,
    title: "Solutions",
    href: "/developers",
    subnavigation: [
      { title: "Pre-built checkout", href: "/dev1" },
      { title: "Libraries and SDKs", href: "/dev2" },
      { title: "App integrations", href: "/dev3" },
      { title: "Code samples", href: "/dev4" },
      { title: "Accept online payments", href: "/dev5" },
      { title: "Manage subscriptions", href: "/dev6" },
      { title: "Send payments", href: "/dev7" },
      { title: "Setup in-person payments", href: "/dev8" },
    ],
    bottomBar: {
      title: "Intgrations and custom solutions",
      links: [
        { title: "App marketplace", href: "/solution6" },
        { title: "Professional services", href: "/solution7" },
        { title: "Partner ecosystem", href: "/solution8" },
      ],
    },
    // leftBar: "hello",
  }, */
  {
    id: 3,
    title: "Solutions",
    href: "",
    subnavigation2: {
      title: "Markets",
      href: "/solutions/market-analysis",
      links: [
        {
          title: "Market Assessment",
          href: "/solutions/market-analysis/market-assessment",
        },
        { title: "Competitive Intelligence", href: "/solution7" },
        { title: "M&A Research", href: "/solution8" },
        { title: "Partner Scouting", href: "/solution8" },
      ],
    },
    bottomBar: {
      title: "Brands",
      links: [
        { title: "Brand Positioning", href: "/solution6" },
        { title: "Messaging", href: "/solution7" },
        { title: "Brand Elements", href: "/solution8" },
      ],
    },
  },
  {
    id: 4,
    title: "Expertise",
    href: "/expertise",
    subnavigation: [
      {
        title: "Javelin Advisory Services",
        href: "/expertise/javelin-advisory-services/",
      },
      {
        title: "Cogent Syndicated Research",
        href: "/expertise/cogent-syndicated-research/",
      },
      {
        title: "Quantitative Research",
        href: "/expertise/quantitative-research/",
      },
      {
        title: "Qualitative Research",
        href: "/expertise/qualitative-research/",
      },
      { title: "Secondary Research", href: "/expertise/secondary-research/" },
      { title: "Data Analytics", href: "/expertise/data-analytics/" },
      { title: "User Experience Research", href: "/expertise/ux-research/" },
      { title: "Insight Communities", href: "/expertise/insight-communities/" },
    ],
    // bottomBar: {
    //   title: "Intgrations and custom solutions",
    //   links: [
    //     { title: "App marketplace", href: "/solution6" },
    //     { title: "Professional services", href: "/solution7" },
    //     { title: "Partner ecosystem", href: "/solution8" },
    //   ],
    // },
  },
  {
    id: 5,
    title: "About",
    href: "/about",
    subnavigation: [
      { title: "Overview", href: "/about" },
      { title: "Locations", href: "/support2" },
      { title: "People", href: "/support3" },
      { title: "Diversity, Equity & Inclusion", href: "/support4" },
      { title: "Social Responsibility", href: "/support5" },
      { title: "Partners", href: "/support6" },
    ],
  },
  {
    id: 6,
    title: "Careers & Culture",
    href: "/careers-and-culture",
  },
  {
    id: 6,
    title: "Contact",
    href: "/contact",
  },
];
