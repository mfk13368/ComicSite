import React from 'react';
import { Sparkles, Zap, Star, MessageCircle } from 'lucide-react';
import heroImg from '../assets/hero.png';

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="space-y-6">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl leading-none text-comic-blue drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] -rotate-2">
              Willkommen in <br />
              <span className="text-comic-red">Comic World!</span>
            </h1>
            <div className="absolute -top-10 -right-10 hidden lg:block">
              <div className="boom-box text-4xl">BOOM!</div>
            </div>
          </div>
          
          <div className="speech-bubble">
            <p className="font-['Kalam'] text-2xl font-bold">
              Hier findest du die buntesten Abenteuer und die lautesten Geschichten! 
              Genau wie in deinen liebsten Lustigen Taschenbüchern.
            </p>
            <div className="absolute -right-6 bottom-4 w-12 h-12 bg-comic-yellow border-3 border-black rounded-full flex items-center justify-center shadow-comic-sm">
              <Zap size={20} />
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="comic-button text-2xl">Jetzt Entdecken!</button>
            <button className="comic-button bg-comic-green text-2xl">Mehr Erfahren</button>
          </div>
        </div>

        <div className="comic-panel h-[400px] flex items-center justify-center bg-comic-yellow overflow-visible">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-white border-4 border-black rounded-full shadow-comic flex items-center justify-center overflow-hidden">
                 <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Action text items */}
            <div className="absolute top-4 right-4 rotate-12 pow-text">POW!</div>
            <div className="absolute bottom-4 left-4 -rotate-12 pow-text text-comic-blue">ZAP!</div>
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 rotate-[-45deg] pow-text text-comic-green">WHAM!</div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          icon={<Sparkles size={40} />} 
          title="Bunt & Laut" 
          description="Unsere Designs springen dich förmlich an!"
          color="bg-comic-yellow"
        />
        <FeatureCard 
          icon={<Star size={40} />} 
          title="Superhelden" 
          description="Jeder Klick ist ein kleines Abenteuer."
          color="bg-comic-red"
          textColor="text-white"
        />
        <FeatureCard 
          icon={<MessageCircle size={40} />} 
          title="Sprechblasen" 
          description="Kommunikation direkt auf den Punkt gebracht."
          color="bg-comic-blue"
          textColor="text-white"
        />
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string; textColor?: string }> = ({ icon, title, description, color, textColor = 'text-black' }) => (
  <div className={`comic-panel ${color} ${textColor} hover:scale-105 transition-transform cursor-pointer`}>
    <div className="mb-4 bg-white border-2 border-black p-3 inline-block rounded-lg text-black">
      {icon}
    </div>
    <h3 className="text-2xl mb-2">{title}</h3>
    <p className="font-['Kalam'] font-bold text-lg">{description}</p>
  </div>
);

export default LandingPage;
