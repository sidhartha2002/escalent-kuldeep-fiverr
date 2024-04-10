import Image from "next/image";
import Link from "next/link";

import styles from "@/app/ffind.css";

export default function Home() {
  return (
    <>
      <br />
      <section
        className="CoverHeader  "
        style={{ color: "#ffffff", backgroundColor: "#530095" }}
      >
        <div className="row container mx-auto px-0 text-left">
          <div className="CoverHeader__contain col-12 col-lg-6  pl-3">
            <h4 className="CoverHeader__subtitle col-lg-11 px-0">
              CAWI RESEARCH
            </h4>
            <h1 className="CoverHeader__title  col-lg-11 px-0">
              Interview Instantly And Anywhere With CAWI Market Research
              (Online)
            </h1>

            <div className="CoverHeader__descr col-lg-10 px-0  py-3 pb-4">
              <p>
                Our core business is CATI, but in recent years we have developed
                a responsive and professional CAWI department.
              </p>
            </div>

            <div className="flex scale-90 gap-7 md:ml-5 md:scale-100">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
              >
                <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                <span className="absolute inset-0 h-full w-full rounded-md bg-white "></span>
                <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                <span className="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                  Contact
                </span>
              </a>
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
              >
                <span className="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                <span className="absolute inset-0 h-full w-full rounded-md bg-white "></span>
                <span className="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                <span className="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                  Ask a quote
                </span>
              </a>
            </div>
          </div>

          <div className="Image__inpage col-lg-6">
            <img
              width="680"
              height="800"
              className="rounded-full lg:rounded-none "
              // src="https://ffind.com/app/uploads/2021/07/cawi_2.jpg"
              src="/images/hero/inter0.jpeg"
            />
          </div>
        </div>
      </section>

      <section className="AlternativeBlocks col-12 bg-[#ff5635] text-white">
        <div className="AlternativeBlocks__wrapper AlternativeBlocks__wrapper--odd row container mx-auto text-left">
          <div className="col-12 col-lg-5 px-0  text-center">
            <img
              width="680"
              height="590"
              className="rounded-3xl lg:ml-10"
              // src="https://ffind.com/app/uploads/2021/07/cawi-1.jpg"
              src="/images/hero/inter1.jpeg"
            />
          </div>
          <div className="col-12 col-lg-6 offset-lg-1  px-0">
            <h2 className="AlternativeBlocks__title">
              The operations of online surveys
            </h2>

            <div className="AlternativeBlocks__descr py-3 pb-4 ">
              <p>
                Here, the responder will have to fill out the questionnaire on
                his own, without the help of the telephone interviewer (CATI).
                All of the data collecting, processing, and cleaning happens
                within our own software, and then it's sent to the customer in
                the format they requested.
              </p>
              <br />
              <p>
                We began utilising social media to identify respondents in
                target and interview them in 2016, but we went above and above
                by establishing a digital department with the objective of
                <strong>creating a responsive CAWI</strong>. This is because
                respondents now complete surveys immediately via their
                cellphones.
              </p>
            </div>
          </div>
        </div>

        <div className="AlternativeBlocks__wrapper AlternativeBlocks__wrapper--even row container mx-auto text-left">
          <div className="col-12 col-lg-6 px-0  text-center">
            <img
              width="680"
              height="590"
              className="rounded-3xl"
              // src="https://ffind.com/app/uploads/2021/07/cawi-2.jpg"
              src="/images/hero/inter2.jpeg"
            />
          </div>
          <div className="col-12 col-lg-6   px-0">
            <h2 className="AlternativeBlocks__title">
              The phases of CAWI research
            </h2>

            <div className="AlternativeBlocks__descr py-3 pb-4">
              <p>
                <strong>1. Managing samples and projects</strong>
                <br />
                While checking the questionnaire for quality and translation
                issues, the PM responds to client emails or arranges for the
                Social Sampling.
              </p>
              <br />
              <p>
                <strong>2. Starting the wave</strong>
                <br />
                After submitting the survey to all potential responders, we
                check up with those who either did not begin or did not finish.
              </p>
              <br />
              <p>
                <strong>3. Ensuring quality</strong>
                <br />
                Project managers and data managers check for serious
                questionnaire problems and track progress towards goals while
                data is being collected.
              </p>
              <br />
              <p>
                <strong>4. Managing data</strong>
                <br />
                Data managers are tasked with ensuring quality at every stage of
                data collecting, from designing the survey to presenting the
                results according to the client's specifications and completing
                all necessary last touches before final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className="CenterTitleText col-12 CenterTitleText--center ">
        <div className="container mx-auto px-0 text-center">
          <img
            width="126"
            height="109"
            className="CenterTitleText__img scale-110"
            src="/images/online-research-icon.png"
            // src="https://ffind.com/app/uploads/2021/07/ricerche_online_CAVI.svg"
          />
          <h2 className="CenterTitleText__title mx-auto text-xl md:text-3xl">
            The Benefits of Conducting Interviews Online
          </h2>

          <div className="CenterTitleText__descr col-12 col-lg-10 mx-auto">
            <li>
              Nowadays, everyone has a computer, a phone, and an email account.
            </li>

            <li>Perfect balance of speed and cost</li>

            <li>The results of quick polls are astounding</li>

            <li>
              Permits you to include audio, video, and graphic components into
              the survey.
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
