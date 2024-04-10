import styles from "./audience.css"; // Import CSS file
import "./roninNumeric.css"; // Import CSS file

export default function Home() {
  return (
    <div
      className="industries-template industries-template-expertise2022 industries-template-expertise2022-php single single-industries postid-4847 deluxe deluxe-teal mt-10"
      data-title="Managing Product Complexity"
    >
      <div className="fma fma-A">
        <div className="fma-desktop bg-[#530095]"></div>
        <div className="fma-mobile bg-[#530095]">
          <img
            src="https://escalent.co/wp-content/uploads/2022/03/product-complexity-management-768x576-1.jpg"
            alt="Managing Product Complexity"
            className="opacity-0"
          />
        </div>
        <div className="fma-heading">
          <div className="fma-breadcrumbs smcaps">B2B audiences</div>
          <h1>Construction & Industrial</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <h2 className="font-bold">Construction & Industrial</h2>
          <div className="flex flex-col pt-5 text-left text-base">
            Marketing research with manufacturing businesses typically focuses
            on gaining insights into market developments, staying up-to-date
            with developments in technology, navigating complex supply chains,
            optimising operations, and keeping a pulse on the ever-changing
            needs and choices of B2B consumers.
            <br />
            <br />
            <div className="font-bold">Audiences - Industrial research</div>
            <ul className="list-disc pl-4">
              <li>
                Individuals in various agricultural fields, including farm
                owners and operators, agronomists, land managers, agricultural
                economists, livestock managers, small holding owners, dairy farm
                managers, cereals experts, veterinarians, crop buyers,
                geneticists, bio technologists, and trade associations.
              </li>
              <li>
                Efficiency in operations, cutting-edge technology, evolving
                regulations, environmental sustainability, effective sales and
                distribution, strategic branding and marketing, the latest
                industry trends, localization strategy, and the value of a
                strong brand.
              </li>
            </ul>
          </div>
          <br />
          <br />
        </div>

        {/*  */}
        {/*  */}
        <section className="SectionSpotlight SectionSpotlight--flipped SectionSpotlight--blue">
          <div className="SectionSpotlight__col SectionSpotlight__col--text">
            <div className="SectionSpotlight__text">
              <h2 className="CommonHeading">
                Industrial brand loyalty and awareness
              </h2>
              <p className="SectionSpotlight__description leading-relaxed"> </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">1,900</strong>
                  interviews
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">25 markets</strong>
                  across Europe, North America, Asia and the Middle East
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">SIC code</strong> based
                  company selection, with phone, online and digital screening
                </li>
              </ul>

              <div className="">
                <a
                  href="/case-studies/paint-purchasing-study"
                  className=" bg-white px-5  py-4 font-bold text-[#530095] hover:bg-black"
                >
                  Fast food outlets tracking study
                </a>
              </div>
            </div>
          </div>
          <div className="SectionSpotlight__col SectionSpotlight__col--image">
            <picture>
              {/* Source for screens with a minimum width of 1300px */}
              <source
                srcSet="https://www.ronin.com/media/ixspqitv/1c32f752-9fbc-4d10-bb0d-463820aa3243.jpg?width=950&height=717&quality=80"
                media="(min-width:1300px)"
                width="950"
                height="717"
              />
              {/* Source for screens with a minimum width of 980px */}
              <source
                srcSet="https://www.ronin.com/media/ixspqitv/1c32f752-9fbc-4d10-bb0d-463820aa3243.jpg?width=650&height=550&quality=80"
                media="(min-width:980px)"
                width="650"
                height="550"
              />
              {/* Source for screens with a minimum width of 740px */}
              <source
                srcSet="https://www.ronin.com/media/ixspqitv/1c32f752-9fbc-4d10-bb0d-463820aa3243.jpg?width=980&height=550&quality=80"
                media="(min-width:740px)"
                width="980"
                height="550"
              />
              {/* Fallback image for other screens */}
              <img
                className="SectionSpotlight__img"
                alt=""
                src="https://www.ronin.com/media/ixspqitv/1c32f752-9fbc-4d10-bb0d-463820aa3243.jpg?width=740&height=650&quality=80"
                width="740"
                height="650"
                decoding="async"
                loading="lazy"
                style={{
                  backgroundSize: "cover",
                  backgroundImage:
                    "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cfilter id='a' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='9'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter='url(%23a)' height='100%25' width='100%25' preserveAspectRatio='xMidYMid slice' xlink:href='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAAUABgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOwsrG2vrySK6iEzJEp3vgnn69OtaH/CPaX/AM+sf/fI/wAKz7Kxtr68kiuohMyRKd74J5+vTrWh/wAI9pf/AD6x/wDfI/wp0dKcVtoRJXk3vqz/2Q=='",
                }}
              />
            </picture>
          </div>
        </section>
        {/*  */}
        {/*  */}

        <div className="ctaband block">
          <div className="ctaband-wrapper">
            <div className="ctaband-content">
              <h2 className="ctaband-heading"> </h2>
              <div>
                <div className="mt-5 text-base">
                  An intriguing brand equity exercise that delves into the
                  realms of brand loyalty, brand awareness, brand associations,
                  and perceived quality, all of which contribute immense value
                  to a company in various ways. Once a brand recognises the
                  importance of brand equity, it can follow this roadmap to
                  create and oversee that potential value. Conducted on behalf
                  of a polymer business across various industrial sectors in 25
                  markets. Interviews were conducted with a wide range of
                  stakeholders, including OEMs, manufacturers, fabricators,
                  builders, installers, distributors, planners, architects,
                  municipalities, and decision makers involved in purchasing,
                  technical specifications, and procurement.
                  <br />
                  <br />
                  We constantly undertake market research with construction and
                  industry specialists on several specific topics:
                  <br />
                  <br />
                  <div className="font-bold">Market dynamics & trends:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Examining the worldwide and local demand for particular
                      industrial products or services.
                    </li>
                    <li>
                      Keeping up with the latest industrial trends, such as
                      Industry 4.0, smart manufacturing, or the integration of
                      AI in operations.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Technological innovations */}
                  <div className="font-bold">Technological innovations:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Embracing and appreciating the latest technologies,
                      machinery, and software.
                    </li>
                    <li>
                      Delving into the exciting realm of automation, IoT, and
                      digital twins.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Supply chain management & Optimisation */}
                  <div className="font-bold">
                    Supply chain management & Optimisation:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing obstacles and remedies in the procurement,
                      manufacturing, and distribution of basic materials.
                    </li>
                    <li>
                      The influence of occurrences such as pandemics and
                      geopolitical tensions on the resilience of supply chains,
                      as well as mitigation strategies.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Operational efficiency */}
                  <div className="font-bold">Operational efficiency:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Identifying tools and best practices for optimizing
                      processes and minimizing waste.
                    </li>
                    <li>
                      Assessing the efficacy of lean manufacturing and Six Sigma
                      implementation.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Environmental & Sustainability concerns */}
                  <div className="font-bold">
                    Environmental & Sustainability concerns:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Investigating approaches to sustainability and circular
                      economy practices within the industry.
                    </li>
                    <li>
                      Investigating the demand on the market for sustainable or
                      environmentally favorable industrial processes and
                      products.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Regulatory & Compliance landscape */}
                  <div className="font-bold">
                    Regulatory & Compliance landscape:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating the impact of industry-specific regulations and
                      standards.
                    </li>
                    <li>
                      Examining the influence and readiness for evolving
                      regulatory landscapes, particularly in regard to
                      environmental and safety protocols.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Product development & innovation */}
                  <div className="font-bold">
                    Product development & innovation:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Identifying the requirements and areas for improvement in
                      existing product offerings.
                    </li>
                    <li>
                      Exploring the potential for new product lines or
                      diversifying our offerings.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Labour & Workforce */}
                  <div className="font-bold">Labour & Workforce:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Issues concerning the acquisition, training, and retention
                      of talent.
                    </li>
                    <li>
                      The importance of acquiring new skills and enhancing
                      existing ones in response to automation and technological
                      progress.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Financial health & Investment */}
                  <div className="font-bold">
                    Financial health & Investment:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing various financing options and investment
                      opportunities.
                    </li>
                    <li>
                      Mastering investment patterns, budgeting, and financial
                      strategies in the industrial sector.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Customer preferences & engagement */}
                  <div className="font-bold">
                    Customer preferences & engagement:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      The purchasing patterns, loyalty, and decision-making
                      processes of B2B clients.
                    </li>
                    <li>
                      Evaluating the efficacy of marketing and sales strategies
                      in attracting and retaining industrial customers.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Sales channels & distribution */}
                  <div className="font-bold">
                    Sales channels & distribution:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing the effectiveness of existing sales channels and
                      considering new possibilities.
                    </li>
                    <li>
                      Examining the impact of online shopping and online
                      platforms on B2B sales.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Risk management */}
                  <div className="font-bold">Risk management:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Locating weak points in supply networks, operations, and
                      geopolitical situations.
                    </li>
                    <li>
                      Exploring strategies and tools for predicting, assessing,
                      and mitigating risks.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Competitive landscape & positioning */}
                  <div className="font-bold">
                    Competitive landscape & positioning:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Examination of market share, industry rivalry, and
                      differentiation tactics.
                    </li>
                    <li>
                      Investigating options for acquisitions, mergers, and
                      strategic alliances.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Branding & Marketing */}
                  <div className="font-bold">Branding & Marketing:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Improving brand image and equity in the B2B industrial
                      market.
                    </li>
                    <li>
                      Evaluating the success of various marketing channels and
                      strategies, such as trade exhibitions, internet marketing,
                      and print media.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Globalisation & Localisation Strategies */}
                  <div className="font-bold">
                    Globalisation & Localisation Strategies:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Examining the potential and difficulties of worldwide
                      expansion.
                    </li>
                    <li>
                      Considering the advantages of specialized manufacturing
                      and service centers.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Digital transformation & Industry 4.0 */}
                  <div className="font-bold">
                    Digital transformation & Industry 4.0:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing the readiness and difficulties of incorporating
                      modern digital technology into industrial processes.
                    </li>
                    <li>
                      Given the large scope of the manufacturing industry,
                      individual themes may differ depending on various
                      divisions. However, the topics indicated above provide a
                      complete overview of prospective study fields for
                      industrial organizations and associated legislators.
                    </li>
                  </ul>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </main>

      <br />
      <br />
    </div>
  );
}
