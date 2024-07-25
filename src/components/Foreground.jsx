import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null);
    const data ={}
   
  return (
    <div ref={ref} className=' fixed top-0 z-[3] w-full h-full'>
        <Card reference={ref}/>
      
    </div>
  )
}

export default Foreground
