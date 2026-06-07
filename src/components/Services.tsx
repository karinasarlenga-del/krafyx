import { Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-40 bg-[#050505] border-t border-[#2C2C2E]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 mb-20 md:mb-0">
            <Reveal>
              <h2 className="font-montserrat text-[48px] font-semibold leading-tight tracking-tight sticky top-32">Our Craft /<br/>Nuestro Oficio</h2>
            </Reveal>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <Reveal>
                <div className="space-y-12">
                  <span className="font-geist text-[12px] text-[#656464] uppercase tracking-[0.2em]">Servicios</span>
                  <ul className="space-y-6">
                    {['Comerciales Audiovisuales', 'Storytelling de Marca', 'Dirección Creativa', 'Producción'].map((service) => (
                      <li key={service} className="font-montserrat text-2xl border-b border-[#2C2C2E] pb-4 flex justify-between group cursor-default">
                        <span>{service}</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="space-y-12">
                  <span className="font-geist text-[12px] text-[#656464] uppercase tracking-[0.2em]">Expertise</span>
                  <ul className="space-y-6">
                    {['Commercial Films', 'Brand Storytelling', 'Creative Direction', 'Production'].map((service) => (
                      <li key={service} className="font-montserrat text-2xl text-[#c4c7c8] border-b border-[#2C2C2E] pb-4 flex justify-between group cursor-default">
                        <span>{service}</span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-white" />
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
