import React , { useEffect, useState} from 'react';
import Link from "next/link";
import Image from 'next/image';
import {getCategories} from '../services';



const Header = () => {

    const [categories, setCategories]= useState([]);
    useEffect(() => {
    
        getCategories()
          .then((newCatgories : any)=> setCategories(newCatgories))
    }, [])
  return (
    <div className ="container shadow-[5px_5px_0px_0px_rgba(201,233,255,0.8)]  mx-auto px-10 mb-8">
        <div className=" w-full inline-block  py-8">
            <div className="md:float-left block">
                <Link href ='/'>
                    <span className="cursor-pointer font-bold text-5xl  font-syncopate drop-shadow-lg shadow-black text-[#a2b4c6]">
                        THRuth
                    </span>
                </Link>

            </div>
            <div className="hidden md:float-left md:contents">
                {categories.map((category)=>(<Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-[#676e75] hover:text-[#929aa1] ml-4  font-semibold cursor-pointer">{category.name}</span>
                </Link>))}
            </div>

        </div>
    </div>
  )
}

export default Header