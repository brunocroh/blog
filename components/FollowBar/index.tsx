import type { NextPage } from 'next'
import Link from 'next/link'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FollowBar: NextPage = () => {
  return (
    <aside className='absolute bottom-0 right-0 m-[13px] w-[75px] z-20 flex justify-center'>
      <div className='flex flex-col justify-center gap-[20px] text-white '>
          <div className='relative'>
            <div className='origin-center rotate-90 absolute whitespace-nowrape'>
              Follow Me
            </div>
          </div>
        <div>
          <Link href=''>
            <FontAwesomeIcon size='lg' icon={faGithub} />
          </Link>
        </div>
        <div>
          <Link href=''>
            <FontAwesomeIcon size='lg' icon={faTwitter} />
          </Link>
        </div>
        <div>
          <Link href=''>
            <FontAwesomeIcon size='lg' icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </aside>

  )
}

export default FollowBar
