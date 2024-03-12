import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const GithubPage = () => {

  return (
    <div >
      <div className='flex flex-col right-20 bottom-80 absolute z-10'>
        <div className="flex-col text-start">
          <Link href="https://github.com/Yokai-Yard">
            <div className="flex items-end space-x-2 ">
              <p className="text-3xl">
                Yokai Yard /
              </p>
              <p className="pb-0.5">
                github organization
              </p>
            </div>
          </Link>
          <Link href="https://github.com/sirbenchalot757">
            <div className="flex items-end space-x-2 ">
              <p className="text-3xl">
                Head Boy /
              </p>
              <p className="pb-0.5">
                kyle forkey
              </p>
            </div>
          </Link>
          <Link href="https://github.com/nephter">
            <div className="flex items-end space-x-2 ">
              <p className="text-3xl">
                Second Boy /
              </p>
              <p className="pb-0.5">
                reid liberato
              </p>
            </div>
          </Link>

        </div>
      </div>
      <div>
        <Image
          src={`/torii1.png`}
          alt="Default Property Image"
          layout='fill'
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </div>
    </div>
  )
}

export default GithubPage