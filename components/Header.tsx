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
    <div className ="container bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40 border border-gray-200 mx-auto mb-8 px-5">
        <div className=" w-full inline-block  py-8">
            <div className="md:float-left block">
                <Link href ='/'>
                    <span className="cursor-pointer font-bold text-5xl  font-syncopate drop-shadow-lg shadow-black text-[#a2b4c6]">
                        <Image 
                        src={require('../public/logo.png')}
                        alt="THRUTH logo"
                        width= {250}
                        height={250}/>
                    </span>
                </Link>

            </div>
            <div className="hidden md:float-left md:contents ">
                {categories.map((category)=>(<Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-6 align-middle text-2xl text-[#c2c3c4] uppercase  hover:text-[#ffffff] ml-4 border-x-stone-600 font-bold cursor-pointer">{category.name}</span>
                </Link>))}
            </div>

        </div>
    </div>
  )
}

export default Header