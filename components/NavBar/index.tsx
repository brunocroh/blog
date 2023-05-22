"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar: NextPage = () => {
  const currentRoute = usePathname();

  const routes = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Blog",
      href: "/blog",
    },
  ];

  return (
    <header className="relative top-0 z-50 flex justify-between container mx-xl">
      <Link href="/">
        <a>
          <span className="text-primary font-bold text-xl">
            {"Bruno "}
            <span className="text-[rgba(255,255,255,0.5)]">Pinheiro</span>
          </span>
        </a>
      </Link>
      <div>
        <ul className="hidden md:flex text-xl gap-[40px] text-white font-bold">
          {routes.map((route) => (
            <li key={route.text}>
              <a
                href={route.href}
                className={
                  currentRoute !== route.href
                    ? "text-[rgba(255,255,255,0.5)]"
                    : ""
                }
              >
                {route.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
