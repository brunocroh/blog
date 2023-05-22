import type { NextPage } from "next";

const MiniBio: NextPage = () => {
  return (
    <div className="flex flex-col self-center sm:w-full md:w-1/4">
      <span className="text-white mb-5 text-5xl">Hello!</span>
      <span className="text-white mb-5 text-5xl">
        I’m <span className="text-primary"> Bruno Pinheiro</span>.
      </span>
      <span className="text-white text-5xl">
        Fullstack Developer based in Brazil.
      </span>
    </div>
  );
};

export default MiniBio;
