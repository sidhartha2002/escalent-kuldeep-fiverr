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
          <div className="fma-breadcrumbs smcaps">LEADERS & EXPERTS</div>
          <h1>Business leaders</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <h2 className="font-bold">Business leaders</h2>
          <div className="flex flex-col pt-5 text-left text-base">
            Subjects often covered in marketing research with corporate
            organisations, particularly those with annual revenues of over $1
            billion, as well as with C-suite executives and senior directors,
            include long-term planning, market positioning, growth prospects,
            risk analysis, and future-proofing. The high stakes and far-reaching
            consequences of research choices usually need a more strategic,
            future-oriented, and data-driven approach. Important investments,
            long-term plans, and the company's general trajectory may all be
            influenced by this study.
            <br />
            <br />
            <div className="font-bold">Audiences</div>
            <ul className="list-disc pl-4">
              <li>
                Directors and vice presidents, The C-suite (the chief executive
                officer, chief operating officer, chief financial officer, chief
                marketing officer, CGO, the chief information officer, and CTO).
                Departmental chiefs, Country executives, General managers, Non
                execs & Board directors.
              </li>
              <li>
                Digital transformation, strategic and development planning,
                regulatory and compliance, sustainability and social governance,
                and market dynamics and positioning are all core competencies.
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
              <h2 className="CommonHeading">Corporate transformation</h2>
              <p className="SectionSpotlight__description leading-relaxed">
                In the fields of technology, business, sustainability, and the
                workplace, strategic plans are being developed by clients of
                transformation consultants. Global revenue of $5 billion or more
                for companies. Dedicated to the banking, retail, energy,
                healthcare, and public sectors. C-suite and Director level
                participants, already employing professional consultation
                services.
              </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">40</strong>
                  minute depth interviews across 8 markets
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">Senior level</strong>
                  consultancy services users
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">Global corporates</strong>
                  with more than $5 billion global revenue
                </li>
              </ul>
              <br />
              <br />

              <div className="">
                <a
                  href="/case-studies/paint-purchasing-study"
                  className=" bg-white px-5  py-4 font-bold text-[#530095] hover:bg-black"
                >
                  Corporate transformation - Qual depth interviews
                </a>
              </div>
            </div>
          </div>
          <div className="SectionSpotlight__col SectionSpotlight__col--image">
            <picture>
              {/* Source for screens with a minimum width of 1300px */}
              <source
                srcSet="https://www.ronin.com/media/g2miimrc/corporate-transformation-740.png?width=950&height=717&quality=80"
                media="(min-width:1300px)"
                width="950"
                height="717"
              />
              {/* Source for screens with a minimum width of 980px */}
              <source
                srcSet="https://www.ronin.com/media/g2miimrc/corporate-transformation-740.png?width=650&height=550&quality=80"
                media="(min-width:980px)"
                width="650"
                height="550"
              />
              {/* Source for screens with a minimum width of 740px */}
              <source
                srcSet="https://www.ronin.com/media/g2miimrc/corporate-transformation-740.png?width=980&height=550&quality=80"
                media="(min-width:740px)"
                width="980"
                height="550"
              />
              {/* Fallback image for other screens */}
              <img
                className="SectionSpotlight__img"
                alt=""
                src="https://www.ronin.com/media/asolj4uz/opinion-formers-740.png?width=740&height=650&quality=80"
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
                  Market research with prominent persons and high-ranking
                  entrepreneurs may cover a wide range of topics and project
                  types because of their holistic perspectives on many issues
                  impacting society, the economy, and the corporate world. Here
                  are a few examples of potential initiatives and research
                  fields for these kind of organisations:
                  <br />
                  <br />
                  {/*  */}
                  <div className="font-bold">Public policy and regulation:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Opinion leaders and high-profile business executives may
                      provide light on how new government laws may affect
                      various industries and the economy at large.
                    </li>
                    <li>
                      Evaluating and improving policies may include a wide range
                      of tasks; some examples include policy changes,
                      environmental laws, and trade policies.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Economic trends and forecasts:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Taking stock of the economic situation and trying to
                      foretell its future trends.
                    </li>
                    <li>
                      Analysing economic data, anticipating future economic
                      developments and their effects on different sectors and
                      companies, and assessing the impact of international
                      events on the economy are all potential project tasks.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Market dynamics & Positioning:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Determine the company's main rivals, evaluate its present
                      market share, and locate it in the value chain.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Growth Opportunities:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring avenues for expansion into new markets,
                      segments, or geographies.
                    </li>
                    <li>
                      Assessing potential mergers, acquisitions, or strategic
                      partnerships to fuel growth.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Innovation & Research and Development (R&D):
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Identifying areas for technological innovation to stay
                      competitive in the market.
                    </li>
                    <li>
                      Evaluating the potential for developing new product or
                      service lines to meet evolving customer needs.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Risk Management:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Analyzing various potential risks, including geopolitical
                      issues and supply chain vulnerabilities.
                    </li>
                    <li>
                      Developing strategies for risk mitigation to protect the
                      business and its stakeholders.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Digital Transformation:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing the current state of digital maturity within the
                      company.
                    </li>
                    <li>
                      Identifying opportunities for digital optimization or
                      overhaul, such as integrating AI or adopting cloud
                      technologies, to drive efficiency and innovation.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Talent Management & Leadership Development:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing the company’s current talent pool and
                      identifying areas for improvement or development.
                    </li>
                    <li>
                      Developing strategies for attracting and retaining top
                      talent, including recruitment initiatives and employee
                      retention programs.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Brand Health & Reputation Management:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating brand perception in the market through customer
                      feedback, surveys, and market research.
                    </li>
                    <li>
                      Developing crisis management and public relations
                      strategies to address any negative publicity or reputation
                      threats effectively.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Regulatory & Compliance Landscape:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Staying informed about upcoming regulatory changes that
                      may impact the business and ensuring compliance with
                      relevant laws and regulations.
                    </li>
                    <li>
                      Assessing the current compliance infrastructure and
                      identifying potential vulnerabilities or areas for
                      improvement.
                    </li>
                    <li>
                      Implementing robust compliance measures and controls to
                      mitigate risks and maintain adherence to regulatory
                      requirements.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Sustainability & Corporate Social Responsibility (CSR):
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing the company’s environmental and social impact,
                      including carbon footprint and community involvement.
                    </li>
                    <li>
                      Exploring opportunities for integrating sustainable
                      practices and implementing corporate social responsibility
                      initiatives.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Supply Chain Management:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing the efficiency and resilience of the current
                      supply chain, including supplier relationships and
                      logistics operations.
                    </li>
                    <li>
                      Identifying opportunities for supply chain optimization or
                      diversification to enhance resilience and mitigate risks.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Financial Health & Forecasting:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating the company’s current financial health,
                      including liquidity, profitability, and debt levels.
                    </li>
                    <li>
                      Developing financial forecasting models to anticipate
                      future financial scenarios and inform strategic
                      decision-making.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Stakeholder Engagement:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Understanding the needs, expectations, and perceptions of
                      various stakeholders, including shareholders, employees,
                      customers, and communities.
                    </li>
                    <li>
                      Implementing stakeholder engagement strategies to foster
                      trust, transparency, and positive relationships with all
                      stakeholders.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Customer Experience & Loyalty:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating the customer journey and identifying pain
                      points or areas for improvement to enhance the overall
                      customer experience.
                    </li>
                    <li>
                      Developing strategies to increase customer loyalty and
                      retention, including personalized marketing initiatives
                      and loyalty programs.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Emerging Technologies & Trends:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Understanding the potential impact of emerging
                      technologies such as blockchain, artificial intelligence
                      (AI), Internet of Things (IoT), or 5G on the business
                      model and operations.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Geopolitical & Macro-Economic Factors:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating global geopolitical trends, political
                      developments, and macroeconomic factors that could
                      influence market dynamics, trade policies, and consumer
                      behavior.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Organizational Culture & Transformation:{" "}
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing the current organizational culture, values, and
                      behaviors, and identifying areas for potential
                      transformation or cultural shifts to align with strategic
                      objectives.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Post-COVID Business Strategies:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Understanding the long-term implications of the COVID-19
                      pandemic on the business model, operations, supply chains,
                      customer behaviors, and market dynamics.
                    </li>
                    <li>
                      Developing strategies to adapt to the new normal, enhance
                      resilience, and capitalize on emerging opportunities in a
                      post-pandemic world.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}
        {/* <div className="m-10 flex justify-center">
          <div className=" flex w-[90vw] flex-col items-center  justify-center rounded-lg bg-[#49fff6] py-24">
            <div className="mx-4 pb-20 text-2xl font-bold md:mx-0 md:text-4xl ">
              Find out more about the audiences we work with
            </div>
            <div className="flex">
              <a
                href="/audience"
                className="bg-black px-5  py-4 font-bold text-white hover:bg-[#530095]"
              >
                Audiences
              </a>
            </div>
          </div>
        </div> */}

        {/*  */}
        {/*  */}
        <section className="SectionSpotlight SectionSpotlight--flipped SectionSpotlight--blue">
          <div className="SectionSpotlight__col SectionSpotlight__col--text">
            <div className="SectionSpotlight__text">
              <h2 className="CommonHeading">
                Find out more about the audiences we work with
              </h2>

              <br />
              <br />
              <br />

              <div className="">
                <a
                  href="/audience"
                  className=" bg-white px-5  py-4 font-bold text-[#530095] hover:bg-black"
                >
                  Audiences
                </a>
              </div>
            </div>
          </div>
          <div className="SectionSpotlight__col SectionSpotlight__col--image">
            <picture>
              {/* Source for screens with a minimum width of 1300px */}
              <source
                srcSet="https://www.ronin.com/media/g0gczs4a/audiences-crowd.png?width=950&height=717&quality=80"
                media="(min-width:1300px)"
                width="950"
                height="717"
              />
              {/* Source for screens with a minimum width of 980px */}
              <source
                srcSet="https://www.ronin.com/media/g0gczs4a/audiences-crowd.png?width=650&height=550&quality=80"
                media="(min-width:980px)"
                width="650"
                height="550"
              />
              {/* Source for screens with a minimum width of 740px */}
              <source
                srcSet="https://www.ronin.com/media/g0gczs4a/audiences-crowd.png?width=980&height=550&quality=80"
                media="(min-width:740px)"
                width="980"
                height="550"
              />
              {/* Fallback image for other screens */}
              <img
                className="SectionSpotlight__img"
                alt=""
                src="https://www.ronin.com/media/g0gczs4a/audiences-crowd.png?width=740&height=650&quality=80"
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
      </main>

      <br />
      <br />
    </div>
  );
}
