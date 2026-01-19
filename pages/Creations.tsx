import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Augmented data for the immersive concept experience
const CONCEPTS = [
  {
    id: 'c1',
    title: 'Silent Form',
    intention: 'Typography as architecture. Space as volume.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop'
  },
  {
    id: 'c2',
    title: 'Mono',
    intention: 'Interface reduced to its absolute core.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2068&auto=format&fit=crop'
  },
  {
    id: 'c3',
    title: 'Aura',
    intention: 'Digital presence that feels like ambient light.',
    image: 'https://images.unsplash.com/photo-1620641788427-b9f4dbf3b658?q=80&w=1965&auto=format&fit=crop'
  }
];

const DELIVERIES = [
  {
    id: '1',
    client: 'Aether Capital',
    description: 'Digital infrastructure for modern venture.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: '2',
    client: 'Maison S.',
    description: 'E-commerce for sustainable luxury.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
    year: '2023'
  }
];

const CLIENTS = ['Vogue', 'Aesop', 'Herman Miller', 'Polestar', 'Cos', 'Teenage Engineering'];
const TESTIMONIAL = "PEARL understood what we didn't say. Precision and calm in a chaotic timeline.";

const Creations: React.FC = () => {
  // Intersection observer could be added here for scroll-triggered reveals, 
  // but we rely on CSS scroll-snap and sticky behavior for the "calm" feel.

  return (
    <div className="w-full relative">
      
      {/* SECTION A: IMMERSIVE CONCEPTS (Scroll Snap Journey) */}
      <section className="relative w-full">
        {CONCEPTS.map((concept, index) => (
          <div 
            key={concept.id}
            className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center border-b border-pearl/0"
          >
             {/* Atmospheric Background Image */}
            <div className="absolute inset-0 w-full h-full">
               {/* 
                  Image Treatment: 
                  - Grayscale to fit the minimal aesthetic
                  - Low opacity to blend with the "Pearl" background
                  - Slow scale animation (Ken Burns) to feel alive
               */}
               <img 
                 src={concept.image} 
                 alt={concept.title}
                 className="w-full h-full object-cover grayscale opacity-[0.15] mix-blend-multiply transition-transform duration-[20s] ease-linear hover:scale-110" 
                 style={{ transform: 'scale(1.05)' }} 
               />
               {/* Noise/Grain overlay specifically for the image area to give it texture */}
               <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')]"></div>
               
               {/* Vignette to focus center */}
               <div className="absolute inset-0 bg-radial-gradient from-transparent via-pearl/20 to-pearl"></div>
            </div>

            {/* Content Content */}
            <div className="relative z-10 text-center px-6 max-w-xl mx-auto opacity-0 animate-[fadeIn_1.5s_cubic-bezier(0.22,1,0.36,1)_forwards]" style={{ animationDelay: '300ms' }}>
              <span className="block text-xs font-medium tracking-[0.3em] text-mist uppercase mb-6">Concept 0{index + 1}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-graphite font-light tracking-tight mb-6">
                {concept.title}
              </h2>
              <p className="text-lg md:text-xl text-graphite/60 font-light leading-relaxed">
                {concept.intention}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION B: TRANSITION */}
      <section className="relative z-20 w-full min-h-[50vh] flex items-center justify-center">
        <div className="opacity-0 animate-[fadeIn_1.5s_cubic-bezier(0.22,1,0.36,1)_forwards] view-timeline-reveal">
           <p className="text-sm md:text-base tracking-[0.2em] uppercase text-graphite/40">
             Latest deliveries
           </p>
        </div>
      </section>

      {/* SECTION C: SELECTED CLIENT WORK */}
      <section className="relative z-20 w-full px-6 sm:px-12 md:px-24 pb-32 max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-32 md:gap-48">
          {DELIVERIES.map((project, index) => (
            <div 
              key={project.id} 
              className="group w-full md:w-[90%] mx-auto"
            >
              <div className="relative overflow-hidden w-full aspect-[16/9] bg-[#F0F1F2] mb-8 md:mb-10">
                <img 
                  src={project.image} 
                  alt={project.client} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-[2s] ease-material group-hover:scale-[1.01] group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s] pointer-events-none" />
              </div>
              
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-2xl md:text-3xl text-graphite font-light tracking-tight">
                  {project.client}
                </h3>
                <p className="text-base md:text-lg text-mist font-light">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION D: CLIENTS & TESTIMONIALS */}
      <section className="relative z-20 w-full px-6 sm:px-12 md:px-24 pb-32 max-w-[1400px] mx-auto">
        <div className="border-t border-mist/10 pt-24 grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Client List */}
          <div className="md:col-span-5 lg:col-span-4">
             <h2 className="text-xs font-medium tracking-[0.2em] text-mist uppercase mb-12">Clients</h2>
             <div className="flex flex-col gap-4">
                {CLIENTS.map((client, i) => (
                  <span key={i} className="text-base text-graphite/40 font-light hover:text-graphite transition-colors duration-700 cursor-default">
                    {client}
                  </span>
                ))}
             </div>
          </div>

          {/* Testimonials */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
            <div className="md:pl-12 pt-2">
               <p className="text-xl md:text-2xl text-graphite font-light leading-relaxed">
                  “{TESTIMONIAL}”
                </p>
                <p className="mt-8 text-xs font-medium tracking-widest text-mist uppercase">— Vogue</p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative z-20 flex justify-center py-24">
        <Link to="/" className="group flex items-center gap-4 text-xl tracking-wide text-graphite hover:text-mist transition-colors duration-700">
          Start a project
          <ArrowUpRight strokeWidth={1} className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-700 ease-physics" />
        </Link>
      </section>

    </div>
  );
};

export default Creations;