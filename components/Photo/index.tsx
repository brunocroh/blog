import type { NextPage } from "next";

import MiniBio from "../MiniBio";

const Photo: NextPage = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full min-w-[600px]">
      <img className="clip-me w-[600px]" src="/me.jpeg" alt="" />
      <MiniBio />
    </div>
  );
};

export default Photo;
