import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Blendzz Hair Studio",
  description: "Moderne, inkluderende barbershop i Oslo – fades, tekstur og premium service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} font-sans bg-brand-bg text-brand-text`}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
