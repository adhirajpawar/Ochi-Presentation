import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className='card relative rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
                <div>
                    <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute rounded-full px-5 py-1 border-2 left-10 bottom-10'>&copy;2024-2025</button>
                </div>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'><img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute rounded-full px-5 py-1 border-2 left-10 bottom-10 uppercase'>Rating 5.0 on Clutch</button>
        
        </div>
        
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'><img className="w-32 rounded-full" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <button className='absolute rounded-full px-2 py-1 border-2 left-6 bottom-10 uppercase'>Business bootcamp alumina</button>
        </div>
        </div>
    </div>
  )
}

export default Cards