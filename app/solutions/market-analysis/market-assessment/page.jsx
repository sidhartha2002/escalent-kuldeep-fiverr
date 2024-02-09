import Image from "next/image";
import Link from "next/link";

// THE ISSUE HERE IS WE CAN'T IMPORT useState FOR SERVER COMPONENTS......

export default function Home() {
  return (
    <main className="gap- flex flex-col overflow-x-hidden">
      {/* Header section */}
      <div className="w-fill relative h-fit">
        <Link href={""}>
          <Image
            src={"/images/market-assessment.jpg"}
            width={500}
            height={350}
            alt=""
            className="mb-4 mt-7 h-[100vh] w-full bg-no-repeat object-cover"
          />
        </Link>
        {/* <img src="/public/images/automotive.jpg" alt="" /> */}
        <div className="absolute left-36 top-8 z-50  mr-2 h-32 w-32 ">
          <img src="/logo.svg" alt="" />
        </div>
      </div>
      <div className="heading z-1 absolute left-[50px] top-[300px] h-fit w-fit">
        <p className="caption sm:text-md mb-[10px] font-medium uppercase tracking-wider text-white md:text-2xl">
          Solutions | Markets
        </p>
        <h1 className="text-4xl text-white md:text-6xl">
          Market <br />
          Assessment
        </h1>
      </div>
      {/* header section content down */}
      <div className="w-fill h-auto">
        <div className=" flex flex-col items-center justify-center gap-6 py-8 text-center md:px-28">
          <h1 className="w-fill text-2xl font-bold">
            New market entry is high risk, high reward
          </h1>
          <p className="w-fill mx-10 text-lg">
            Global markets are evolving day by day. Let competitors swoop in
            first, and your growth opportunities get harder to find. Businesses
            need to know where to play and how to win. They need comprehensive
            and predictive global market opportunity assessments for successful
            new market entry. Be ready for your next window of opportunity.
          </p>
        </div>
      </div>
      {/* section - 1 (light gray)*/}
      <div className="w-fill h-auto bg-[#f0f0f0]">
        <div className="mx-10 mb-8 mt-8 flex flex-col items-center justify-center gap-14 py-4 lg:flex-row">
          <Image
            src={"/images/market-assessment-2.jpg"}
            width={250}
            height={250}
            alt=""
            className="mb-4 mt-7 h-[320px] w-[320px] lg:w-1/2"
          />
          <div className="w-fill flex flex-col justify-center gap-6 text-center md:mx-10 md:text-left">
            <h2 className="text-left text-2xl font-semibold text-[#9a1b15]">
              A new market entry demands a holistic view
            </h2>
            <p className="text-left tracking-tighter">
              New market entry is a game of high risk, high reward. A brand's
              formula for success in one geography or category can backfire in
              another. A host of factors are at play with any new market entry.
              Market-specific economic drivers can impact buying power and price
              sensitivity. Complex social and cultural forces shape perception
              and behavior. Not to mention government and regulatory hurdles,
              intricate distribution ecosystems, and well-established
              competitors in your way.
            </p>
            <p className="text-left tracking-tighter">
              Escalent helps expansion-focused brands reformulate for success.
              We closely assess opportunity and hedge risk with an
              all-encompassing, geographically nuanced market assessment to
              inform your next strategic market entry.
            </p>
          </div>
        </div>
      </div>
      {/*  section - 2 =----------*/}
      <div className="w-fill h-auto bg-[#f0f0f0]">
        <div className="mx-10 mb-8 mt-8 flex flex-col items-center justify-center gap-14 py-4 lg:flex-row">
          <h1 className="w-fill text-left text-2xl font-semibold text-[#9a1b15] lg:w-[1400px]">
            AMPlify your power to win with a new market entry framework
          </h1>
          <div className="w-fill flex flex-col justify-center gap-4 text-center md:mx-10 md:text-left">
            <p className="text-left tracking-tighter">
              Using multiple methodologies and data sources, Escalent gives you
              a comprehensive view of risk and reward. We'll often start with a
              customized Assessment of Market Potential (AMP). The AMP looks at
              many market factors in conjunction with your core brand
              proposition, product benefits, and your ability to deliver in the
              market. We consider a mix of market externalities and your
              business strengths to recommend priority target markets. So,
              you'll know where to play and how to win.
            </p>
            <p className="text-left tracking-tighter">
              Escalent helps expansion-focused brands reformulate for success.
              We closely assess opportunity and hedge risk with an
              all-encompassing, geographically nuanced market assessment to
              inform your next strategic market entry.
            </p>
          </div>
        </div>
      </div>
      {/* section ... -3 ..Maroon........... */}
      <div className="w-fill my-[50px] h-auto  bg-[#9a1b15] px-10 py-12">
        <div className="w-fill flex h-[160px] flex-col flex-wrap items-center justify-between gap-6 lg:flex-row">
          <div className="flex flex-col gap-4 text-center text-white lg:text-left">
            <h2 className="text-3xl font-medium">
              Win in new markets and defend what's yours.
            </h2>
            <p className="text-md font-normal">
              Ask about our strategic market assessment and new market entry
              support.
            </p>
          </div>
          <div className="">
            <Link href={""}>
              <button className="bg-[#ff5635] px-4 py-2 text-sm font-semibold text-white hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
                Show me more
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* section ......4 ........... */}
      <div className="my-[50px] flex h-fit flex-col gap-28 px-10 py-12">
        <h2 className="text-center text-3xl font-medium text-gray-900">
          Learn from our clients' success in a market assessment case study
        </h2>
        {/* card -1 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
            <Link href={""}>
              <Image
                src={"/images/Tech-768x576-iStock.jpg"}
                width={600}
                height={500}
                alt=""
                className="absolute left-0 top-0  z-10 h-96 "
              />
            </Link>
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <Link href={""}>
              <h2 className="text-2xl font-medium text-[#ff5635] hover:text-[#46b7aa]">
                Using secondary and qualitative research to build a generative
                AI market strategy
              </h2>
            </Link>
            <p>
              Leveraging expert research to help an AI/ML provider carve out a
              differentiated space in the rapidly budding generative AI market
            </p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                Show me more
              </button>
            </Link>
          </div>
        </div>
        {/* card -2 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#ff5635] lg:-ml-10"></div>
            <Link href={""}>
              <Image
                src={"/images/success-stories-global-manufacturer-expands.jpg"}
                width={600}
                height={500}
                alt=""
                className="absolute left-0 top-0  z-10 h-96 "
              />
            </Link>
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <Link href={""}>
              <h2 className="text-2xl font-medium text-[#ff5635] hover:text-[#46b7aa]">
                Global manufacturer expands footprint with a market opportunity
                assessment
              </h2>
            </Link>
            <p>Insights-driven planning for a bold entry into new markets</p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:text-[#46b7aa]">
                Show me more
              </button>
            </Link>
          </div>
        </div>
        {/* card -3 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
            <Link href={""}>
              <Image
                src={"/images/success-stories-driving-growth-markets.jpg"}
                width={600}
                height={500}
                alt=""
                className="absolute left-0 top-0  z-10 h-96 "
              />
            </Link>
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <h2 className="text-2xl font-medium text-[#ff5635]">
              Renewing relevance and driving growth markets for mature brands
            </h2>
            <p>
              An opportunity scan reveals emerging trends and unmet consumer
              needs across six product segments and twelve geographies
            </p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:bg-[#530095]">
                Show me more
              </button>
            </Link>
          </div>
        </div>
        {/* card -4 ---- */}
        <div className="relative flex flex-col justify-between gap-8 bg-gray-100 lg:ml-12 lg:mr-12 lg:flex-row lg:items-center">
          {/* Img + text wrapper*/}
          <div className="h-96 w-96">
            <div className="absolute left-0 top-0 mt-10 h-96 w-[40rem] bg-[#530095] lg:-ml-10"></div>
            <Link href={""}>
              <Image
                src={
                  "/images/success-stories-guiding-tourism-marketing-strategy.jpg"
                }
                width={600}
                height={500}
                alt=""
                className="absolute left-0 top-0  z-10 h-96 "
              />
            </Link>
          </div>
          <div className="h-fill flex w-full flex-col gap-4 lg:w-1/3">
            <p className="mt-5 text-sm ">SUCCESS STORIES</p>
            <h2 className="text-2xl font-medium text-[#ff5635]">
              Guiding tourism marketing strategy & market sizing: A destination
              marketing case study
            </h2>
            <p>Defining the 'size of the prize' in wellness tourism</p>
            <Link href={""}>
              <button className="text-sm font-semibold text-[#ff5635] hover:bg-[#530095]">
                Show me more
              </button>
            </Link>
          </div>
        </div>
        <div className="">
          {/* <Link href={""}> */}
          <button className="bg-[#ff5635] px-4 py-2 text-sm font-medium text-white hover:bg-[#530095] hover:text-white  md:px-6 md:py-3">
            LOAD MORE
          </button>
          {/* </Link> */}
        </div>
      </div>

      {/*cdvdv  */}
    </main>
  );
}
