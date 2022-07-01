import type { NextPage } from 'next'
import { ReactNode, useRef } from 'react';
import { grained } from 'grained';
import Script from 'next/script'

import NavBar from '@components/NavBar';
import FollowBar from '@components/FollowBar';

interface Props {
  children: ReactNode
}

const GRAINED_OPTIONS = {
  animate: true,
  patternWidth: 100,
  patternHeight: 100,
  grainOpacity: 0.1,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
  grainChaos: 0.5,
  grainSpeed: 20,
}

const Preview: NextPage = () => {

  const grained_container = useRef();

  return (
    <>
    <div ref={grained_container} className='bg-black w-full h-screen relative'>
      <NavBar></NavBar>
      <FollowBar></FollowBar>
    </div>
    </>
  )
}

export default Preview
