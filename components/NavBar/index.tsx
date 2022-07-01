import type { NextPage } from 'next'
import Link from 'next/link'

const NavBar: NextPage = () => {
  return (
    <header className="flex justify-between fixed p-11 top-0 z-20 w-full">
      <Link href="/">
        <a>
          <span className="text-[rgba(255,255,255,0.5)]">
            { "Bruno " }  
            <strong className='text-white'>Pinheiro</strong>
          </span>
        </a>
      </Link>
      <div>
        <ul className='flex gap-[40px] text-white'>
          <li>
            <Link href="/">
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a> Blog </a>
            </Link>
          </li>
          <li>
            <Link href="/Threads">
              <a> Threads </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>

  )
}

export default NavBar
