import React , {useState, useEffect} from 'react';
import Link from "next/link";
import {getCategories} from '../services';

const Categories = () => {
  const [categories, setCategories]= useState([]);
  useEffect(() => {
  
      getCategories()
        .then((newCatgories : any)=> setCategories(newCatgories))
  }, [])
  
  return (
    <div className=" bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 p-4 mb-8">
        <h3 className="text-xl mb-8 text-white font-semibold border-b pb-4">
            Discover other categories
        </h3>
        {categories.map((category)=>(
          <Link key ={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer text-white font-bold text-lg shadow-[5px_5px_2px_#cacaca]  p-0 block pb-3 mb-3">
              {category.name}
            </span>
          </Link>
        ))}
    </div>
  )
}

export default Categories