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
          <div className="fma-breadcrumbs smcaps">
            HEALTHCARE & LIFE SCIENCES
          </div>
          <h1>Life sciences</h1>
        </div>
      </div>
      <main id="maincontent" className="maincontent-blocks">
        <div className="intro-content block">
          <h2 className="font-bold">Life sciences</h2>
          <div className="flex flex-col pt-5 text-left text-base">
            Digital recruitment and character screening may prove to be a
            successful method of engaging with professionals in the biological
            sciences. Many private research projects for pharmaceutical,
            biotechnology, and small biomed and biopharma firms are approached
            by Audience Match.
            <br />
            <br />
            <div className="font-bold">
              Audiences - Life sciences professionals
            </div>
            <ul className="list-disc pl-4">
              <li>
                Research field participants include chief scientific officers,
                directors of clinical trials, scientists, quality assurance
                specialists, genetic engineers, medical device, bioinformatics,
                and development experts, as well as purchase decision makers.
              </li>
              <li>
                Consumer intention to purchase, workplace robotics, legal
                compliance, clinical trials and the product's commercial
                innovative research and development, healthcare integration, and
                medical device market trends have all been evaluated.
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
                Pharma, biopharma, biotech tracking study
              </h2>
              <p className="SectionSpotlight__description leading-relaxed">
                Eight phases of a surveillance study involving research
                institutions, biotech firms, CMOs/CDMOs, and biopharmaceuticals
                have been conducted over the past four years.
              </p>

              <ul className="StatGrid">
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">4</strong>
                  regions
                </li>
                <li className="StatGrid__item">
                  <strong className="StatGrid__title">4,000</strong>
                  markets
                </li>
                <li className="StatGrid__item">
                  Lab managers, Bioengineers, Scientists, Clinical developers
                </li>
              </ul>
              <br />
              <br />

              <div className="">
                <a
                  href="/case-studies/paint-purchasing-study"
                  className=" bg-white px-5  py-4 font-bold text-[#530095] hover:bg-black"
                >
                  Pharma, biopharma, biotech tracking study
                </a>
              </div>
            </div>
          </div>
          <div className="SectionSpotlight__col SectionSpotlight__col--image">
            <picture>
              {/* Source for screens with a minimum width of 1300px */}
              <source
                srcSet="https://www.ronin.com/media/e4kbd41q/istock-1251344090.jpg?width=950&height=717&quality=80"
                media="(min-width:1300px)"
                width="950"
                height="717"
              />
              {/* Source for screens with a minimum width of 980px */}
              <source
                srcSet="https://www.ronin.com/media/e4kbd41q/istock-1251344090.jpg?width=650&height=550&quality=80"
                media="(min-width:980px)"
                width="650"
                height="550"
              />
              {/* Source for screens with a minimum width of 740px */}
              <source
                srcSet="https://www.ronin.com/media/e4kbd41q/istock-1251344090.jpg?width=980&height=550&quality=80"
                media="(min-width:740px)"
                width="980"
                height="550"
              />
              {/* Fallback image for other screens */}
              <img
                className="SectionSpotlight__img"
                alt=""
                src="https://www.ronin.com/media/e4kbd41q/istock-1251344090.jpg?width=740&height=650&quality=80"
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
                  Life sciences market research is of the utmost importance for
                  ascertaining new opportunities, staying informed about
                  industry developments, and making informed decisions. Listed
                  below are some examples of interviews we have conducted with
                  life sciences professionals from pharmaceutical,
                  biotechnology, and medical companies.
                  <br />
                  <br />
                  <span className="font-bold">Labs:</span>
                  <br />
                  <br />
                  {/*  */}
                  <div className="font-bold">Technological Advancements:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Exploring the adoption and impact of automation in
                      laboratory processes, enhancing efficiency and accuracy.
                    </li>
                    <li>
                      Assessing the utilization of AI and machine learning in
                      data analysis, facilitating faster and more precise result
                      interpretation.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Regulatory Compliance:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Analyzing global regulations affecting laboratory
                      operations to ensure conformity and legal compliance.
                    </li>
                    <li>
                      Implementing robust quality assurance and control
                      practices to uphold accuracy and reliability in laboratory
                      testing.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Pharmaceuticals:</div>
                  <div className="font-bold">
                    Drug Development and Commercialization:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating market potential for new drugs or therapeutic
                      areas, guiding investment strategies and expansion
                      opportunities.
                    </li>
                    <li>
                      Understanding consumer preferences and behaviors in drug
                      usage to tailor marketing approaches and product
                      positioning.
                    </li>
                    <li>
                      Conducting competitive analyses to gauge market dynamics
                      and assess market share among pharmaceutical companies.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Regulatory and Ethical Considerations:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Analyzing the implications of regulatory guideline changes
                      on drug development processes, ensuring adherence and
                      minimizing risks.
                    </li>
                    <li>
                      Addressing ethical concerns in clinical trials and human
                      research, prioritizing patient welfare and upholding
                      ethical standards.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Biotechnology:</div>
                  <div className="font-bold">
                    Innovation and Product Development:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Conducting research on emerging biotechnological methods,
                      evaluating commercial viability for applications like
                      genetic engineering and biofuels.
                    </li>
                    <li>
                      Identifying market demands and opportunities in biotech,
                      including genetic engineering solutions and sustainable
                      biofuel development.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Investment and Financing:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Assessing investment patterns in biotech, identifying
                      opportunities and obstacles for startups and venture
                      capital firms.
                    </li>
                    <li>
                      Navigating regulatory landscapes and market dynamics to
                      inform investment strategies within the biotech sector.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Biomedical Companies:</div>
                  <div className="font-bold">Medical Device Market Trends:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating the market demand and adoption trends for new
                      medical devices across diverse healthcare settings.
                    </li>
                    <li>
                      Understanding regulatory nuances and market entry
                      requirements for medical devices in various global
                      regions.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Patient-Centered Research:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Conducting studies to comprehend user experience and
                      patient satisfaction with medical devices, driving design
                      enhancements and innovation initiatives.
                    </li>
                    <li>
                      Identifying gaps in patient care and avenues for
                      biomedical innovation to meet these unmet needs
                      effectively.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Global Market Analysis:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Analyzing emerging markets to evaluate their potential for
                      adopting life sciences products, encompassing biotech and
                      medical devices.
                    </li>
                    <li>
                      Assessing the influence of geopolitical factors and trade
                      regulations on market dynamics and operational strategies
                      within the life sciences industry.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">
                    Sustainability and Environmental Impact:
                  </div>
                  <ul className="list-disc pl-4">
                    <li>
                      Evaluating the ecological footprint of life sciences
                      companies, pinpointing opportunities for sustainability
                      initiatives across production and supply chain management.
                    </li>
                    <li>
                      Exploring pathways to integrate sustainability principles
                      into biotech and biomedical innovation processes,
                      promoting environmental responsibility.
                    </li>
                  </ul>
                  <br />
                  <br />
                  <div className="font-bold">Healthcare Integration:</div>
                  <ul className="list-disc pl-4">
                    <li>
                      Fostering partnerships between life sciences entities and
                      healthcare providers to enhance patient outcomes and
                      refine healthcare delivery mechanisms.
                    </li>
                    <li>
                      Exploring avenues for personalized medicine through
                      seamless integration with healthcare technologies and data
                      systems like electronic health records and wearables.
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
