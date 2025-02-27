import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp, FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
        <div className="textstructure mt-32  px-20">
            {["We Create", "Eye-Opening", "presentations"].map((item, index)=>{
                return (
                     <div className="masker">
                        <div className="w-fit flex items-end overflow-hidden ">
                            {index === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.25, 1, 0.5, 1],duration:1.5}} className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[0.1vw] relative'>
                                <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>)}
                <h1 className='uppercase text-[8vw] leading-[7vw] tracking-tighter font-["Test founders Grotesk X-Cond"] font-bold'>
                    {item}
                </h1>
                </div>
            </div>
                );
            })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>
            <p className="text-md font-light tracking-tight leading-none">{item}</p> )}
            <div className="start">
                <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;