import React from 'react';
import Image from "next/image";

const Author = ({author}: any) => {
  return (
    <div className="text-center bg-blue-400 bg-opacity-30 mt-20 mb-8 p-8 relative shadow-[5px_5px_0px_0px_rgba(201,233,255,0.8)] ">
      <div className="absolute left-0 right-0 -top-14">

      <Image 
      alt={author.name}
      height={100}
      width={100}
      className="align-middle rounded-full"
      src={author.image.url}
      unoptimized
      />
      </div>
      <h3 className="text-gray-500 mb-4 text-2xl font-bold">
        {author.name}
      </h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author