import type { NextPage } from 'next'
import Link from 'next/link'

import getPosts from '@lib/getPosts'
import { Post } from '../types/Post'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({posts}: Props) => {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>

  )
}

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getPosts()
    }
  }
}

export default Blog
