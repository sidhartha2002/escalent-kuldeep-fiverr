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
          <div className="fma-breadcrumbs smcaps">INVESTORS & FINANCE</div>
          <h1>Hard to reach B2B investors</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <h2 className="font-bold">Hard to reach B2B investors</h2>
          <div className="flex flex-col pt-5 text-left text-base">
            For a long time and on a variety of initiatives, Audience Match has
            focused on finding and interviewing investors and finance experts.
            Through meticulous desk research and the utilisation of specialised
            databases, we have successfully connected with more than 35,000
            Finance experts who have enthusiastically joined our Audience Match
            Edge community. These professionals have undergone thorough
            screening, verification, and have expressed their willingness to
            participate in future market research endeavours.
            <br />
            <br />
            <div className="font-bold">
              Audiences - Investors & Investment Professionals
            </div>
            <ul className="list-disc pl-4">
              <li>
                Business investors, insurance, institutional, fund, and
                portfolio managers, as well as IFAs and brokers.
              </li>
              <li>
                The following areas have been evaluated: market dynamics and
                relationship management; fintech and digital transformation;
                emerging trends; globalisation and crisis border analysis;
                portfolio management and asset allocation; analysis and
                forecasting; technological innovations; regulatory compliance
                and ethical considerations; alternative investments.
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
                Institutional & advisor brand tracking study
              </h2>
              <p className="SectionSpotlight__description leading-relaxed">
                A study conducted quarterly to gauge the opinions regarding
                funds in the investment management and exchange traded fund
                (ETF) space.
              </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">4</strong>
                  regions
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">14</strong>
                  markets
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">450</strong> interviews
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">12,000</strong>minutes of
                  primary research
                </li>
                <li className="StatGrid__item">
                  Asset managers Wealth managers Institutional investors
                </li>
              </ul>
              <br />
              <br />

              <div className="">
                <a
                  href="/case-studies/paint-purchasing-study"
                  className=" bg-white px-5  py-4 font-bold text-[#530095] hover:bg-black"
                >
                  Investors & brand tracking study
                </a>
              </div>
            </div>
          </div>
          <div className="SectionSpotlight__col SectionSpotlight__col--image">
            <picture>
              {/* Source for screens with a minimum width of 1300px */}
              <source
                srcSet="https://www.ronin.com/media/hmjafkti/financing-740.png?width=950&height=717&quality=80"
                media="(min-width:1300px)"
                width="950"
                height="717"
              />
              {/* Source for screens with a minimum width of 980px */}
              <source
                srcSet="https://www.ronin.com/media/hmjafkti/financing-740.png?width=650&height=550&quality=80"
                media="(min-width:980px)"
                width="650"
                height="550"
              />
              {/* Source for screens with a minimum width of 740px */}
              <source
                srcSet="https://www.ronin.com/media/hmjafkti/financing-740.png?width=980&height=550&quality=80"
                media="(min-width:740px)"
                width="980"
                height="550"
              />
              {/* Fallback image for other screens */}
              <img
                className="SectionSpotlight__img"
                alt=""
                src="https://www.ronin.com/media/hmjafkti/financing-740.png?width=740&height=650&quality=80"
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
                  Investment sector market research is intricate and
                  multifaceted. Illustrative subjects and themes that have been
                  addressed:
                  <br />
                  <br />
                  <div class="font-bold">
                    Asset Allocation and Portfolio Management
                  </div>
                  <ul class="list-disc pl-4">
                    <li>
                      Exploring trends in portfolio diversification strategies.
                    </li>
                    <li>
                      Assessing the attractiveness of emerging markets for
                      investment.
                    </li>
                    <li>
                      Examining risk assessment techniques in asset allocation.
                    </li>
                    <li>
                      Analyzing trends and performance in ESG (Environmental,
                      Social, and Governance) investing.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">Economic Analysis and Forecasting</div>
                  <ul class="list-disc pl-4">
                    <li>Reviewing global and regional economic outlooks.</li>
                    <li>
                      Evaluating the effects of government policies on
                      investment climates.
                    </li>
                    <li>
                      Analyzing currency trends and their impact on
                      international investing.
                    </li>
                    <li>
                      Understanding the role of central banks and monetary
                      policies in shaping economic conditions.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">Technological Innovations</div>
                  <ul class="list-disc pl-4">
                    <li>
                      Investigating the adoption of AI and machine learning in
                      investment strategies.
                    </li>
                    <li>
                      Assessing the impact of blockchain technology on finance
                      and investing.
                    </li>
                    <li>
                      Exploring the rise of robo-advisors and automation in
                      wealth management.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">
                    Regulatory Compliance and Ethical Considerations
                  </div>
                  <ul class="list-disc pl-4">
                    <li>
                      Exploring regulatory changes and their impacts on
                      investment strategies.
                    </li>
                    <li>
                      Assessing compliance challenges and solutions across
                      different jurisdictions.
                    </li>
                    <li>
                      Examining ethical investing practices and the integration
                      of sustainable considerations.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">Alternative Investments</div>
                  <ul class="list-disc pl-4">
                    <li>
                      Analyzing the performance of hedge funds, private equity,
                      and venture capital.
                    </li>
                    <li>
                      Identifying real estate investment trends and
                      opportunities.
                    </li>
                    <li>
                      Exploring investments in commodities, art, or other
                      non-traditional assets.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">
                    Client Behavior and Relationship Management
                  </div>
                  <ul class="list-disc pl-4">
                    <li>
                      Understanding the preferences and needs of various
                      investor segments.
                    </li>
                    <li>
                      Assessing the role of financial education in influencing
                      investor behavior.
                    </li>
                    <li>
                      Examining strategies for building and maintaining trust in
                      client-advisor relationships.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">
                    Market Dynamics and Investment Strategies
                  </div>
                  <ul class="list-disc pl-4">
                    <li>
                      Examining sector-wise performance analysis, such as
                      healthcare, technology, and energy sectors.
                    </li>
                    <li>
                      Analyzing the influence of geopolitical events on markets
                      and investment decisions.
                    </li>
                    <li>
                      Comparing the performance of active versus passive
                      investment strategies.
                    </li>
                    <li>
                      Exploring market anomalies and insights from behavioral
                      finance.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">
                    FinTech and Digital Transformation
                  </div>
                  <ul class="list-disc pl-4">
                    <li>
                      Assessing the impact of FinTech startups on traditional
                      investment management practices.
                    </li>
                    <li>
                      Examining digital transformation strategies implemented by
                      investment firms.
                    </li>
                    <li>
                      Considering security and privacy considerations in the
                      realm of digital finance.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div class="font-bold">Emerging Trends and Opportunities</div>
                  <ul class="list-disc pl-4">
                    <li>
                      Analyzing the impact of global events like pandemics and
                      natural disasters on investment strategies.
                    </li>
                    <li>
                      Identifying opportunities in frontier markets and emerging
                      sectors.
                    </li>
                    <li>
                      Exploring the role of impact investing and socially
                      responsible investment in driving change and creating
                      value.
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
