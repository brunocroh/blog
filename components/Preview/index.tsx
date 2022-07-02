import type { NextPage } from 'next'
import { ReactNode, useRef } from 'react';
import Script from 'next/script'

import ContactBar from '@components/ContactBar';
import FollowBar from '@components/FollowBar';
import NavBar from '@components/NavBar';
import Photo from '@components/Photo';
import Subtitle from '@components/Subtitle';

import useGrained from '../../hooks/useGrained';


interface Props {
  children: ReactNode
}

const GRAINED_OPTIONS = {
  animate: true,
  patternWidth: 400,
  patternHeight: 400,
  grainOpacity: 0.15,
  grainDensity: 3,
  grainWidth: 1,
  grainHeight: 1
}

const Preview: NextPage = () => {


  return (
    <>
    <div id="container" className='relative flex flex-col justify-center w-full h-screen bg-black align-center'>
      <NavBar/>
      <FollowBar/>
      <div className='flex w-full p-11'>
        <Photo />
      </div>
      <div className='flex self-end p-11 w-full gap-[40px]'>
        <ContactBar/>
        <Subtitle/>
      </div>
    </div>
    <Script
      src="/grained.min.js" 
      onLoad={() => grained && grained("#container", GRAINED_OPTIONS)} />
    </>
  )
}

export default Preview
