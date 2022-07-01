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
      <Preview></Preview>
      <NavBar></NavBar>
      <main className="my-6 mx-auto p-6 bg-white sm:shadow-lg rounded prose lg:prose-xl">
        { children }
      </main>
    </>
  )
}

export default Main
