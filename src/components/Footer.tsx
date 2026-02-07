import Image from "next/image";
import { Container } from "@/components/Container";

export const Footer = () => (
  <footer className="border-t border-brand-border bg-[#0b0b0c]">
    <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/img/logo.png"
          alt="Blendzz Hair Studio"
          width={140}
          height={42}
          className="h-auto w-auto max-h-11"
        />
        <div>
          <p className="text-brand-text text-sm font-semibold">Blendzz Hair Studio</p>
          <p className="text-brand-muted text-xs">Storgata 56, Bodø</p>
        </div>
      </div>
      <p className="text-xs text-brand-muted">© {new Date().getFullYear()} Blendzz. Alle rettigheter reservert.</p>
    </Container>
  </footer>
);
