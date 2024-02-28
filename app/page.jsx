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
      <div
        className="home page-template page-template-page-templates page-template-page-blocks page-template-page-templatespage-blocks-php page page-id-101 wp-embed-responsive group-blog"
        itemscope=""
      >
        <div className="site" id="page">
          <main className="main">
            <div className="page page--new page--no-image">
              <div className="page__body">
                {/*  */}
                {/*  */}
                {/*  */}
                {/*  */}
                <section
                  className="CoverHeader  pbM40 h-screen px-6 lg:px-20 "
                  style={{ color: "#ffffff", backgroundColor: "#530095" }}
                >
                  <div className="row container mx-auto items-center justify-center px-0 text-left">
                    <div className="CoverHeader__contain col-12 col-lg-6  pl-3">
                      <h1 className="CoverHeader__title  col-lg-11 px-0">
                        In the ocean of data, <br className="desktop" />
                        we find the perfect wave
                      </h1>

                      <div className="CoverHeader__descr col-lg-10 px-0  py-3 pb-4">
                        <p>
                          <span style={{ fontWeight: 400 }}>
                            We specialize in obtaining data for both qualitative
                            and quantitative market research, assisting clients
                            globally in conducting local and multi-country
                            studies through conventional and imaginative
                            methodologies.
                          </span>
                        </p>
                      </div>

                      <br />
                      <div>
                        <h2 className="OurSolutions__list__item__wrap__title">
                          If you need...
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

                      {/*  */}
                      <br />
                      <br />
                      <br />
                      <br />
                      <ul className="ListButton WhiteAndOutline no-gutters col-12 flex gap-7 px-0">
                        <div className="">
                          <a
                            href="/case-studies/paint-purchasing-study"
                            className=" border-2 bg-white  px-5 py-4 font-bold text-[#530095] hover:bg-black"
                          >
                            Contact
                          </a>
                        </div>
                        <div className="">
                          <a
                            href="/case-studies/paint-purchasing-study"
                            className=" border-2 bg-white  px-5 py-4 font-bold text-[#530095] hover:bg-black"
                          >
                            Ask to a quote
                          </a>
                        </div>
                      </ul>
                    </div>

                    <div className="Image__inpage col-lg-6">
                      <img
                        width="680"
                        height="800"
                        className=""
                        src="https://ffind.com/app/uploads/2021/07/home.jpg"
                      />
                    </div>
                  </div>
                </section>

                {/*  */}
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
                              src="https://ffind.com/app/uploads/2021/07/ricerche_tel_CATI.svg"
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
                                  href="/case-studies/paint-purchasing-study"
                                  className=" border-2 bg-white px-5 py-4 font-bold text-[#530095] hover:bg-black"
                                >
                                  Social Sampling
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
                              src="https://ffind.com/app/uploads/2021/07/ricerche_online_CAVI.svg"
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
                                  href="/case-studies/paint-purchasing-study"
                                  className=" border-2 bg-white  px-5 py-4 font-bold text-[#530095] hover:bg-black"
                                >
                                  Telephone research CATI
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
                              src="https://ffind.com/app/uploads/2021/07/interview.svg"
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
                                  href="/case-studies/paint-purchasing-study"
                                  className=" border-2 bg-white  px-5 py-4 font-bold text-[#530095] hover:bg-black"
                                >
                                  Online research CAWI
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
                              src="https://ffind.com/app/uploads/2021/07/research.svg"
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
                                  href="/case-studies/paint-purchasing-study"
                                  className=" border-2 bg-white  px-5 py-4 font-bold text-[#530095] hover:bg-black"
                                >
                                  Interviews with video call
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
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
      </div>
    </>
  );
}
