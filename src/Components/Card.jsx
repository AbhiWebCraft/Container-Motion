import { motion } from "framer-motion";
import React from 'react';
import { FaRegFileArchive } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

function  Card({Data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-500 text-white px-8 py-10 p-5 overflow-hidden'>
        <FaRegFileArchive />
        <p className='text-sm leading-tight mt-5 font-semibold'>{Data.description}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-8 py-3 mb-2'>
            <h5>{Data.filesize}</h5>
            <span className='w-6 h-6 bg-zinc-400 rounded-full flex items-center justify-center'>
            {Data.close ? <IoCloseOutline /> : <LuDownload size=".7em" color="#fff" /> }
            </span>
          </div>
          {
            Data.tag.isOpen && (
              <div className={`tag w-full py-4 ${Data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{Data.tag.tagTitle}</h3>
          </div>
            ) 
          }
          
        </div>
    </motion.div>
    
  )
}

export default Card