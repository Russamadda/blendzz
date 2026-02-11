"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button";

const links = [
  { href: "#hjem", label: "Hjem" },
  { href: "#om", label: "Om oss" },
  { href: "#tjenester", label: "Tjenester" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-[#0b0b0c]/75 border-b border-brand-border">
      <div className="container-xl flex items-center gap-5 py-5 px-4 sm:px-6">
        <Link href="#hjem" className="flex items-center gap-3 shrink-0">
          <Image
            src="/img/logo.png"
            alt="Blendzz logo"
            width={180}
            height={54}
            className="h-auto w-auto max-h-14"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-white hover:text-brand-gold transition-colors px-2"
            >
              {item.label}
            </Link>
          ))}
          <Button
            as="a"
            href="#kontakt"
            variant="primary"
            className="px-5 py-2.5 text-base bg-[#f3ecdd] text-[#0b0b0c] border-[#f3ecdd] hover:bg-[#e7dbbf] hover:text-[#0b0b0c]"
          >
            Book time
          </Button>
        </nav>

        {/* Mobile simple menu */}
        <div className="lg:hidden ml-auto">
          <Button as="a" href="#kontakt" variant="primary" className="px-4 py-2 text-sm">
            Book
          </Button>
        </div>
      </div>
      <div className="lg:hidden border-t border-brand-border/60">
        <div className="container-xl flex items-center gap-4 overflow-x-auto py-3 text-sm">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-muted hover:text-brand-gold whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
