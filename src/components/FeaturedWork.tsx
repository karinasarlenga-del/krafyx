import { Reveal } from './Reveal';
import { useLanguage } from '../LanguageContext';

const videos = [
  { id: 1, embedUrl: "https://www.youtube.com/embed/xCpMjxuQqV4", title: "Project 1" },
  { id: 2, embedUrl: "https://www.youtube.com/embed/b7Lc9TdAc0c", title: "Project 2" },
  { id: 3, embedUrl: "https://www.youtube.com/embed/rb4KoL8bkjg", title: "Project 3" },
  { id: 4, embedUrl: "https://www.youtube.com/embed/OUgqQMWOGoY", title: "Project 4" },
  { id: 5, embedUrl: "https://www.youtube.com/embed/hmfuVufq-Kc", title: "Project 5" },
  { id: 6, embedUrl: "https://www.youtube.com/embed/sMxgdEkto68", title: "Project 6" },
  { id: 7, embedUrl: "https://www.youtube.com/embed/3-9y--VVgvE", title: "Project 7" }
];

export function FeaturedWork() {
  const { t } = useLanguage();
  return (
    <section id="work" className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="px-6 md:px-16 max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-end mb-24 md:mb-32">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-white/30"></span>
              <span className="font-geist text-[11px] font-medium text-white/50 uppercase tracking-[0.4em]">{t.work.archive}</span>
            </div>
            <h2 className="font-montserrat text-[40px] md:text-[64px] font-light leading-[1.1] tracking-tight text-white">
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">{t.work.heading}</span>
            </h2>
          </Reveal>
        </div>
        
        <div className="flex flex-col gap-16 md:gap-32">
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={0.1}>
              <div 
                className="w-full aspect-video rounded-xl md:rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative group transition-all duration-700 ease-out hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.05)]"
              >
                {/* Glassmorphism subtle glare overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
                
                <iframe 
                  className="absolute top-0 left-0 w-full h-full grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                  src={video.embedUrl} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
