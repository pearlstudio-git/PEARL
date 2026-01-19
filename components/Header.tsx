import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 sm:px-12 sm:py-10 flex justify-between items-start pointer-events-none mix-blend-multiply">
      
      {/* Left Column: Back to Start (Desktop/Mobile) */}
      <div className="flex-1 flex justify-start items-start pointer-events-auto min-w-[80px]">
        {!isHome && (
          <Link 
            to="/" 
            className="text-[11px] tracking-[0.2em] uppercase text-mist hover:text-graphite transition-colors duration-500 ease-physics"
          >
            Start
          </Link>
        )}
      </div>

      {/* Center Column: Identity */}
      <div className="flex-none flex flex-col items-center text-center pointer-events-auto z-50">
        <Link to="/" className="group flex flex-col items-center">
          <h1 className="text-lg sm:text-xl font-medium tracking-[0.3em] text-graphite mb-3 sm:mb-4 transition-all duration-700 ease-physics group-hover:tracking-[0.35em]">
            PEARL
          </h1>
          <div className="hidden sm:flex flex-col gap-1 text-[11px] text-graphite tracking-[0.1em] leading-relaxed font-normal transition-opacity duration-500">
            <p>Designed with intention. Built to last.</p>
            <p className="text-mist group-hover:text-graphite/80 transition-colors duration-500">Custom websites. No templates.</p>
          </div>
           {/* Mobile compact tagline */}
           <div className="sm:hidden text-[10px] text-graphite tracking-wide leading-relaxed font-normal">
            <p>Designed with intention.</p>
          </div>
        </Link>
      </div>

      {/* Right Column: Navigation */}
      <div className="flex-1 flex justify-end items-start gap-6 sm:gap-12 pointer-events-auto min-w-[80px]">
        <Link 
          to="/creations" 
          className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ease-physics ${location.pathname === '/creations' ? 'text-graphite' : 'text-mist hover:text-graphite'}`}
        >
          Creations
        </Link>
        <Link 
          to="/about" 
          className={`text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ease-physics ${location.pathname === '/about' ? 'text-graphite' : 'text-mist hover:text-graphite'}`}
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;