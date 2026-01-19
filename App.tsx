import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import StartProject from './pages/StartProject';
import Creations from './pages/Creations';
import About from './pages/About';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- NEW CSS-BASED NACRE SYSTEM ---
// The implementation logic is moved to index.html CSS for better performance and strict adherence to the "CSS Layers" requirement.
// This component now serves as the anchor for those styles.
const NacreSystem = () => {
  return <div id="nacre-system" />;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full relative selection:bg-gray-200 selection:text-graphite">
        {/* Global Background System */}
        <NacreSystem />
        
        <Header />
        
        <main className="w-full relative z-10">
          <Routes>
            <Route path="/" element={<StartProject />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;