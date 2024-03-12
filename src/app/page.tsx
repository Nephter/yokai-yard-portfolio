import Image from "next/image";
import Bio from "(/components/Bio)";
import CustomSeparator from "(/components/CustomSeparator)";
import Work from "(/components/Work)";
import ExperienceCards from "(/components/ExperienceCards)";

export default function Home() {

  return (
    <div className="">
      {/* Top Image Container */}
      <div className="relative w-full h-[76vh]">
        <Image
          src="/bg3.png"
          alt="Top Part of Background"
          layout='fill'
          objectFit='cover' // Adjust how the image fits within the container
        />
      </div>

      <div className="relative z-10 -top-5 px-20">
        <CustomSeparator src={'/yArch.png'} />
      </div>

      <div className="w-full relative flex flex-col space-y-8 bg-[#020716]">

        <Bio />

        {/* <div className="w-[880px] mx-auto">
          <CustomSeparator src={'/yArch.png'} />
        </div>

        <ExperienceCards /> */}

        <div className="w-[880px] mx-auto">
          <CustomSeparator src={'/yArch.png'} />
        </div>

        <Work />

        <div className="w-[880px] mx-auto">
          <CustomSeparator src={'/yArch.png'} />
        </div>

      </div>

      {/* Bottom Image Container */}
      <div className="relative w-full h-[50vh]">
        <Image
          src="/bgBottom.png"
          alt="Bottom Part of Background"
          layout='fill'
          objectFit='cover' // Adjust how the image fits within the container
        />
      </div>
    </div>
  );
}