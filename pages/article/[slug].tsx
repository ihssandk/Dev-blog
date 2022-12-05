import React from 'react';
import {getArticles, getArticleDetails} from "../../services";
import {ArticleDetail, Categories, ArticleWidget, Comments, Commentsform, Author} from '../../components';
import {Loader} from '../../components';
import {useRouter} from 'next/router';

const ArticleDetails = ({article}: any) => {
  const router = useRouter ();
  if (router.isFallback) {
    return <Loader />
  }
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <ArticleDetail article ={article}/>
          <Author author={article.author}/>
          <Commentsform slug={article.slug} />
          <Comments slug={article.slug}/>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <ArticleWidget slug={article.slug} categories={article.categories.map((category:any)=>category.slug)} />
            <Categories />
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default ArticleDetails

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getArticleDetails(params.slug);
  return {
    props: {
      article: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const articles = await getArticles();
  return {
    paths: articles.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}