import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';

export function Contact() {
  return (
    <section id="contact" className="py-40 bg-[#050505]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 mb-24 md:mb-0">
            <Reveal>
              <h2 className="font-montserrat text-[48px] font-semibold leading-tight tracking-tight mb-8">Start a project / <br/>Iniciar proyecto</h2>
            </Reveal>
            <Reveal>
              <p className="font-inter text-lg text-[#c4c7c8] max-w-sm">
                Tell us about your vision. Let's create something extraordinary together.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-16 space-y-6">
                <p className="font-geist text-[12px] uppercase tracking-widest opacity-50">GENERAL INQUIRIES</p>
                <a href="mailto:hello@krafyx.com" className="font-montserrat text-2xl block hover:text-white/70 transition-colors border-b border-[#2C2C2E] pb-2 inline-block">hello@krafyx.com</a>
              </div>
            </Reveal>
          </div>
          
          <div className="md:col-span-7">
            <form className="space-y-16" onSubmit={e => e.preventDefault()}>
              <Reveal delay={0.2} className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white" 
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">Company</label>
                  <input 
                    type="text" 
                    placeholder="Brand or Agency" 
                    className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white" 
                  />
                </div>
                
                <div className="relative group">
                  <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">Project Details</label>
                  <textarea 
                    placeholder="Brief description of your project..." 
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white resize-none" 
                  ></textarea>
                </div>
                
                <div>
                  <MagneticButton type="submit" className="w-full md:w-auto px-16 py-6 bg-white text-[#050505] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 font-geist text-[12px]">
                    Submit Inquiry
                  </MagneticButton>
                </div>
              </Reveal>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
