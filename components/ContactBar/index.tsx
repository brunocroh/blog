import type { NextPage } from "next";
import Link from "next/link";

const ContactBar: NextPage = () => {
  return (
    <footer className="z-20 w-fit hidden xl:flex">
      <div className="flex items-end">
        <span className="text-sm text-gray-400 whitespace-nowrap mr-10">
          E: brunocroh@gmail.com{" "}
        </span>
      </div>
    </footer>
  );
};

export default ContactBar;
