"use client";
import HoverCarousel from "@/components/HoverCarousel/HoverCarousel";
import Image from "next/image";
import Link from "next/link";

import styles from "@/app/escalent.css";

import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <div
        className="home body-div page-template-default page page-id-2 deluxe deluxe-purple has-openmenuflyout"
        data-title=""
        cz-shortcut-listen="true"
      >
        {/*  */}

        <div className="fma fma-A">
          <div
            className="fma-desktop has-fma-video"
            style={{
              backgroundImage:
                "url('https://escalent.co/wp-content/uploads/2022/03/Escalent_HomepageLoop_1335x760-2022.jpg')",
            }}
            /* style="{{background-image:url('https://escalent.co/wp-content/uploads/2022/03/Escalent_HomepageLoop_1335x760-2022.jpg')}}" */
          >
            <div className="fma-desktop-video">
              <video
                id="fmavideo"
                src="https://escalent.co/wp-content/uploads/2022/03/Escalent_HomepageLoop_1335x760-2022.webm"
                poster="https://escalent.co/wp-content/uploads/2022/03/Escalent_HomepageLoop_1335x760-2022.jpg"
                playsInline
                autoPlay
                loop
                muted
              ></video>
            </div>
            <span className="fma-carat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.507 7.002L.009 1.013.943-.003 5.507 4.97l4.564-4.973.935 1.016-5.499 5.989z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="fma-mobile">
            <img
              src="https://escalent.co/wp-content/uploads/2022/02/homepage-fma-768x960-2022.jpg"
              alt="Homepage"
            />

            <span className="fma-carat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="7"
                viewBox="0 0 11 7"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.507 7.002L.009 1.013.943-.003 5.507 4.97l4.564-4.973.935 1.016-5.499 5.989z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="fma-promobox">
            <div className="fma-promobox-heading smcaps">
              ESCALENT ACQUIRES C SPACE, HALL &amp; PARTNERS
            </div>
            <div className="fma-promobox-title sans">
              Notable union helps clients find new sources of growth in
              ever-changing world{" "}
            </div>
            <div className="fma-promobox-links linkpair smcaps">
              <a href="https://escalent-demo.sarthak.app/news/escalent-acquires-c-space-hall-partners/">
                SHOW ME MORE
              </a>
            </div>
          </div>
        </div>

        {/*  */}

        <main id="maincontent">
          <div className="intro-content intro-content-index">
            <h1 className="headingA">Illumination accelerated.</h1>
            <p>
              We are catalysts of progress in industries facing disruption,
              helping brands translate human and market behaviors into ideas
              that change the world.
            </p>
            <p>
              <a className="smcaps" href="/about/">
                Learn More
              </a>
            </p>
          </div>

          <section className="home-industries newsection">
            <h2 className="headingC">Choose Your Industry</h2>
            <ul className="industry-selector semlist">
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/automotive-and-mobility/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/04/automotive-m.jpg"
                    className="size-industry-m2x"
                    alt="Automotive"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/04/automotive-d.jpg"
                    className="size-industry-d2x"
                    alt="Automotive"
                    decoding="async"
                  />
                  <div className="overlay overlay-teal"></div>
                  <div className="underlay underlay-teal"></div>
                  <div className="industry-selector-title">
                    Automotive &amp; Mobility
                  </div>
                </a>
              </li>
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/consumer-goods-and-retail/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/canr-m.jpg"
                    className="size-industry-m2x"
                    alt="Canr"
                    decoding="async"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/canr-d.jpg"
                    className="size-industry-d2x"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="overlay overlay-purple"></div>
                  <div className="underlay underlay-purple"></div>
                  <div className="industry-selector-title">
                    Consumer Goods &amp; Retail
                  </div>
                </a>
              </li>
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/energy/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/04/energy-m.jpg"
                    className="size-industry-m2x"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/04/energy-d.jpg"
                    className="size-industry-d2x"
                    alt="Energy"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="overlay overlay-orange"></div>
                  <div className="underlay underlay-orange"></div>
                  <div className="industry-selector-title">Energy</div>
                </a>
              </li>
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/financial-services/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/financial-services.jpg"
                    className="size-industry-m2x"
                    alt="financial services"
                    decoding="async"
                    loading="lazy"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/financial-services-1.jpg"
                    className="size-industry-d2x"
                    alt="Financial Services"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="overlay overlay-blue"></div>
                  <div className="underlay underlay-blue"></div>
                  <div className="industry-selector-title">
                    Financial Services
                  </div>
                </a>
              </li>
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/healthcare-life-sciences/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/health.jpg"
                    className="size-industry-m2x"
                    alt="Health"
                    decoding="async"
                    loading="lazy"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/health-1.jpg"
                    className="size-industry-d2x"
                    alt="health"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="overlay overlay-teal"></div>
                  <div className="underlay underlay-teal"></div>
                  <div className="industry-selector-title">Health</div>
                </a>
              </li>
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/technology/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/technology.jpg"
                    className="size-industry-m2x"
                    alt="Technology"
                    decoding="async"
                    loading="lazy"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2019/05/technology-1.jpg"
                    className="size-industry-d2x"
                    alt="Technology"
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="overlay overlay-purple"></div>
                  <div className="underlay underlay-purple"></div>
                  <div className="industry-selector-title">Technology</div>
                </a>
              </li>
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/telecommunications/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2022/04/telecom-640x440-1.jpg"
                    className="size-industry-m2x"
                    alt="Telecom"
                    decoding="async"
                    loading="lazy"
                    srcSet="https://escalent.co/wp-content/uploads/2022/04/telecom-640x440-1.jpg 640w, https://escalent.co/wp-content/uploads/2022/04/telecom-640x440-1-170x117.jpg 170w"
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2022/04/telecom-334x440-1.jpg"
                    className="size-industry-d2x"
                    alt="Telecom"
                    decoding="async"
                    loading="lazy"
                    srcSet="https://escalent.co/wp-content/uploads/2022/04/telecom-334x440-1.jpg 334w, https://escalent.co/wp-content/uploads/2022/04/telecom-334x440-1-129x170.jpg 129w"
                    sizes="(max-width: 334px) 100vw, 334px"
                  />
                  <div className="overlay overlay-orange"></div>
                  <div className="underlay underlay-orange"></div>
                  <div className="industry-selector-title">Telecom</div>
                </a>
              </li>
              <li>
                <a href="https://escalent-demo.sarthak.app/industries/travel-and-tourism/">
                  <img
                    width="640"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2022/03/travel-640x440-1.jpg"
                    className="size-industry-m2x"
                    alt="Travel"
                    decoding="async"
                    loading="lazy"
                    srcSet="https://escalent.co/wp-content/uploads/2022/03/travel-640x440-1.jpg 640w, https://escalent.co/wp-content/uploads/2022/03/travel-640x440-1-170x117.jpg 170w"
                    sizes="(max-width: 640px) 100vw, 640px"
                  />
                  <img
                    width="334"
                    height="440"
                    src="https://escalent.co/wp-content/uploads/2022/03/travel-334x440-1.jpg"
                    className="size-industry-d2x"
                    alt="Travel"
                    decoding="async"
                    loading="lazy"
                    srcSet="https://escalent.co/wp-content/uploads/2022/03/travel-334x440-1.jpg 334w, https://escalent.co/wp-content/uploads/2022/03/travel-334x440-1-129x170.jpg 129w"
                    sizes="(max-width: 334px) 100vw, 334px"
                  />
                  <div className="overlay overlay-blue"></div>
                  <div className="underlay underlay-blue"></div>
                  <div className="industry-selector-title">
                    Travel &amp; Tourism
                  </div>
                </a>
              </li>
            </ul>
          </section>

          {/* sarthak animation */}
          <Projects />

          {/*
           */}
          <div className="logo-scroller newsection">
            <ul className="semlist">
              <li>
                <img
                  width="170"
                  height="170"
                  src="https://escalent.co/wp-content/uploads/2021/01/stellantis-170x170.jpg"
                  className="attachment-logo170 size-logo170"
                  alt="Stellantis"
                  decoding="async"
                  loading="lazy"
                  srcSet="https://escalent.co/wp-content/uploads/2021/01/stellantis-170x170.jpg 170w, https://escalent.co/wp-content/uploads/2021/01/stellantis-150x150.jpg 150w, https://escalent.co/wp-content/uploads/2021/01/stellantis.jpg 340w"
                  sizes="(max-width: 170px) 100vw, 170px"
                />
              </li>
              <li>
                <img
                  width="170"
                  height="170"
                  src="https://escalent.co/wp-content/uploads/2022/02/uber-170x170.jpg"
                  className="attachment-logo170 size-logo170"
                  alt="Uber"
                  decoding="async"
                  loading="lazy"
                  srcSet="https://escalent.co/wp-content/uploads/2022/02/uber-170x170.jpg 170w, https://escalent.co/wp-content/uploads/2022/02/uber-150x150.jpg 150w, https://escalent.co/wp-content/uploads/2022/02/uber.jpg 340w"
                  sizes="(max-width: 170px) 100vw, 170px"
                />
              </li>
              <li>
                <img
                  width="170"
                  height="170"
                  src="https://escalent.co/wp-content/uploads/2022/03/fiserv-170x170.jpg"
                  className="attachment-logo170 size-logo170"
                  alt="fiserv"
                  decoding="async"
                  loading="lazy"
                  srcSet="https://escalent.co/wp-content/uploads/2022/03/fiserv-170x170.jpg 170w, https://escalent.co/wp-content/uploads/2022/03/fiserv-150x150.jpg 150w, https://escalent.co/wp-content/uploads/2022/03/fiserv.jpg 340w"
                  sizes="(max-width: 170px) 100vw, 170px"
                />
              </li>
              <li>
                <img
                  width="170"
                  height="170"
                  src="https://escalent.co/wp-content/uploads/2022/03/pfizer-170x170.jpg"
                  className="attachment-logo170 size-logo170"
                  alt="Pfizer"
                  decoding="async"
                  loading="lazy"
                  srcSet="https://escalent.co/wp-content/uploads/2022/03/pfizer-170x170.jpg 170w, https://escalent.co/wp-content/uploads/2022/03/pfizer-150x150.jpg 150w, https://escalent.co/wp-content/uploads/2022/03/pfizer.jpg 340w"
                  sizes="(max-width: 170px) 100vw, 170px"
                />
              </li>
              <li>
                <img
                  width="170"
                  height="170"
                  src="https://escalent.co/wp-content/uploads/2022/02/qualcomm-170x170.jpg"
                  className="attachment-logo170 size-logo170"
                  alt="Qualcomm"
                  decoding="async"
                  loading="lazy"
                  srcSet="https://escalent.co/wp-content/uploads/2022/02/qualcomm-170x170.jpg 170w, https://escalent.co/wp-content/uploads/2022/02/qualcomm-150x150.jpg 150w, https://escalent.co/wp-content/uploads/2022/02/qualcomm.jpg 340w"
                  sizes="(max-width: 170px) 100vw, 170px"
                />
              </li>
              <li>
                <img
                  width="170"
                  height="170"
                  src="https://escalent.co/wp-content/uploads/2019/09/lowes.jpg"
                  className="attachment-logo170 size-logo170"
                  alt="Lowe’s"
                  decoding="async"
                  loading="lazy"
                  srcSet="https://escalent.co/wp-content/uploads/2019/09/lowes.jpg 340w, https://escalent.co/wp-content/uploads/2019/09/lowes-150x150.jpg 150w"
                  sizes="(max-width: 170px) 100vw, 170px"
                />
              </li>
            </ul>
          </div>

          {/*  */}
          <div className="gridbox">
            <section id="featured" className="gridcol1 newsection">
              <header className="section-header">
                <h2 className="headingA">Featured</h2>
              </header>
              <ul className="deck deck_full semlist">
                <li className="card card_paper">
                  <a
                    className="card-image fullgridbox fullgridbox-mobile"
                    href="https://escalent-demo.sarthak.app/papers/a-better-customer-growth-strategy-is-within-reach-download-the-guide-to-our-award-winning-path-to-purchase-research/"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <img
                      width="770"
                      height="406"
                      src="https://escalent.co/wp-content/uploads/2022/09/770x406-Web-Page-image_Want-to-Win-More.jpg"
                      className="attachment-full size-full"
                      alt="Want to Win More? Your Guide to Boosting Customer Growth Using Our Award-Winning Path-to-Purchase Approach"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://escalent.co/wp-content/uploads/2022/09/770x406-Web-Page-image_Want-to-Win-More.jpg 770w, https://escalent.co/wp-content/uploads/2022/09/770x406-Web-Page-image_Want-to-Win-More-170x90.jpg 170w"
                      sizes="(max-width: 770px) 100vw, 770px"
                    />
                  </a>
                  <div className="card-type smcaps">
                    <a href="https://escalent-demo.sarthak.app/thought-leadership/papers/">
                      Paper
                    </a>
                  </div>
                  <div className="card-title headingC sans">
                    <a href="https://escalent-demo.sarthak.app/papers/a-better-customer-growth-strategy-is-within-reach-download-the-guide-to-our-award-winning-path-to-purchase-research/">
                      A Better Customer Growth Strategy is Within Reach.
                      Download the Guide to Our Award-Winning Path-to-Purchase
                      Research
                    </a>
                  </div>
                  <p className="card-excerpt">
                    The customer journey is evolving. Download our guide to
                    boosting customer growth using its award-winning
                    path-to-purchase research.
                  </p>
                </li>
                <li className="card card_blog">
                  <a
                    className="card-image fullgridbox fullgridbox-mobile"
                    href="https://escalent-demo.sarthak.app/blog/how-macroeconomic-disruption-has-upended-the-customer-journey-in-financial-services/"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <img
                      width="770"
                      height="406"
                      src="https://escalent.co/wp-content/uploads/2022/09/Image-770x406How-Macroeconomic-Disruption-Has-Upended-the-Customer-Journey-in-Financial-Services.jpg"
                      className="attachment-full size-full"
                      alt="How Macroeconomic Disruption Has Upended the Customer Journey in Financial Services"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://escalent.co/wp-content/uploads/2022/09/Image-770x406How-Macroeconomic-Disruption-Has-Upended-the-Customer-Journey-in-Financial-Services.jpg 770w, https://escalent.co/wp-content/uploads/2022/09/Image-770x406How-Macroeconomic-Disruption-Has-Upended-the-Customer-Journey-in-Financial-Services-170x90.jpg 170w"
                      sizes="(max-width: 770px) 100vw, 770px"
                    />
                  </a>
                  <div className="card-type smcaps">
                    <a href="https://escalent-demo.sarthak.app/thought-leadership/blog/">
                      Blog
                    </a>
                  </div>
                  <div className="card-title headingC sans">
                    <a href="https://escalent-demo.sarthak.app/blog/how-macroeconomic-disruption-has-upended-the-customer-journey-in-financial-services/">
                      How Macroeconomic Disruption Has Upended the Customer
                      Journey in Financial Services
                    </a>
                  </div>
                  <p className="card-excerpt">
                    Inflation is just one factor changing the customer journey
                    and path to purchase. Find out how to get more customer
                    growth by mapping the purchase journey.
                  </p>
                </li>
                <li className="card card_blog">
                  <a
                    className="card-image fullgridbox fullgridbox-mobile"
                    href="https://escalent-demo.sarthak.app/blog/investing-in-path-to-purchase-research-to-maintain-loyal-customers-during-inflationary-times/"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <img
                      width="770"
                      height="406"
                      src="https://escalent.co/wp-content/uploads/2022/09/770x406-Investing-in-Path-to-Purchase-Research-to-Maintain-Loyal-Customers-During-Inflationary-Times.jpg"
                      className="attachment-full size-full"
                      alt="Investing in Path-to-Purchase Research to Maintain Loyal Customers During Inflationary Times"
                      decoding="async"
                      loading="lazy"
                      srcSet="https://escalent.co/wp-content/uploads/2022/09/770x406-Investing-in-Path-to-Purchase-Research-to-Maintain-Loyal-Customers-During-Inflationary-Times.jpg 770w, https://escalent.co/wp-content/uploads/2022/09/770x406-Investing-in-Path-to-Purchase-Research-to-Maintain-Loyal-Customers-During-Inflationary-Times-170x90.jpg 170w"
                      sizes="(max-width: 770px) 100vw, 770px"
                    />
                  </a>
                  <div className="card-type smcaps">
                    <a href="https://escalent-demo.sarthak.app/thought-leadership/blog/">
                      Blog
                    </a>
                  </div>
                  <div className="card-title headingC sans">
                    <a href="https://escalent-demo.sarthak.app/blog/investing-in-path-to-purchase-research-to-maintain-loyal-customers-during-inflationary-times/">
                      Investing in Path-to-Purchase Research to Maintain Loyal
                      Customers During Inflationary Times
                    </a>
                  </div>
                  <p className="card-excerpt">
                    How your consumer path-to-purchase can help you understand
                    your consumers’ decision-making process during economic
                    turmoil and avoid the lipstick effect.
                  </p>
                </li>
              </ul>
            </section>
          </div>

          {/*  */}
          <section className="bigpic-block fullwithbump newsection">
            <header className="section-header">
              <h2 className="headingA">Careers &amp; Culture</h2>
            </header>
            <picture className="bigpic-block-image">
              <source
                media="(max-width: 767px)"
                srcSet="https://escalent.co/wp-content/uploads/2019/05/culture-careers-homepage-768x720.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="https://escalent.co/wp-content/uploads/2019/05/culture-careers-homepage-1120x420.jpg"
              />
              <img
                src="https://escalent.co/wp-content/uploads/2019/05/culture-careers-homepage-1120x420.jpg"
                alt=""
              />
            </picture>
            <div className="linkpair smcaps">
              <a href="/careers-and-culture/">Careers &amp; Culture</a>
              <a href="/about/">About</a>
            </div>
          </section>
        </main>

        <div className="featured-block fullwithbump newblock featured-block-newsletter">
          <img
            width="570"
            height="300"
            src="https://escalent.co/wp-content/uploads/2019/05/newsletter-image-570x300.jpg"
            className="attachment-full size-full"
            alt="Newsletter"
            decoding="async"
            loading="lazy"
          />
          <div className="featured-block-content">
            <div className="newsletter-bar-content">
              <h2 className="sans">Subscribe to Our Newsletter</h2>
              <p>
                Keep me informed. I’d like to receive occasional newsletters,
                event notifications, and thought leadership materials.
              </p>
            </div>
            <a
              className="btn btn-teal"
              href="https://escalent-demo.sarthak.app/contact/newsletter-sign-up/"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
