import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const contactPage = () => {
  return (
    <div className="border container">
      <div className="flex flex-col right-20 bottom-52 absolute z-10 ">
        <div className="flex items-end space-x-2 ">
          <p className="text-3xl">
            Kyle Forkey /
          </p>
          <Image
            src={'/kyleQR.png'}
            alt="Default Property Image"
            height={50}
            width={50}
            quality={100}
            className="hover:scale-150 transition duration-300 ease-in-out transform hover:shadow-2xl"
          />
        </div>
        <div className="flex items-end space-x-2 ">
          <p className="text-3xl">
            Reid Liberato /
          </p>
          <Image
            src={'/reidQR.png'}
            alt="Default Property Image"
            height={50}
            width={50}
            quality={100}
            className="hover:scale-150 transition duration-300 ease-in-out transform hover:shadow-2xl"
          />
        </div>

        {/* <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-end space-x-2 ">
                <p className="text-xl">
                  Helius
                </p>
                <p className="pb-0.5">
                  A crypto real estate investment platform
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex space-x-4 items-stretch">
                <div className="flex-1 relative ">
                  <Image
                    src={'/snowcone.png'}
                    alt="Default Property Image"
                    layout='fill'
                    quality={100}
                  />
                </div>
                <div className="flex-1">
                  Helius is a crypto real estate investment platform that allows users to invest in real estate using cryptocurrency. Users can invest in properties, earn rental income, and sell their shares to other users. The platform is built on the Ethereum blockchain and uses smart contracts to manage property ownership and rental income distribution.
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
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

export default contactPage