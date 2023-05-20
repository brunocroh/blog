import type { NextPage } from 'next'

import Preview from '@components/Preview'
import { Post } from '../types/Post'

interface Props {
  posts: Post[]
}

const Blog: NextPage<Props> = ({posts}: Props) => {
  return (
    <>
      <Preview />
    </>
  )
}

export default Blog
