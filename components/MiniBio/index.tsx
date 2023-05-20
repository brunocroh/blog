import type { NextPage } from "next";

const MiniBio: NextPage = () => {
  return (
    <div className="flex flex-col self-center grow w-[800px] h-full pb-[50px] mb-[30px]">
      <span className="text-white mb-5 text-5xl">Hello!</span>
      <span className="text-white mb-5 text-5xl">
        I’m <span className="text-primary"> Bruno Pinheiro</span>.
      </span>
      <span className="text-white text-5xl w-[500px]">
        Fullstack Developer based in Brazil.
      </span>
    </div>
  );
};

export default MiniBio;
