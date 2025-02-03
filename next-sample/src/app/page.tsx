import AudioPlayer from "@/components/AudioPlayer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-white">
        {" "}
        In this Website you will be getting all the selfmade documention of
        Next.js, React.js{" "}
      </div>
      <div className="flex gap-8 ">
       
        <Link href="/next">
          <button className="bg-blue-400"> Next js Docs page</button>
        </Link>
        <Link href="/react">
          <button className="bg-blue-400"> React js Docs page</button>
        </Link>
        <AudioPlayer />

        
      </div>
    </div>
  );
}
