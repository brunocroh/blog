import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import ReactMarkdown from 'react-markdown'

import getPosts from "@lib/getPosts";
import { Post } from '../types/Post';

type Props = {
  post: Post
}

interface IParams extends ParsedUrlQuery {
  slug: string,
}

const Post = ({ title, date, markdown }: Post) => (
  <article>
    <h1>{title}</h1>
    <time className="tracking-wider text-gray-500 font-extralight">{date}</time>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </article>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await getPosts();

  return {
    paths: posts.map((post) => `/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps: any = async (context: any) => {
  const params = context.params! 
  const posts: Post[] = await getPosts()
  const post = posts.find((post) => post.slug === params.slug)

  return { props: post }
};

export default Post;
