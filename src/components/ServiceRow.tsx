import React from "react";
import type { ServiceItem } from "@/data/services";

type Props = {
  service: ServiceItem;
};

export const ServiceRow: React.FC<Props> = ({ service }) => {
  return (
    <div className="py-4 border-b border-[#b9935a]/60">
      <div className="flex flex-wrap items-center gap-3">
        <div className="text-xl font-bold uppercase tracking-[0.05em] text-[#0b0b0c]">
          {service.title}
        </div>
        <div className="hidden sm:block flex-1 border-t border-[#d4c6a2]" />
        <div className="sm:text-right text-[#b07d2e] font-semibold sm:ml-auto text-lg">
          {service.price}
        </div>
      </div>
      <div className="mt-2 text-sm text-[#3b3327] leading-relaxed max-w-2xl">
        {service.description}
      </div>
    </div>
  );
};
