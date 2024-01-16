import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative h-[112vh] bg-[#530095]">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 ml-44 pt-16 transition-opacity delay-[680ms]"
        >
          <source src="https://escalent.co/wp-content/uploads/2022/03/Escalent_HomepageLoop_1335x760-2022.webm" />
        </video>
        <div className="absolute bottom-0 right-0  mb-2 mr-2 h-80 w-[35rem] bg-[#00b5ac]"></div>
      </div>
    </main>
  );
}
