import { Reveal } from './Reveal';
import { DynamicFrameLayout, Frame } from './ui/dynamic-frame-layout';

const frames: Frame[] = [
  {
    id: 1,
    video: "https://www.youtube.com/watch?v=xCpMjxuQqV4",
    coverImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 2,
    video: "https://www.youtube.com/watch?v=b7Lc9TdAc0c",
    coverImage: "https://images.unsplash.com/photo-1503376713280-4d4023ad3712?w=800&q=80",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 3,
    video: "https://www.youtube.com/watch?v=rb4KoL8bkjg",
    coverImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 4,
    video: "https://www.youtube.com/watch?v=OUgqQMWOGoY",
    coverImage: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=800&q=80",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 5,
    video: "https://www.youtube.com/watch?v=hmfuVufq-Kc",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 6,
    video: "https://www.youtube.com/watch?v=sMxgdEkto68",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 7,
    video: "https://www.youtube.com/watch?v=xCpMjxuQqV4",
    coverImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 8,
    video: "https://www.youtube.com/watch?v=b7Lc9TdAc0c",
    coverImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?w=800&q=80",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 9,
    video: "https://www.youtube.com/watch?v=rb4KoL8bkjg",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
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
        
        <Reveal delay={0.2} className="w-full">
          <div className="w-full h-[60vh] md:h-[800px]">
            <DynamicFrameLayout 
              frames={frames} 
              className="w-full h-full" 
              hoverSize={6}
              gapSize={8}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
