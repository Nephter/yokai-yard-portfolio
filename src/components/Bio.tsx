import React from 'react'
import Image from 'next/image'
import { kaushan } from '(/lib/fonts)'
import { Separator } from './ui/separator'

const Bio = () => {
  return (
    <div className="flex justify-center space-x-4">
      {/* <div
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
        </div> */}
      <p className={`${kaushan.className} text-white `} style={{ fontSize: '2rem', lineHeight: 0, writingMode: "vertical-lr", textOrientation: 'upright' }}>Yokai Yard</p>
      {/* <div className="w-full justify-center flex">
          <Separator orientation="horizontal" className="w-10" />
        </div> */}
      {/* <div className="flex relative justify-center">
          <Image
            src={'/symbols/flower1.png'}
            alt="Top Part of Background"
            width={30}
            height={30}
          />
        </div>
        <p className={`${kaushan.className}`}>
          Embodying the elegance and precision of the katana to craft bespoke digital experiences.
        </p>
      </div> */}



    </div>
  )
}

export default Bio