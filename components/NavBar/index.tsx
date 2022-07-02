import type { NextPage } from 'next'
import Link from 'next/link'

const NavBar: NextPage = () => {
  return (
    <header className="fixed top-0 z-50 flex justify-between w-full p-11">
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
