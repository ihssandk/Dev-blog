import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {ArticleCard, ArticleWidget , Categories} from "../components/";
import {getArticles} from '../services';
import {FeaturedArticles}  from '../sections';

const Home: NextPage = ({articles} :any) => {
  return (
    <div className="container mx-auto mb-8">
      <Head>
        <title>Digitalyos Tech-Blog- All you need to know about tech...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedArticles />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
          {articles.map((article: any, index: any)=>(
          <>
            <ArticleCard article={article.node} key={article.title}/>
          </>
          ))}
          </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <ArticleWidget />
            <Categories />
          </div>
          <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="idyol" data-description="Support me on Buy me a coffee!" data-message="Show your appreciation and support by buying me a coffee!" data-color="lightblue" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

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
