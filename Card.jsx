import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div drag 
        dragConstraints={reference} 
        whileDrag={{scale: 1.1}} 
        dragElastic={.1} 
        dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }}
        className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-xl mt-5'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
          <div className='flex items-center justify-between px-8 py-3 mb-2'>
            <h5>{data.fileSize}</h5>
            {data.close ? <IoCloseSharp /> : <HiOutlineDownload />}
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full h-10 py-4 ${data.tag.tagColor === "blue" ? "bg-blue-900" : "bg-green-800"} flex items-center justify-center`}>
                <h3 className='text-sm'>{data.tag.tagTitle}</h3>
              </div>
            )
          }
        </div>
    </motion.div>
    
  )
}

export default Card
