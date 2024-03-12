import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { kaushan } from '(/lib/fonts)'
import { Badge } from './ui/badge'

const Work = () => {
  return (
    <div className="  flex space-x-6 justify-center h-[400px] border">
      {/* <Image
        src={'/symbols/lantern.png'}
        alt="Top Part of Background"
        width={288}
        height={288}
      // layout='intrinsic'
      // objectFit='contain'
      /> */}
      <Link href="https://dashboard.landsplits.com/properties">
        <Card className="w-72 h-full rounded-sm border-none text-white"
          style={{
            boxShadow: '0 7px 8px rgba(0, 0, 0, 0.6)',
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
            <div className="flex space-x-1">
              <Badge>Next.js</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Supabase</Badge>
            </div>
          </CardContent>
        </Card>
      </Link>

      <Link href="https://www.snowcones.io/">
        <Card className="w-72 h-full rounded-sm border-none text-white"
          style={{
            boxShadow: '0 7px 8px rgba(0, 0, 0, 0.6)',
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
            boxShadow: '0 7px 8px rgba(0, 0, 0, 0.6)',
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
      {/* <Image
        src={'/symbols/lantern.png'}
        alt="Top Part of Background"
        width={288}
        height={288}
      // layout='intrinsic'
      // objectFit='contain'
      /> */}
    </div>
  )
}

export default Work