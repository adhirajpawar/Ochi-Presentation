import React from 'react'

function About() {
  return (
    <div className='w-full p-10 bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl'>
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
    <div className="w-full flex gap-5 border-t-[1px] pt-5 mt-10 border-[#a1b562]">
      <div className="w-1/2 ">
        <h1 className="text-7xl">Our approach :</h1>
        <button className="flex uppercase gap-10 items-center px-8 py-4 mt-8 bg-zinc-900 rounded-full text-white">Read More
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
      <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]" ></div>
    </div>
    </div>
  );
}

export default About