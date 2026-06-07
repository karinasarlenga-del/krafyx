import { Reveal } from './Reveal';
import { DynamicFrameLayout, Frame } from './ui/dynamic-frame-layout';

const frames: Frame[] = [
  {
    id: 1,
    video: "https://youtu.be/xCpMjxuQqV4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 2,
    video: "https://youtu.be/b7Lc9TdAc0c",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 3,
    video: "https://youtu.be/rb4KoL8bkjg",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 4,
    video: "https://youtu.be/OUgqQMWOGoY",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 5,
    video: "https://youtu.be/hmfuVufq-Kc",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 6,
    video: "https://youtu.be/sMxgdEkto68",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 7,
    video: "https://youtu.be/xCpMjxuQqV4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 8,
    video: "https://youtu.be/b7Lc9TdAc0c",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
  },
  {
    id: 9,
    video: "https://youtu.be/rb4KoL8bkjg",
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
