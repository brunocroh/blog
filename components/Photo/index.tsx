import type { NextPage } from 'next'

const Photo: NextPage = () => {
  return (
    <div className='flex self-end w-[400px] ml-[50px] mt-[50px] items-end'>
      <img className='clip-me' src="/me.jpeg" alt="" />
    </div>
  )
}

export default Photo
