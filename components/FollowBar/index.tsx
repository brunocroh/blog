import type { NextPage } from 'next'
import Link from 'next/link'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FollowBar: NextPage = () => {

  const socials = [
    {
      href: 'https://github.com/brunocroh',
      icon: faGithub,
    },
    {
      href: 'https://twitter.com/brunocroh?ref_src=twsrc%5Etfw',
      icon: faTwitter,
    },
    {
      href: 'https://www.linkedin.com/in/brunocroh/',
      icon: faLinkedin,
    },
  ]

  return (
    <aside className='absolute bottom-0 right-0 m-3 w-[75px] z-20 flex justify-center px-9 pb-7'>
      <div className='flex flex-col justify-center gap-[20px] text-white'>
          <div className='relative h-[24px] w-[70px] origin-center rotate-90 absolute whitespace-nowrape'>
            <span
              className='absolute right-0 pr-[75px] whitespace-nowrap text-[14px] leading-[24px] text-right after:content-[""] after:absolute after:top-[50%] after:w-[50px] after:h-[1px] after:bg-white after:right-[15px]'
            >
              Follow Me
            </span>
          </div>
        { socials.map((s) => (
          <div className='flex justify-center hover:cursor-pointer'>
            <a target='_blank' href={s.href} rel="noreferrer" >
              <FontAwesomeIcon size='lg' icon={s.icon} />
            </a>
          </div>
        ))}
      </div>
    </aside>

  )
}

export default FollowBar
