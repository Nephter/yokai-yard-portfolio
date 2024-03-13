'use client'
import Bio from "(/components/Bio)";
import CustomSeparator from "(/components/CustomSeparator)";
import ExperienceCards from "(/components/ExperienceCards)";
import Work from "(/components/Work)";
import { Card } from "(/components/ui/card)";
import { kaushan } from "(/lib/fonts)";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <div className="">

      <div className="container relative px-0 h-[100vh] border-red-600  custom-shadow">
        <Image
          src={'/background/background.png'}
          alt="background"
          layout="fill"
          style={{ position: 'absolute', top: '0', right: '0', zIndex: -1, transform: 'rotate(0.5turn)' }}
        />
        <Parallax speed={-15}>
          <Image
            src={'/background/moon.png'}
            alt="moon"
            width={800}
            height={800}
            // priority={false}
            style={{ position: 'absolute', top: '-200px', right: '0', zIndex: 11 }}
          />
        </Parallax>
        {/* <Image
          src={'/background/background-moon.png'}
          alt="background"
          fill
          style={{ position: 'absolute', top: '0', right: '0', zIndex: -1 }}
        /> */}

        {/* --- 1 --- */}
        <div className="absolute bottom-[50px] w-full"
          style={{
            // paddingTop: '56.25%',
            height: '600px',
          }}>
          <Image
            src={'/background/wave3.png'}
            alt="background"
            fill
          />
        </div>

        {/* --- 2 --- */}
        <div className="absolute -bottom-[100px] w-full -scale-x-100"
          style={{
            // paddingTop: '56.25%',
            height: '600px',
          }}>
          <Image
            src={'/background/wave4.png'}
            alt="background"
            fill
          />
        </div>

        {/* --- 3 --- */}
        <div className="absolute -bottom-[200px] w-full"
          style={{
            // paddingTop: '56.25%',
            height: '600px',
          }}>
          <Image
            src={'/background/wave1.png'}
            alt="background"
            fill
          />
        </div>

        {/* --- 4 --- */}
        <div className="absolute -bottom-[340px] w-full"
          style={{
            // paddingTop: '56.25%',
            height: '600px',
          }}>
          <Image
            src={'/background/wave2.png'}
            alt="background"
            fill
          />
        </div>


      </div>

      <div className="pb-[100vh]" />
    </div>
  );
}
