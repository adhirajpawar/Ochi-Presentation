import { motion } from 'framer-motion'
import React from 'react'

function Marrquee() {
  return (
    <div className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
            <h1 className='text-[20vw] leading-none font-["Test Founders Grotesk X-Cond"] uppercase -pt-10  -mb-[0.1vw] font-bold'>we are ochi</h1>
            <h1 className='text-[20vw] leading-none font-["Test Founders Grotesk X-Cond"] uppercase -pt-10  -mb-[0.1vw] font-bold'>we are ochi</h1>
        </div>  
    </div>
  )
}

export default Marrquee