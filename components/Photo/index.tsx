import type { NextPage } from "next";

import MiniBio from "../MiniBio";

const Photo: NextPage = () => {
  return (
    <>
      <img
        className="clip-me sm:w-[400px] sm:[400px] lg:w-[700px] lg:h-[900px] self-center"
        src="/me.jpeg"
        alt=""
      />
      <MiniBio />
    </>
  );
};

export default Photo;
