import type { NextPage } from 'next'

import getPosts from '@lib/getPosts'
import PostPreview from '@components/PostPreview'
import { Post } from '../types/Post'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({posts}: Props) => {
  return (
    <div className='flex flex-col min-w-full min-h-screen'>
      <div className='text-center'>
        <h1>Posts</h1>
      </div>
      <ul className='flex justify-center'>
        {posts.map(({ slug, title }) => (
          <PostPreview key={slug} slug={slug} title={title} />
        ))}
      </ul>
    </div>
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
