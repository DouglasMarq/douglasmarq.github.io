"use client";
import { TypeAnimation as TypeAnimationLib } from "react-type-animation";
import { Sequences } from "../../types";

export type TypeAnimationProps = {
  text: Sequences;
  className: string;
};

const TypeAnimation: React.FC<TypeAnimationProps> = ({ text, className }) => {
  return (
    <TypeAnimationLib
      className={className}
      sequence={text}
      wrapper="h1"
      speed={30}
      deletionSpeed={65}
      repeat={0}
    />
  );
};

export default TypeAnimation;
