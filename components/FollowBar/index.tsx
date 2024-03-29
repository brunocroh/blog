import type { NextPage } from "next";
import Link from "next/link";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FollowBar: NextPage = () => {
  const socials = [
    {
      id: 1,
      href: "https://github.com/brunocroh",
      icon: faGithub,
    },
    {
      id: 2,
      href: "https://twitter.com/brunocroh?ref_src=twsrc%5Etfw",
      icon: faTwitter,
    },
    {
      id: 3,
      href: "https://www.linkedin.com/in/brunocroh/",
      icon: faLinkedin,
    },
  ];

  return (
    <aside className="absolute bottom-0 right-0 z-20 flex justify-center">
      <div className="flex flex-col justify-center gap-[20px] text-white">
        <div className="relative h-[24px] w-[40px] origin-center rotate-90 whitespace-nowrape">
          <span className='absolute right-0 pr-[75px] whitespace-nowrap text-[14px] leading-[24px] text-right after:content-[""] after:absolute after:top-[50%] after:w-[50px] after:h-[1px] after:bg-white after:right-[15px]'>
            Follow Me
          </span>
        </div>
        {socials.map((s) => (
          <div key={s.id} className="flex justify-center hover:cursor-pointer">
            <a target="_blank" href={s.href} rel="noreferrer">
              <FontAwesomeIcon size="lg" icon={s.icon} />
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default FollowBar;
