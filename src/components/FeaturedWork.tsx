import { Reveal } from './Reveal';

const videos = [
  { id: 1, embedUrl: "https://www.youtube.com/embed/xCpMjxuQqV4", title: "Project 1" },
  { id: 2, embedUrl: "https://www.youtube.com/embed/b7Lc9TdAc0c", title: "Project 2" },
  { id: 3, embedUrl: "https://www.youtube.com/embed/rb4KoL8bkjg", title: "Project 3" },
  { id: 4, embedUrl: "https://www.youtube.com/embed/OUgqQMWOGoY", title: "Project 4" },
  { id: 5, embedUrl: "https://www.youtube.com/embed/hmfuVufq-Kc", title: "Project 5" },
  { id: 6, embedUrl: "https://www.youtube.com/embed/sMxgdEkto68", title: "Project 6" }
];

export function FeaturedWork() {
  return (
    <section id="work" className="py-40 bg-[#050505]">
      <div className="px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <Reveal>
            <span className="font-geist text-[12px] font-medium text-white uppercase tracking-[0.3em] mb-4 block">Archive 2024</span>
            <h2 className="font-montserrat text-[32px] md:text-[48px] font-semibold leading-tight tracking-tight">Featured Work / <br className="md:hidden"/>Trabajos Destacados</h2>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Reveal key={video.id} delay={index * 0.1}>
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-2xl relative group">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
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
