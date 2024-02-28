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
            <h4 class="CoverHeader__subtitle col-lg-11 px-0">ATI FIELDWORK</h4>
            <h1 class="CoverHeader__title  col-lg-11 px-0">
              Perform CATI surveys via phone with experienced professionals
            </h1>

            <div class="CoverHeader__descr col-lg-10 px-0  py-3 pb-4">
              <p>
                Count on our extensive experience in conducting national and
                international CATI interviews via telephone.
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
              Explaining the process of telephone surveys
            </h2>

            <div class="AlternativeBlocks__descr py-3 pb-4 ">
              <p>
                During the telephone interview, the survey is displayed on the
                computer screen. The interviewer records the pre-programmed
                closed responses and types the open-ended answers while speaking
                with the respondent. All data is collected within our CATI
                software and funnelled into a central container for processing,
                cleaning, and delivery to the client in their preferred design
                (SPSS, ASCII, CSV, XLS).
              </p>
              <br />
              <p>
                Every year, we conduct interviews with over a million
                respondents globally. Our call centre is now fully remote,
                staffed with 32+ native language proficient interviewers,
                providing coverage in over 75 countries. In the year 2021, the
                call centre was expanded to accommodate home-based operators. In
                2020, this activity amalgamated under the name of CATI@home, the
                biggest call centre specifically designed for market research.
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
                <strong>1. Managing Projects and Samples</strong>
                <br />
                The project manager ensures all necessary steps are taken to set
                up the research study, including sourcing the best samples,
                coordinating with the fieldwork department, arranging
                translations if necessary, and overall optimising for a
                successful project.
              </p>
              <br />
              <p>
                <strong>2.Commencement of data collection</strong>
                <br />
                Telephone interviewers, when well-trained, initiate the data
                collection process.
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
                <strong>3. Quality control</strong>
                <br />
                Supervisors closely observe interviewers during data collection
                to ensure their work meets industry standards, reporting any
                uncertainties to the project manager.
              </p>
              <br />
              <p>
                <strong>4. Managing Data</strong>
                <br />
                From the start of the research study to the final delivery of
                the datafile, data managers ensure data quality and process it
                according to the client's specifications.
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
          <h2 class="CenterTitleText__title mx-auto">
            The benefits of using telephone surveys
          </h2>

          <div class="CenterTitleText__descr col-12 col-lg-10 mx-auto">
            <li>
              Compared to other quantitative approaches, the survey's 4-5%
              dropout rate is much lower.
            </li>

            <li>
              The interview is conducted in real-time, allowing the supervisor
              to closely observe and adjust the results of the data collecting.
            </li>

            <li>
              It is the best approach for doing business-to-business and
              business-to-consumer market research globally.
            </li>

            <li>
              The interviewer leads the interviewee through the questions on the
              survey.
            </li>

            <li>
              This approach permits end-to-end monitoring to the greatest extent
              possible.
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
