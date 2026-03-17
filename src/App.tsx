import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ImprintPage from './pages/ImprintPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/imprint" element={<ImprintPage />} />
          </Routes>
        </main>
        <footer className="bg-black text-white p-8 mt-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
             <div className="text-4xl font-['Bangers'] tracking-widest text-comic-yellow rotate-[-5deg] drop-shadow-[2px_2px_0px_rgba(255,0,0,1)]">
               COMIC WORLD
             </div>
             <div className="font-['Kalam'] font-bold text-lg text-center">
               Ganz wie in den Lustigen Taschenbüchern!
             </div>
             <div className="text-right font-['Kalam'] font-bold">
               © 2026 Comic World
             </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
