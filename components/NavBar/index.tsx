import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar: NextPage = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  const routes = [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: '/blog'
    }
  ]

  return (
    <header className="fixed top-0 z-50 flex justify-between w-full p-11">
      <Link href="/">
        <a>
          <span className="text-[rgba(255,255,255,0.5)] text-sm">
            { "Bruno " }  
            <strong className='text-white'>Pinheiro</strong>
          </span>
        </a>
      </Link>
      <div>
        <ul className='flex text-sm gap-[40px] text-white'>
          { routes.map((route) => (
            <li>
              <a href={route.href} className={currentRoute !== route.href ? 'text-[rgba(255,255,255,0.5)]' : ''}>
                {route.text}
              </a>
            </li>
          )) }
        </ul>
      </div>
    </header>

  )
}

export default NavBar
