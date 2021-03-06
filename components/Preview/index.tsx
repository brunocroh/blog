import type { NextPage } from 'next'
import Script from 'next/script'

import ContactBar from '@components/ContactBar';
import FollowBar from '@components/FollowBar';
import Photo from '@components/Photo';
import Subtitle from '@components/Subtitle';

declare const window: any;

interface Props {
  name?: string
  description?: string
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

const Preview: NextPage<Props> = ({ name, description }) => {
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
              <h2 className='text-xl text-white'>{description}</h2>
            </div>
          )
        }
      </div>
      <Script
        src="/grained.min.js" 
      onLoad={() => {
        if(window.grained) {
          window.grained && window.grained('#grainedContainer', GRAINED_OPTIONS)
        } 
      }}
      />
    </>
  )
}

export default Preview
