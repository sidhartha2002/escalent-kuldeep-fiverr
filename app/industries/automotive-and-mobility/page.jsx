"use client";
import HoverCarousel from "@/components/HoverCarousel/HoverCarousel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <main className="flex flex-col gap-0">
      <div className="w-fill relative h-fit">
        <Link href={""}>
          <Image
            src={"/images/automotive.jpg"}
            width={500}
            height={350}
            alt=""
            className="mb-4 mt-7 h-[100vh] w-full bg-no-repeat object-cover"
          />
        </Link>
        {/* <img src="/public/images/automotive.jpg" alt="" /> */}
        <div className="absolute left-36 top-8 z-50  mr-2 h-32 w-32 ">
          <img src="/logo.svg" alt="" />
        </div>
      </div>
      <div className="heading z-1 absolute left-[50px] top-[300px] h-fit w-fit">
        <p className="caption sm:text-md mb-[10px] font-medium uppercase tracking-wider text-white md:text-2xl">
          Industries
        </p>
        <h1 className="text-4xl text-white md:text-6xl">
          Automotive <br />& Mobility
        </h1>
      </div>

      {/*Heading section content */}
      <div className="mb-8 mt-12 flex flex-col items-center justify-center">
        <p className="mb-6 mt-6 flex w-[90vw] flex-col justify-center text-center text-lg md:text-2xl">
          Connectivity. Autonomous. Sharing. Electrification. As these evolving
          trends and realities continue to disrupt the automotive industry,
          companies large and small trust Escalent to transform their business
          with our automotive and mobility market research, intelligence and
          consulting. We partner with forward-thinking brands around the world
          to develop human-centric products, services and technology that
          delight buyers and keep them coming back for more automobile industry
          research and analysis.
        </p>
      </div>

      {/* This section contains company sponsors */}

      <div className="mb-10 ml-8 mr-8 grid grid-cols-3 align-middle lg:grid-cols-6 lg:gap-4">
        <div className="">
          <Link href={""}>
            <Image
              src={"/images/ford.jpg"}
              width={150}
              height={150}
              alt=""
              // className="mb-4 mt-7"
            />
          </Link>
        </div>
        <div className="">
          <Link href={""}>
            <Image
              src={"/images/volvo.jpg"}
              width={150}
              height={150}
              alt=""
              // className="mb-4 mt-7"
            />
          </Link>
        </div>
        <div className="">
          <Link href={""}>
            <Image
              src={"/images/magna.jpg"}
              width={150}
              height={150}
              alt=""
              // className="mb-4 mt-7"
            />
          </Link>
        </div>
        <div className="">
          <Link href={""}>
            <Image
              src={"/images/stellantis.jpg"}
              width={150}
              height={150}
              alt=""
              // className="mb-4 mt-7"
            />
          </Link>
        </div>
        <div className="">
          <Link href={""}>
            <Image
              src={"/images/cnh-industrial.jpg"}
              width={150}
              height={150}
              alt=""
              // className="mb-4 mt-7"
            />
          </Link>
        </div>
        <div className="">
          <Link href={""}>
            <Image
              src={"/images/lear.jpg"}
              width={150}
              height={150}
              alt=""
              // className="mb-4 mt-7"
            />
          </Link>
        </div>
      </div>

      {/* Section - 1 (Blue spance) ------------------------------*/}
      <div className="w-fill flex h-auto items-center justify-center bg-[#230b54] py-10 text-white">
        <div className="mx-5 mb-10 flex flex-col gap-6 lg:mx-20 lg:px-20">
          <div className="mb-2 mt-8">
            <h1 className="text-center text-xl md:text-2xl">
              Research and Advisory Services for Electric Vehicles, Connected
              Vehicles, Commercial Vehicles and Fleets
            </h1>
          </div>
          <div className="">
            <p className="text-md text-center md:text-lg">
              Escalent is the leader in electric vehicle, connected vehicle,
              commercial vehicle and fleet research and consulting. We know who
              the next EV buyer is as well as who will be the future adopters of
              connected vehicle services and the connectivity features they
              desire. Our automotive market research and industry reports also
              inform how commercial vehicles and fleets must evolve. As tech
              titans battle energy giants to beat automakers in this rapidly
              evolving space, our data, advice and counsel help you win.
            </p>
          </div>
        </div>
      </div>

      {/* section...2  (Orange spance) --------------------------------- */}

      <div className="w-fill mb-8 mt-0 h-fit bg-[#ff5635] py-10">
        <div className="mx-10 flex flex-col gap-6 md:gap-12 lg:mx-20">
          {/* 1st desktop */}
          <div className="hidden flex-col items-center justify-between gap-4 text-center lg:flex lg:flex-row lg:text-left">
            <div className="flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <Link href={""}>
                <h2 className="text-lg font-bold text-[#230b54] hover:text-white md:text-xl">
                  Electric Vehicle Insights
                </h2>
              </Link>
              <p className="md:text-md text-sm text-white">
                Our electric vehicle industry experts uncover winning strategies
                that differentiate offerings and drive growth by delivering
                actionable automotive market research intelligence and advisory
                solutions. Between the largest EV research study of the next
                generation of buyers, EVForward™, and rich insights on the
                broader electric vehicle ecosystem, we deliver a holistic
                assessment and unparalleled counsel on the dynamic EV market.
              </p>
              <Link href={""}>
                <button className="text-sm font-normal uppercase text-[#230b54] hover:text-white">
                  Show me more
                </button>
              </Link>
            </div>

            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/EVForward.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* 1st dup  */}
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:hidden lg:flex-row lg:text-left">
            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/EVForward.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="left flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <Link href={""}>
                <h2 className="text-lg font-bold text-[#230b54] hover:text-white md:text-xl">
                  Electric Vehicle Insights
                </h2>
              </Link>
              <p className="md:text-md text-sm text-white">
                Our electric vehicle industry experts uncover winning strategies
                that differentiate offerings and drive growth by delivering
                actionable automotive market research intelligence and advisory
                solutions. Between the largest EV research study of the next
                generation of buyers, EVForward™, and rich insights on the
                broader electric vehicle ecosystem, we deliver a holistic
                assessment and unparalleled counsel on the dynamic EV market.
              </p>
              <Link href={""}>
                <button className="text-sm font-normal uppercase text-[#230b54] hover:text-white">
                  Show me more
                </button>
              </Link>
            </div>
          </div>

          {/* 2nd both */}
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/connectivity-forward.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="left flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <Link href={""}>
                <h2 className="text-lg font-bold text-[#230b54] hover:text-white md:text-xl">
                  Connected Vehicle Insights
                </h2>
              </Link>
              <p className="md:text-md text-sm text-white">
                Our connected vehicle industry experts deliver invaluable
                automotive industry insights that eliminate guesswork in this
                complex market and drive growth. Seize the right opportunities
                for your business by leveraging Connectivity Forward™, our
                one-of-a-kind market research program that identifies future
                adopters of connected vehicle services and the connectivity
                features that resonate with them.
              </p>
              <Link href={""}>
                <button className="text-sm font-normal uppercase text-[#230b54] hover:text-white">
                  Show me more
                </button>
              </Link>
            </div>
          </div>

          {/* 3rd desktop */}
          <div className="hidden flex-col items-center justify-between gap-4 text-center lg:flex lg:flex-row lg:text-left">
            <div className="left flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <Link href={""}>
                <h2 className="text-lg font-bold text-[#230b54] hover:text-white md:text-xl">
                  Commercial Vehicle and Fleet Insights
                </h2>
              </Link>
              <p className="md:text-md text-sm text-white">
                Our dedicated, seasoned team guides you through disruption by
                providing practical counsel with rich automotive market industry
                intelligence and front-line research findings from Fleet
                Advisory Hub™, one of the largest collections of commercial
                vehicle and fleet decision-maker insights available. From new to
                established stakeholders, we help clients strengthen brands,
                products and services in a rapidly-transforming sector with
                constantly changing needs.
              </p>
              <Link href={""}>
                <button className="text-sm font-normal uppercase text-[#230b54] hover:text-white">
                  Show me more
                </button>
              </Link>
            </div>

            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/commercial-vehicle-and-fleet-insights.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* 3rd dup  */}
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:hidden lg:flex-row lg:text-left">
            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/commercial-vehicle-and-fleet-insights.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="left flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <Link href={""}>
                <h2 className="text-lg font-bold text-[#230b54] hover:text-white md:text-xl">
                  Commercial Vehicle and Fleet Insights
                </h2>
              </Link>
              <p className="md:text-md text-sm text-white">
                Our dedicated, seasoned team guides you through disruption by
                providing practical counsel with rich automotive market industry
                intelligence and front-line research findings from Fleet
                Advisory Hub™, one of the largest collections of commercial
                vehicle and fleet decision-maker insights available. From new to
                established stakeholders, we help clients strengthen brands,
                products and services in a rapidly-transforming sector with
                constantly changing needs.
              </p>
              <Link href={""}>
                <button className="text-sm font-normal uppercase text-[#230b54] hover:text-white">
                  Show me more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* section...3  (white spance) -------------------------------- */}

      <div className="my-10 h-auto pb-10">
        <h1 className="px-10 py-10 text-center text-2xl font-semibold text-[#230b54] lg:text-3xl">
          Guiding Automotive & Mobility Brands Through Profound Disruption
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Card - 1 */}
          <div className="w-fill flex flex-col items-start justify-start gap-4 bg-[#230b54] px-10 pb-10 pt-5 md:h-[500px] md:w-[350px]">
            <Link href={""}>
              <Image
                src={"/images/auto-electrification.webp"}
                width={80}
                height={80}
                alt=""
                className="mb-4 mt-7"
              />
            </Link>
            <h2 className="text-md font-semibold tracking-wider text-white lg:text-lg">
              Electrification of
              <br />
              vehicles
            </h2>
            <p className="text-sm text-white">
              Electrification is transforming the automotive and mobility
              industry, yet most players remain unsure how to adapt their
              products and brands while meeting consumer desires. Our electric
              vehicle market research and automotive industry advisory services
              help you navigate this complexity and forge a successful path
              forward.
            </p>
          </div>

          {/* Card - 2 */}
          <div className="w-fill flex flex-col items-start justify-start gap-4 bg-[#230b54] px-10 pb-10 pt-5 md:h-[500px] md:w-[350px]">
            <Link href={""}>
              <Image
                src={"/images/auto-autonomy-mobility.webp"}
                width={80}
                height={80}
                alt=""
                className="mb-4 mt-7"
              />
            </Link>
            <h2 className="text-md font-semibold tracking-wider text-white lg:text-lg">
              Autonomy and
              <br />
              mobility
            </h2>
            <p className="text-sm text-white">
              Emerging technology holds the promise of redefining mobility
              solutions, but companies are challenged with planning for an
              unclear future. Escalent is immersed in the automotive industry
              and speaks with consumers daily, enabling us to deliver automotive
              industry insights and analysis for a clearer view of the
              possibilities.
            </p>
          </div>

          {/* Card - 3 */}
          <div className="w-fill flex flex-col items-start justify-start gap-4 bg-[#230b54] px-10 pb-10 pt-5 md:h-[500px] md:w-[350px]">
            <Link href={""}>
              <Image
                src={"/images/auto-connected-vehicles.webp"}
                width={80}
                height={80}
                alt=""
                className="mb-4 mt-7"
              />
            </Link>
            <h2 className="text-md font-semibold tracking-wider text-white lg:text-lg">
              Connected
              <br />
              vehicles
            </h2>
            <p className="text-sm text-white">
              With $1.5T connected services revenue projected for 2030,
              automotive, mobility and technology companies must create relevant
              new products, services and commercialization models to bridge
              today's reality with tomorrow's promise. Our connected vehicle
              insights and counsel identify the right opportunities in this
              high-growth area.
            </p>
          </div>
        </div>
      </div>

      {/* section...4  (Gray spance) -----------------------------  */}

      <div className="w-fill mb-8 mt-0 h-fit bg-[#3f3f3f] py-10">
        <div className="mx-10 my-20 flex flex-col gap-10 md:gap-12 lg:mx-20">
          {/* 1st desktop */}
          <div className="hidden flex-col items-center justify-between gap-4 text-center lg:flex lg:flex-row lg:text-left">
            <div className="left flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <h2 className="text-xl font-medium text-white sm:text-white md:text-3xl">
                Managing <br />
                Product Complexity
              </h2>
              <p className="md:text-md text-sm text-white">
                Product and service complexity is ubiquitous. In some cases,
                de-contenting is the solution but not always possible. Striking
                the right balance is the path to success. Our industry-renowned
                solutions streamline overwhelming product and service complexity
                to enhance your offerings and customer/user experiences.
              </p>
              <Link href={""}>
                <button className="bg-white px-4 py-2 text-sm font-semibold text-[#230b54] hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                  Show me more
                </button>
              </Link>
            </div>

            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/product-complexity-management.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>

          {/* 1st dup  */}
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:hidden lg:flex-row lg:text-left">
            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/product-complexity-management.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="left flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <h2 className="text-xl font-medium text-white sm:text-white md:text-3xl">
                Managing <br />
                Product Complexity
              </h2>
              <p className="md:text-md text-sm text-white">
                Product and service complexity is ubiquitous. In some cases,
                de-contenting is the solution but not always possible. Striking
                the right balance is the path to success. Our industry-renowned
                solutions streamline overwhelming product and service complexity
                to enhance your offerings and customer/user experiences.
              </p>
              <Link href={""}>
                <button className="bg-white px-4 py-2 text-sm font-semibold text-[#230b54] hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                  Show me more
                </button>
              </Link>
            </div>
          </div>

          {/* 2nd both */}
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div className="right flex items-center justify-center">
              <Link href={""}>
                <Image
                  src={"/images/behavioral-data-analysis.jpg"}
                  width={500}
                  height={100}
                  alt=""
                  className="rounded-lg"
                />
              </Link>
            </div>
            <div className="left flex w-[400px] flex-col gap-4 lg:w-[500px]">
              <Link href={""}>
                <h2 className="text-xl font-medium text-white sm:text-white md:text-3xl">
                  Harnessing <br />
                  Behavioral Data
                </h2>
              </Link>
              <p className="md:text-md text-sm text-white">
                Behavioral data are all around us—and now you can base your
                decisions on customers’ actual behavior with DataDialogue.
                Enhancing data collected from customers’ devices with automotive
                market research insights, we provide an ongoing, contextual
                understanding of user behavior, product usage and duty cycles.
              </p>
              <Link href={""}>
                <button className="bg-white px-4 py-2 text-sm font-semibold text-[#230b54] hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                  Show me more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* section ......5 ........... */}
      <div className="my-[50px] flex h-fit flex-col gap-28 px-10 py-12">
        <h2 className="text-center text-3xl font-medium text-gray-900">
          Learn from our clients’ success in an Automotive & Mobility case study
        </h2>
        {/* card -1 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
            <Image
              src={"/images/amp_ss_768x576_iStock-1496134232.jpg"}
              width={600}
              height={500}
              alt=""
              className="absolute left-0 top-0  z-10 h-96 "
            />
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <Link href={""}>
              <h2 className="text-2xl font-medium text-[#ff5635] hover:text-[#46b7aa]">
                Using secondary and qualitative research to build a generative
                AI market strategy
              </h2>
            </Link>
            <p>
              Helping companies conduct market research surveys with durable,
              reliable groups of critical audiences
            </p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                Show me more
              </button>
            </Link>
          </div>
        </div>
        {/* card -2 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:mx-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#ff5635] lg:-ml-10"></div>
            <Link href={""}>
              <Image
                src={
                  "/images/success-stories-guiding-an-automotive-768x576px.jpg"
                }
                width={600}
                height={500}
                alt=""
                className="absolute left-0 top-0  z-10 h-96 "
              />
            </Link>
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <Link href={""}>
              <h2 className="text-2xl font-medium text-[#530095] hover:text-[#46b7aa]">
                Guiding an automotive brand’s expansion with a global
                segmentation of a complex sector
              </h2>
            </Link>
            <p>
              Global automotive market research instructs go-forward strategy
              and marketing plan
            </p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                Show me more
              </button>
            </Link>
          </div>
        </div>
        {/* card -3 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
            <Link href={""}>
              <Image
                src={"/images/tech-768x576-iStock-613763250.jpg"}
                width={600}
                height={500}
                alt=""
                className="absolute left-0 top-0  z-10 h-96 "
              />
            </Link>
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <Link href={""}>
              <h2 className="text-2xl font-medium text-[#ff5635] hover:text-[#46b7aa]">
                Updating a global brand tracker to reflect a new automotive
                reality
              </h2>
            </Link>
            <p>
              Automotive market research and reliable KPI analyses inform
              long-term success
            </p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                Show me more
              </button>
            </Link>
          </div>
        </div>
        {/* card -4 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:mx-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#ff5635] lg:-ml-10"></div>
            <Link href={""}>
              <Image
                src={
                  "/images/auto-768x576-factory-factory-worker-girl-1108101.jpg"
                }
                width={600}
                height={500}
                alt=""
                className="absolute left-0 top-0  z-10 h-96 "
              />
            </Link>
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <Link href={""}>
              <h2 className="text-2xl font-medium text-[#530095] hover:text-[#46b7aa]">
                Helping a major OEM develop more customer-centric commercial
                vehicles for the future
              </h2>
            </Link>
            <p>
              A day-to-day automotive research approach provides broad insights
            </p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                Show me more
              </button>
            </Link>
          </div>
        </div>

        {showMore && (
          <>
            {/* card -5 ---- */}
            <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
              {/* Img + text wrapper*/}
              <div className="h-96 w-96">
                <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
                <Link href={""}>
                  <Image
                    src={"/images/auto-1335x480-shutterstock_1194974143.jpg"}
                    width={600}
                    height={500}
                    alt=""
                    className="absolute left-0 top-0  z-10 h-96 "
                  />
                </Link>
              </div>
              <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
                <p className="mt-5 text-sm ">SUCCESS STORIES</p>
                <Link href={""}>
                  <h2 className="text-2xl font-medium text-[#ff5635] hover:text-[#46b7aa]">
                    Helping an automotive manufacturer provide best-in-class
                    customer experience
                  </h2>
                </Link>
                <p>
                  Mapping automotive brand loyalty empowers current and future
                  consumers
                </p>
                <Link href={""}>
                  <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
            {/* card -6 ---- */}
            <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
              {/* Img + text wrapper*/}
              <div className="h-96 w-96">
                <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#ff5635] lg:-ml-10"></div>
                <Link href={""}>
                  <Image
                    src={
                      "/images/auto-768x576-taneli-lahtinen-1135274-unsplash.jpg"
                    }
                    width={600}
                    height={500}
                    alt=""
                    className="absolute left-0 top-0  z-10 h-96 "
                  />
                </Link>
              </div>
              <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
                <p className="mt-5 text-sm ">SUCCESS STORIES</p>
                <Link href={""}>
                  <h2 className="text-2xl font-medium text-[#530095] hover:text-[#46b7aa]">
                    Imagining a fully autonomous vehicle from the future
                  </h2>
                </Link>
                <p>
                  Future-focused, outside-the-box automotive market research
                  uncovers consumer desires
                </p>
                <Link href={""}>
                  <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
            {/* card -7 ---- */}
            <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
              {/* Img + text wrapper*/}
              <div className="h-96 w-96">
                <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
                <Link href={""}>
                  <Image
                    src={"/images/auto-768x576-adult-adventure-car-1051072.jpg"}
                    width={600}
                    height={500}
                    alt=""
                    className="absolute left-0 top-0  z-10 h-96 "
                  />
                </Link>
              </div>
              <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
                <p className="mt-5 text-sm ">SUCCESS STORIES</p>
                <Link href={""}>
                  <h2 className="text-2xl font-medium text-[#530095] hover:text-[#46b7aa]">
                    Boosting profit while reducing complexity for a major
                    automotive manufacturer
                  </h2>
                </Link>
                <p>
                  Insight gathered through a build-your-own approach informs the
                  manufacturing process
                </p>
                <Link href={""}>
                  <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
            {/* card -8 ---- */}
            <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
              {/* Img + text wrapper*/}
              <div className="h-96 w-96">
                <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#ff5635] lg:-ml-10"></div>
                <Link href={""}>
                  <Image
                    src={"/images/auto-768x576-shutterstock_1214173732.jpg"}
                    width={600}
                    height={500}
                    alt=""
                    className="absolute left-0 top-0  z-10 h-96 "
                  />
                </Link>
              </div>
              <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
                <p className="mt-5 text-sm ">SUCCESS STORIES</p>
                <Link href={""}>
                  <h2 className="text-2xl font-medium text-[#530095] hover:text-[#46b7aa]">
                    Helping an OEM simplify in-vehicle experiences with human
                    machine interface testing
                  </h2>
                </Link>
                <p>
                  UX-focused auto market research helps create an interface for
                  the consumer
                </p>
                <Link href={""}>
                  <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
            {/* card -9 ---- */}
            <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
              {/* Img + text wrapper*/}
              <div className="h-96 w-96">
                <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
                <Link href={""}>
                  <Image
                    src={"/images/auto-768x576-usa-1061843_1920.jpg"}
                    width={600}
                    height={500}
                    alt=""
                    className="absolute left-0 top-0  z-10 h-96 "
                  />
                </Link>
              </div>
              <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
                <p className="mt-5 text-sm ">SUCCESS STORIES</p>
                <Link href={""}>
                  <h2 className="text-2xl font-medium text-[#530095] hover:text-[#46b7aa]">
                    Contextualizing a fleet’s telematics data to increase
                    efficiency & improve driver training
                  </h2>
                </Link>
                <p>
                  "Defined driving events" contextualize data in a secure and
                  effective manner
                </p>
                <Link href={""}>
                  <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
        <div className="">
          {/* <Link href={""}> */}
          <button
            onClick={() => setShowMore(true)}
            className="bg-[#ff5635] px-4 py-2 text-sm font-medium text-white hover:bg-[#530095] hover:text-white  md:px-6 md:py-3"
          >
            LOAD MORE
          </button>
          {/* </Link> */}
        </div>
      </div>

      {/*cdvdv  */}

      {/* ------------------------------- */}
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
