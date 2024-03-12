import React from 'react'
import Image from 'next/image'
import { Separator } from './ui/separator'

const CustomSeparator = ({ src }: { src: string }) => {
  return (
    <div className=" relative flex space-x-4 items-center">
      <div className="flex-grow">
        <Separator orientation="horizontal" className="bg-red-700 h-[2px]" />
      </div>

      <Image
        src={`${src}`}
        alt={`${src}`}
        width={40}
        height={40}
      />

      <div className="flex-grow">
        <Separator orientation="horizontal" className="bg-red-700 h-[2px]" />
      </div>
    </div>
  )
}

export default CustomSeparator