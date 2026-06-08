import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { useLanguage } from '../LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-40 bg-[#050505] relative overflow-hidden border-t border-[#2C2C2E]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="px-6 md:px-16 max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <p className="font-geist text-[12px] uppercase tracking-[0.3em] opacity-50 mb-12 text-white">{t.contact.genInq}</p>
        </Reveal>
        
        <Reveal delay={0.1}>
          <h2 className="font-montserrat text-[48px] md:text-[80px] font-semibold leading-tight tracking-tight mb-8 whitespace-pre-wrap text-white">
            {t.contact.heading}
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="font-inter text-lg text-[#c4c7c8] max-w-lg mx-auto mb-20">
            {t.contact.desc}
          </p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <MagneticButton as="a" href="mailto:krafyx.com@gmail.com" className="inline-block relative group py-2 cursor-pointer">
            <span className="font-montserrat text-[32px] md:text-[56px] font-light tracking-tight text-white/80 group-hover:text-white transition-colors duration-500">
              krafyx.com@gmail.com
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 transform origin-left scale-x-100 group-hover:bg-white transition-all duration-500"></span>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
