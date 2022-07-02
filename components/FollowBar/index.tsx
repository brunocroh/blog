import type { NextPage } from 'next'
import Link from 'next/link'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FollowBar: NextPage = () => {
  return (
    <aside className='absolute bottom-0 right-0 m-[13px] w-[75px] z-20 flex justify-center pb-11'>
      <div className='flex flex-col justify-center gap-[20px] text-white'>
          <div className='relative h-[24px] w-[70px] origin-center rotate-90 absolute whitespace-nowrape'>
            <span
              className='absolute right-0 pr-[75px] whitespace-nowrap text-[14px] leading-[24px] text-right after:content-[""] after:absolute after:top-[50%] after:w-[50px] after:h-[1px] after:bg-white after:right-[15px]'
            >
              Follow Me
            </span>
          </div>
        <div className='flex justify-center'>
          <Link href=''>
            <FontAwesomeIcon size='lg' icon={faGithub} />
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href=''>
            <FontAwesomeIcon size='lg' icon={faTwitter} />
          </Link>
        </div>
        <div className='flex justify-center'>
          <Link href=''>
            <FontAwesomeIcon size='lg' icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </aside>

  )
}

export default FollowBar
