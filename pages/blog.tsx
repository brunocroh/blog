import type { NextPage } from 'next'

import getPosts from '@lib/getPosts'
import PostPreview from '@components/PostPreview'
import Preview from '@components/Preview'
import { Post } from '../types/Post'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({posts}: Props) => {
  return (
    <>
      <Preview name='Blog' description='coming soon'/>
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
