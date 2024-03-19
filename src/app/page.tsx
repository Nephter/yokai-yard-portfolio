'use client'
import Image from 'next/image'
import React from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'


export default function Home() {

  return (

    <div className="hide-scrollbar relative custom-shadow h-[100vh] scroll-smooth p-0">

      <Image
        src={'/background/background.png'}
        alt="background"
        layout="fill"
        quality={100}
        style={{ position: 'absolute', top: '0', right: '0', zIndex: -1, transform: 'rotate(0.5turn)' }}
      />

      <Parallax pages={2}>
        <ParallaxLayer
          offset={0}
          speed={-.3}
        >
          <div style={{ position: 'absolute', top: '0', right: 0, zIndex: 10 }}>
            <Image
              src={`/background/moon.png`}
              alt='moon'
              width={800}
              height={800}
              quality={100} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: .1, end: .1 }}
          speed={10}
        >
          <div style={{ position: 'absolute', top: '800px', width: '100%', height: '100%' }}>
            <Image
              src={'/background/wave1.png'}
              alt="wave1"
              fill
              quality={100}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: .1, end: .4 }}
          speed={6}

        >
          <div style={{ position: 'absolute', top: '900px', width: '100%', height: '100%' }}>
            <Image
              src={'/background/wave2.png'}
              alt="wave2"
              fill
              quality={100}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: .1, end: .7 }}
          speed={6}

        >
          <div style={{ position: 'absolute', top: '1000px', width: '100%', height: '100%' }}>
            <Image
              src={'/background/wave3.png'}
              alt="wave3"
              fill
              quality={100}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: .1, end: .9 }}
          speed={6}

        >
          <div style={{ position: 'absolute', top: '1100px', width: '100%', height: '100%' }}>
            <Image
              src={'/background/wave4.png'}
              alt="wave4"
              fill
              quality={100}
            />
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer
          sticky={{ start: 0, end: .5 }}
          style={{
            top: '-1200px',
            position: 'absolute'
          }}
        >
          <div >
            <Image
              src={'/background/wave3.png'}
              alt="wave3"
              width={'1600'}
              height={'800'}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0, end: .5 }}
          style={{
            top: '-1400px',
            position: 'absolute'
          }}
        >
          <div >
            <Image
              src={'/background/wave1.png'}
              alt="wave1"
              width={'1600'}
              height={'800'}
            />
          </div>
        </ParallaxLayer> */}


        {/* <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: 'url(/background/moon.png)',
          }}
        /> */}

        {/* <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <div style={{ position: 'absolute', top: -100, right: 0 }}>
            <Image
              src={`/background/moon.png`}
              alt='moon'
              width={800}
              height={800}
              quality={100} />
          </div>
        </ParallaxLayer> */}


        {/* <ParallaxLayer
          offset={0}
          speed={0.3}
          factor={.1}

          sticky={{ start: 0, end: 1.5 }}
        >
          <div className="absolute top-[600px] z-2 w-full h-full">
            <img src={'/background/Wave3.svg'} alt="svg1" />
          </div>
          <div className='absolute flex top-[850px] justify-center z-10 border w-full'>
            <Work />
          </div>
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={.35} speed={0.2} >
          <div className="absolute top-[600px] z-2 w-full h-full">
            <img src={'/background/Wave3.svg'} alt="svg1" />
          </div>
          <div className='absolute flex top-[850px] justify-center z-10 border border-red-600 w-full'>
            <ExperienceCards />
          </div>
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer> */}
      </Parallax>
    </div >



  )
}
