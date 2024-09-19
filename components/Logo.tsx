import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
})
const Logo = () => {
  return (
    <div className=' items-center gap-x-2 hidden md:flex'>
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      <p className={cn('text-lg font-bold uppercase', font.className)}>Eisa&apos;s Notion</p>
    </div>
  )
}

export default Logo