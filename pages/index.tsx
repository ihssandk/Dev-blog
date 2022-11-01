import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {ArticleCard, ArticleWidget , Categories} from "../components/";
import {getArticles} from '../services';
import {FeaturedArticles}  from '../sections';

const Home: NextPage = ({articles} :any) => {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Sarah Super-Comput...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
          {articles?.map((article: any, index: any)=>(
          <>
            <ArticleCard article={article.node} key={article.title}/>
          </>
          ))}
          </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <ArticleWidget />
            <Categories />
            <FeaturedArticles />
          </div>

        </div>
        </div>
    </div>
  )
}
export async function getStaticProps(){
  const articles = (await getArticles() || []);
  return {
    props : {articles}
  }
}

export default Home
