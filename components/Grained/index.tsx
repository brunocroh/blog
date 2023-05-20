"use client";

import Script from "next/script";

declare const window: any;

const GRAINED_OPTIONS = {
  animate: true,
  patternWidth: 400,
  patternHeight: 400,
  grainOpacity: 0.45,
  grainDensity: 3,
  grainWidth: 2,
  grainHeight: 1,
};

const Grained = () => {
  return (
    <Script
      src="/grained.min.js"
      onLoad={() => {
        if (window.grained) {
          window.grained &&
            window.grained(`#grainedContainer`, GRAINED_OPTIONS);
        }
      }}
    />
  );
};

export default Grained;
