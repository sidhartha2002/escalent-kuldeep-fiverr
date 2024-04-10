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
          <h1>SME's</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <h2 className="font-bold">SME's</h2>
          <div className="flex flex-col pt-5 text-left text-base">
            Nearly all firms fall within the category of small and medium-sized
            enterprises (SME). Micro SMEs have fewer than 10 employees and a
            yearly revenue of less than €2 million; small SMEs have less than 50
            employees and a yearly turnover of less than €10 million; and
            medium-sized SMEs have less than 250 workers and a yearly turnover
            of less than €50 million, according to the UK's definition of a
            small or medium-sized enterprise (SME).
            <br />
            <br />
            <div className="font-bold">
              Audiences - Small & medium businesses
            </div>
            <ul className="list-disc pl-4">
              <li>
                A wide variety of industries, including but not limited to:
                retail, hair and beauty, cafés, restaurants, catering,
                manufacturing, healthcare, real estate, construction, arts and
                pleasure, training and instruction, and hospitality and travel.
              </li>
              <li>
                Advertising, goods and services, customer feedback, distribution
                methods, price strategy, market knowledge, and competition
                analysis are some of the more common areas covered.
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
                Euro barometer of small & medium businesses
              </h2>
              <p className="SectionSpotlight__description leading-relaxed">
                {" "}
                A CATI study was undertaken, encompassing a total of 6,900
                interviews, of which 300 were with SMEs operating in 23 European
                markets. Analyse sample sources from the D&B database according
                to employee size, revenue, and sector (SIC). In each market,
                representative targets relative to the national SME profile.
                Complete programming and hosting services are provided by
                Audience Match, including weekly data delivery and localised and
                open-ended translations of the questionnaire.
              </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">
                    6,900 telephone interviews
                  </strong>
                  conducted in 23 European markets - Audience Match sources for
                  a representative sample
                </li>
                {/* <li className="StatGrid__item">
                  <strong className="StatGrid__title">SIC code</strong> based
                  company selection, with phone, online and digital screening
                </li> */}
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">15 languages</strong>
                  rendered by the translation services staff at Audience Match
                </li>
                <br />
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
                  <div className="font-bold">Retail:</div>
                  <ul className="list-disc pl-4">
                    <li>Small-scale independent grocery outlets</li>
                    <li>
                      Local boutique establishments specializing in clothing
                    </li>
                    <li>Specialized gift emporiums</li>
                    <li>Hardware retailers catering to specific needs</li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Services:</div>
                  <ul className="list-disc pl-4">
                    <li>Local law practices</li>
                    <li>Accountancy firms</li>
                    <li>Consulting firms</li>
                    <li>Marketing and advertising agencies</li>
                    <li>Beauty salons and wellness centers</li>
                  </ul>
                  <br />
                  <br />
                  {/* Food and Beverage */}
                  <div className="font-bold">Food and Beverage:</div>
                  <ul className="list-disc pl-4">
                    <li>Independent cafés and coffeehouses</li>
                    <li>Neighborhood eateries</li>
                    <li>Catering establishments</li>
                  </ul>
                  <br />
                  <br />
                  {/* Technology and IT */}
                  <div className="font-bold">Technology and IT:</div>
                  <ul className="list-disc pl-4">
                    <li>IT support and managed service providers</li>
                    <li>Software development companies</li>
                    <li>Digital marketing firms</li>
                    <li>Emerging e-commerce ventures</li>
                  </ul>
                  <br />
                  <br />
                  {/* Manufacturing and Production */}
                  <div className="font-bold">Manufacturing and Production:</div>
                  <ul className="list-disc pl-4">
                    <li>Small-scale food processing businesses</li>
                    <li>
                      Artisanal craftsmanship studios (e.g., woodworking,
                      metalworking)
                    </li>
                    <li>Garment and textile production enterprises</li>
                  </ul>
                  <br />
                  <br />
                  {/* Healthcare */}
                  <div className="font-bold">Healthcare:</div>
                  <ul className="list-disc pl-4">
                    <li>Private dental practices</li>
                    <li>Physiotherapy clinics</li>
                    <li>Local pharmacies</li>
                  </ul>
                  <br />
                  <br />
                  {/* Agriculture */}
                  <div className="font-bold">Agriculture:</div>
                  <ul className="list-disc pl-4">
                    <li>Family-operated agricultural enterprises</li>
                    <li>Micro vineyards or wine producers</li>
                    <li>
                      Specialty agribusiness ventures (e.g., organic herb farms,
                      apiaries)
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Construction and Real Estate */}
                  <div className="font-bold">Construction and Real Estate:</div>
                  <ul className="list-disc pl-4">
                    <li>Community construction companies</li>
                    <li>Local realty agencies</li>
                    <li>Residential and commercial property managers</li>
                  </ul>
                  <br />
                  <br />
                  {/* Transportation */}
                  <div className="font-bold">Transportation:</div>
                  <ul className="list-disc pl-4">
                    <li>Neighborhood courier and delivery services</li>
                    <li>Boutique charter airline operators</li>
                    <li>Locally-owned taxi or ride-hailing companies</li>
                  </ul>
                  <br />
                  <br />
                  {/* Arts and Entertainment */}
                  <div className="font-bold">Arts and Entertainment:</div>
                  <ul className="list-disc pl-4">
                    <li>Privately-owned art galleries</li>
                    <li>Event management firms</li>
                    <li>Recording facilities</li>
                    <li>Community theaters</li>
                  </ul>
                  <br />
                  <br />
                  {/* Education and Training */}
                  <div className="font-bold">Education and Training:</div>
                  <ul className="list-disc pl-4">
                    <li>Private tutoring or coaching academies</li>
                    <li>Community vocational training centers</li>
                    <li>Self-employed e-learning content developers</li>
                  </ul>
                  <br />
                  <br />
                  {/* Tourism and Hospitality */}
                  <div className="font-bold">Tourism and Hospitality:</div>
                  <ul className="list-disc pl-4">
                    <li>Boutique bed and breakfast accommodations</li>
                    <li>Community-based tour operators</li>
                    <li>Small-scale adventure sports outfitters</li>
                  </ul>
                  <br />
                  <br />
                  {/* User */}
                  <div className="font-bold">User:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      When contemplating market research for SMEs (small to
                      medium-sized enterprises), comprehension of the
                      competition, the market, customer behavior, and
                      prospective development opportunities are frequently the
                      objectives.
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Topics to Cover */}
                  <div className="font-bold">Topics to Cover:</div>
                  <ul className="list-disc pl-4">
                    <li>Comprehension of market dynamics</li>
                    <li>Assessment of market size and growth rate</li>
                    <li>
                      Segmentation of the market and identification of target
                      audience
                    </li>
                    <li>
                      Analysis of market trends and forecasting future
                      developments
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Customer Insights */}
                  <div className="font-bold">Customer Insights:</div>
                  <ul className="list-disc pl-4">
                    <li>Study of customer demographics and psychographics</li>
                    <li>
                      Analysis of buying behavior and decision-making processes
                    </li>
                    <li>
                      Identification of customer needs, preferences, and pain
                      points
                    </li>
                    <li>Evaluation of customer satisfaction and loyalty</li>
                  </ul>
                  <br />
                  <br />
                  {/* Competitive Analysis */}
                  <div className="font-bold">Competitive Analysis:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Identification of key competitors and their respective
                      market shares
                    </li>
                    <li>
                      Evaluation of competitors' strengths, weaknesses,
                      opportunities, and threats (SWOT analysis)
                    </li>
                    <li>
                      Assessment of competitors' unique selling propositions
                      (USPs) and competitive advantages
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Product and Service Feedback */}
                  <div className="font-bold">Product and Service Feedback:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Measurement of product/service usage and satisfaction
                      levels among customers
                    </li>
                    <li>
                      Gathering feedback on pricing strategies and perceived
                      value
                    </li>
                    <li>
                      Soliciting suggestions for product/service improvements or
                      new ideas through customer feedback loops
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Branding and Positioning */}
                  <div className="font-bold">Branding and Positioning:</div>
                  <ul className="list-disc pl-4">
                    <li>Brand awareness and perception</li>
                    <li>Positioning in the market relative to competitors</li>
                  </ul>
                  <br />
                  <br />
                  {/* Distribution Channels */}
                  <div className="font-bold">Distribution Channels:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessment of the effectiveness and reach of existing
                      distribution channels
                    </li>
                    <li>
                      Exploration of potential opportunities for new
                      distribution methods or strategic partnerships
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Pricing Strategy */}
                  <div className="font-bold">Pricing Strategy:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Conducting price sensitivity analysis to understand
                      customer reactions to pricing changes
                    </li>
                    <li>
                      Identifying optimal pricing points and developing
                      strategies to maximize profitability
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Promotion and Advertising */}
                  <div className="font-bold">Promotion and Advertising:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluation of the effectiveness of current marketing
                      campaigns in reaching target audiences
                    </li>
                    <li>
                      Soliciting feedback on promotional materials and
                      advertising mediums to refine future strategies
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Barriers to Entry */}
                  <div className="font-bold">Barriers to Entry:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Identification and analysis of challenges encountered when
                      entering or expanding within the market
                    </li>
                    <li>
                      Assessment of regulatory, economic, and competitive
                      barriers impacting market entry or expansion efforts
                    </li>
                  </ul>
                  <br />
                  <br />
                  {/* Types of Market Research */}
                  <div className="font-bold">Types of Market Research:</div>
                  <ul className="list-disc pl-4">
                    <li>Qualitative Research</li>
                    <ul>
                      <li>
                        In-depth Interviews: Conducting one-on-one interviews
                        with stakeholders, customers, or industry experts to
                        gather detailed insights.
                      </li>
                      <li>
                        Focus Groups: Facilitating group discussions led by a
                        moderator to delve into specific topics and gain diverse
                        perspectives.
                      </li>
                      <li>
                        Ethnographic Studies: Observing and immersing in
                        customers' natural environments to understand their
                        behavior, preferences, and needs.
                      </li>
                    </ul>
                    <br />
                    <li>Quantitative Research</li>
                    <ul>
                      <li>
                        Surveys and Questionnaires: Administering structured
                        surveys to a larger audience, whether online, via phone,
                        or in-person, to collect quantitative data on opinions,
                        attitudes, and behaviors.
                      </li>
                      <li>
                        Observational Research: Systematically observing and
                        recording specific behaviors or actions in a given
                        setting to quantify and analyze patterns.
                      </li>
                    </ul>
                    <br />
                    <li>Secondary Research</li>
                    <ul>
                      <li>
                        Industry Reports: Reviewing existing reports and
                        publications to gather insights on market size, trends,
                        and competitive landscape provided by industry experts.
                      </li>
                      <li>
                        Competitor Analysis: Analyzing publicly available data
                        and information to assess competitors' strategies,
                        products, market positioning, and performance.
                      </li>
                      <li>
                        Online Analytics: Utilizing tools such as Google
                        Analytics or social media analytics to track and analyze
                        online user behavior, engagement, and interactions.
                      </li>
                    </ul>
                    <br />
                    <li>Experimental Research</li>
                    <ul>
                      <li>
                        A/B Testing: Implementing two versions to compare
                        performance and determine the most effective option,
                        commonly utilized for marketing campaigns, website
                        designs, or product features.
                      </li>
                      <li>
                        Product Trials: Distributing samples or prototypes to
                        gather feedback and evaluate consumer responses to new
                        products or features before full-scale launch.
                      </li>
                    </ul>
                  </ul>
                  <br />
                  <br />
                  {/* Analytical Tools */}
                  <div className="font-bold">Analytical Tools:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      SWOT Analysis: Conducting an evaluation of internal
                      strengths and weaknesses, as well as external
                      opportunities and threats, to inform strategic
                      decision-making and planning.
                    </li>
                    <li>
                      PESTEL Analysis: Examining external factors including
                      Political, Economic, Social, Technological, Environmental,
                      and Legal aspects to understand their impact on the
                      business environment and identify potential opportunities
                      and challenges.
                    </li>
                    <li>
                      Performing market research can demand a significant
                      investment of resources from SMBs, which are generally
                      constrained by limited financial resources. However, by
                      selecting the appropriate methods and subjects, one can
                      gain insightful knowledge that can inform strategy and
                      decision-making. A combination of qualitative and
                      quantitative research methods frequently yields an
                      all-encompassing comprehension of the market and the
                      obstacles that need to be addressed.
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
