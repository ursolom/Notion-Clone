import React from 'react'
import Navbar from './_components/Navbar'

const LayoutHome = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <div>
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default LayoutHome