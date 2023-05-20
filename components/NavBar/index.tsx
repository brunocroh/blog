'use client'

import type { NextPage } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar: NextPage = () => {
  const currentRoute = usePathname()

  const routes = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
  ]

  return (
    <header className="fixed top-0 z-50 flex justify-between container mx-xl p-11">
      <Link href="/">
        <a>
          <span className="text-[rgba(255,255,255,0.5)] text-sm">
            {'Bruno '}
            <strong className="text-white">Pinheiro</strong>
          </span>
        </a>
      </Link>
      <div>
        <ul className="flex text-sm gap-[40px] text-white">
          {routes.map((route) => (
            <li key={route.text}>
              <a
                href={route.href}
                className={
                  currentRoute !== route.href
                    ? 'text-[rgba(255,255,255,0.5)]'
                    : ''
                }
              >
                {route.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default NavBar
