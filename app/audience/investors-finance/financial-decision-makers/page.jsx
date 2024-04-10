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
          <h1>Financial decision makers study</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <div className="flex flex-col pt-5 text-left text-base">
            {""}
            {/* <br />
            <br /> */}
            <div className="font-bold">Financial decision makers study</div>
            <ul className="list-disc pl-4">
              <li>
                You can rely on our expertise to successfully engage financial
                decision makers such as CFOs and financial directors. This
                requires a grasp of their complicated financial strategies,
                which include financial management, asset allocation, and
                managing risk.
              </li>
            </ul>
            <br />
            <h2 className="font-bold">Financial decision makers study</h2>
            <br />
            <div className="items-left flex flex-col justify-start gap-4 space-y-4 md:flex-row md:space-y-0">
              <a
                href="/case-studies/paint-purchasing-study"
                className="bg-[#530095] px-5  py-4 font-bold text-white hover:bg-black"
              >
                Investors & Finance
              </a>

              <a
                href="/case-studies/paint-purchasing-study"
                className="bg-[#530095] px-5  py-4 font-bold text-white hover:bg-black"
              >
                Moderation & depth interviews
              </a>
            </div>
          </div>
          <br />
          <br />
        </div>

        {/*  */}
        {/*  */}
        <section className="SectionSpotlight SectionSpotlight--flipped SectionSpotlight--blue">
          <div className="SectionSpotlight__col SectionSpotlight__col--text">
            <div className="SectionSpotlight__text">
              <h2 className="CommonHeading">Financial decision makers study</h2>
              <p className="SectionSpotlight__description leading-relaxed">
                {""}
              </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">5</strong>
                  countries that respondents were sourced from
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">100</strong>
                  interviews per market
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">20</strong> minute depth
                  interviews
                </li>
              </ul>
              <br />
              <br />
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
                  <div className="mb-4 font-bold">PROJECT BACKGROUND</div>
                  <p>
                    A comprehensive international investigation into the role of
                    decision makers in the financial sector, encompassing both
                    quantitative and qualitative components.
                  </p>
                  <br />
                  <br />
                  <div className="font-bold">RESEARCH OBJECTIVES</div>
                  <ul className="list-disc pl-4">
                    <li>
                      A screening process was implemented to ascertain that
                      respondents possessed decision-making authority within
                      their respective organisations.
                    </li>
                    <li>
                      All interviews were carried out utilising target lists
                      that were provided by the client.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="mb-4 font-bold">
                    CHALLENGES FACED & ACTIONS TAKEN
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      We enlisted Japanese participants through phone calls and
                      conducted face-to-face interviews with the help of a local
                      partner. All other interviews were conducted over the
                      phone from our London CATI Centre.
                    </li>
                    <li>
                      Participants were requested to participate in an
                      additional investigation six months after their initial
                      interview.
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
        <div className="m-10 flex justify-center">
          <div className=" flex w-[90vw] flex-col items-center  justify-center rounded-lg bg-[#49fff6] py-24">
            <div className="pb-20 text-4xl font-bold">Contact us</div>
            <div className="flex">
              <a
                href="/careers-and-culture"
                className="bg-black px-5  py-4 font-bold text-white hover:bg-[#530095]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </main>

      <br />
      <br />
    </div>
  );
}
