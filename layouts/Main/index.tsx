import type { NextPage } from 'next'
import { ReactNode } from 'react'

import NavBar from '@components/NavBar';
import Preview from '@components/Preview';

interface Props {
  children: ReactNode

}

const Main: NextPage<Props> = ({ children }: Props) => {
  return (
    <>
      <NavBar></NavBar>
      <main className="p-6 mx-auto my-6 bg-white rounded sm:shadow-lg prose lg:prose-xl">
        { children }
      </main>
    </>
  )
}

export default Main
