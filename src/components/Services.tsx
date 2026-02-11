import Image from "next/image";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { ServiceRow } from "@/components/ServiceRow";

export const Services = () => (
  <Section id="tjenester" fullWidth className="bg-[#0b0b0c] py-10 lg:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 rounded-[8px] bg-[#f3ecdd] border border-[#b9935a] shadow-[0_14px_50px_rgba(0,0,0,0.2)] overflow-hidden min-h-[58vh]">
        <div className="relative overflow-hidden">
          <Image
            src="/services.png"
            alt="Fade haircut"
            width={720}
            height={760}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="text-brand-bg px-8 md:px-10 lg:px-12 py-8 lg:py-10 space-y-6">
          <p className="text-sm tracking-[0.16em] text-[#0b0b0c] uppercase font-semibold">
            Tjenester
          </p>
          <h3 className="text-4xl md:text-5xl lg:text-[48px] leading-[1.02] uppercase text-[#0b0b0c]">
            Presise fades, tekstur og grooming.
          </h3>
          <div className="space-y-3">
            {services.map((service) => (
              <ServiceRow key={service.id} service={service} />
            ))}
          </div>
          <div className="flex justify-end">
            <div className="relative inline-block">
              <span className="absolute inset-0 translate-x-[6px] translate-y-[6px] border-2 border-[#0b0b0c]" aria-hidden />
              <a
                href="#kontakt"
                className="relative inline-flex items-center justify-center px-8 py-3 font-semibold uppercase tracking-[0.08em] bg-[#0b0b0c] text-[#c9a76a] border-2 border-[#0b0b0c] transition-transform duration-200 hover:-translate-y-[2px] hover:brightness-110"
              >
                Book time
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);
