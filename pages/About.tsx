import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = "opacity-0 animate-[fadeIn_1s_cubic-bezier(0.22,1,0.36,1)_forwards]";
  
  return (
    <div className="w-full pt-40 pb-24 px-6 sm:px-12 md:px-24 flex justify-center">
      <div className="max-w-3xl w-full flex flex-col gap-24 md:gap-32">
        
        {/* Opening Statement */}
        <section className={fadeInUp} style={{ animationDelay: '0ms' }}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight text-graphite font-normal">
            PEARL is a digital studio focused on clarity, intention, and longevity.
          </h1>
        </section>

        {/* Story & Origin */}
        <section className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${fadeInUp}`} style={{ animationDelay: '200ms' }}>
          <div className="md:col-span-4">
            <span className="text-xs font-medium tracking-[0.2em] text-mist uppercase">Origins</span>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 text-lg text-graphite/80 font-light leading-relaxed">
            <p>
              PEARL was born when Alexis and Marion met — two complementary profiles, united by a shared obsession for detail, meaning, and execution.
            </p>
            <p>
              Alexis brings structure, vision, and delivery.<br/>
              Marion brings design sensitivity and technical precision.
            </p>
          </div>
        </section>

        {/* Shinkansen Moment */}
        <section className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${fadeInUp}`} style={{ animationDelay: '400ms' }}>
          <div className="md:col-span-4">
            <span className="text-xs font-medium tracking-[0.2em] text-mist uppercase">The Spark</span>
          </div>
          <div className="md:col-span-8 text-lg text-graphite/80 font-light leading-relaxed">
            <p>
              The idea truly took shape during a Shinkansen ride across Japan.
              Watching landscapes move with absolute precision and calm, we realized we wanted to build websites the same way: carefully engineered, yet effortless on the surface.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${fadeInUp}`} style={{ animationDelay: '600ms' }}>
          <div className="md:col-span-4">
            <span className="text-xs font-medium tracking-[0.2em] text-mist uppercase">Philosophy</span>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 text-lg text-graphite/80 font-light leading-relaxed">
            <p>
              We approach websites as crafted, living objects.
              Not as one-off deliveries, but as systems designed to grow, adapt, and mature over time.
            </p>
            <p className="text-graphite font-normal">
              We don’t chase attention. We design for clarity.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${fadeInUp}`} style={{ animationDelay: '800ms' }}>
           <div className="md:col-span-4">
            <span className="text-xs font-medium tracking-[0.2em] text-mist uppercase">Process</span>
          </div>
          <div className="md:col-span-8 flex flex-col gap-8 text-lg text-graphite/80 font-light leading-relaxed">
            <p>
              Every project starts with a conversation.
              We take the time to understand your context, your constraints, and what truly matters — beyond features or trends.
            </p>
            <p>
              We work closely, stay reactive, and keep communication human and direct.
              You’re never dealing with a black box, and decisions are made together.
            </p>
            <div className="pl-6 border-l border-mist/30">
              <p className="italic text-mist">
                Most importantly, we don’t see websites as finished products.
                We see them as evolving systems — something that grows with your brand, your content, and your ambitions.
              </p>
            </div>
            <p className="text-graphite font-normal">
              A launch is not an end point. It’s a starting point.
            </p>
          </div>
        </section>

        {/* Client Benefit */}
        <section className={`grid grid-cols-1 md:grid-cols-12 gap-8 ${fadeInUp}`} style={{ animationDelay: '1000ms' }}>
           <div className="md:col-span-4">
             {/* Empty spacer for alignment */}
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 text-lg text-graphite/80 font-light leading-relaxed">
            <p>
              This approach allows us to build websites that remain relevant over time, adapt naturally, and support long-term growth.
            </p>
            <p>
              It also means we often keep working with our clients well beyond the initial release.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`flex justify-center pt-12 pb-12 ${fadeInUp}`} style={{ animationDelay: '1200ms' }}>
          <Link to="/" className="group flex items-center gap-3 text-lg tracking-wide text-graphite hover:text-mist transition-colors duration-500">
            Start a project
            <ArrowUpRight strokeWidth={1.5} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500 ease-physics" />
          </Link>
        </section>

      </div>
    </div>
  );
};

export default About;