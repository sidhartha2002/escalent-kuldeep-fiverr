"use client";
import HoverCarousel from "@/components/HoverCarousel/HoverCarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative h-[112vh] bg-[#530095]">
        <video
          autoPlay
          muted
          loop
          className="absolute bottom-0 ml-44 pt-16 transition-opacity delay-[680ms]"
        >
          <source src="https://escalent.co/wp-content/uploads/2022/03/Escalent_HomepageLoop_1335x760-2022.webm" />
        </video>
        <div className="absolute bottom-0 right-0  mr-2 h-80 w-[35rem] bg-[#00b5ac]"></div>
        <div className="absolute left-36 top-8 z-40  mr-2 h-32 w-32 ">
          <img src="/logo.svg" alt="" />
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium">Illumination accelerated.</h1>
        <p className="mt-6 flex flex-col justify-center text-center text-2xl">
          We are catalysts of progress in industries facing disruption, helping
          brands <br /> translate human and market behaviors into ideas that
          change the world.
        </p>
        <Link
          href={""}
          className="text-md mt-6 flex flex-col justify-center text-center hover:font-bold hover:text-[#530095]"
        >
          Learn More
        </Link>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center">
        <h1 className="mb-10 text-2xl font-medium">Choose Your Industry</h1>
        <HoverCarousel />
      </div>
    </main>
  );
}
