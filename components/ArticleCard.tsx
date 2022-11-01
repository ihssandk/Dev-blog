import React from 'react';
import { NextPage } from 'next';
import moment from 'moment';
import Link from 'next/link';

const ArticleCard = ({article}:any) => {
  return (
    <div className="bg-white shadow-[5px_5px_0px_0px_rgba(201,233,255,0.8)]  p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img src ={article.featuredImage.url}
      alt={article.title}
      className="object-top absolute h-80 w-full object-cover shadow-lg  lg:rounded-lg"
      />
      </div>
      <div>
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer
        hover:text-gray-300 text-3xl font-semibold">
          <Link href={`/article/${article.slug}`}>
            {article.title}
          </Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img alt= {article.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={article.author.image.url}/>
            <p className="inline align-middle font-bold text-gray-700 ml-2 text-lg">{article.author.name}</p>
          </div>
          <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="lightblue">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">
                {moment(article.createdAt).format('MM, DD, YYYY')}
              </span>
          </div>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">{article.excerpt}</p>
      <div className="text-center">
        <Link href={`/article/${article.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-2 inline-block text-lg shadow-lg  text-white bg-gray-400 px-8 py-1 rounded-r cursor-pointer"> Keep reading ...</span>
        </Link>
      </div>
    </div>

  )
}

export default ArticleCard