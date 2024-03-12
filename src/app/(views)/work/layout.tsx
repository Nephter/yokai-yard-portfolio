import React from 'react'
import Image from 'next/image'

const workLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      {children}
    </div>
  )
}

export default workLayout