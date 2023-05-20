import type { NextPage } from 'next'

import Photo from '@/components/Photo'
import FollowBar from '@/components/FollowBar'
import ContactBar from '@/components/ContactBar'
import Subtitle from '@/components/Subtitle'

const Blog: NextPage = () => {
  return (
    <div className="relative flex flex-col justify-center justify-between w-full h-screen bg-black">
      <div className="flex items-center w-full grow px-11">
        <Photo />
      </div>
      <FollowBar />
      <div className="flex self-end px-11 pb-9 my-2 w-full gap-[40px]">
        <ContactBar />
        <Subtitle />
      </div>
    </div>
  )
}

export default Blog
