"use client";

import { TypeAnimation } from "react-type-animation";
import { Footer } from "./footer";

export function CommonFooter() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section className="OverFooter">
        <div className="OverFooter__wrap px-0">
          <div className="OverFooter__title col-lg-6 col-1">
            <div className="scale-75 text-[#530095]">
              If you need a quote for a...
            </div>
          </div>
          <TypeAnimation
            className="lgl:text-3xl lgl:mt-4 mt-2 flex flex-col items-center text-center text-xl font-extrabold tracking-wider text-black md:text-3xl"
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
              color: "#000000",
            }}
            repeat={Infinity}
          />

          <br />
          <br />

          <a
            href="#_"
            class="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
          >
            <span class="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-white transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
            <span class="absolute inset-0 h-full w-full rounded-md bg-black "></span>
            <span class="absolute inset-0 h-full w-full rounded-md bg-white opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
            <span class="relative text-white transition-colors delay-100 duration-200 ease-in-out group-hover:text-black">
              Contact
            </span>
          </a>
        </div>
      </section>

      {/*  */}
      <Footer />

      {/*  */}
      {/*  */}
      {/*  */}

      <br />
      <br />
      <h1 className="flex justify-center text-lg uppercase text-gray-500 underline">
        🔽⏬ Other Types of Footers (just for checking) ⏬🔽
      </h1>
      <br />
      <br />

      <div className="wrapper Footer px-0" id="wrapper-footer">
        <footer className="site-footer container px-0">
          <div className="Footer__first__wrapper d-flex flex-col pt-10 md:px-5 lg:flex-row">
            <div className="Logo--footer col-12 col-lg-2 mx-0 ">
              <a href="https://ffind.com">
                <img
                  width="160"
                  height="53"
                  className=""
                  src="https://ffind.com/app/themes/ffind/images/logo.svg"
                />
              </a>
            </div>
            <div className="col-12 col-lg-9 offset-lg-1 px-0">
              <nav className="Footer__first ">
                <div className="menu-footer-list-container row no-gutters">
                  <ul id="menu-footer-list" className="first-footer row">
                    <li
                      id="menu-item-135"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-135"
                    >
                      <h3>Solutions</h3>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-150"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-150"
                        >
                          <a href="https://ffind.com/cawi-research/">
                            Online research CAWI
                          </a>
                        </li>
                        <li
                          id="menu-item-141"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
                        >
                          <a href="https://ffind.com/cati-research/">
                            Telephone research CATI
                          </a>
                        </li>
                        <li
                          id="menu-item-144"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                        >
                          <a href="https://ffind.com/get-survey-respondents/">
                            Social Sampling
                          </a>
                        </li>
                        <li
                          id="menu-item-143"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"
                        >
                          <a href="https://ffind.com/webcam-interviews/">
                            Webcam Interviews
                          </a>
                        </li>
                        <li
                          id="menu-item-142"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"
                        >
                          <a href="https://ffind.com/voice-assisted-interview/">
                            Voice Assisted Interviews
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-136"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-136"
                    >
                      <h3>About</h3>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-5067"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5067"
                        >
                          <a href="https://ffind.com/history/">History</a>
                        </li>
                        <li
                          id="menu-item-170"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-170"
                        >
                          <a href="https://ffind.com/data-quality-management-market-research/">
                            Data Quality
                          </a>
                        </li>
                        <li
                          id="menu-item-7352"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7352"
                        >
                          <a href="https://ffind.com/contact/">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-137"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-137"
                    >
                      <h3>Job with Us</h3>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-7853"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7853"
                        >
                          <a href="https://ffind.com/market-research-jobs/">
                            Work with Us
                          </a>
                        </li>
                        <li
                          id="menu-item-4426"
                          className="menu-item menu-item-type-taxonomy menu-item-object-tipo_lavoro menu-item-4426"
                        >
                          <a href="https://ffind.com/job/in-house/">
                            Jobs in house
                          </a>
                        </li>
                        <li
                          id="menu-item-5068"
                          className="menu-item menu-item-type-taxonomy menu-item-object-tipo_lavoro menu-item-5068"
                        >
                          <a href="https://ffind.com/job/homeworking/">
                            Homeworking
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-138"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-138"
                    >
                      <h3>Insights</h3>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-147"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-147"
                        >
                          <a href="https://ffind.com/blog/">Blog</a>
                        </li>
                        <li
                          id="menu-item-7807"
                          className="menu-item menu-item-type-post_type_archive menu-item-object-news menu-item-7807"
                        >
                          <a href="https://ffind.com/news/">News</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <ul className="Footer__info row">
                  <li className="col-12 col-lg-4">
                    <div className="Footer__info__title text-gray-300">UK</div>

                    <div className="Footer__info__descr">
                      <p className="text-white">
                        FFIND ltd – Britannia House 11 Glenthorne Road, London
                        VAT Number GB-348617865
                      </p>
                    </div>
                  </li>
                  <li className="col-12 col-lg-4">
                    <div className="Footer__info__title text-gray-300">
                      ITALY
                    </div>
                    <div className="Footer__info__descr">
                      <p className="text-white">
                        FFIND srl – Via Ercole Bernabei, 51 90145 – Palermo
                        (Italy) P.IVA 02372540811
                      </p>
                    </div>
                  </li>
                  <li className="col-12 col-lg-4">
                    <div className="Footer__info__title text-gray-300">
                      GERMANY
                    </div>
                    <div className="Footer__info__descr">
                      <p className="text-white">
                        FFIND GmbH – Dreieichstraße 59 60594 Frankfurt am Main,
                        German VAT Number DE276580654
                      </p>
                    </div>
                  </li>
                </ul>
              </nav>

              <div className="List__partners__footer">
                <ul className="row mx-auto">
                  <li className="List__partners__footer__item FooterLogo--adm col-5 col-lg-2">
                    <img
                      width="190"
                      height="60"
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/adm-logo.png"
                    />
                  </li>
                  <li className="List__partners__footer__item FooterLogo--esomar col-5 col-lg-2">
                    <img
                      style={{
                        width: "120px",
                        left: "10px",
                        position: "relative",
                        top: "6px",
                      }}
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/esomar_corporate2023.svg"
                    />
                  </li>
                  <li className="List__partners__footer__item  FooterLogo--assirm col-5 col-lg-2">
                    <img
                      width="265"
                      height="158"
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/assirm-ita-bn2023.svg"
                    />
                  </li>
                  <li className="List__partners__footer__item FooterLogo--ia col-5 col-lg-2">
                    <img
                      width="190"
                      height="60"
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/ia-logo-bw.png"
                    />
                  </li>
                  <li className="List__partners__footer__item FooterLogo--dekra col-5 col-lg-2">
                    <img
                      width="190"
                      height="60"
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/dekra-logo.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
