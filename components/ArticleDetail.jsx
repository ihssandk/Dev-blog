import React from 'react'
import moment from "moment"
import {RichText} from "@graphcms/rich-text-react-renderer"
const ArticleDetail = ({article}) => {
  return (
    <div className="bg-white shadow-[5px_5px_0px_0px_rgba(201,233,255,0.8)] lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
            <img 
            src={article.featuredImage.url}
            art={article.title}
            className="object-top h-full w-full"
            />
        </div>
        <div className="px-4 lg:px-0">
            <div className="flex items-center mb-8 w-full">
                <div className="flex items-center  mb-4 lg:mb-0 w-full lg:w-auto mr-8">
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
            <h1 className="mb-8 text-3xl font-semibold">{article.title}</h1>
          <RichText content = {article.content.raw.children} />
        </div>
    </div>
  )
}

export default ArticleDetail