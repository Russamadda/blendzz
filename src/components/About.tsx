import Image from "next/image";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export const About = () => (
  <Section id="om" fullWidth className="bg-[#0b0b0c] py-10 lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 rounded-[8px] bg-[#f3ecdd] border border-[#b9935a] shadow-[0_14px_50px_rgba(0,0,0,0.2)] overflow-hidden min-h-[58vh]">
        <div className="px-8 md:px-10 lg:px-12 py-8 lg:py-10 flex flex-col gap-4 justify-center">
          <div className="inline-flex items-center gap-3 uppercase tracking-[0.16em] text-sm font-semibold text-[#0b0b0c]">
            <ScissorIcon className="h-5 w-5" />
            Om oss
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-[48px] leading-[1.02] uppercase text-[#0b0b0c] max-w-2xl">
            "Young barbers"
          </h3>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-[#1a1610] max-w-3xl">
            <p>
              Blendzz ble startet av en ung og ambisiøs gründergruppe i Bodø med en tydelig visjon: å skape mer enn bare en barbershop. Hos oss handler det om presisjon i håndverket, respekt for barberkulturen og en opplevelse som får deg til å føle deg vel – hver eneste gang.
            </p>
            <p>
              Vi spesialiserer oss på skarpe fades, moderne herrefrisyrer og behandling av afro-teksturert hår, og legger stor stolthet i detaljene som skiller en god klipp fra en virkelig gjennomført stil. Barbererne våre følger med på trender, men glemmer aldri de klassiske teknikkene som danner grunnlaget for ekte kvalitet.
            </p>
            <p>
              Blendzz er et sted hvor alle er velkomne – enten du ønsker en tidløs taper, en fresh skin fade eller vil prøve noe helt nytt. Vi tar oss tid til å forstå hva du ønsker, gir ærlige anbefalinger og sørger for at du går ut døren med både selvtillit og en stil som varer.
            </p>
            <p>
              For oss er ikke dette bare en jobb – det er et fag, en lidenskap og en kultur vi er stolte av å bygge videre på i Bodø.
            </p>
          </div>
          <Button
            as="a"
            href="#kontakt"
            variant="secondary"
            className="border-[#0b0b0c] text-[#0b0b0c] hover:bg-[#0b0b0c] hover:text-[#c9a76a]"
          >
            Book time
          </Button>
        </div>
        <div className="relative bg-white overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(201,167,106,0.12),transparent_60%)]"
            aria-hidden
          />
          <Image
            src="/about.png"
            alt="Barber arbeider i salongen"
            width={720}
            height={760}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </Section>
);

const ScissorIcon = ({ className = "h-4 w-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 17.5 3 6" />
    <path d="m3 6 7.5 7.5" />
    <path d="m13 4 3 3" />
    <circle cx="4" cy="20" r="2.5" />
    <circle cx="17" cy="7" r="2.5" />
    <path d="m14 14 7-7" />
  </svg>
);
