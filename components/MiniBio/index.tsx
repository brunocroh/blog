import type { NextPage } from 'next'

const MiniBio: NextPage = () => {
  return (
    <div className='flex grow w-[200px] h-full pb-[50px] mb-[30px] ml-[-140px] self-end'>
      <span className='text-white w-[350px]'>
          Hello, I’m <span className='text-primary'> Bruno Pinheiro</span>, Fullstack and Blockchain Developer based in Goiânia, Brazil.
      </span>
    </div>
  )
}

export default MiniBio
