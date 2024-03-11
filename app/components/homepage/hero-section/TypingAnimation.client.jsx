"use client";

import { ReactTyped } from "react-typed";

const TypingAnimation = () => {
  return (
    <ReactTyped
      strings={["발전하는", "배움이 좋은", "항상 피곤한", "돈까스를 좋아하는"]}
      typeSpeed={120}
      backSpeed={120}
      loop={true}
      // 스타일 지정 생략
    />
  );
};

export default TypingAnimation;
