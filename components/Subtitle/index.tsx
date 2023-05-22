"use client";

import { useRef } from "react";
import type { NextPage } from "next";
import useTyped from "../../hooks/useTyped";

const COLOR = "#5be9a8";

const options = {
  strings: [
    `I code cool <span style='color: ${COLOR}'>web apps</span>`,
    `I develop <span style='color: ${COLOR}'>mobile apps</span>`,
    `I code <span style='color: ${COLOR}'>smartcontracts</span>`,
    `I develop <span style='color: ${COLOR}'>dapps</span>`,
    `I code scalable <span style='color: ${COLOR}'>backends</span>`,
    `I love <span style='color: ${COLOR}'>javascript</span>`,
    `I love <span style='color: ${COLOR}'>web3</span>`,
    `I love <span style='color: ${COLOR}'>blockchain</span>`,
  ],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true,
};

const Subtitle: NextPage = () => {
  const ref = useRef<HTMLSpanElement>(null);
  useTyped(ref, options);

  return (
    <div>
      <span className="text-6xl text-white whitespace-nowrap" ref={ref}></span>
    </div>
  );
};

export default Subtitle;
