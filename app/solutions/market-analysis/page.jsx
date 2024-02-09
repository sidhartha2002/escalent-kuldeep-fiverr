import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="gap- flex flex-col overflow-x-hidden">
      {/* Header section */}
      <div className="w-fill relative h-fit">
        <Link href={""}>
          <Image
            src={"/images/markets-1335x480-1.jpg"}
            width={500}
            height={350}
            alt=""
            className="mb-4 mt-7 h-[100vh] w-full bg-no-repeat object-cover"
          />
        </Link>
        {/* <img src="/public/images/automotive.jpg" alt="" /> */}
        <div className="absolute left-36 top-8 z-50  mr-2 h-32 w-32">
          <img src="/logo.svg" alt="" />
        </div>
      </div>
      <div className="heading z-1 absolute left-[50px] top-[340px] h-fit w-fit">
        <p className="caption sm:text-md mb-[10px] font-medium uppercase tracking-wider text-white md:text-2xl">
          Solution
        </p>
        <h1 className="text-4xl text-white md:text-6xl">Markets</h1>
      </div>

      {/*Heading section content */}
      <div className="mb-8 mt-12 flex flex-col items-center justify-center">
        <p className="mb-6 mt-6 flex w-[90vw] flex-col justify-center text-center text-lg md:text-2xl">
          When it comes to markets, the only constant is change. The question
          is, does change spell trouble or signal opportunity? Sometimes it’s
          both. The key is knowing when, where, and how to respond. We help
          forward-looking clients assess, monitor, and measure market dynamics
          using a mix of research and analytics. Stay vigilant and act with
          foresight, with rapid-response market intelligence from Escalent.
        </p>
      </div>

      {/*section - 2 ----- card components   */}

      <section className="w-full">
        <div className="lg:gap-15 mx-8 mb-10 grid grid-cols-1 gap-10 align-middle md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {/* <div className="h-96 w-96 bg-black"></div> */}
          {/* card - 1 ------ */}
          <div className="relative mx-4 h-[380px] w-[380px] bg-[#ff5635]">
            <div className="card main-inner-dark w-fill absolute top-0  z-10 ml-10 mr-0 flex h-[340px] w-[340px] flex-col gap-8 bg-[#9A1B15] p-10">
              <Link href={""}>
                <h1 className="text-3xl text-white hover:text-[#ff5635]">
                  Market Assessment
                </h1>
              </Link>
              <p className="text-white">
                Entering new markets is tricky business. Go forth with a clear
                view and a plan for success.
              </p>
              <div className="">
                <Link href={""}>
                  <button className="font-md bg-[#ff5635] px-4 py-2 text-sm text-white hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* card - 2 ------ */}
          <div className="relative mx-4 h-[380px] w-[380px] bg-[#ff5635]">
            <div className="card main-inner-dark w-fill absolute top-0  z-10 ml-10 mr-0 flex h-[340px] w-[340px] flex-col gap-8 bg-[#9A1B15] p-10">
              <Link href={""}>
                <h1 className="text-3xl text-white hover:text-[#ff5635]">
                  Competitive Intelligence
                </h1>
              </Link>
              <p className="text-white">
                Anticipate disruption and respond decisively with intelligence
                that delivers a competitive edge.
              </p>
              <div className="">
                <Link href={""}>
                  <button className="font-md bg-[#ff5635] px-4 py-2 text-sm text-white hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* card - 3 ------ */}
          <div className="relative mx-4 h-[380px] w-[380px] bg-[#ff5635]">
            <div className="card main-inner-dark w-fill absolute top-0  z-10 ml-10 mr-0 flex h-[340px] w-[340px] flex-col gap-8 bg-[#9A1B15] p-10">
              <Link href={""}>
                <h1 className="text-3xl text-white hover:text-[#ff5635]">
                  M&A Research
                </h1>
              </Link>
              <p className="text-white">
                Make winning deals and minimize risk in the high-stakes game of
                mergers and acquisitions.
              </p>
              <div className="">
                <Link href={""}>
                  <button className="font-md bg-[#ff5635] px-4 py-2 text-sm text-white hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* card - 4 ------ */}
          <div className="relative mx-4 h-[380px] w-[380px] bg-[#ff5635]">
            <div className="card main-inner-dark w-fill absolute top-0  z-10 ml-10 mr-0 flex h-[340px] w-[340px] flex-col gap-8 bg-[#9A1B15] p-10">
              <Link href={""}>
                <h1 className="text-3xl text-white hover:text-[#ff5635]">
                  Partner Scouting
                </h1>
              </Link>
              <p className="text-white">
                Find partners that complement your brand and create long-lasting
                value.
              </p>
              <div className="">
                <Link href={""}>
                  <button className="font-md bg-[#ff5635] px-4 py-2 text-sm text-white hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                    Show me more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*section - 2 ----- card components   */}
    </main>
  );
}
