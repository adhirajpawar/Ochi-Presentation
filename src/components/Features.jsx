import React from 'react'

function Features() {
  return (
    <div className='w-full py-10'>
        <div className='w-full px-[90px] border-b-[1px] border-zinc-700 pb-10'>
            <h1 className='text-5xl tracking-tight'>Featured projects</h1>
            </div>

            <div className='px-20'>
            <div className='w-full names flex justify-start'>
            <div className='items-center justify-center w-[0.5vw] h-[0.5vw] mt-3 rounded-full bg-zinc-100' style={{ marginLeft:'2vh'}}></div>
            <div className='mt-1 pl-2'>
                <h5>FYDE</h5>
            </div>
            
            <div className='items-center justify-center w-[0.5vw] h-[0.5vw] mt-4 rounded-full bg-zinc-100' style={{ marginLeft:'92vh'}}></div>
            <div className='mt-2 pl-[2vh]'>
                <h5>VISE</h5>
            </div>
            </div>

        <div className="cards w-full flex gap-10 mt-5">
            <div className="cardcontainer w-1/2 h-[70vh]">
                <div className='card w-full h-full rounded-xl bg-green-500'></div>
            </div>
            
            <div className="cardcontainer w-1/2 h-[70vh]">
                <div className='card w-full h-full rounded-xl bg-green-500'></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Features