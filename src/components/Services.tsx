import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-40 bg-[#050505] border-t border-[#2C2C2E]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 mb-20 md:mb-0">
            <Reveal>
              <h2 className="font-montserrat text-[48px] font-semibold leading-tight tracking-tight sticky top-32">{t.services.heading}</h2>
            </Reveal>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-24">
              <Reveal>
                <div className="space-y-12">
                  <span className="font-geist text-[12px] text-[#656464] uppercase tracking-[0.2em]">{t.services.servLabel}</span>
                  <ul className="space-y-6">
                    {t.services.services.map((service) => (
                      <li key={service} className="font-montserrat text-2xl border-b border-[#2C2C2E] pb-4 flex justify-between group cursor-default text-white">
                        <span>{service}</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
