import React , {useState, useEffect} from 'react';
import moment from "moment";
import Link from 'next/link';
import {getRecentArticles, getSimilarArticles} from "../services";

const ArticleWidget = ({categories, slug}: any) => {
  const [relatedArticles , setRelatedArticles]= useState([]);

  useEffect(() => {
      if (slug){
            getSimilarArticles(categories, slug)
              .then((result: any)=> setRelatedArticles(result))
            }else{   
              getRecentArticles()
                .then((result: any)=> setRelatedArticles(result))
      }
    }
  , [slug])
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {slug? 'Related Articles': 'Recent Articles'}
        </h3>
        {relatedArticles.map((article)=>(
          <div key= {article.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img
              alt ={article.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full"
              src={article.featuredImage.url}  />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {moment(article.createdAt).format('MM DD, YYYY')}
              </p>
              <Link key={article.title} className="font-semibold text-gray-500 cursor-pointer
        hover:text-gray-300" href={`/article/${article.slug}`}>
              {article.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ArticleWidget