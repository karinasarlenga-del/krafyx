import { Reveal } from './Reveal';

export function Manifesto() {
  return (
    <section className="py-60 bg-[#121317]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12">
          <div className="md:col-start-3 md:col-span-8 text-center">
            <Reveal>
              <blockquote className="font-montserrat font-bold text-[36px] md:text-[64px] leading-tight italic tracking-tighter">
                "La atención se gana. <br className="hidden md:block"/>
                La emoción permanece. <br className="hidden md:block"/>
                Cada plano importa."
              </blockquote>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-12 font-inter text-lg text-[#c4c7c8]">
                Attention is earned. Emotion remains. Every frame matters.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
