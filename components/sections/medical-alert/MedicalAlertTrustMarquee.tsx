import React from 'react';
import { ShieldCheck, Award, Lock, Radio, Droplets, Truck, Headphones } from 'lucide-react';

export function MedicalAlertTrustMarquee() {
  const credentials = [
    {
      icon: <Headphones className="w-5 h-5 text-[#0D9488]" />,
      title: '24/7 US Dispatch',
      subtitle: 'Certified live emergency operators',
    },
    {
      icon: <Radio className="w-5 h-5 text-rose-500" />,
      title: 'Nationwide 4G LTE',
      subtitle: 'Built-in cellular & GPS tracking',
    },
    {
      icon: <Droplets className="w-5 h-5 text-teal-600" />,
      title: '100% Shower-Safe',
      subtitle: 'Waterproof emergency wearables',
    },
    {
      icon: <Truck className="w-5 h-5 text-amber-600" />,
      title: 'Pre-Activated Delivery',
      subtitle: 'Fast shipping, ready out of box',
    },
    {
      icon: <Lock className="w-5 h-5 text-[#0D9488]" />,
      title: '100% Confidential',
      subtitle: 'Encrypted personal data & profiles',
    },
  ];

  return (
    <section className="bg-white border-b border-[#EAE5D8] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 items-center">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#FDFCF7] border border-slate-200/80 hover:border-slate-300 transition-colors shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center shrink-0 border border-slate-200/60">
                {cred.icon}
              </div>
              <div>
                <h4 className="font-serif-heading font-bold text-xs sm:text-sm text-[#0D1B2A]">
                  {cred.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-1">
                  {cred.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
