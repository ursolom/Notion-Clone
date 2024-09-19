import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
    </div>
  )
}

export default Logo