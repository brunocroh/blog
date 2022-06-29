import type { NextPage } from 'next'
import Link from 'next/link'

const NavBar: NextPage = () => {
  return (
    <header className="py-10 bg-gradient-to-r from-green-400 to-blue-500 text-center">
      <Link href="/">
        <a>
          <h2 className="text-5xl font-bold text-white">Meu blog</h2>
        </a>
      </Link>
    </header>
  )
}

export default NavBar
