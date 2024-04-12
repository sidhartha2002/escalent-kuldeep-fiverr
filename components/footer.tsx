import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";
import Image from "next/image";

const footerLinks = [
  {
    title: "Audience",
    links: [
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
  },
  {
    title: "Methods",
    links: [
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
  },
  {
    title: "About",
    links: [
      { title: "Contact", href: "/contact" },
      { title: "About us", href: "/about" },
      { title: "Terms of service", href: "#" },
      { title: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Job with Us",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-transparent-white mt-0 border-t bg-[#530095] py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-white">
            <Logo className="mr-4 h-10 w-10 scale-95" />
            <div className="text-purple-400">Website Logo</div>
          </div>
          <div className="ml-6 mt-auto flex scale-125 space-x-4 text-white">
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium text-purple-400">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="hover:text-off-white mb-3 block text-purple-200 transition-colors"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>

    <div className="mt-8 flex flex-col justify-end gap-4  pl-8 pr-16 lg:flex-row">
      {/* UK */}
      <div className="rounded-lgbg-opacity-95 flex max-w-[18rem] flex-col p-4 text-purple-400">
        <h2 className="text-lg font-semibold lg:text-xl">UK</h2>
        <p className="text-purple-200">
          FFIND ltd – Britannia House 11 Glenthorne Road, London
        </p>
        <p className="text-purple-200">VAT Number GB-348617865</p>
      </div>

      {/* Italy */}
      <div className="flex  max-w-[18rem] flex-col rounded-lg bg-opacity-95 p-4 text-purple-400">
        <h2 className="text-lg font-semibold lg:text-xl">ITALY</h2>
        <p className="text-purple-200">
          FFIND srl – Via Ercole Bernabei, 51 90145 – Palermo (Italy)
        </p>
        <p className="text-purple-200">P.IVA 02372540811</p>
      </div>

      {/* Germany */}
      <div className="flex  max-w-[18rem] flex-col rounded-lg bg-opacity-95 p-4 text-purple-400">
        <h2 className="text-lg font-semibold lg:text-xl">GERMANY</h2>
        <p className="text-purple-200">
          FFIND GmbH – Dreieichstraße 59 60594 Frankfurt am Main
        </p>
        <p className="text-purple-200">German VAT Number DE276580654</p>
      </div>
    </div>

    {/* <div className="mt-8 flex flex-col justify-center gap-4 lg:flex-row">
      <div className="item-center flex flex-col justify-center rounded-lg bg-purple-500  bg-opacity-10 p-4">
        <img
          src={
            "https://ffind.com/app/themes/ffind/images/partners/footer/adm-logo.png"
          }
          width={100}
          height={100}
          alt="logos"
        />
      </div>
      <div className="item-center flex flex-col justify-center rounded-lg bg-purple-500  bg-opacity-10 p-4">
        <img
          src={
            "https://ffind.com/app/themes/ffind/images/partners/footer/esomar_corporate2023.svg"
          }
          width={100}
          height={100}
          alt="logos"
        />
      </div>
      <div className="item-center flex flex-col justify-center rounded-lg bg-purple-500  bg-opacity-10 p-4">
        <img
          src={
            "https://ffind.com/app/themes/ffind/images/partners/footer/assirm-ita-bn2023.svg"
          }
          width={100}
          height={100}
          alt="logos"
        />
      </div>
      <div className="item-center flex flex-col justify-center rounded-lg bg-purple-500  bg-opacity-10 p-4">
        <img
          src={
            "https://ffind.com/app/themes/ffind/images/partners/footer/ia-logo-bw.png"
          }
          width={100}
          height={100}
          alt="logos"
        />
      </div>
      <div className="item-center flex flex-col justify-center rounded-lg bg-purple-500  bg-opacity-10 p-4">
        <img
          src={
            "https://ffind.com/app/themes/ffind/images/partners/footer/dekra-logo.svg"
          }
          width={100}
          height={100}
          alt="logos"
        />
      </div>
    </div> */}
  </footer>
);
