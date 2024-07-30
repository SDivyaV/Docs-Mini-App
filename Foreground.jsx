import React, { useRef, useState } from 'react'
import Card from './Card';
import { motion } from "framer-motion"

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc : "Notes..",
      fileSize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}, 
    },
    {
      desc : "Notes...",
      fileSize: ".4mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}, 
    },
    {
      desc : "Attend Classes..",
      fileSize: ".2mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}, 
    },
  ];
  return (
    <div ref={ref} className='fixed z-[3] top-5 left-5 w-full h-full flex gap-5 flex-wrap'>
        {data.map((item, index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
