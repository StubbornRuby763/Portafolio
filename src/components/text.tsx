import React, { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

interface TextProps {
  children: ReactNode;
  staggerDelay?: number;
}

export const Text = ({ children, staggerDelay = 200 }: TextProps) => {
  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (!child) return null;

        return (
          <FadeIn key={index} delay={index * staggerDelay}>
            {child}
          </FadeIn>
        );
      })}
    </div>
  );
};