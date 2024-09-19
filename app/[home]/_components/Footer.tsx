import React from 'react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'

const Footer = () => {
  return (
    <div className='flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]'>
      <Logo/>
      <div className='md:ml-auto flex items-center gap-x-2 w-full md:w-fit justify-between md:justify-end text-muted-foreground'>
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms of Service
        </Button>
      </div>
    </div>
  )
}

export default Footer