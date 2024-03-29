"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./about.css"; // Import CSS file
// import { url } from "inspector";

export default function Home() {
  return (
    <>
      <div
        className="body-div page-template page-template-about page-template-about-php page page-id-22 page-parent"
        data-title="About"
        cz-shortcut-listen="true"
      >
        <div className="tingle-modal" style={{ display: "none" }}>
          <button className="tingle-modal__close">
            <span className="tingle-modal__closeIcon">×</span>
            <span className="tingle-modal__closeLabel">Close</span>
          </button>
          <div className="tingle-modal-box">
            <div className="tingle-modal-box__content"></div>
          </div>
        </div>

        <div className="fma fma-A">
          <div
            className="fma-desktop"
            style={{
              backgroundImage:
                "url('https://escalent.co/wp-content/uploads/2019/05/about-image-template-1335x480.jpg')",
            }}
          ></div>
          <div className="fma-mobile">
            <img
              src="https://escalent.co/wp-content/uploads/2019/05/about-768x576.jpg"
              alt="About"
            />
          </div>
          <div className="fma-heading">
            <h1>About</h1>
          </div>
        </div>
        <main id="maincontent">
          <div className="gridbox gridbox-170-970">
            <div className="gridcol1 gridcol1-hasnav">
              <nav className="leftnav fullgridbox">
                <button type="button" className="toggleheading smcaps">
                  <span>Menu</span>
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
                </button>
                <ul className="semlist">
                  <li className="page_item page-item-22 current_page_item">
                    <a
                      href="https://escalent-demo.sarthak.app/about/"
                      aria-current="page"
                    >
                      About
                    </a>
                  </li>
                  <li className="page_item page-item-5385">
                    <a href="https://escalent-demo.sarthak.app/about/locations/">
                      Locations
                    </a>
                  </li>
                  <li className="page_item page-item-23">
                    <a href="https://escalent-demo.sarthak.app/about/people/">
                      People
                    </a>
                  </li>
                  <li className="page_item page-item-4545">
                    <a href="https://escalent-demo.sarthak.app/about/diversity-equity-and-inclusion/">
                      Diversity, Equity &amp; Inclusion
                    </a>
                  </li>
                  <li className="page_item page-item-24">
                    <a href="https://escalent-demo.sarthak.app/about/social-responsibility/">
                      Social Responsibility
                    </a>
                  </li>
                  <li className="page_item page-item-25">
                    <a href="https://escalent-demo.sarthak.app/about/partners/">
                      Partners
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="gridcol2">
              <div className="wysiwyg">
                <h1 className="headingB">Catalysts of progress</h1>
                <p>
                  Escalent is an award-winning data analytics and advisory firm
                  that helps clients understand human and market behaviors to
                  navigate disruption and business transformation.
                </p>
                <p>
                  As catalysts of progress for more than 40 years, our
                  strategies guide the world’s leading brands. We accelerate
                  growth by creating a seamless flow between primary, secondary,
                  syndicated, and internal business data, providing consulting
                  and advisory services from insights through implementation.
                  Based on a profound understanding of what drives human beings
                  and markets, we identify actions that build brands, enhance
                  customer experiences, inspire product innovation and boost
                  business productivity.
                </p>
                <p>
                  Take a spin through our site to see how we help shape the
                  brands that are reshaping the world.
                </p>
                <p>
                  <img
                    decoding="async"
                    style={{ margin: "25px 40px 0px 0px" }}
                    src="https://escalent.co/wp-content/uploads/2022/05/ISO-27001.jpg"
                    alt="ISO"
                    width="140"
                    height="140"
                  />
                  <img
                    decoding="async"
                    style={{ margin: "25px 40px 0px 0px" }}
                    src="https://escalent.co/wp-content/uploads/2022/04/2021-Q-awards.jpg"
                    alt="Q Awards"
                    width="140"
                    height="140"
                  />
                  <img
                    decoding="async"
                    style={{ margin: "25px 40px 0px 0px" }}
                    src="https://escalent.co/wp-content/uploads/2022/04/2021-david-ogilvy-awards.jpg"
                    alt="David Ogilvy Awards"
                    width="140"
                    height="140"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="big-video-block">
            <div className="big-video-block-img">
              <img
                width="1170"
                height="618"
                src="https://escalent.co/wp-content/uploads/2019/05/about-us-video-image-1170x618.jpg"
                className="attachment-full size-full"
                alt="About Us Video"
                decoding="async"
                loading="lazy"
              />
              <button
                type="button"
                className="playbtn"
                data-href="https://player.vimeo.com/video/334071332"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="playbtnsvg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44 "
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M44 22c0 12.2-9.8 22-22 22S0 34.2 0 22C0 9.9 9.8 0 22 0c12.1 0 22 9.8 22 22z"
                  ></path>
                  <path fill="#fff" d="M17.8 14.2v16.7l11.9-8.3z"></path>
                </svg>
              </button>
            </div>
            <blockquote className="big-block-quote">
              <p>
                We are always looking for new ways to apply insight in
                meaningful ways…to find answers to tough questions…to be agile
                in our problem solving…and to be creative in our storytelling.
              </p>
              <footer>Melissa Sauter, CEO</footer>
            </blockquote>
          </div>
        </main>
        <section className="newsletter-bar">
          <div className="newsletter-bar-content">
            <p>
              Keep me informed. I’d like to receive occasional newsletters,
              event notifications, and thought leadership materials.
            </p>
          </div>
          <a
            className="btn btn-teal"
            href="https://escalent-demo.sarthak.app/contact/newsletter-sign-up/"
          >
            Subscribe to Our Newsletter
          </a>
        </section>
      </div>
    </>
  );
}
