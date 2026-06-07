import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="py-40 bg-[#121317]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 gap-8">
          <div className="md:col-start-2 md:col-span-10">
            <Reveal>
              <span className="font-geist text-[12px] text-white uppercase tracking-[0.3em] mb-12 block">About KRAFYX</span>
            </Reveal>
            
            <Reveal>
              <h2 className="font-montserrat text-[32px] md:text-[56px] font-bold leading-[1.2] mb-24 tracking-tight">
                We are a boutique creative studio specializing in advertising films and branded content. We combine high-end cinematography with strategic brand logic to create visuals that don't just look good—they perform.
              </h2>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-[#c4c7c8]">
              <Reveal>
                <div className="space-y-4">
                  <h4 className="font-montserrat text-2xl font-medium text-white mb-4">Vision</h4>
                  <p className="font-inter text-base leading-relaxed">Redefining the standard of commercial audiovisuals through a cinematic lens and obsession with detail.</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <h4 className="font-montserrat text-2xl font-medium text-white mb-4">Process</h4>
                  <p className="font-inter text-base leading-relaxed">From concept to post-production, we manage every frame to ensure a cohesive and high-impact brand narrative.</p>
                </div>
              </Reveal>
              
              <Reveal delay={0.4}>
                <div className="space-y-4">
                  <h4 className="font-montserrat text-2xl font-medium text-white mb-4">Global</h4>
                  <p className="font-inter text-base leading-relaxed">Based in Spain, operating globally. We produce content that translates across cultures and markets.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
