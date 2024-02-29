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
              WEBCAM INTERVIEWS
            </h4>
            <h1 class="CoverHeader__title  col-lg-11 px-0">
              Market Research Augmented with Webcam-based interviews
            </h1>

            <div class="CoverHeader__descr col-lg-10 px-0  py-3 pb-4">
              <p>
                Interview your respondents while looking them in the eyes, break
                down physical barriers to get deeper data.
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
              src="https://ffind.com/app/uploads/2021/07/webcam-interview.jpg"
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
              src="https://ffind.com/app/uploads/2021/07/webcam-interview-1.jpg"
            />
          </div>
          <div class="col-12 col-lg-6 offset-lg-1  px-0">
            <h2 class="AlternativeBlocks__title">
              Online video chats for both qualitative and quantitative studies
            </h2>

            <div class="AlternativeBlocks__descr py-3 pb-4 ">
              <p>
                There is a 12-person workstation in the Focus Room in the
                Italian FFIND headquarters, and there is also a viewing room
                nearby. <strong>Quantitative research is our speciality</strong>
                , and we have been conducting video interviews for this purpose
                for quite some time, even before the advent of lockdowns.
              </p>
              <br />
              <p>
                Since the video interview allows for the analysis of mimics,
                <strong>tone of voice, and behaviour of the respondents</strong>
                , the research goes from quantitative to quantitative 2.0.
                Neuromarketing analysis for sentiment analysis may thereafter be
                applied to the video content.
              </p>
            </div>
          </div>
        </div>

        <div class="AlternativeBlocks__wrapper AlternativeBlocks__wrapper--even row container mx-auto text-left">
          <div class="col-12 col-lg-6 px-0  text-center">
            <img
              width="680"
              height="590"
              src="https://ffind.com/app/uploads/2021/07/webcam-interview-2.jpg"
            />
          </div>
          <div class="col-12 col-lg-6   px-0">
            <h2 class="AlternativeBlocks__title">
              The steps of conducting interviews using webcam
            </h2>

            <div class="AlternativeBlocks__descr py-3 pb-4">
              <p>
                <strong>1. Social sampling or sampling</strong>
                <br />
                We validate screening criteria and plan a day and time to do the
                video interview by conducting a quick survey with the
                responders.
              </p>
              <br />
              <p>
                <strong>
                  2. double-check everything before the video call.
                </strong>
                <br />
                One of our employees calls the responder a few days before to
                the interview to confirm the time and make sure they are
                prepared.
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
                <strong>3. Get ready for the set and the action!</strong>
                <br />
                We go through a brief warmup and soundcheck with our
                interviewees.
              </p>
              <br />
              <p>
                <strong>4. Editing</strong>
                <br />
                Following data gathering, we supply the research institution
                with a condensed version that highlights the most important
                aspects so that they may present a high-quality film to their
                customer.
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
            src="https://ffind.com/app/uploads/2021/07/interview.svg"
          />
          <h2 class="CenterTitleText__title mx-auto">
            The Benefits of Interviews Conducted Through Webcam
          </h2>

          <div class="CenterTitleText__descr col-12 col-lg-10 mx-auto">
            <li>
              These days, people all around the globe utilise video calls on a
              regular basis.
            </li>
            <li>
              Recruiting of respondents is done in strict accordance with the
              target analysis's criteria.
            </li>
            <li>
              There are new possibilities for both conventional qualitative
              research and quantitative investigations that use video.
            </li>
            <li>
              The research benefits from the respondents' active participation
              and the depth of information they often supply.
            </li>
            <li>
              Participants are able to physically examine the product, which is
              an advantage of conducting product testing at a distance.
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
