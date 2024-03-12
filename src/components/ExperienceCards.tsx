import React from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { kaushan } from '(/lib/fonts)'
import { IdCardIcon } from '@radix-ui/react-icons'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

const ExperienceCards = () => {
  return (
    <div className="space-x-6 justify-center flex ">
      <Dialog>
        <DialogTrigger>
          <Card
            className="w-[400px] rounded-sm border-none text-white"
            style={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
              backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <CardHeader>
              <CardTitle className="flex justify-between">
                <p className={`${kaushan.className} text-xl`}>Kyle Forkey</p>
                <IdCardIcon />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-col">
              <p>Head boi Head boi </p>
              <p>10 years of javascript </p>
              <p>20 years of experience </p>
              <p>30 years of conscienceness</p>
              <p>40 years of cabbage</p>
              <p>50 years of experience</p>
            </CardContent>
          </Card>
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

      <Dialog>
        <DialogTrigger>
          <Card
            className="w-[400px] rounded-sm border-none text-white"
            style={{
              boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.6)',
              backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }}
          >
            <CardHeader>
              <CardTitle className="flex justify-between">
                <p className={`${kaushan.className} text-xl`}>Reid Liberato</p>
                <IdCardIcon />
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-col">
              <p>Second boi Second boi </p>
              <p>10 years of javascript </p>
              <p>20 years of experience </p>
              <p>30 years of conscienceness</p>
              <p>40 years of cabbage</p>
              <p>50 years of experience</p>
            </CardContent>
          </Card>
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
    </div>
  )
}

export default ExperienceCards