"use client";
import HoverCarousel from "@/components/HoverCarousel/HoverCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative h-[112vh] bg-[#530095]">
        <video
          autoPlay
          muted
          loop
          className="absolute bottom-0 ml-44 pt-16 transition-opacity delay-[680ms]"
        >
          <source src="https://escalent.co/wp-content/uploads/2022/03/Escalent_HomepageLoop_1335x760-2022.webm" />
        </video>
        <div className="absolute bottom-0 right-0  mr-2 h-80 w-[35rem] bg-[#00b5ac] p-10">
          <div className="mb-2 text-sm text-white">
            ESCALENT ACQUIRES C SPACE, HALL & PARTNERS
          </div>
          <div className="text-2xl text-white">
            Notable union helps clients find new sources of growth in
            ever-changing world
          </div>
          <Link
            href={""}
            className="mt-12 flex flex-col justify-center text-sm text-[#530095] hover:font-bold hover:text-white"
          >
            SHOW ME MORE
          </Link>
        </div>
        <div className="absolute left-36 top-8 z-40  mr-2 h-32 w-32 ">
          <img src="/logo.svg" alt="" />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium">Illumination accelerated.</h1>
        <p className="mt-6 flex flex-col justify-center text-center text-2xl">
          We are catalysts of progress in industries facing disruption, helping
          brands <br /> translate human and market behaviors into ideas that
          change the world.
        </p>
        <Link
          href={""}
          className="text-md mt-6 flex flex-col justify-center text-center text-[#530095] hover:font-bold hover:text-[#00b5ac]"
        >
          Learn More
        </Link>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className="mb-10 text-2xl font-medium">Choose Your Industry</h1>
        <HoverCarousel />
      </div>

      <div className=" mt-14 flex items-center justify-center gap-7 overflow-auto">
        <img
          src="https://escalent.co/wp-content/uploads/2022/03/vans-170x170.jpg"
          alt=""
        />
        <img
          src="https://escalent.co/wp-content/uploads/2019/09/facebook-150x150.jpg"
          alt=""
        />
        <img
          src="https://escalent.co/wp-content/uploads/2021/01/GM-2021-170x170.jpg"
          alt=""
        />
        <img
          src="https://escalent.co/wp-content/uploads/2022/03/capital-group-170x170.jpg"
          alt=""
        />
        <img
          src="https://escalent.co/wp-content/uploads/2019/09/delta-faucets-150x150.jpg"
          alt=""
        />
        <img
          src="https://escalent.co/wp-content/uploads/2022/03/NextEra-Energy-170x170.jpg"
          alt=""
        />
      </div>

      <div>
        <h1 className="ml-6 mt-24 text-3xl font-semibold text-[#530095] md:ml-32">
          Featured
        </h1>
        <div className=" flex flex-col justify-center gap-7  md:mb-32 md:ml-32 md:mr-32 md:flex-row">
          <div className=" ">
            <Link href={""}>
              <Image
                src={"/images/feature1.jpg"}
                width={350}
                height={350}
                alt=""
                className="mb-4 mt-7"
              />
            </Link>
            <Link
              href={""}
              className="hover:font-semibold hover:text-[#00b5ac] "
            >
              <p className="mb-2 text-sm">PAPER</p>
            </Link>
            <Link
              href={""}
              className="mt-6 text-2xl font-semibold  hover:text-[#00b5ac]"
            >
              A Better Customer Growth Strategy is Within Reach. Download the
              Guide to Our Award-Winning Path-to-Purchase Research
            </Link>
            <p className="text-md mt-4">
              The customer journey is evolving. Download our guide to boosting
              customer growth using its award-winning path-to-purchase research.
            </p>
          </div>

          <div className=" ">
            <Link href={""}>
              <Image
                src={"/images/feature2.jpg"}
                width={350}
                height={350}
                alt=""
                className="mb-4 mt-7"
              />
            </Link>
            <Link
              href={""}
              className="hover:font-semibold hover:text-[#00b5ac]"
            >
              <p className="mb-2 text-sm">BLOG</p>
            </Link>
            <Link
              href={""}
              className="mt-6 text-2xl font-semibold  hover:text-[#00b5ac]"
            >
              How Macroeconomic Disruption Has Upended the Customer Journey in
              Financial Servicesch
            </Link>
            <p className="text-md mt-4">
              Inflation is just one factor changing the customer journey and
              path to purchase. Find out how to get more customer growth by
              mapping the purchase journey.
            </p>
          </div>

          <div className=" ">
            <Link href={""}>
              <Image
                src={"/images/feature3.jpg"}
                width={350}
                height={350}
                alt=""
                className="mb-4 mt-7"
              />
            </Link>
            <Link
              href={""}
              className="hover:font-semibold hover:text-[#00b5ac] "
            >
              <p className="mb-2 text-sm">BLOG</p>
            </Link>
            <Link
              href={""}
              className="mt-6 text-2xl font-semibold  hover:text-[#00b5ac]"
            >
              Investing in Path-to-Purchase Research to Maintain Loyal Customers
              During Inflationary Times
            </Link>
            <p className="text-md mt-4">
              How your consumer path-to-purchase can help you understand your
              consumers’ decision-making process during economic turmoil and
              avoid the lipstick effect.
            </p>
          </div>
        </div>
      </div>

      {/*  Careers */}
      <div className="mt-12 flex flex-col justify-center">
        <h1 className="ml-6 mt-24 text-3xl font-semibold text-[#530095] md:ml-32">
          Careers & Culture
        </h1>
        <div className="mt-6 flex flex-col items-center justify-center text-2xl">
          <Image
            src={"/images/careerculture.jpg"}
            width={1100}
            height={1100}
            alt=""
            className="mb-4 mt-4"
          />
        </div>
        <div className="ml-8 lg:ml-20 xl:ml-56">
          <div className=" flex items-start justify-start gap-5">
            <Link
              href={""}
              className="mt-6 text-sm text-[#530095] hover:font-bold hover:text-[#00b5ac]"
            >
              CAREERS & CULTURE
            </Link>
            <Link
              href={""}
              className="mt-6 text-sm text-[#530095] hover:font-bold hover:text-[#00b5ac]"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative ml-44 mr-44  mt-14 h-[52vh]  ">
        <div>
          <div className="absolute bottom-0 right-0 mt-10 h-80 w-[70vw] bg-[#00b5ac] ">
            <div className="ml-6 mt-16  md:ml-[32vw]">
              <h1 className="text-3xl font-medium text-[#530095]">
                Subscribe to our Newsletter
              </h1>
              <p className="mb-16 mt-7  text-white">
                Keep me informed. I’d like to receive occasional newsletters,
                event notifications, and thought leadership materials.
              </p>
              <Link href={""}>
                <span className="bg-[#530095] pb-3 pl-12 pr-12 pt-3 text-sm text-white hover:bg-red-800">
                  SUBSCRIBE
                </span>{" "}
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/images/newsletter.jpg"}
              width={550}
              height={550}
              alt=""
              className="absolute top-0 mb-4"
            />
          </div>
        </div>
      </div>

      <div className="ml-44 mr-44 mt-12 ">
        <div className=" mb-10 h-8 bg-[#530095] "></div>

        {/*  */}
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex gap-8 text-sm font-semibold text-[#530095]">
              <div>
                17430 College Parkway <br />
                Livonia, MI 48152
              </div>
              <div>P: +1 734 542 7600</div>
            </div>
            <div className="mt-10 flex gap-4 text-sm font-semibold text-[#530095]">
              <Link href={""}>
                <span className="bg-[#530095] pb-3 pl-8 pr-8 pt-3 text-xs  text-white hover:bg-[#00b5ac]">
                  ESCALENT CLIENT
                </span>{" "}
              </Link>
              <Link href={""}>
                <span className="bg-[#00b5ac] pb-3 pl-8 pr-8 pt-3 text-xs  text-white hover:bg-[#530095]">
                  ESCALENT HUB
                </span>{" "}
              </Link>
              <Link href={""}>
                <span className="bg-[#00b5ac] pb-3 pl-8 pr-8 pt-3 text-xs  text-white hover:bg-[#530095]">
                  ESCALENT PORTAL
                </span>{" "}
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col ">
            <div className="flex gap-6">
              <Link
                href={""}
                className="flex flex-col justify-center text-center text-xl font-semibold text-[#530095] hover:font-bold hover:text-[#00b5ac]"
              >
                Blog
              </Link>
              <Link
                href={""}
                className="flex flex-col justify-center text-center text-xl font-semibold text-[#530095] hover:font-bold hover:text-[#00b5ac]"
              >
                News
              </Link>
              <Link
                href={""}
                className="flex flex-col justify-center text-center text-xl font-semibold text-[#530095] hover:font-bold hover:text-[#00b5ac]"
              >
                Events
              </Link>
            </div>

            <div className="mt-8">
              <Link
                href={""}
                className="text-md flex flex-col justify-center text-xs font-semibold text-[#530095] hover:font-bold hover:text-[#00b5ac]"
              >
                Privacy Policy
              </Link>
              <Link
                href={""}
                className="text-md flex flex-col justify-center text-xs font-semibold text-[#530095] hover:font-bold hover:text-[#00b5ac]"
              >
                Do Not Sell or Share My Personal Information
              </Link>
              <Link
                href={""}
                className="text-md flex flex-col justify-center text-xs font-semibold text-[#530095] hover:font-bold hover:text-[#00b5ac]"
              >
                Limit the Use of My Sensitive Personal Information
              </Link>
              <Link
                href={""}
                className="text-md flex flex-col justify-center text-xs font-semibold text-[#530095] hover:font-bold hover:text-[#00b5ac]"
              >
                Terms of Use
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col">
            <div className="flex flex-row gap-2">
              <Link href={""}>
                <div className="h-10 w-10 bg-[#530095] p-2 text-xs  text-white hover:bg-[#00b5ac]">
                  <img src="/images/linkedin.svg" alt="" />
                </div>{" "}
              </Link>
              <Link href={""}>
                <div className="h-10 w-10 bg-[#530095] p-2 text-xs  text-white hover:bg-[#00b5ac]">
                  <img src="/images/twitter.svg" alt="" />
                </div>{" "}
              </Link>
              <Link href={""}>
                <div className="h-10 w-10 bg-[#530095] p-2 text-xs  text-white hover:bg-[#00b5ac]">
                  <img src="/images/facebook.svg" alt="" />
                </div>{" "}
              </Link>
              <Link href={""}>
                <div className="h-10 w-10 bg-[#530095] p-2 text-xs  text-white hover:bg-[#00b5ac]">
                  <img src="/images/youtube.svg" alt="" />
                </div>{" "}
              </Link>
            </div>
            <div className="mt-8 text-xs">
              ©2024 Escalent and/or its affiliates. <br />
              All rights reserved. Reg. U.S. Pat. & TM Off
            </div>
          </div>
        </div>

        <div className="mb-16 mt-10 text-[10px]">
          We are honored to work with the above brands, none of which are
          affiliated with, or endorsed by, Escalent, Inc. <br />
          The reproduction of the marks are for informational purposes only and
          are subject to nominative fair use.
        </div>
      </div>
    </main>
  );
}
