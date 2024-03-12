import React from 'react'
import Image from 'next/image'
import { kaushan } from '(/lib/fonts)'
import { Separator } from './ui/separator'

const Bio = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="p-4 relative"
        style={{
          boxShadow: 'inset 0 7px 8px rgba(0, 0, 0, 0.6)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}>
        <Image
          src={'/bgTop.png'}
          alt="Top Part of Background"
          width={288}
          height={450}
          layout='fixed'
        // objectFit='cover' 
        />
      </div>
      <div
        className="flex-col flex space-y-4 text-center w-72 justify-center align-center rounded-sm text-white"
        style={{
          boxShadow: 'inset 0 7px 8px rgba(0, 0, 0, 0.6)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}
      >
        <div className="flex relative justify-center">
          <Image
            src={'/symbols/hex1.png'}
            alt="Top Part of Background"
            width={50}
            height={50}
          />
        </div>
        <h1 className={`${kaushan.className} text-5xl`}>Yokai Yard</h1>
        {/* <div className="w-full justify-center flex">
          <Separator orientation="horizontal" className="w-10" />
        </div> */}
        <div className="flex relative justify-center">
          <Image
            src={'/symbols/flower1.png'}
            alt="Top Part of Background"
            width={30}
            height={30}
          />
        </div>
        <p>
          Embodying the elegance and precision of the katana to craft bespoke digital experiences.
        </p>
      </div>

      <Image
        src={'/bgBottom.png'}
        alt="Top Part of Background"
        width={288}
        height={288}
      // layout='intrinsic'
      // objectFit='contain'
      />

    </div>
  )
}

export default Bio