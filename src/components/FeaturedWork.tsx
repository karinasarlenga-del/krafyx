import { Reveal } from './Reveal';
import ReactPlayer from 'react-player';

const videos = [
  { id: 1, url: "https://www.youtube.com/watch?v=xCpMjxuQqV4", title: "Project 1" },
  { id: 2, url: "https://www.youtube.com/watch?v=b7Lc9TdAc0c", title: "Project 2" },
  { id: 3, url: "https://www.youtube.com/watch?v=rb4KoL8bkjg", title: "Project 3" },
  { id: 4, url: "https://www.youtube.com/watch?v=OUgqQMWOGoY", title: "Project 4" },
  { id: 5, url: "https://www.youtube.com/watch?v=hmfuVufq-Kc", title: "Project 5" },
  { id: 6, url: "https://www.youtube.com/watch?v=sMxgdEkto68", title: "Project 6" }
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
                <ReactPlayer
                  url={video.url}
                  width="100%"
                  height="100%"
                  controls={true}
                  light={true}
                  className="absolute top-0 left-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
