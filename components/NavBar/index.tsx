import type { NextPage } from "next";
import Link from "next/link";
import { headers } from "next/headers";

const NavBar: NextPage = () => {
  const headersList = headers();
  const currentRoute = headersList.get("x-invoke-path");

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
        <ul className="hidden md:flex text-xl gap-[40px] text-[rgba(255,255,255,0.5)] font-bold decoration">
          {routes.map((route) => (
            <li key={route.text}>
              <a
                href={route.href}
                className={
                  currentRoute === route.href
                    ? "text-white underline underline-offset-4"
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
