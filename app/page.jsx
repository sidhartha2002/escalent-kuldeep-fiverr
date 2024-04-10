"use client";

import Image from "next/image";
import Link from "next/link";

// import styles from "@/app/escalent.css";
import styles from "@/app/ffind.css";

import Projects from "../components/Projects";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="" id="page">
          <main className="main">
            <div className="">
              <div className="">
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <section
                  className="h-screen"
                  style={{ color: "#ffffff", backgroundColor: "#530095" }}
                >
                  <div className="">
                    <div className="absolute z-10 mb-8 ml-6 pt-[10vh] md:ml-24 md:pt-[20vh]">
                      <h1 className="text-center text-3xl font-bold  md:text-left md:text-5xl">
                        In the ocean of data, <br className="desktop" />
                        we find the perfect wave
                      </h1>

                      <div className="mt-8 w-96 md:w-[40vw]">
                        <p className="text-sm text-[#90cbff] xl:text-base">
                          We specialize in obtaining data for both qualitative
                          and quantitative market research, assisting clients
                          globally in conducting local and multi-country studies
                          through conventional and imaginative methodologies.
                        </p>
                      </div>
                      <br />
                      <div>
                        <h2 className="OurSolutions__list__item__wrap__title">
                          <span className="md:lg text-base">
                            If you need...
                          </span>
                        </h2>
                        <TypeAnimation
                          className="lgl:text-3xl text-textDark lgl:mt-4 mt-2 flex flex-col items-center text-center text-sm font-bold tracking-wider md:text-2xl"
                          sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Telephone research CATI",
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Online research CAWI",
                            1000,
                            "Webcam Interview",
                            1000,
                            "Social Sampling",
                            1000,
                          ]}
                          wrapper="span"
                          speed={50}
                          style={{
                            display: "inline-block",
                            color: "#64ffda",
                          }}
                          repeat={Infinity}
                        />
                      </div>

                      <br />
                      <br />
                      <br />
                      <br />

                      <div className="mt-[20vh] flex scale-90 gap-7 md:ml-5 md:mt-0 md:scale-100 ">
                        <a
                          href="#_"
                          className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                        >
                          <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                          <span className="absolute inset-0 h-full w-full rounded-md bg-white "></span>
                          <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                          <span className="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                            Contact
                          </span>
                        </a>
                        <a
                          href="#_"
                          className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                        >
                          <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                          <span className="absolute inset-0 h-full w-full rounded-md bg-white "></span>
                          <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                          <span className="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                            Ask a quote
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="">
                      <img
                        width="720"
                        height="820"
                        // className="mb-24 scale-110 rounded-3xl lg:scale-110"
                        className="absolute bottom-0 right-0 rounded-full lg:rounded-none "
                        // src="https://ffind.com/app/uploads/2021/07/home.jpg"
                        // src="/images/home-images-edit.png"
                        // src="/images/hero/hero.png"
                        src="/images/hero/hero-crop1.png"
                      />
                    </div>
                  </div>
                </section>

                {/* . */}
                {/*  */}
                {/*  */}
                {/*  */}
                <section className="TitleText TitleText--center  ">
                  <div className="container mx-auto items-center justify-center px-0 text-center">
                    <div className="TitleText__descr col-12 col-lg-9 col-xl-8 mx-auto items-center justify-center py-16 text-left text-base md:text-center md:text-lg">
                      <p>
                        <span>
                          Conducting over one million interviews annually using
                          the top methodologies for both research types (CATI,
                          CAWI, and IDI). A significant portion of our data
                          gathering is conducted via telephone interviews. Our
                          team of 750+ native speaking interviewers operate
                          remotely from more than 35 countries, showcasing our
                          expertise in remote work. In 2015, we assembled a team
                          of digital marketing experts to reach out to survey
                          participants via social media platforms (Social
                          Sampling) and conduct interviews using traditional
                          (telephone and online) and cutting-edge (webcam and
                          voice assistants) approaches.
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <section className="OurSolutions  ">
                  <div className="row container mx-auto px-0 text-left md:px-7 lg:px-20">
                    <h2 className="OurSolutions__title scale-105 font-extrabold">
                      OUR SOLUTIONS
                    </h2>
                    <br />
                    <br />
                    <br />
                    <br />
                    <ul className="OurSolutions__list row col-12 mx-0 px-0">
                      <li className="col-12 col-lg-6 no-gutters ml-0 p-2 transition-transform duration-300 ease-in-out hover:scale-95">
                        <div className="OurSolutions__list__item   bg-[#230b54] text-white ">
                          <div className="OurSolutions__list__item__icon col-12 col-lg-4 px-0">
                            <img
                              width="102"
                              height="91"
                              src="/images/social.png"
                              className="scale-105"
                            />
                          </div>
                          <div className="OurSolutions__list__item__wrap col-12 col-lg-8 px-lg-2 px-0">
                            <h2 className="OurSolutions__list__item__wrap__title">
                              Social Sampling
                            </h2>

                            <div className="OurSolutions__list__item__wrap__descr">
                              <p>
                                Quantitative market research requires finding
                                respondents who are well-profiled, authentic,
                                and have not taken surveys recently, which can
                                be challenging for panels. Social networks are
                                now utilized by over half of the global
                                population, creating a vast pool of potential
                                respondents. Just locate the perfect ones and
                                incorporate them into the survey effectively.
                              </p>
                            </div>
                            <div>
                              <div className="mt-16">
                                <a
                                  href="/methods/social-sampling"
                                  className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                                >
                                  <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-[#64ffda] "></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                                  <span className="relative font-bold tracking-wide text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                                    Social Sampling
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="col-12 col-lg-6 no-gutters ml-0 p-2 transition-transform duration-300 ease-in-out hover:scale-95">
                        <div className="OurSolutions__list__item   bg-[#230b54] text-white ">
                          <div className="OurSolutions__list__item__icon col-12 col-lg-4 px-0">
                            <img
                              width="129"
                              height="82"
                              src="/images/telephones.png"
                            />
                          </div>
                          <div className="OurSolutions__list__item__wrap col-12 col-lg-8 px-lg-2 px-0">
                            <h2 className="OurSolutions__list__item__wrap__title">
                              Telephone research CATI
                            </h2>

                            <div className="OurSolutions__list__item__wrap__descr">
                              <p>
                                The CATI methodology is reliable, particularly
                                when there is a need to gather a large amount of
                                data consistently. This innovative approach
                                involves CATI@home, with local interviewers in
                                more than 25 countries worldwide.
                              </p>
                            </div>
                            <div>
                              <div className="mt-16">
                                <a
                                  href="/methods/telephone-research-CATI"
                                  className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                                >
                                  <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-[#64ffda] "></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                                  <span className="relative font-bold tracking-wide text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                                    Telephone research CATI
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="col-12 col-lg-6 no-gutters ml-0 p-2 transition-transform duration-300 ease-in-out hover:scale-95">
                        <div className="OurSolutions__list__item   bg-[#230b54] text-white ">
                          <div className="OurSolutions__list__item__icon col-12 col-lg-4 px-0">
                            <img
                              width="128"
                              height="83"
                              src="/images/research.png"
                            />
                          </div>
                          <div className="OurSolutions__list__item__wrap col-12 col-lg-8 px-lg-2 px-0">
                            <h2 className="OurSolutions__list__item__wrap__title">
                              Online research CAWI
                            </h2>

                            <div className="OurSolutions__list__item__wrap__descr">
                              <p>
                                <span style={{ fontWeight: 400 }}>
                                  The CAWI methodology is highly popular in
                                  quantitative market analysis due to its
                                  efficiency and affordability. Smartphones
                                  enable users to respond to the survey from any
                                  location and at any time.
                                </span>
                              </p>
                            </div>
                            <div>
                              <div className="mt-16">
                                <a
                                  href="/methods/online-research-CAWI"
                                  className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                                >
                                  <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-[#64ffda] "></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                                  <span className="relative font-bold tracking-wide text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                                    Online research CAWI
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="col-12 col-lg-6 no-gutters ml-0 p-2 transition-transform duration-300 ease-in-out hover:scale-95">
                        <div className="OurSolutions__list__item   bg-[#230b54] text-white ">
                          <div className="OurSolutions__list__item__icon col-12 col-lg-4 px-0">
                            <img
                              width="137"
                              height="87"
                              src="/images/inter.png"
                            />
                          </div>
                          <div className="OurSolutions__list__item__wrap col-12 col-lg-8 px-lg-2 px-0">
                            <h2 className="OurSolutions__list__item__wrap__title">
                              Interviews with video call
                            </h2>

                            <div className="OurSolutions__list__item__wrap__descr">
                              <p>
                                This combines CAWI, CATI, and F2F to offer
                                clients both quantitative and qualitative data
                                by capturing respondents' reactions and
                                expressions in their natural setting.
                              </p>
                            </div>
                            <div>
                              <div className="mt-16">
                                <a
                                  href="/methods/interviews-with-video-call"
                                  className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                                >
                                  <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-[#64ffda] "></span>
                                  <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                                  <span className="relative font-bold tracking-wide text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                                    Interviews with video call
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </main>

          {/*  */}
          {/*  */}
          {/*  */}
        </div>
      </div>
    </>
  );
}
