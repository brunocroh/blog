import type { NextPage } from "next";

const MiniBio: NextPage = () => {
  return (
    <div className="flex flex-col self-center sm:w-full items-center">
      <div className="flex flex-col">
        <span className="text-white mb-5 text-5xl">Hello!</span>
        <span className="text-white mb-5 text-5xl">
          I’m <span className="text-primary"> Bruno Rodrigues</span>.
        </span>
        <span className="text-white text-5xl">
          Fullstack Developer based in the UK.
        </span>
      </div>
    </div>
  );
};

export default MiniBio;
