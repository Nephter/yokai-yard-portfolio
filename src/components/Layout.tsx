import React from 'react'
import Image from 'next/image'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Image
        src="/bgTop.png"
        alt="Default Property Image"
        layout='fill'
      />
      <div className="w-full">
        {children}
      </div>
      <Image
        src="/bgBottom.png"
        alt="Default Property Image"
        layout='fill'
      />
    </div>
  )
}

export default Layout