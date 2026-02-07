import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <div className="text-sm font-semibold tracking-[0.14em] text-brand-gold uppercase">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-3xl mt-3 text-4xl font-bold leading-tight text-brand-text lg:text-5xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-relaxed text-brand-muted lg:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
};
