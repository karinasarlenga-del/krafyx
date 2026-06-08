import { Reveal } from './Reveal';
import { MagneticButton } from './MagneticButton';
import { useLanguage } from '../LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const projectDetails = formData.get('project_details') as string;

    const subject = encodeURIComponent(`New Inquiry: ${name} ${company ? `- ${company}` : ''}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nProject Details:\n${projectDetails}`);
    
    window.location.href = `mailto:krafyx.com@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="py-40 bg-[#050505]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 mb-24 md:mb-0">
            <Reveal>
              <h2 className="font-montserrat text-[48px] font-semibold leading-tight tracking-tight mb-8 whitespace-pre-wrap">{t.contact.heading}</h2>
            </Reveal>
            <Reveal>
              <p className="font-inter text-lg text-[#c4c7c8] max-w-sm">
                {t.contact.desc}
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-16 space-y-6">
                <p className="font-geist text-[12px] uppercase tracking-widest opacity-50">{t.contact.genInq}</p>
                <a href="mailto:krafyx.com@gmail.com" className="font-montserrat text-2xl block hover:text-white/70 transition-colors border-b border-[#2C2C2E] pb-2 inline-block">krafyx.com@gmail.com</a>
              </div>
            </Reveal>
          </div>
          
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-16">
              <Reveal delay={0.2} className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">{t.contact.name}</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder={t.contact.namePh}
                      className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">{t.contact.email}</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder={t.contact.emailPh}
                      className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white" 
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">{t.contact.company}</label>
                  <input 
                    type="text" 
                    name="company"
                    placeholder={t.contact.companyPh}
                    className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white" 
                  />
                </div>
                
                <div className="relative group">
                  <label className="font-geist text-[12px] text-[#c4c7c8] uppercase tracking-widest mb-2 block">{t.contact.details}</label>
                  <textarea 
                    name="project_details"
                    required
                    placeholder={t.contact.detailsPh}
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-[#2C2C2E] py-4 px-0 text-white transition-colors duration-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 focus:border-white resize-none" 
                  ></textarea>
                </div>
                
                <div>
                  <MagneticButton type="submit" className="w-full md:w-auto px-16 py-6 bg-white text-[#050505] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 font-geist text-[12px]">
                    {t.contact.submit}
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
