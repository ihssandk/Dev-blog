import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryArticle } from '../../services';
import { ArticleCard, Categories, Loader } from '../../components';

const CategoryArticle = ({ articles }:any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {articles.map((article :any, index: any) => (
            <ArticleCard key={index} article={article.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryArticle;

// Fetch data at build time
export async function getStaticProps({ params }:any) {
  const articles = await getCategoryArticle(params.slug);

  return {
    props: { articles },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }:any) => ({ params: { slug } })),
    fallback: true,
  };
}