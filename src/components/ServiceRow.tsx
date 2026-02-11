import React from "react";
import type { ServiceItem } from "@/data/services";

type Props = {
  service: ServiceItem;
};

export const ServiceRow: React.FC<Props> = ({ service }) => {
  return (
    <div className="py-4 border-b border-[#d4c6a2]/70">
      <div className="flex items-start gap-3">
        <div className="text-xl font-bold uppercase tracking-[0.05em] text-[#0b0b0c]">
          {service.title}
        </div>
        <div className="flex-1 border-b border-dotted border-[#0b0b0c]/50 mt-3" />
        <span className="text-[#0b0b0c] font-semibold text-lg ml-2">{service.price}</span>
      </div>
      <div className="mt-2 text-sm text-[#3b3327] leading-relaxed max-w-2xl">
        {service.description}
      </div>
    </div>
  );
};
