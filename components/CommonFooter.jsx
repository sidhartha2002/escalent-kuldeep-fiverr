"use client";

import { TypeAnimation } from "react-type-animation";

export function CommonFooter() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section className="OverFooter">
        <div className="OverFooter__wrap px-0">
          <div className="OverFooter__title col-lg-6 col-12 px-0">
            If you need a quote for a...
          </div>
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
              color: "#000000",
            }}
            repeat={Infinity}
          />

          <br />
          <br />
          <a
            href="/case-studies/paint-purchasing-study"
            className="border-2 bg-black px-5  py-4 font-bold text-white hover:bg-white hover:text-[#530095]"
          >
            Contact
          </a>
        </div>
      </section>

      <div class="wrapper Footer px-0" id="wrapper-footer">
        <footer class="site-footer container px-0">
          <div class="Footer__first__wrapper d-flex flex-col pt-10 md:px-5 lg:flex-row">
            <div class="Logo--footer col-12 col-lg-2 mx-0 ">
              <a href="https://ffind.com">
                <img
                  width="160"
                  height="53"
                  class=""
                  src="https://ffind.com/app/themes/ffind/images/logo.svg"
                />
              </a>
            </div>
            <div class="col-12 col-lg-9 offset-lg-1 px-0">
              <nav class="Footer__first ">
                <div class="menu-footer-list-container row no-gutters">
                  <ul id="menu-footer-list" class="first-footer row">
                    <li
                      id="menu-item-135"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-135"
                    >
                      <h3>Solutions</h3>
                      <ul class="sub-menu">
                        <li
                          id="menu-item-150"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-150"
                        >
                          <a href="https://ffind.com/cawi-research/">
                            Online research CAWI
                          </a>
                        </li>
                        <li
                          id="menu-item-141"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-141"
                        >
                          <a href="https://ffind.com/cati-research/">
                            Telephone research CATI
                          </a>
                        </li>
                        <li
                          id="menu-item-144"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-144"
                        >
                          <a href="https://ffind.com/get-survey-respondents/">
                            Social Sampling
                          </a>
                        </li>
                        <li
                          id="menu-item-143"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-143"
                        >
                          <a href="https://ffind.com/webcam-interviews/">
                            Webcam Interviews
                          </a>
                        </li>
                        <li
                          id="menu-item-142"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-142"
                        >
                          <a href="https://ffind.com/voice-assisted-interview/">
                            Voice Assisted Interviews
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-136"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-136"
                    >
                      <h3>About</h3>
                      <ul class="sub-menu">
                        <li
                          id="menu-item-5067"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5067"
                        >
                          <a href="https://ffind.com/history/">History</a>
                        </li>
                        <li
                          id="menu-item-170"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-170"
                        >
                          <a href="https://ffind.com/data-quality-management-market-research/">
                            Data Quality
                          </a>
                        </li>
                        <li
                          id="menu-item-7352"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7352"
                        >
                          <a href="https://ffind.com/contact/">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-137"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-137"
                    >
                      <h3>Job with Us</h3>
                      <ul class="sub-menu">
                        <li
                          id="menu-item-7853"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7853"
                        >
                          <a href="https://ffind.com/market-research-jobs/">
                            Work with Us
                          </a>
                        </li>
                        <li
                          id="menu-item-4426"
                          class="menu-item menu-item-type-taxonomy menu-item-object-tipo_lavoro menu-item-4426"
                        >
                          <a href="https://ffind.com/job/in-house/">
                            Jobs in house
                          </a>
                        </li>
                        <li
                          id="menu-item-5068"
                          class="menu-item menu-item-type-taxonomy menu-item-object-tipo_lavoro menu-item-5068"
                        >
                          <a href="https://ffind.com/job/homeworking/">
                            Homeworking
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-138"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-138"
                    >
                      <h3>Insights</h3>
                      <ul class="sub-menu">
                        <li
                          id="menu-item-147"
                          class="menu-item menu-item-type-post_type menu-item-object-page menu-item-147"
                        >
                          <a href="https://ffind.com/blog/">Blog</a>
                        </li>
                        <li
                          id="menu-item-7807"
                          class="menu-item menu-item-type-post_type_archive menu-item-object-news menu-item-7807"
                        >
                          <a href="https://ffind.com/news/">News</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <ul class="Footer__info row">
                  <li class="col-12 col-lg-4">
                    <div class="Footer__info__title">UK</div>
                    <div class="Footer__info__descr">
                      <p className="text-white">
                        FFIND ltd – Britannia House 11 Glenthorne Road, London
                        VAT Number GB-348617865
                      </p>
                    </div>
                  </li>
                  <li class="col-12 col-lg-4">
                    <div class="Footer__info__title">ITALY</div>
                    <div class="Footer__info__descr">
                      <p className="text-white">
                        FFIND srl – Via Ercole Bernabei, 51 90145 – Palermo
                        (Italy) P.IVA 02372540811
                      </p>
                    </div>
                  </li>
                  <li class="col-12 col-lg-4">
                    <div class="Footer__info__title">GERMANY</div>
                    <div class="Footer__info__descr">
                      <p className="text-white">
                        FFIND GmbH – Dreieichstraße 59 60594 Frankfurt am Main,
                        German VAT Number DE276580654
                      </p>
                    </div>
                  </li>
                </ul>
              </nav>

              <div class="List__partners__footer">
                <ul class="row mx-auto">
                  <li class="List__partners__footer__item FooterLogo--adm col-5 col-lg-2">
                    <img
                      width="190"
                      height="60"
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/adm-logo.png"
                    />
                  </li>
                  <li class="List__partners__footer__item FooterLogo--esomar col-5 col-lg-2">
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
                  <li class="List__partners__footer__item  FooterLogo--assirm col-5 col-lg-2">
                    <img
                      width="265"
                      height="158"
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/assirm-ita-bn2023.svg"
                    />
                  </li>
                  <li class="List__partners__footer__item FooterLogo--ia col-5 col-lg-2">
                    <img
                      width="190"
                      height="60"
                      src="https://ffind.com/app/themes/ffind/images/partners/footer/ia-logo-bw.png"
                    />
                  </li>
                  <li class="List__partners__footer__item FooterLogo--dekra col-5 col-lg-2">
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
