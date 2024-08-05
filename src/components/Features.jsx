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
            <div className="cardcontainer relative w-1/2 h-[70vh]">
            <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold'>FYDE
            <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold'>
                {"FYDE".split('').map((item, index)=><span>{item}</span>)}
            </h1>
            </h1>

                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            
            <div className="cardcontainer relative w-1/2 h-[70vh]">
            <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl font-semibold'>VISE
                {"VISE".split('').map((item, index)=><span>{item}</span>)}
            </h1>
                <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Features