import React from 'react'

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