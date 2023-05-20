import type { NextPage } from 'next'

import MiniBio from '../MiniBio'

const Photo: NextPage = () => {
  return (
    <div className="flex w-full ml-[50px] mt-[50px] items-end">
      <img className="clip-me w-[400px]" src="/me.jpeg" alt="" />
      <MiniBio />
    </div>
  )
}

export default Photo
