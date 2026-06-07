import { Reveal } from './Reveal';

const projects = [
  {
    id: 1,
    client: 'Aura Luxury',
    title: 'The Silence of Speed',
    span: 'md:col-span-8 group cursor-pointer overflow-hidden relative aspect-video',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj8sOSFGeWJhBnd2li45rzKa6vLd8G0I4tdwjiFxOJxPz4Jga3aeWZ-AKu5VfJIogyPGdZMdeC0UtelJJxVKrE6_0YwToVQaIjAu4R31IbjBzbPim5ACfivdFjrSXN-KamjYO7M-coMwibEfLrWooCqcdKIgSNUuBU_2PXlqovaoCImTeY0K7LWZGKkp1betwELXeRF25xM7Z8-JLjlQyDFL79g2vkTCNnfwfmR3sU5ndstHhgSNhhEr5iOyvowQpoQgPit7UKqwiF',
    delay: 0
  },
  {
    id: 2,
    client: 'Elysium Spirits',
    title: 'Liquid Gold',
    span: 'md:col-span-4 group cursor-pointer overflow-hidden relative aspect-[4/5] md:mt-24',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqGrCYmjYipgB8cA8zVONXClE9uwN_xu-D0AHmOTQJrgysLXHmpUSzzfcEasGzwrRi70SBgozzXP6e8yIphPOM_2tR54kwvQ1CHlL2jo_8qql49yzZo0UR05D8v5OVhfNt3OPOhQhU93uN4SwSDg1636HZaT_jOvu1JW3vSkDHxB-O-Dw7mOwgN9Jj2o6oHUaz3EPxeoHiDbuvZ5a-o94YXTCU_CMukma3niRqzU9pwbqyoz0tTaGVqflXyqXBSAclGXRHJ7-lSNbz',
    delay: 0.2
  },
  {
    id: 3,
    client: 'Nexus Tech',
    title: 'Core Pulse',
    span: 'md:col-span-4 group cursor-pointer overflow-hidden relative aspect-square',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdiImZ6WjM-APkgn3Kjbex8e3toVM5-XuRheOg4qpYFxSR3HHcA6tAc_0xgtwpLJWq6nNjsKascPJETjKsUTEWB2pW9B5PMRzAza5hMgQvKqj5QXLqKNrl_aJ5XoxrPsroY9Bb4Mp9LozRbWIuuQqq_1ky5NBWdITBYL7TJETs7k_ZuUFiy1iAyY-KI74czTEFRWdox6QQqmMDeuJycmezmxRODA7DYCldHUrvdsnOtgkWU6_F1EuFkbS1tspbGX2oEpMmGA_ycYO3',
    delay: 0
  },
  {
    id: 4,
    client: 'Valkyrie Motors',
    title: 'Electric Zenith',
    span: 'md:col-span-8 group cursor-pointer overflow-hidden relative aspect-video',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBboE__BQzE3I0GqJoLxblxiCksEuJagvZAZ5g82ku65iDJ1NYMnuuD9eYPg-00GJsKJzeNkHlYkopx0KYX0J723_zJZ6Kguuu3degKwZjwoGti_OYiF-G0MEwjiDwtYIjpEseyJiZR-frIhZ7jUYsLnDMTcRB-uBkbRfHU_DGqJylX9Ej8OlX54aYtoZBjSS0eavRfyXM-lFKzRG2vp6tnUBqqTAzUXjk5k2cpskSfArQD5UgNF3sPsU6eNERMKUS18TUFI2F9Fe_4',
    delay: 0.2
  }
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
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={project.span}>
              <Reveal delay={project.delay} className="w-full h-full">
                <div className="w-full h-full relative group overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:brightness-110" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <p className="font-geist text-[12px] font-medium tracking-widest text-white mb-1 uppercase">{project.client}</p>
                    <h3 className="font-montserrat text-2xl font-medium">{project.title}</h3>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
