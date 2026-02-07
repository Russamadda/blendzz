import Image from "next/image";
import { Section } from "@/components/Section";

export const HeroCard = () => {
  return (
    <Section id="hjem" fullWidth className="bg-[#0b0b0c] py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[8px] bg-[#f3ecdd] border border-[#b9935a] shadow-[0_14px_50px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center px-7 md:px-9 lg:px-11 py-5 lg:py-7">
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <h1 className="text-7xl md:text-8xl lg:text-9xl leading-[0.84] font-bold uppercase text-[#0b0b0c]">
                  BLENDZZ
                </h1>
                <h2 className="text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-bold uppercase text-[#0b0b0c]">
                  HAIR STUDIO
                </h2>
              </div>
              <p className="text-sm md:text-base tracking-[0.35em] uppercase text-[#0b0b0c]">
                BARBERSHOP I BODØ
              </p>
              <p className="text-lg md:text-xl text-[#201c15] max-w-xl leading-relaxed">
                Premium fades og moderne herrestiler – en fresh, inkluderende barbershop i sentrum. Spesielt god på texture / afro-hår.
              </p>
              <div className="relative inline-block mt-2">
                <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] border-2 border-[#0b0b0c]" aria-hidden />
                <a
                  href="#kontakt"
                  className="relative inline-flex items-center justify-center px-8 py-3 font-semibold uppercase tracking-[0.08em] bg-[#0b0b0c] text-[#c9a76a] border-2 border-[#0b0b0c] transition-transform duration-200 hover:-translate-y-[2px] hover:brightness-110"
                >
                  Book time
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative flex items-center justify-center">
              <Image
                src="/blendzz-guy.png"
                alt="Blendzz karakterillustrasjon"
                width={820}
                height={980}
                priority
                className="w-full h-auto max-w-[92%]"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
