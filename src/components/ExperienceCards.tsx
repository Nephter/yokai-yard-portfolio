import React from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { kaushan } from '(/lib/fonts)'
import { IdCardIcon } from '@radix-ui/react-icons'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Button } from './ui/button'

const ExperienceCards = () => {
  return (
    <div className="flex space-x-4 ">

      <Card
        className="w-[600px] rounded-sm border-none text-white"
        style={{
          boxShadow: 'inset 0 7px 8px rgba(0, 0, 0, 0.6)',
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}
      >
        <CardHeader>
          <CardTitle className="flex justify-between">
            <p className={`${kaushan.className} text-xl`}>Team Stats</p>
            {/* <IdCardIcon /> */}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-col">
          <Accordion type="single" collapsible >
            <AccordionItem value="item-1" className="border-hidden">
              <AccordionTrigger className="pb-0">Javascript</AccordionTrigger>
              <AccordionContent >
                <p className="pt-2">
                  12 yrs experience
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible >
            <AccordionItem value="item-1" className="border-hidden">
              <AccordionTrigger className="pb-0">Typescript</AccordionTrigger>
              <AccordionContent >
                <p className="pt-2">
                  10 yrs experience
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible >
            <AccordionItem value="item-1" className="border-hidden">
              <AccordionTrigger className="pb-0">Typescript</AccordionTrigger>
              <AccordionContent >
                <p className="pt-2">
                  10 yrs experience
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible >
            <AccordionItem value="item-1" className="border-hidden">
              <AccordionTrigger className="pb-0">Typescript</AccordionTrigger>
              <AccordionContent >
                <p className="pt-2">
                  10 yrs experience
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible >
            <AccordionItem value="item-1" className="border-hidden">
              <AccordionTrigger className="pb-0">Typescript</AccordionTrigger>
              <AccordionContent >
                <p className="pt-2">
                  10 yrs experience
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </CardContent>
        {/* <CardFooter className="flex justify-end">
          <Dialog>
            <DialogTrigger className="flex justify-center">
              <Button>
                Contact Us
              </Button>
            </DialogTrigger>
            <DialogContent className="flex items-center justify-center w-min">
              <DialogHeader>
                <DialogTitle>Contact info</DialogTitle>
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
        </CardFooter> */}
      </Card>

    </div>


    // <div className="space-x-6 justify-center flex ">
    //   <Card
    //     className="w-[400px] rounded-sm border-none text-white"
    //     style={{
    //       boxShadow: 'inset 0 7px 8px rgba(0, 0, 0, 0.6)',
    //       backgroundColor: 'rgba(0, 0, 0, 0.1)'
    //     }}
    //   >
    //     <CardHeader>
    //       <CardTitle className="flex justify-between">
    //         <p className={`${kaushan.className} text-xl`}>Kyle Forkey</p>
    //         <IdCardIcon />
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent className="flex-col">
    //       <p>Head boi Head boi </p>
    //       <p>10 years of javascript </p>
    //       <p>20 years of experience </p>
    //       <p>30 years of conscienceness</p>
    //       <p>40 years of cabbage</p>
    //       <p>50 years of experience</p>
    //     </CardContent>
    //   </Card>

    //   <Dialog>
    //     <DialogTrigger>
    //       <Card
    //         className=" rounded-sm border-none text-white"
    //         style={{
    //           boxShadow: 'inset 0 7px 8px rgba(0, 0, 0, 0.6)',
    //           backgroundColor: 'rgba(0, 0, 0, 0.1)'
    //         }}
    //       >
    //         <Image
    //           src={'/reidQR.png'}
    //           alt="Reid QR"
    //           width={100}
    //           height={100}
    //         />

    //       </Card>
    //     </DialogTrigger>
    //     <DialogContent className="flex items-center justify-center w-min">
    //       <DialogHeader>
    //         <DialogTitle>Contact info</DialogTitle>
    //         <DialogDescription className="flex">
    //           <div className="flex w-[300px] h-[300px]">
    //             <Image
    //               src={'/reidQR.png'}
    //               alt="Reid QR"
    //               width={400}
    //               height={400}
    //             />
    //           </div>
    //         </DialogDescription>
    //       </DialogHeader>
    //     </DialogContent>
    //   </Dialog>

    //   <Card
    //     className="w-[400px] rounded-sm border-none text-white"
    //     style={{
    //       boxShadow: 'inset 0 7px 8px rgba(0, 0, 0, 0.6)',
    //       backgroundColor: 'rgba(0, 0, 0, 0.1)'
    //     }}
    //   >
    //     <CardHeader>
    //       <CardTitle className="flex justify-between">
    //         <p className={`${kaushan.className} text-xl`}>Reid Liberato</p>
    //         <IdCardIcon />
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent className="flex-col">
    //       <p>Second boi Second boi </p>
    //       <p>10 years of javascript </p>
    //       <p>20 years of experience </p>
    //       <p>30 years of conscienceness</p>
    //       <p>40 years of cabbage</p>
    //       <p>50 years of experience</p>
    //     </CardContent>
    //   </Card>
    // </div>
  )
}

export default ExperienceCards
//  <Dialog>
//       <DialogTrigger className="flex justify-center">
//         <Card
//           className="w-[600px] rounded-sm border-none text-white"
//           style={{
//             boxShadow: 'inset 0 7px 8px rgba(0, 0, 0, 0.6)',
//             backgroundColor: 'rgba(0, 0, 0, 0.1)'
//           }}
//         >
//           <CardHeader>
//             <CardTitle className="flex justify-between">
//               <p className={`${kaushan.className} text-xl`}>Team Stats</p>
//               <IdCardIcon />
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="flex-col">
//             <Accordion type="single" collapsible>
//               <AccordionItem value="item-1">
//                 <AccordionTrigger>Is it accessible?</AccordionTrigger>
//                 <AccordionContent>
//                   Yes. It adheres to the WAI-ARIA design pattern.
//                 </AccordionContent>
//               </AccordionItem>
//             </Accordion>
//           </CardContent>
//         </Card>
//       </DialogTrigger>
//       <DialogContent className="flex items-center justify-center w-min">
//         <DialogHeader>
//           <DialogTitle>Contact info</DialogTitle>
//           <DialogDescription className="flex">
//             <div className="flex w-[300px] h-[300px]">
//               <Image
//                 src={'/reidQR.png'}
//                 alt="Reid QR"
//                 width={400}
//                 height={400}
//               />
//             </div>
//           </DialogDescription>
//         </DialogHeader>
//       </DialogContent>
//     </Dialog>