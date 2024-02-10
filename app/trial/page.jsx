import Image from "next/image";
import Link from "next/link";
import styles from "./trail.css"; // Import CSS file
import { url } from "inspector";

// THE ISSUE HERE IS WE CAN'T IMPORT useState FOR SERVER COMPONENTS......

export default function Home() {
  return (
    <>
      <div
        className="home body-div page-template-default page page-id-2 deluxe deluxe-purple has-openmenuflyout"
        data-title=""
        cz-shortcut-listen="true"
      >
        <header className="main-header">
          <div className="main-header-logo">
            <a href="https://escalent-demo.sarthak.app/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="73"
                height="100"
                viewBox="0 0 73 100"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M52 100H0V78h52V61h21v39H52zm0-78H0V0h73v39H52V22zM31 61H0V39h31v22z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="main-header-wordmark" aria-hidden="true">
            <a href="https://escalent-demo.sarthak.app/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121"
                height="22"
                viewBox="0 0 121 22"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M119.557 6.519c-.475.469-1.04.7-1.701.7-.668 0-1.24-.237-1.715-.706-.469-.469-.706-1.04-.706-1.708 0-.662.237-1.22.713-1.689.468-.469 1.04-.7 1.708-.7.661 0 1.226.237 1.701.7.469.469.707 1.027.707 1.689 0 .674-.238 1.245-.707 1.714zm-.295-3.159c-.379-.392-.854-.591-1.413-.591-.558 0-1.027.193-1.406.584-.379.392-.572.88-.572 1.452 0 .584.193 1.072.572 1.47.379.392.848.591 1.413.591.558 0 1.027-.206 1.406-.597.379-.398.565-.886.565-1.464 0-.572-.186-1.053-.565-1.445zm-.681 2.857l-.764-1.207h-.462v1.207h-.437V3.411h1.111c.61 0 .957.251.957.803 0 .424-.225.7-.739.764l.803 1.239h-.469zm-.032-2.022c0-.296-.199-.431-.591-.431h-.603v.893h.501c.526 0 .693-.128.693-.462zm-13.593 12.136V9.298h-2.984V6.572h2.984V2.478h2.898v4.094H112v2.726h-4.146v6.967c0 2.111 1.258 2.916 3.082 2.916.343 0 .754-.034 1.064-.124v2.636c-.465.119-1.127.181-1.659.181-3.242 0-5.385-1.854-5.385-5.543zm-6.32-2.885c0-2.663-1.607-4.369-4.059-4.369-1.761 0-3.488.934-4.339 2.42v10.194h-2.922V6.57h2.922v2.201c.943-1.52 2.926-2.511 5.002-2.511 3.836 0 6.288 2.664 6.288 6.786v8.645h-2.892v-8.245zm-25.505 1.138c.227 2.884 2.129 4.79 5.084 4.818 2.134.02 3.88-.986 4.272-2.592l2.888.024c-.595 3.155-3.57 5.175-7.281 5.137-4.465-.038-7.832-3.512-7.788-8.001.043-4.37 3.507-7.778 7.909-7.735 4.117.039 7.387 3.198 7.348 7.563-.004.281-.033.653-.072.901l-12.36-.115zm4.934-5.966c-2.418-.024-4.228 1.482-4.789 3.798l9.153.086c-.131-2.264-1.94-3.86-4.364-3.884zM63.1 16.331V0h2.898v16.265c0 2.111 1.258 2.916 3.081 2.916.349 0 .755-.034 1.07-.124v2.636c-.47.119-1.132.181-1.664.181-3.242 0-5.385-1.854-5.385-5.543zm-5.624 3.157c-.852 1.429-2.99 2.511-5.128 2.511-4.243 0-7.484-3.436-7.484-7.868s3.241-7.868 7.484-7.868c2.172 0 4.31 1.082 5.128 2.507V6.568h2.922v15.121h-2.922v-2.201zm0-7.992c-.818-1.487-2.676-2.54-4.562-2.54-2.956 0-5.22 2.197-5.22 5.175 0 2.945 2.264 5.171 5.22 5.171 1.886 0 3.744-1.049 4.562-2.507v-5.299zm-20.351 7.778c2.013 0 3.866-1.177 4.272-2.917h2.932C43.884 19.674 40.744 22 37.125 22c-4.465 0-7.928-3.407-7.928-7.839 0-4.461 3.463-7.902 7.928-7.902 3.585 0 6.696 2.355 7.204 5.519h-2.956c-.44-1.615-2.235-2.793-4.248-2.793-2.897 0-5.098 2.231-5.098 5.176 0 2.878 2.201 5.113 5.098 5.113zm-8.935-1.951c0 2.697-2.52 4.679-5.848 4.679-3.585 0-6.139-1.892-6.449-4.961h2.768c.188 1.487 1.601 2.484 3.555 2.484 1.916 0 3.144-.873 3.144-2.14 0-3.751-9.123-.901-9.123-6.663 0-2.573 2.201-4.46 5.631-4.46 3.047 0 5.694 1.639 6.071 4.551h-2.927c-.184-1.206-1.446-2.135-3.207-2.135-1.601 0-2.738.715-2.738 1.825 0 3.593 9.123.562 9.123 6.82zM2.826 14.584c.227 2.884 2.128 4.79 5.084 4.818 2.133.02 3.88-.986 4.272-2.592l2.888.024c-.595 3.155-3.571 5.175-7.281 5.137-4.465-.038-7.832-3.512-7.788-8.001C.044 9.6 3.508 6.192 7.91 6.235c4.117.039 7.387 3.198 7.343 7.563 0 .281-.029.653-.067.901l-12.36-.115zM7.76 8.618c-2.419-.024-4.228 1.482-4.789 3.798l9.153.086c-.131-2.264-1.94-3.86-4.364-3.884z"
                ></path>
              </svg>{" "}
            </a>
          </div>
          <div className="main-header-skipnav">
            <a href="#maincontent" className="skiplink">
              Skip Navigation
            </a>
          </div>
          <div className="main-header-searchbtn">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="42"
                viewBox="0 0 40 42"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M39.989 37.669l-3.349 3.349L25.547 29.9c-2.664 1.981-5.949 3.168-9.514 3.168C7.2 33.068.017 25.869.017 17.017.017 8.17 7.2.969 16.033.969c8.833 0 16.016 7.201 16.016 16.048 0 3.571-1.183 6.861-3.158 9.529l11.098 11.123zM16.033 5.706c-6.223 0-11.289 5.073-11.289 11.311 0 6.238 5.066 11.314 11.289 11.314s11.289-5.076 11.289-11.314S22.256 5.706 16.033 5.706z"
                ></path>
              </svg>
              <span className="screen-reader-text">Search</span>
            </button>
          </div>
          <div className="main-header-menubtn">
            <button type="button">
              <span className="menubtn-open">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M0 32v-4h40v4H0zm0-18h40v4H0v-4zM0 0h40v4H0V0z"
                  ></path>
                </svg>
              </span>
              <span className="menubtn-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M32.41 29.081l-2.829 2.829-13.322-13.323L2.841 32.004l-2.845-2.845 13.417-13.417L.59 2.918 3.419.09l12.823 12.823L29.159-.003l2.845 2.845-12.917 12.916L32.41 29.081z"
                  ></path>
                </svg>
              </span>
              <span className="screen-reader-text">Toggle Menu</span>
            </button>
          </div>
          <form
            role="search"
            method="get"
            className="main-header-searchform"
            action="https://escalent-demo.sarthak.app/"
          >
            <label for="searchfield" className="screen-reader-text">
              Search for:
            </label>
            <input
              type="search"
              id="searchfield"
              className="search-field"
              name="s"
              placeholder="Keyword..."
              value=""
            />
            <button type="submit" className="screen-reader-text">
              Search
            </button>
          </form>
          <nav className="main-header-menu main-header-menu1">
            <ul id="menu-primary-menu" className="menulist semlist">
              <li
                id="menu-item-77"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-77 current-menu-item"
              >
                <button
                  type="button"
                  data-i="0"
                  className="main-header-menu-parentbtn"
                >
                  <span>Industries</span>
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
                <ul className="sub-menu" style={{ width: "235px" }} hidden="">
                  <li
                    id="menu-item-4818"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4818 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/automotive-and-mobility/">
                      Automotive &amp; Mobility
                    </a>
                  </li>
                  <li
                    id="menu-item-79"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/consumer-goods-and-retail/">
                      Consumer Goods &amp; Retail
                    </a>
                  </li>
                  <li
                    id="menu-item-80"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-80 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/energy/">
                      Energy
                    </a>
                  </li>
                  <li
                    id="menu-item-81"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-81 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/financial-services/">
                      Financial Services
                    </a>
                  </li>
                  <li
                    id="menu-item-82"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-82 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/healthcare-life-sciences/">
                      Health
                    </a>
                  </li>
                  <li
                    id="menu-item-83"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-83 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/technology/">
                      Technology
                    </a>
                  </li>
                  <li
                    id="menu-item-84"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/telecommunications/">
                      Telecom
                    </a>
                  </li>
                  <li
                    id="menu-item-5124"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5124 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/industries/travel-and-tourism/">
                      Travel &amp; Tourism
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-4321"
                className="megamenu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4321 current-menu-item"
              >
                <button
                  type="button"
                  data-i="1"
                  className="main-header-menu-parentbtn"
                >
                  <span>Solutions</span>
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
                <div
                  className="sub-menu-wrapper"
                  style={{ width: "284px" }}
                  hidden=""
                >
                  <ul className="sub-menu">
                    <li
                      id="menu-item-4686"
                      className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-has-children menu-item-4686 current-menu-item"
                    >
                      <a href="https://escalent-demo.sarthak.app/solutions/market-analysis/">
                        Markets
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-4689"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4689 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/market-analysis/market-assessment/">
                            Market Assessment
                          </a>
                        </li>
                        <li
                          id="menu-item-4687"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4687 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/market-analysis/competitive-intelligence/">
                            Competitive Intelligence
                          </a>
                        </li>
                        <li
                          id="menu-item-4688"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4688 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/market-analysis/mergers-acquisitions-research/">
                            M&amp;A Research
                          </a>
                        </li>
                        <li
                          id="menu-item-4690"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4690 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/market-analysis/partner-scouting/">
                            Partner Scouting
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-4666"
                      className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-has-children menu-item-4666 current-menu-item"
                    >
                      <a href="https://escalent-demo.sarthak.app/solutions/brand-management-strategy/">
                        Brands
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-4671"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4671 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/brand-management-strategy/brand-positioning/">
                            Brand Positioning
                          </a>
                        </li>
                        <li
                          id="menu-item-4672"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4672 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/brand-management-strategy/brand-messaging/">
                            Messaging
                          </a>
                        </li>
                        <li
                          id="menu-item-4668"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4668 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/brand-management-strategy/brand-elements/">
                            Brand Elements
                          </a>
                        </li>
                        <li
                          id="menu-item-4669"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4669 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/brand-management-strategy/brand-evaluation/">
                            Brand Evaluation
                          </a>
                        </li>
                        <li
                          id="menu-item-4667"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4667 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/brand-management-strategy/brand-authenticity/">
                            Brand Authenticity
                          </a>
                        </li>
                        <li
                          id="menu-item-4670"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4670 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/brand-management-strategy/brand-evolution/">
                            Brand Evolution
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-4692"
                      className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-has-children menu-item-4692 current-menu-item"
                    >
                      <a href="https://escalent-demo.sarthak.app/solutions/product-management/">
                        Products
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-4697"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4697 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/product-management/white-space-analysis/">
                            White Space Finder
                          </a>
                        </li>
                        <li
                          id="menu-item-4695"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4695 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/product-management/opportunities-assessment/">
                            Opportunities Assessment
                          </a>
                        </li>
                        <li
                          id="menu-item-4693"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4693 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/product-management/concept-creation/">
                            Concept Creation
                          </a>
                        </li>
                        <li
                          id="menu-item-4694"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4694 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/product-management/concept-evaluation/">
                            Concept Evaluation
                          </a>
                        </li>
                        <li
                          id="menu-item-4696"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4696 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/product-management/product-optimization/">
                            Product Optimization
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-4678"
                      className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-has-children menu-item-4678 current-menu-item"
                    >
                      <a href="https://escalent-demo.sarthak.app/solutions/customer-experience-strategy/">
                        Customers
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-4679"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4679 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/customer-experience-strategy/consumer-journey/">
                            Consumer Journey
                          </a>
                        </li>
                        <li
                          id="menu-item-4683"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4683 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/customer-experience-strategy/path-to-purchase/">
                            Path to Purchase
                          </a>
                        </li>
                        <li
                          id="menu-item-4684"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4684 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/customer-experience-strategy/segmentation/">
                            Segmentation
                          </a>
                        </li>
                        <li
                          id="menu-item-4681"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4681 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/customer-experience-strategy/customer-experience-management/">
                            Customer Experience Management
                          </a>
                        </li>
                        <li
                          id="menu-item-4680"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4680 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/customer-experience-strategy/customer-acquisition-retention/">
                            Customer Acquisition &amp; Retention
                          </a>
                        </li>
                        <li
                          id="menu-item-4682"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4682 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/customer-experience-strategy/customer-success/">
                            Customer Success
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-4673"
                      className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-has-children menu-item-4673 current-menu-item"
                    >
                      <a href="https://escalent-demo.sarthak.app/solutions/business-analytics/">
                        Business Analytics
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-4674"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4674 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/business-analytics/data-integration-visualization/">
                            Data Integration &amp; Visualization
                          </a>
                        </li>
                        <li
                          id="menu-item-4676"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4676 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/business-analytics/operational-analytics/">
                            Operational Analytics
                          </a>
                        </li>
                        <li
                          id="menu-item-4675"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4675 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/business-analytics/financial-planning-analysis/">
                            Financial Planning &amp; Analysis
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-4698"
                      className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-has-children menu-item-4698 current-menu-item"
                    >
                      <a href="https://escalent-demo.sarthak.app/solutions/sales-strategy/">
                        Sales
                      </a>
                      <ul className="sub-menu">
                        <li
                          id="menu-item-4700"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4700 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/sales-strategy/sales-support-enablement/">
                            Sales Support &amp; Enablement
                          </a>
                        </li>
                        <li
                          id="menu-item-4699"
                          className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4699 current-menu-item"
                        >
                          <a href="https://escalent-demo.sarthak.app/solutions/sales-strategy/e-commerce-analytics/">
                            Ecommerce Analytics
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-4701"
                      className="menu-item menu-item-type-post_type menu-item-object-solutions menu-item-4701 current-menu-item"
                    >
                      <a href="https://escalent-demo.sarthak.app/solutions/staff-augmentation/">
                        Staff Augmentation
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                id="menu-item-4435"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4435 current-menu-item"
              >
                <button
                  type="button"
                  data-i="2"
                  className="main-header-menu-parentbtn"
                >
                  <span>Expertise</span>
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
                <ul className="sub-menu" style={{ width: "243px" }} hidden>
                  {" "}
                  <li
                    id="menu-item-4703"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4703 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/javelin-advisory-services/">
                      Javelin Advisory Services
                    </a>
                  </li>
                  <li
                    id="menu-item-4704"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4704 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/cogent-syndicated-research/">
                      Cogent Syndicated Research
                    </a>
                  </li>
                  <li
                    id="menu-item-4705"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4705 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/quantitative-research/">
                      Quantitative Research
                    </a>
                  </li>
                  <li
                    id="menu-item-4706"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4706 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/qualitative-research/">
                      Qualitative Research
                    </a>
                  </li>
                  <li
                    id="menu-item-4707"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4707 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/secondary-research/">
                      Secondary Research
                    </a>
                  </li>
                  <li
                    id="menu-item-4708"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4708 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/data-analytics/">
                      Data Analytics
                    </a>
                  </li>
                  <li
                    id="menu-item-4709"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4709 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/ux-research/">
                      User Experience Research
                    </a>
                  </li>
                  <li
                    id="menu-item-4710"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4710 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/insight-communities/">
                      Insight Communities
                    </a>
                  </li>
                  <li
                    id="menu-item-4711"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4711 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/behavioral-science/">
                      Behavioral Science
                    </a>
                  </li>
                  <li
                    id="menu-item-4712"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4712 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/innovation/">
                      Innovation
                    </a>
                  </li>
                  <li
                    id="menu-item-4713"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4713 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/expertise/design-thinking/">
                      Design Thinking
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <nav className="main-header-menu main-header-menu2">
            <ul id="menu-secondary-menu" className="menulist semlist">
              <li
                id="menu-item-89"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-89 current-menu-item"
              >
                <button
                  type="button"
                  data-i="3"
                  className="main-header-menu-parentbtn"
                >
                  <span>About</span>
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
                <ul className="sub-menu" hidden="">
                  <li
                    id="menu-item-102"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-102 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/about/">
                      Overview
                    </a>
                  </li>
                  <li
                    id="menu-item-5487"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5487 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/about/locations/">
                      Locations
                    </a>
                  </li>
                  <li
                    id="menu-item-90"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/about/people/">
                      People
                    </a>
                  </li>
                  <li
                    id="menu-item-4557"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4557 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/about/diversity-equity-and-inclusion/">
                      Diversity, Equity &amp; Inclusion
                    </a>
                  </li>
                  <li
                    id="menu-item-91"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/about/social-responsibility/">
                      Social Responsibility
                    </a>
                  </li>
                  <li
                    id="menu-item-92"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/about/partners/">
                      Partners
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-4313"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4313 current-menu-item"
              >
                <button
                  type="button"
                  data-i="4"
                  className="main-header-menu-parentbtn"
                >
                  <span>Thought Leadership</span>
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
                <ul className="sub-menu" hidden="">
                  <li
                    id="menu-item-4305"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4305 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=automotive-and-mobility">
                      Automotive &amp; Mobility
                    </a>
                  </li>
                  <li
                    id="menu-item-4306"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4306 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=consumer-goods-and-retail">
                      Consumer Goods &amp; Retail
                    </a>
                  </li>
                  <li
                    id="menu-item-4307"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4307 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=energy">Energy</a>
                  </li>
                  <li
                    id="menu-item-4308"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4308 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=financial-services">
                      Financial Services
                    </a>
                  </li>
                  <li
                    id="menu-item-4309"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4309 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=healthcare-life-sciences">
                      Health
                    </a>
                  </li>
                  <li
                    id="menu-item-4310"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4310 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=technology">
                      Technology
                    </a>
                  </li>
                  <li
                    id="menu-item-4311"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4311 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=telecommunications">
                      Telecom
                    </a>
                  </li>
                  <li
                    id="menu-item-5145"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5145 current-menu-item"
                  >
                    <a href="/thought-leadership/?industry=travel-and-tourism">
                      Travel &amp; Tourism
                    </a>
                  </li>
                  <li
                    id="menu-item-103"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103 current-menu-item"
                  >
                    <a href="https://escalent-demo.sarthak.app/thought-leadership/">
                      View All
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-100"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100 current-menu-item"
              >
                <a href="https://escalent-demo.sarthak.app/careers-and-culture/">
                  Careers &amp; Culture
                </a>
              </li>
              <li
                id="menu-item-791"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-791 current-menu-item"
              >
                <a href="https://escalent-demo.sarthak.app/contact/">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

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
                playsinline=""
                autoplay=""
                loop=""
                muted=""
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
          <a
            rel="noopener nofollow"
            className="footer-btn2 btn btn-teal"
            href="https://hub.escalent-demo.sarthak.app/"
          >
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
      </div>
    </>
  );
}
