import Bio from "(/components/Bio)";
import CustomSeparator from "(/components/CustomSeparator)";
import ExperienceCards from "(/components/ExperienceCards)";
import Work from "(/components/Work)";
import { Card } from "(/components/ui/card)";
import { kaushan } from "(/lib/fonts)";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Full-screen background image container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="min-h-[170vh]"
        />
      </div>

      <div className="z-10 w-full flex justify-center mt-[65vh]">
        <Card className="relative flex flex-col items-center justify-center p-6 bg-[#020716] border-none space-y-14 ">
          {/* <Card className="z-10 absolute top-3/4 -mt-32 flex flex-col items-center justify-center p-6 bg-[#020716] border-none space-y-14"> */}
          <Bio />
          <div className="w-[900px] mx-auto">
            <CustomSeparator src={'/yArch.png'} />
          </div>
          <h1 className={`${kaushan.className} text-white text-3xl`}>Recent Work</h1>

          <Work />

          <div className="w-[900px] mx-auto">
            <CustomSeparator src={'/yArch.png'} />
          </div>
          <ExperienceCards />
        </Card>
      </div>
    </div>
  );
}
