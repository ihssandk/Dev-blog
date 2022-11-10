import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getArticles = async () => {
  const query = gql`
    query MyQuery {
      articlesConnection {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              image {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.articlesConnection.edges;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getArticleDetails = async (slug :any) => {
  const query = gql`
    query GetArticleDetails($slug : String!) {
      article(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          image {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.article;
};

export const getSimilarArticles = async (categories :any, slug :any) => {
  const query = gql`
    query GetArticleDetails($slug: String!, $categories: [String!]) {
      articles(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.articles;
};

// export const getAdjacentPosts = async (createdAt : any, slug : any) => {
//   const query = gql`
//     query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
//       next:posts(
//         first: 1
//         orderBy: createdAt_ASC
//         where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//       previous:posts(
//         first: 1
//         orderBy: createdAt_DESC
//         where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug, createdAt });

//   return { next: result.next[0], previous: result.previous[0] };
// };

export const getCategoryArticle = async (slug : any) => {
  const query = gql`
    query GetCategoryArticle($slug: String!) {
      articlesConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              image {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.articlesConnection.edges;
};

export const getFeaturedArticles = async () => {
  const query = gql`
    query GetCategoryArticle() {
      articles(where: {featuredArticle: true}) {
        author {
          name
          image {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.articles;
};

export const submitComment = async (obj :any) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug :any) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {article: {slug: $slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getRecentArticles = async () => {
  const query = gql`
    query GetArticleDetails() {
      articles(
        orderBy: createdAt_ASC
        last: 4
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.articles;
};