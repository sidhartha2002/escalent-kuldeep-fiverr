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
          <div className="fma-breadcrumbs smcaps">MEDIA & ADVERTISING</div>
          <h1>Marketing, advertising & agencies</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <h2 className="font-bold">Marketing, advertising & agencies</h2>
          <div className="flex flex-col pt-5 text-left text-base">
            <p>
              Advertising agency managers, market and brand specialists, and
              others possess distinct viewpoints regarding consumer behaviour,
              branding tactics, and the efficacy of diverse advertising
              platforms. The topics and themes were addressed during our market
              research collaboration with these experts.
            </p>
            <br />
            <br />
            <div className="font-bold">Audiences</div>
            <ul className="list-disc pl-4">
              <li>Advertising, Marketing, and Agencies</li>
              <li>
                Digital marketers, media relations specialists, creative
                directors, account managers, media buyers, and planners are all
                part of the brand management and directorial teams.
              </li>
              <li>
                Online advertising and marketing; Social media marketing;
                Influencer marketing; Marketing technology and the assessment of
                platforms and tools; New developments in advertising technology;
                Creative design trends; The advertising industry's trajectory
                looking forward.
              </li>
            </ul>
            <br />
            <br />
          </div>
          <br />
          <br />
        </div>

        {/*  */}
        {/*  */}
        <section className="SectionSpotlight SectionSpotlight--flipped SectionSpotlight--blue">
          <div className="SectionSpotlight__col SectionSpotlight__col--text">
            <div className="SectionSpotlight__text">
              <h2 className="CommonHeading">Ad Tracker Study</h2>
              <p className="SectionSpotlight__description leading-relaxed">
                Locate, evaluate, and invite candidates to a brief online
                interview. Media buyers and planners, senior buyers and
                planners, digital and advertising executives of brand end
                customers, and ad agencies make up the workforce. In any market
                where digital advertising is a quota, 70% of the ads are
                sponsored by firms and 30% by agencies. There were 500
                interviews in the US and UK and 500 in France and Germany.
              </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">1,00 interviews</strong>
                  across 4 markets
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">
                    Audience Match targeted
                  </strong>
                  sample by advertising spend
                </li>
                <li className="StatGrid__item">
                  All translations, list building, questionnaire programming and
                  data delivery by Audience Match
                </li>
              </ul>
              <br />
              <br />

              <div className="">
                <a
                  href="/case-studies/paint-purchasing-study"
                  className=" bg-white px-5  py-4 font-bold text-[#530095] hover:bg-black"
                >
                  Ad tracker study
                </a>
              </div>
            </div>
          </div>
          <div className="SectionSpotlight__col SectionSpotlight__col--image">
            <picture>
              {/* Source for screens with a minimum width of 1300px */}
              <source
                srcSet="https://www.ronin.com/media/sslj3d25/usa-resettlement-740.png?width=950&height=717&quality=80"
                media="(min-width:1300px)"
                width="950"
                height="717"
              />
              {/* Source for screens with a minimum width of 980px */}
              <source
                srcSet="https://www.ronin.com/media/sslj3d25/usa-resettlement-740.png?width=650&height=550&quality=80"
                media="(min-width:980px)"
                width="650"
                height="550"
              />
              {/* Source for screens with a minimum width of 740px */}
              <source
                srcSet="https://www.ronin.com/media/sslj3d25/usa-resettlement-740.png?width=980&height=550&quality=80"
                media="(min-width:740px)"
                width="980"
                height="550"
              />
              {/* Fallback image for other screens */}
              <img
                className="SectionSpotlight__img"
                alt=""
                src="https://www.ronin.com/media/sslj3d25/usa-resettlement-740.png?width=740&height=650&quality=80"
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
                  <div className="mb-4 font-bold">{""}</div>
                  <p>{""} </p>
                  <br />
                  <br />
                  <div className="font-bold">
                    Digital Marketing & Social Media:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      <div className="font-bold">
                        Trends in Social Media Advertising:
                      </div>
                      <ul className="list-inside pl-4">
                        <li>
                          Analyzing platforms and strategies yielding optimal
                          ROI in social media advertising.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="font-bold">
                        Content Marketing Effectiveness:
                      </div>
                      <ul className="list-inside pl-4">
                        <li>
                          Assessing the evolution of content marketing
                          strategies and their efficacy.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Influencer Marketing:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring the impact of influencers on branding and
                      advertising, along with associated challenges and ethical
                      considerations.
                    </li>
                  </ul>
                  <br />
                  <br />

                  <div className="font-bold">Technology & Innovation:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      <div className="font-bold">
                        MarTech (Marketing Technology) Tools:
                      </div>
                      <ul className="list-disc pl-4">
                        <li>
                          Evaluating tools for marketing analytics, automation,
                          CRM, etc., in the MarTech landscape.
                        </li>
                      </ul>
                      <br />
                      <br />

                      <div className="font-bold">AdTech Innovations:</div>
                      <ul className="list-disc pl-4">
                        <li>
                          Exploring emerging technologies in advertising and
                          their implications on marketing strategies.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <br />
                  <br />

                  <div className="font-bold">Data Privacy & Ethics:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Addressing challenges related to consumer data privacy
                      amidst targeted advertising efforts.
                    </li>
                  </ul>
                  <br />
                  <br />

                  <div className="font-bold">Future Predictions:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      <div className="font-bold">
                        The Future of Advertising:
                      </div>
                      <ul className="list-inside pl-4">
                        <li>
                          Predicting the evolution of advertising strategies,
                          mediums, and technologies in the foreseeable future.
                        </li>
                      </ul>
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
