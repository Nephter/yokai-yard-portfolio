'use client'
import Bio from "(/components/Bio)";
import CustomSeparator from "(/components/CustomSeparator)";
import ExperienceCards from "(/components/ExperienceCards)";
import Work from "(/components/Work)";
import { Card, CardContent, CardHeader, CardTitle } from "(/components/ui/card)";
import { kaushan } from "(/lib/fonts)";
import Image from "next/image";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";
import Wave3 from '/background/Wave3.svg'
import { parallaxEffects } from "./parallaxEffects";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "(/components/ui/dialog)";
import { Button } from "(/components/ui/button)";





export default function Home() {

  const moon = useParallax<HTMLDivElement>({
    speed: 10,
    startScroll: 0,
    endScroll: 200
  });

  // const wave1 = useParallax<HTMLDivElement>({
  //   speed: 20,
  //   startScroll: 0,
  //   endScroll: 300
  // })
  const work = useParallax<HTMLDivElement>({
    speed: 10,
    startScroll: 100,
    endScroll: 200
  })

  const wave3 = useParallax<HTMLDivElement>({
    speed: -20,
    startScroll: 100,
    endScroll: 350,
  });
  // const wave4 = useParallax<HTMLDivElement>({
  //   speed: -20,
  //   startScroll: 100,
  //   endScroll: 500,
  // });

  const WaveTwo = () => {
    const wave2 = useParallax<HTMLDivElement>({
      speed: -20,
      startScroll: 100,
      endScroll: 350,
    });
    return (
      <div>
        <div
          className="absolute top-[1150px] z-11 w-full"
          style={{ height: '600px' }}
        >
          <Image
            src={'/background/wave2.png'}
            alt="background"
            quality={100}
            fill
          />
        </div>

        <div
          ref={wave2.ref}
          className="absolute top-[900px] z-11 w-full"
          style={{ height: '600px' }}
        >
          <Image
            src={'/background/wave2.png'}
            alt="background"
            quality={100}
            fill
          />
        </div>
        <div className="absolute top-[1370px] z-3 w-full flex justify-center">
          <ExperienceCards />
        </div>
      </div>
    )
  }

  return (
    <div className="">

      <div className="container relative px-0 h-[100vh] custom-shadow">

        <div className="absolute top-20 left-[165px] w-28">
          <p className="text-white">

            Embodying the elegance and precision of the katana to craft bespoke digital experiences
          </p>
        </div>
        <div className="absolute top-20 left-[100px]">
          <p
            className={`${kaushan.className} text-white rounded-sm w-12 pl-4 `}
            style={{
              // backgroundImage: 'url(/background/yokaiPattern2.png)',
              // boxShadow: ' 7px 7px 8px rgba(0, 0, 0, 0.9)',
              fontSize: '2.5rem',
              lineHeight: 0,
              writingMode: "vertical-lr",
              textOrientation: 'upright'
            }}
          >
            Yokai Yard
          </p>
        </div>

        <Image
          src={'/background/background.png'}
          alt="background"
          layout="fill"
          quality={100}
          style={{ position: 'absolute', top: '0', right: '0', zIndex: -1, transform: 'rotate(0.5turn)' }}
        />

        <div ref={moon.ref} style={{ position: 'absolute', top: '-150px', right: '0', zIndex: 1 }}>
          <Image
            src={'/background/moon.png'}
            alt="moon"
            width={800}
            height={800}
            quality={100}
          />
        </div>

        {/* ----------------------- 1 -------------------- */}
        <div className="absolute top-[600px] z-2 w-full h-full">
          <img src={'/background/Wave3.svg'} alt="svg1" />
        </div>

        <div ref={work.ref} className="absolute top-[1150px] z-3 w-full h-full">
          <Work />
        </div>


        {/* ----------------------- 22 ----------------------- */}
        {/* <div
          className="absolute top-[1150px] z-11 w-full"
          style={{ height: '600px' }}
        >
          <Image
            src={'/background/wave2.png'}
            alt="background"
            quality={100}
            fill
          />
        </div>

        <div
          ref={wave2.ref}
          className="absolute top-[900px] z-11 w-full"
          style={{ height: '600px' }}
        >
          <Image
            src={'/background/wave2.png'}
            alt="background"
            quality={100}
            fill
          />
          </div>
          <div className="absolute top-[1370px] z-3 w-full flex justify-center">
          <ExperienceCards />
        </div> */}

        <WaveTwo />

        {/* ----------------------- 333 ----------------------- */}
        <div
          // ref={wave3.ref}
          className="absolute top-[1600px] w-full"
          style={{ height: '600px' }}
        >
          <Image
            src={'/background/wave3.png'}
            alt="background"
            quality={100}
            fill
          />
        </div>
        <div
          ref={wave3.ref}
          className="absolute top-[950px] w-full"
          style={{ height: '600px' }}
        >
          <Image
            src={'/background/wave3.png'}
            alt="background"
            quality={100}
            fill
          />
        </div>


        {/* ----------------------- 4444 ----------------------- */}
        <div
          // ref={wave4.ref}
          className="absolute top-[2250px] w-full"
          style={{ height: '600px' }}
        >
          <Image
            src={'/background/wave4.png'}
            alt="background"
            quality={100}
            fill
          />
        </div>

        <div className="flex justify-center absolute top-[1850px] w-full">


          <Dialog>
            <DialogTrigger >
              <Card
                className="w-[380px] rounded-sm border-none text-white"
                style={{
                  boxShadow: ' 7px 7px 8px rgba(0, 0, 0, 0.6)',
                  backgroundImage: 'url(/background/pattern2.png)'
                }}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center ">
                    <p className={`${kaushan.className} text-3xl`}>
                      Yokai Yard
                    </p>
                    <Image
                      src={'/background/moon.png'}
                      alt='little moon'
                      height={100}
                      width={100}
                    />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <div className="flex flex-col space-y-2">
                    <p>
                      Kyle Forkey
                    </p>
                    <p>
                      Reid Liberato
                    </p>
                  </div>
                  <div className="w-[40px] h-[40px] mr-2 justify-end flex">

                    <Image
                      src={'/reidQR.png'}
                      alt="Reid QR"
                      width={60}
                      height={45}
                    />
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="flex items-center justify-center w-min">
              <DialogHeader>
                <DialogDescription className="flex">
                  <div className="flex w-[300px] h-[300px]">
                    <Image
                      src={'/reidQR.png'}
                      alt="Reid QR"
                      width={400}
                      height={400}
                    />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="container pb-[40vh] custom-shadow" />
    </div>
  );
}
