import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '(/components/ui/accordion)'

const experiencePage = () => {
  return (
    <div className="border container">
      <div className="flex flex-col right-20 bottom-80 absolute z-10 ">
        <Link href="https://dashboard.landsplits.com/properties">
          <div className="flex items-end space-x-2 ">
            <p className="text-3xl">
              Helius /
            </p>
            <p className="pb-0.5">
              crypto real estate investment platform
            </p>
          </div>
        </Link>
        <Link href="https://www.snowcones.io/">
          <div className="flex items-end space-x-2 ">
            <p className="text-3xl">
              Snowcone /
            </p>
            <p className="pb-0.5">
              DAO creation platform
            </p>
          </div>
        </Link>
        <Link href="https://kit.snowcones.io/">
          <div className="flex items-end space-x-2 ">
            <p className="text-3xl">
              Snowcone Kit /
            </p>
            <p className="pb-0.5">
              crypto wallet node package
            </p>
          </div>
        </Link>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-end space-x-2 ">
                <p className="text-xl">
                  Javascript
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex space-x-4 items-stretch">
                <div className="w-[400px]">
                  Helius is a crypto real estate investment platform that allows users to invest in real estate using cryptocurrency. Users can invest in properties, earn rental income, and sell their shares to other users. The platform is built on the Ethereum blockchain and uses smart contracts to manage property ownership and rental income distribution.
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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

export default experiencePage