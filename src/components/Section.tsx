import React from "react";
import { Container } from "@/components/Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section = ({ children, className = "", id, fullWidth = false }: SectionProps) => (
  <section id={id} className={`section scroll-mt-24 md:scroll-mt-28 ${className}`}>
    {fullWidth ? children : <Container>{children}</Container>}
  </section>
);
