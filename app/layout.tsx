import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./escalent.css";
import "./ffind.css";
import { Footer } from "../components/footer";
import { CommonFooter } from "../components/CommonFooter";
import { Header } from "../components/header";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escalent Demo",
  description: "Demo Homepage based on escalent-demo.sarthak.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlStyle = {
    boxSizing: "border-box",
    overflowX: "hidden",
    font: "medium/1.2 HelveticaNeue, sans-serif",
    color: "#3f3f3f",
    backgroundColor: "#fff",
  };
  return (
    //@ts-ignore
    <html lang="en" style={htmlStyle}>
      <body className={poppins.className}>
        <div>
          <Header />
          <main>{children}</main>

          <CommonFooter />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}

function FooterComponent() {
  return (
    <>
      <div className="footer">
        <p className="footer-address">
          17430 College Parkway
          <br />
          Livonia, MI 48152
        </p>
        <p className="footer-contact">P: +1 734 542 7600</p>
        <nav className="footer-menu sans">
          <ul
            id="menu-footer-menu-1"
            className="footer-menu-1 menulist semlist"
          >
            <li
              id="menu-item-104"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104 current-menu-item"
            >
              <a href="https://escalent-demo.sarthak.app/thought-leadership/blog/">
                Blog
              </a>
            </li>
            <li
              id="menu-item-105"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-105 current-menu-item"
            >
              <a href="https://escalent-demo.sarthak.app/news/">News</a>
            </li>
            <li
              id="menu-item-106"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-106 current-menu-item"
            >
              <a href="https://escalent-demo.sarthak.app/events/">Events</a>
            </li>
          </ul>
          <ul
            id="menu-footer-menu-2"
            className="footer-menu-2 menulist semlist"
          >
            <li
              id="menu-item-2372"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-2372 current-menu-item"
            >
              <a
                rel="privacy-policy"
                href="https://escalent-demo.sarthak.app/privacy-policy/"
              >
                Privacy Policy
              </a>
            </li>
            <li
              id="menu-item-2373"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2373 current-menu-item"
            >
              <a href="https://escalent-demo.sarthak.app/contact/do-not-sell-my-personal-information/">
                Do Not Sell or Share My Personal Information
              </a>
            </li>
            <li
              id="menu-item-7054"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-7054 current-menu-item"
            >
              <a href="https://escalent-demo.sarthak.app/contact/limit-the-use-of-my-sensitive-personal-information/">
                Limit the Use of My Sensitive Personal Information
              </a>
            </li>
            <li
              id="menu-item-2374"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2374 current-menu-item"
            >
              <a href="https://escalent-demo.sarthak.app/terms-of-use/">
                Terms of Use
              </a>
            </li>
          </ul>
        </nav>
        <ul className="footer-social semlist">
          <li>
            <a
              rel="noopener nofollow"
              href="https://www.linkedin.com/company/thinkescalent"
              target='\"_blank\"'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 88 88"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M-.001-.004v88.003h88.002V-.004H-.001zm31.649 62.399h-8.577V34.943h8.577v27.452zM27.14 31.507h-.062c-3.104 0-5.116-2.096-5.116-4.755 0-2.713 2.072-4.767 5.238-4.767 3.163 0 5.11 2.048 5.172 4.759 0 2.659-2.009 4.763-5.232 4.763zm38.823 30.888h-9.726V48.189c0-3.719-1.52-6.255-4.866-6.255-2.559 0-3.981 1.71-4.644 3.362-.247.592-.21 1.416-.21 2.244v14.855h-9.634s.125-25.165 0-27.452h9.634v4.308c.57-1.885 3.648-4.574 8.563-4.574 6.094 0 10.883 3.95 10.883 12.453v15.265z"
                ></path>
              </svg>
              <span className="screen-reader-text">Escalent on LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener nofollow"
              href="https://twitter.com/ThinkEscalent"
              target='\"_blank\"'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 88 88"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M-.001-.005v88.003h88.002V-.005H-.001zM61.565 37.15c.017.387.024.778.024 1.17 0 11.954-9.092 25.73-25.728 25.73-5.106 0-9.86-1.498-13.862-4.062.707.084 1.428.124 2.158.124 4.236 0 8.136-1.445 11.23-3.87-3.957-.07-7.296-2.687-8.446-6.277.55.107 1.118.159 1.701.159.826 0 1.624-.106 2.383-.318-4.139-.829-7.256-4.484-7.256-8.866v-.112c1.221.674 2.616 1.084 4.098 1.13-2.426-1.622-4.023-4.393-4.023-7.526 0-1.657.446-3.21 1.224-4.552 4.463 5.477 11.124 9.072 18.639 9.45-.155-.661-.233-1.349-.233-2.058 0-4.992 4.049-9.044 9.04-9.044 2.603 0 4.955 1.099 6.601 2.855 2.063-.405 3.996-1.154 5.743-2.19-.673 2.109-2.106 3.882-3.975 5.001 1.828-.22 3.573-.704 5.193-1.425-1.208 1.814-2.743 3.406-4.511 4.681z"
                ></path>
              </svg>
              <span className="screen-reader-text">Escalent on Twitter</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener nofollow"
              href="https://www.facebook.com/ThinkEscalent/"
              target='\"_blank\"'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 88 88"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M-.001-.005v88.003h88.002V-.005H-.001zm53.728 36.551l-.507 6.584h-6.748v22.869h-8.527V43.13h-4.548v-6.584h4.548v-4.42c0-1.95.05-4.956 1.466-6.818 1.491-1.973 3.539-3.314 7.061-3.314 5.739 0 8.156.819 8.156.819l-1.137 6.739s-1.897-.549-3.665-.549c-1.77 0-3.354.635-3.354 2.403v5.14h7.255z"
                ></path>
              </svg>
              <span className="screen-reader-text">Escalent on Facebook</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener nofollow"
              href="https://www.youtube.com/c/EscalentThinking"
              target='\"_blank\"'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 88 88"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M-.001 87.998V-.005h88.002v88.003H-.001zM66.014 36.13s0-7.584-7.584-7.584H29.593s-7.58 0-7.58 7.584v15.732s0 7.584 7.58 7.584H58.43s7.584 0 7.584-7.584V36.13zm-27.864-.574l14.406 8.462-14.406 8.46V35.556z"
                ></path>
              </svg>
              <span className="screen-reader-text">Escalent on YouTube</span>
            </a>
          </li>
        </ul>
        <p className="footer-copyright">
          ©2024 Escalent and/or its affiliates.
          <br />
          All rights reserved. Reg. U.S. Pat. &amp; TM Off{" "}
        </p>
        <p className="footer-logo-legal">
          We are honored to work with the above brands, none of which are
          affiliated with, or endorsed by, Escalent, Inc. The reproduction of
          the marks are for informational purposes only and are subject to
          nominative fair use.
        </p>

        <a
          rel="noopener nofollow"
          className="footer-btn1 btn btn-purple"
          href="https://www.msiclient.net/"
        >
          Escalent Client
        </a>
        <a rel="noopener nofollow" className="footer-btn2 btn btn-teal">
          Escalent Hub
        </a>
        <a
          rel="noopener nofollow"
          className="footer-btn3 btn btn-teal"
          href="https://escalentportal.co/"
        >
          Escalent Portal
        </a>
      </div>
    </>
  );
}
