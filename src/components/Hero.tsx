import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { useLanguage } from '../LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuoSnFzmQIoK9kiuEDekNbTJ2KRirsD9tXklMiiKtUac1q_UgkWcWA5ta44lU0y-u1rEu8z9yD_kQmTDU2ZTVhEGTJmjhVYDZxid9DVFrZlJJPbraoWab6UcwxvIiS6NYBfxqy4RLXocQG_nZ6PA1EDeh382LeUYYTNSgw6dsVpupt438p_XvP27BaMJnNfLiLyRIK3rPSrWFFdkSYvzdj0V69bShU6zZXlE2x3CaSc7J5eo2rPJ4iL0h9xLlRMvtAsEu7E59MsRti" 
          alt="Hero background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="grain-overlay"></div>
      </div>
      <div className="relative z-20 px-6 md:px-16 w-full max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <Reveal>
            <h1 className="font-montserrat text-4xl md:text-[48px] md:leading-[56px] tracking-tight font-semibold text-white mb-4 whitespace-pre-wrap">
              {t.hero.title}
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="font-inter text-lg text-white/90 mb-10 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
          </Reveal>
          
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton as="a" href="#work" className="px-10 py-4 bg-white text-[#050505] font-bold text-center hover:bg-neutral-200 transition-colors duration-300">
                {t.hero.btnWork}
              </MagneticButton>
              <MagneticButton as="a" href="#contact" className="px-10 py-4 border border-white text-white font-bold text-center hover:bg-white hover:text-[#050505] transition-colors duration-300">
                {t.hero.btnContact}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
