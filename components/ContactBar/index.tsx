import type { NextPage } from "next";

const ContactBar: NextPage = () => {
  return (
    <footer className="z-20 w-fit hidden lg:flex">
      <div className="flex items-end">
        <span className="text-sm text-gray-400 whitespace-nowrap mr-10">
          E: hello@brunocroh.com
        </span>
      </div>
    </footer>
  );
};

export default ContactBar;
