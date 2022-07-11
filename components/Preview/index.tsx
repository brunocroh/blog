import type { NextPage } from 'next'
import { ReactNode, useRef } from 'react';
import Script from 'next/script'

import ContactBar from '@components/ContactBar';
import FollowBar from '@components/FollowBar';
import NavBar from '@components/NavBar';
import Photo from '@components/Photo';
import Subtitle from '@components/Subtitle';

interface Props {
  name: string
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

const Preview: NextPage<Props> = ({ name }) => {
  return (
    <>
      <div id='grainedContainer' className='relative flex flex-col justify-center justify-between w-full h-screen bg-black'>
        {
          name === undefined 
          ?  (
            <>
              <div className='flex items-center w-full grow px-11'>
                <Photo />
              </div>
              <FollowBar/>
              <div className='flex self-end px-11 pb-9 my-2 w-full gap-[40px]'>
                <ContactBar/>
                <Subtitle/>
              </div>
            </>
          )
          : (
            <div className='flex flex-col items-center justify-center w-full h-full'>
              <h1 className='text-white text-9xl'>{name}</h1>
              <div className='flex self-end'>
                <span className='text-white'> click here </span>
              </div>
            </div>
          )
        }
      </div>
      <Script
        src="/grained.min.js" 
        onLoad={() => grained && grained('#grainedContainer', GRAINED_OPTIONS)}
      />
    </>
  )
}

export default Preview
