import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { kaushan } from '(/lib/fonts)'
import { Badge } from './ui/badge'
import { useParallax } from 'react-scroll-parallax'
import { parallaxEffects } from '(/app/parallaxEffects)'

const Work = () => {
  // const cards = useParallax<HTMLDivElement>({
  //   speed: 20,
  //   startScroll: 0,
  //   endScroll: 250
  // })
  // const work = useParallax<HTMLDivElement>({
  //   speed: 20,

  // })
  return (


    <div className="flex justify-around h-[250px] relative w-full border">
      <Link href="https://dashboard.landsplits.com/properties">
        <Card className="w-72 h-full rounded-sm border-none text-white hover:scale-105"
          style={{
            boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.8)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}
        >
          <CardHeader>
            <CardTitle className="justify-center flex">
              <p className={`${kaushan.className} text-2xl`}>Helius</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between h-3/4">
            <div>
              <p>Use Crypto to invest in real estate instantly</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <div className="flex space-x-1">
                <Badge>Next</Badge>
                <Badge>Tailwind</Badge>
                <Badge>Supabase</Badge>
              </div>
              <div className="flex space-x-1">
                <Badge>React</Badge>
                <Badge>Typescript</Badge>
                <Badge>Node</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link href="https://www.snowcones.io/">
        <Card className="w-72 h-full rounded-sm border-none text-white"
          style={{
            boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.8)',

            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}
        >
          <CardHeader>
            <CardTitle className="justify-center flex">
              <p className={`${kaushan.className} text-2xl`}>Snowcone</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between h-3/4">
            <div>
              <p>DAO creation and management platform</p>
            </div>
            <div className="flex space-x-1">
              <Badge>Next.js</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Supabase</Badge>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link href="https://kit.snowcones.io/">
        <Card className="w-72 h-full rounded-sm border-none text-white"
          style={{
            boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.8)',

            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          }}
        >
          <CardHeader>
            <CardTitle className="justify-center flex">
              <p className={`${kaushan.className} text-2xl`}>Snowcone Kit</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-between h-3/4">
            <div>
              <p>React library tool to easily add wallet connection to your Dapp </p>
            </div>
            <div className="flex space-x-1">
              <Badge>Next.js</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Supabase</Badge>
            </div>
          </CardContent>
        </Card>
      </Link>

    </div>



  )
}

export default Work