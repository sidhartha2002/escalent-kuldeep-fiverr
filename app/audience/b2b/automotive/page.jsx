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
          <h1>Automotive</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <h2 className="font-bold">Automotive</h2>
          <div className="flex flex-col pt-5 text-left text-base">
            The automobile industry, particularly when paired with commercial
            transportation operations, is experiencing substantial upheavals as
            technology advances.
            <br />
            <br />
            <div className="font-bold">
              Audiences - Fleet and Automotive Research
            </div>
            <ul className="list-disc pl-4">
              <li>
                Fleet executives, those in fleet acquisition, industrial vehicle
                buyers, heavy-duty trucks, environmental directors, fleet
                leasing heads, dealership principals, and supply chain and
                manufacturing decision makers.
              </li>
              <li>
                Fleet administration and operations, financial choices and fleet
                structure, electrically powered vehicle deployment and
                organising, service and workshop needs, and the distribution
                chain for tier one and second-tier automobile manufacturers.
                Fuel and gasoline alternatives, fleet energy cards.
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
              <h2 className="CommonHeading">Fleet Observer Tracking</h2>
              <p className="SectionSpotlight__description">
                17-minute online interview with vetted and confirmed fleet
                managers from 30 Americans, Middle-eastern, Asian and European
                marketplaces. Over 3,750interviews were conducted, with a
                minimum of 125in each market. Audience Match intended sample
                using Dun & Bradstreet/Hoovers based on firm sector, size, and
                fleet makeup.
              </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">30</strong>
                  markets across America, Middle-East, Asia, and Europe
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">3,750</strong>
                  interviews
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">Representative</strong>{" "}
                  ample per market selected by company demographics
                </li>
                <br />
              </ul>
              <br />
              <br />

              <div className="">
                <a
                  href="/case-studies/paint-purchasing-study"
                  className=" bg-white px-5  py-4 font-bold text-[#530095] hover:bg-black"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="SectionSpotlight__col SectionSpotlight__col--image">
            <picture>
              {/* Source for screens with a minimum width of 1300px */}
              <source
                srcSet="https://www.ronin.com/media/0vumtqby/istock-1152618221.jpg?width=950&height=717&quality=80"
                media="(min-width:1300px)"
                width="950"
                height="717"
              />
              {/* Source for screens with a minimum width of 980px */}
              <source
                srcSet="https://www.ronin.com/media/0vumtqby/istock-1152618221.jpg?width=650&height=550&quality=80"
                media="(min-width:980px)"
                width="650"
                height="550"
              />
              {/* Source for screens with a minimum width of 740px */}
              <source
                srcSet="https://www.ronin.com/media/0vumtqby/istock-1152618221.jpg?width=650&height=550&quality=80"
                media="(min-width:740px)"
                width="980"
                height="550"
              />
              {/* Fallback image for other screens */}
              <img
                className="SectionSpotlight__img"
                alt=""
                src="https://www.ronin.com/media/0vumtqby/istock-1152618221.jpg?width=740&height=650&quality=80"
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
                  Our expertise lies in fleet management and procedures,
                  budgeting and fleet framework, electrically powered vehicle
                  installation and organising, service and workshop needs, and
                  the distribution chain for tier one and second-tier automobile
                  manufacturers. We have a proven track record of delivering
                  exceptional results in these areas, ensuring that your
                  business runs smoothly and efficiently. With our comprehensive
                  knowledge and strategic approach, we can help you make
                  informed decisions and optimise your operations for maximum
                  success. Trust us to handle all your fleet management needs
                  with precision and expertise. Introducing a range of
                  innovative fuel and petrol alternatives, along with our
                  exclusive fleet energy cards.
                  <br />
                  <br />
                  <div className="font-bold">
                    Electrification & Alternative Fuels
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring the shift towards electric fleets: Understanding
                      the factors that drive the growth of electric vehicles.
                    </li>
                    <li>
                      Exploring the landscape of EV charging for fleets:
                      addressing needs, overcoming challenges, and tracking
                      developments in charging infrastructure.
                    </li>
                    <li>
                      Exploring the Viability of Hydrogen, Biodiesel, and Other
                      Alternative Fuels.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Connected vehicles & Telematics
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring the world of vehicle telematics: Embracing the
                      advantages, addressing concerns, and safeguarding data
                      privacy.
                    </li>
                    <li>
                      Vehicle-to-everything (V2X) Communication: Exciting
                      advancements, obstacles to overcome, and exciting
                      possibilities.
                    </li>
                    <li>
                      Exploring the world of in-vehicle information technology
                      systems: Unveiling preferences, emerging trends, and the
                      intricate challenges of flawless integration.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Autonomous vehicles & ADAS</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring the Potential of self-driving Fleet Operations:
                      Assessing Feasibility, Addressing Safety Concerns, and
                      Projecting Timelines.
                    </li>
                    <li>
                      Exploring the World of Advanced Driver-Assistance Systems
                      (ADAS): Embracing the Power of Acceptance, Dependability,
                      and Assistance.
                    </li>
                    <li>
                      Exploring the Compliance and Legal Implications of
                      Autonomous Fleet Operations: Overcoming Challenges and
                      Ensuring Preparedness.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Fleet management & Operations</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing current fleet management software: Analysing
                      available tools, identifying requirements, and addressing
                      integration obstacles.
                    </li>
                    <li>
                      Enhancing operational efficiency: Embracing cutting-edge
                      advancements and proven strategies in fleet regular
                      consumption, organising, and navigation.
                    </li>
                    <li>
                      Enhance your driver safety and performance with
                      cutting-edge technologies and comprehensive training
                      programmes.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Environmental & Sustainability
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      minimising your carbon footprint: Effective strategies,
                      innovative technologies, and overcoming obstacles.
                    </li>
                    <li>
                      Optimising Fleet Operations for a Greener Future:
                      Unveiling the Most Effective Practices and Cutting-Edge
                      Technologies.
                    </li>
                    <li>
                      Life cycle analysis: Assessing the complete environmental
                      impact of vehicles, spanning from their creation to their
                      ultimate disposal.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Cybersecurity</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Cybersecurity for cars: threats, fixes, and the best ways
                      to do things.
                    </li>
                    <li>
                      Ensuring the utmost security and safeguarding of data
                      generated from connected vehicles and fleet operations is
                      of paramount importance.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Business models & Market trends
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring Subscription and Leasing Models: Embracing the
                      Future with Confidence.
                    </li>
                    <li>
                      Insights into the future of the automotive and fleet
                      sectors over the next 5-10 years.
                    </li>
                    <li>
                      Shared mobility: How car-sharing and ride-hailing affect
                      fleet management.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Infrastructure & Urban planning
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring the seamless integration of technological
                      advances in smart cities and fleets: A closer look at the
                      mutual benefits.
                    </li>
                    <li>
                      Exploring the demands and obstacles of road and
                      infrastructure development to cater to the ever-evolving
                      and future vehicle fleets.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Supply chain & Manufacturing</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring the Strength of Supply Chains: Overcoming
                      Challenges and Crafting Effective Strategies in the Face
                      of Interruptions.
                    </li>
                    <li>
                      Discover the latest advancements in vehicle manufacturing:
                      Embrace cutting-edge materials, revolutionary methods of
                      production, and modern technologies.
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
