'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const HeaderNav = () => {

  return (
    <div className="flex w-full absolute z-20 justify-between top-0 pt-20 pl-15 pr-20 container">
      <Link href="/work" className="text-white cursor-pointer">
        Work
      </Link>
      <Link href="/experience" className=" text-white cursor-pointer">
        Experience
      </Link>
      <Link href="/" className=" text-white cursor-pointer">
        <div className="flex relative -top-3">
          <Image
            src="/yArch.png"
            alt="Default Property Image"
            width="50"
            height="50"
            className="relative z-20 -mt-1"
            quality={100}
          />
          <div className="flex-col -space-y-2 -ml-2 pt-0.5">
            <p className="text-white">
              okai
            </p>
            <p className="relative text-white -pl-1">
              ard
            </p>
          </div>
        </div>
      </Link>
      <Link href="/github" className=" text-white cursor-pointer">
        Github
      </Link>
      <Link href="/contact" className=" text-white cursor-pointer">
        Contact
      </Link>
    </div>
  )
}

export default HeaderNav