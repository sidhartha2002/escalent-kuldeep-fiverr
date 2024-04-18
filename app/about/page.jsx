import Image from "next/image";
import Link from "next/link";

import styles from "@/app/ffind.css";

export default function Home() {
  return (
    <div className="site" id="page">
      <main className=" ">
        <article className="">
          <div className="">
            <section
              className="CoverHeader  "
              style={{ color: "#ffffff", backgroundColor: "#530095" }}
            >
              <div className="row container mx-auto px-0 text-left">
                <div className="CoverHeader__contain col-12 col-lg-6  pl-3">
                  <h1 className="CoverHeader__title  col-lg-11 px-0">
                    Precision in Respondent Selection
                  </h1>

                  <div className="CoverHeader__descr col-lg-10 px-0  py-3 pb-4">
                    <p>
                      We're more than data; we're about access. Swift and
                      accurate access to the right respondents, because
                      meaningful insights start with the right voices.
                    </p>
                    <br />
                    <p>
                      We're not about data overload; we're about precision.
                      Because the right respondent holds the key to unlocking
                      invaluable insights.
                    </p>
                  </div>

                  <div className="flex scale-90 gap-7 md:ml-5 md:scale-100">
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

                <div className="Image__inpage col-lg-6">
                  <img
                    width="680"
                    height="800"
                    className="rounded-full lg:rounded-none "
                    // src="https://ffind.com/app/uploads/2021/07/cati.jpg"
                    src="images/hero/about-hero.jpeg"
                  />
                </div>
              </div>
            </section>

            <section className="Certifications ">
              <div className="container mx-auto my-10">
                <ul className="Certifications__list flex justify-center gap-12">
                  <li className="Certifications__item mx-2 my-6">
                    <img
                      className="w-48"
                      src="https://ffind.com/app/uploads/2024/03/ESOMAR-logo.webp"
                      alt="ESOMAR certification"
                    />
                  </li>
                  <li className="Certifications__item mx-2 my-6">
                    <img
                      className="w-48"
                      src="https://ffind.com/app/uploads/2024/03/MRS-logo.webp"
                      alt="MRS certification"
                    />
                  </li>
                  <li className="Certifications__item mx-2 my-6">
                    <img
                      className="w-48"
                      src="https://ffind.com/app/uploads/2024/03/ADM-logo.webp"
                      alt="ADM certification"
                    />
                  </li>
                  <li className="Certifications__item mx-2 my-6">
                    <img
                      className="w-48"
                      src="https://ffind.com/app/uploads/2024/03/ASSIRM-logo.webp"
                      alt="ASSIRM certification"
                    />
                  </li>
                  <li className="Certifications__item mx-2 my-6">
                    <img
                      className="w-48"
                      src="https://ffind.com/app/uploads/2024/03/IA-logo.webp"
                      alt="IplusA certification"
                    />
                  </li>
                </ul>
              </div>
            </section>

            <section
              className="TitleText TitleText--center  TitleText--jellow py-10"
              style={{ backgroundColor: "#64ffda" }}
            >
              <div className="container mx-auto px-0 text-center">
                <h2 className="TitleText__title col-12 col-lg-9 col-xl-9 mx-auto font-bold">
                  Data Collection is not only one of the main instruments to
                  find out the opinion of consumers
                </h2>
                <br />

                <div className="TitleText__descr col-12 col-lg-9 col-xl-8 mx-auto py-3 pb-4">
                  <div>
                    but it is also a continuous challenge. It has to be repeated
                    constantly and it is increasingly difficult to overcome
                    given the continuous evolution of customs. To expand you
                    need to discover new lands, and to discover new lands you
                    need to be a fearless explorer.
                  </div>
                  <div>
                    This is our job. We get to places you can’t reach and bring
                    you valuable information and data to optimize your
                    conquests.
                  </div>
                </div>
              </div>
            </section>

            <div style={{ height: "40px" }}>&nbsp;</div>

            <section className="CenterTitleText col-12 CenterTitleText--center ">
              <div className="container mx-auto px-0 text-center">
                <h2 className="CenterTitleText__title mx-auto">About us</h2>

                <div className="CenterTitleText__descr col-12 col-lg-10 mx-auto">
                  <div>
                    <strong>What we do</strong>
                    <br />
                    We specialise in gathering data for both qualitative and
                    quantitative market research, conducting interviews using
                    conventional strategies like CATI and CAWI, as well as
                    cutting-edge techniques such as webcams and smart speakers.
                  </div>

                  <div>
                    <strong>Where we work</strong>
                    <br />
                    Operating from our 3 office in the UK, US, and India, we
                    carry out more than half a million interviews annually
                    across 25 countries. Our team of 150+ telephone operators
                    work remotely worldwide, in addition to our online survey
                    platform.
                  </div>

                  <div className="mt-5 flex items-center justify-center">
                    <a
                      href="/quality"
                      className="group  relative inline-flex scale-75 items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                    >
                      <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                      <span className="absolute inset-0 h-full w-full rounded-md bg-[#64ffda] "></span>
                      <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                      <span className="relative font-bold tracking-wide text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                        Quality
                      </span>
                    </a>
                    <a
                      href="#"
                      className="group relative inline-flex scale-75 items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
                    >
                      <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                      <span className="absolute inset-0 h-full w-full rounded-md bg-[#64ffda] "></span>
                      <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                      <span className="relative font-bold tracking-wide text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                        History
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="OurFounder  mt-11 ">
              <div className=" mx-auto  px-0 text-left">
                <div className="flex items-center justify-center text-center">
                  <h2 className="CenterTitleText__title ">About us</h2>
                </div>

                <br />

                <div className="m-11 flex flex-col justify-center gap-5 lg:flex-row">
                  <div className=" lg:w-[30vw] ">
                    <div className="OurFounder__list__item__icon col-12">
                      <img
                        width="250"
                        height="250"
                        src="https://ffind.com/app/uploads/2021/07/Tom-Abele-ffind.webp"
                        alt=""
                      />
                    </div>
                    <div className=" col-12">
                      <h2 className="OurFounder__list__item__title">
                        Tom Abele
                      </h2>
                      <div className="">Founder</div>
                      <div>
                        Tom is a leading figure in the field of German market
                        research. He is known as a competent and sincere
                        professional with a broad overview of the industry
                        dynamics.
                      </div>
                    </div>
                  </div>

                  <div className=" w-[30vw] ">
                    <div className="OurFounder__list__item__icon col-12">
                      <img
                        width="250"
                        height="250"
                        src="https://ffind.com/app/uploads/2021/07/Ennio-Armato-ffind.webp"
                        alt=""
                      />
                    </div>
                    <div className=" col-12">
                      <h2 className="OurFounder__list__item__title">
                        Founder 2
                      </h2>
                      <div className="">Tech Lead</div>
                      <div>Description</div>
                    </div>
                  </div>

                  <div className=" w-[30vw] ">
                    <div className="OurFounder__list__item__icon col-12">
                      <img
                        width="250"
                        height="250"
                        src="https://ffind.com/app/uploads/2021/07/Ennio-Armato-ffind.webp"
                        alt=""
                      />
                    </div>
                    <div className=" col-12">
                      <h2 className="OurFounder__list__item__title">
                        Founder 3
                      </h2>
                      <div className="">CEO </div>
                      <div>
                        Description demo:He has three qualities: he knows the
                        quantitative market research industry inside out; he is
                        always on the front line alongside his employees and he
                        is a persuasive speaker with remarkable rhetorical
                        skills.
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
