import { Reveal } from './Reveal';
import { useLanguage } from '../LanguageContext';

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-40 bg-[#121317]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 gap-8">
          <div className="md:col-start-2 md:col-span-10">
            <Reveal>
              <span className="font-geist text-[12px] text-white uppercase tracking-[0.3em] mb-12 block">{t.about.label}</span>
            </Reveal>
            
            <Reveal>
              <h2 className="font-montserrat text-[32px] md:text-[56px] font-bold leading-[1.2] mb-24 tracking-tight">
                {t.about.heading}
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-[#c4c7c8]">
              <Reveal>
                <div className="space-y-4">
                  <h4 className="font-montserrat text-2xl font-medium text-white mb-4">{t.about.visTitle}</h4>
                  <p className="font-inter text-base leading-relaxed">{t.about.visDesc}</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <h4 className="font-montserrat text-2xl font-medium text-white mb-4">{t.about.procTitle}</h4>
                  <p className="font-inter text-base leading-relaxed">{t.about.procDesc}</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.4}>
                <div className="space-y-4">
                  <h4 className="font-montserrat text-2xl font-medium text-white mb-4">{t.about.globTitle}</h4>
                  <p className="font-inter text-base leading-relaxed">{t.about.globDesc}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
