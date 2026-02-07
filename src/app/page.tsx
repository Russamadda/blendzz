import { HeroCard } from "@/components/HeroCard";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HeroCard />
      <About />
      <Services />
      <Contact />
    </>
  );
}
