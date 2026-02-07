import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export const Contact = () => (
  <Section id="kontakt" fullWidth className="relative py-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "linear-gradient(rgba(11,11,12,0.85), rgba(11,11,12,0.9)), url('/contact/contact.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-hidden
    />
    <div className="relative container-xl grid gap-10 lg:grid-cols-2 items-start">
      <div className="flex flex-col gap-4 pt-2">
        <p className="text-sm tracking-[0.16em] text-brand-gold uppercase font-semibold">
          Kontakt
        </p>
        <h3 className="text-4xl lg:text-5xl leading-tight">Stikk innom eller book tid.</h3>
        <p className="text-brand-muted text-lg">
          Du finner oss sentralt i Storgata 56 i Bodø. Vi tar imot drop-in når kapasiteten tillater det, men anbefaler å booke time for å være sikker på å få plass.
        </p>
        <p className="text-brand-muted text-lg">
          Har du spørsmål eller ønsker å avtale tid? Bestill enkelt via Timma, eller ta kontakt med oss på e-post — vi svarer så raskt vi kan og hjelper deg gjerne.
        </p>
        <div>
          <Button as="a" href="#kontakt" variant="secondary" className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-[#0b0b0c]">
            Book via Timma
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="rounded-[22px] border border-brand-border/70 bg-brand-surface/80 backdrop-blur-md p-6 shadow-brand">
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-text">Navn</label>
              <input
                type="text"
                placeholder="Ditt navn"
                className="w-full rounded-[14px] border border-brand-border bg-brand-surface/80 px-4 py-3 text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-text">E-post</label>
              <input
                type="email"
                placeholder="din@email.no"
                className="w-full rounded-[14px] border border-brand-border bg-brand-surface/80 px-4 py-3 text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-text">Melding</label>
              <textarea
                rows={4}
                placeholder="Hva kan vi hjelpe med?"
                className="w-full rounded-[14px] border border-brand-border bg-brand-surface/80 px-4 py-3 text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
              />
            </div>
            <Button type="submit" variant="primary" className="w-full justify-center">
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  </Section>
);
