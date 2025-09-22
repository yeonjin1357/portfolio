"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
