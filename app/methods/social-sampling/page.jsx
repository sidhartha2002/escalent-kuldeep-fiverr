import Image from "next/image";
import Link from "next/link";

import styles from "@/app/ffind.css";

export default function Home() {
  return (
    <>
      <br />
      <section
        class="CoverHeader  "
        style={{ color: "#ffffff", backgroundColor: "#530095" }}
      >
        <div class="row container mx-auto px-0 text-left">
          <div class="CoverHeader__contain col-12 col-lg-6  pl-3">
            <h4 class="CoverHeader__subtitle col-lg-11 px-0">
              SOCIAL SAMPLING
            </h4>
            <h1 class="CoverHeader__title  col-lg-11 px-0">
              Rapid Insights, Every Time:
            </h1>

            <div class="CoverHeader__descr col-lg-10 px-0  py-3 pb-4">
              <p>
                Locate and interview a consistently responsive sample, ensuring
                lightning-fast feedback, even against the odds. Finding and
                interviewing a new and responsive sample in a short period of
                time is possible regardless of the incidence rate.
              </p>
            </div>

            <div className="flex scale-90 gap-7 md:ml-5 md:scale-100">
              <a
                href="#_"
                class="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
              >
                <span class="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                <span class="absolute inset-0 h-full w-full rounded-md bg-white "></span>
                <span class="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                <span class="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                  Contact
                </span>
              </a>
              <a
                href="#_"
                class="group relative inline-flex items-center justify-center rounded-md bg-gray-800 px-6 py-3 text-lg font-medium tracking-tighter text-white"
              >
                <span class="absolute inset-0 ml-1 mt-1 h-full w-full rounded-md bg-purple-600 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:mt-0"></span>
                <span class="absolute inset-0 h-full w-full rounded-md bg-white "></span>
                <span class="absolute inset-0 h-full w-full rounded-md bg-purple-600 opacity-0 transition-all delay-100 duration-200 ease-in-out group-hover:opacity-100 "></span>
                <span class="relative text-purple-600 transition-colors delay-100 duration-200 ease-in-out group-hover:text-white">
                  Ask a quote
                </span>
              </a>
            </div>
          </div>

          <div class="Image__inpage col-lg-6">
            <img
              width="680"
              height="800"
              class=""
              src="https://ffind.com/app/uploads/2021/07/social-sampling.jpg"
            />
          </div>
        </div>
      </section>

      <section class="AlternativeBlocks col-12 bg-[#ff5635] text-white">
        <div class="AlternativeBlocks__wrapper AlternativeBlocks__wrapper--odd row container mx-auto text-left">
          <div class="col-12 col-lg-5 px-0  text-center">
            <img
              width="680"
              height="590"
              src="https://ffind.com/app/uploads/2021/07/social-sampling-1.jpg"
            />
          </div>
          <div class="col-12 col-lg-6 offset-lg-1  px-0">
            <h2 class="AlternativeBlocks__title">
              Identify potential respondents
            </h2>

            <div class="AlternativeBlocks__descr py-3 pb-4 ">
              <p>
                Social sampling yields excellent results when you are seeking a
                highly targeted audience, when you need to interview a profiled
                audience **with a low percentage of incidence rate**, or when
                you need to interview a large audience and collect data
                efficiently in a short amount of time.
              </p>
              <br />
              <p>
                Our ability to **get surveyed respondents** for the surveys
                utilising inbound approaches on social networks has allowed us
                to boast for years that we can locate (im)possible respondents.
                To take things to the next level, you'll need a depth sounder
                and deep diving skills if you want to find a needle amid a sea
                of trash.
              </p>
            </div>
          </div>
        </div>

        <div class="AlternativeBlocks__wrapper AlternativeBlocks__wrapper--even row container mx-auto text-left">
          <div class="col-12 col-lg-6 px-0  text-center">
            <img
              width="680"
              height="590"
              src="https://ffind.com/app/uploads/2021/07/social-sampling-2.jpg"
            />
          </div>
          <div class="col-12 col-lg-6   px-0">
            <h2 class="AlternativeBlocks__title">
              How to get respondents in 4 steps
            </h2>

            <div class="AlternativeBlocks__descr py-3 pb-4">
              <p>
                <strong>1. Identifying the objective</strong>
                <br />
                The research institution specifies a target audience, and our
                PMs and SMMs assess and characterise that audience accordingly.
              </p>
              <br />
              <p>
                <strong>2. Social Network Selection</strong>
                <br />
                Social media marketers choose the platform (e.g., Facebook,
                Twitter, TikTok, etc.) where their target demographic spends the
                most time. For business-to-business interactions, LinkedIn is
                superior than Facebook.
              </p>
              <br />
              <p>
                <strong>3. Choice of methodology</strong>
                <br />
                We can either choose to bring the respondent directly into the
                online survey (Social to CAWI) or collect their contact data to
                interview them via CATI, webcam or VAI Research.
              </p>
              <br />
              <p>
                <strong>3. Methodology Selection</strong>
                <br />
                The respondent may be brought into the web-based questionnaire
                immediately (Social to CAWI) or their contact information can be
                collected to do an interview by CATI, webcam, or VAI Research.
              </p>
              <br />
              <p>
                <strong>4. advertising on social media</strong>
                <br />
                Only users who interact with our social media ads based on their
                interests, demographics, and past actions will see them. In
                order to participate in the interview, participants must first
                access the survey or landing page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section class="CenterTitleText col-12 CenterTitleText--center ">
        <div class="container mx-auto px-0 text-center">
          <img
            width="126"
            height="109"
            class="CenterTitleText__img"
            src="https://ffind.com/app/uploads/2021/07/social_sampling.svg"
          />
          <h2 class="CenterTitleText__title mx-auto text-xl md:text-3xl">
            The Benefits of Social Sampling
          </h2>

          <div class="CenterTitleText__descr col-12 col-lg-10 mx-auto">
            <li>
              We aim to find the optimal time and place to reach the ideal
              response.
            </li>
            <li>
              Since social algorithms display the ad to the most engaged
              audience, social sampling is a better alternative to panels for
              finding motivated respondents who answer because the subject is
              interesting to them.
            </li>
            <li>
              Instead of finding individuals who take part in hundreds of
              surveys on a monthly basis for incentives, Social Sampling only
              finds audiences who are relevant to the survey subject.
            </li>
            <li>
              The audience of social media platforms is quite representative, as
              over 50% of the global population is active on these platforms.
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
