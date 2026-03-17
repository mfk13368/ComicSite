import React from 'react';

const ImprintPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="comic-panel bg-white border-6 border-black max-w-2xl mx-auto p-12 relative">
        <div className="absolute -top-10 -left-10 boom-box text-3xl rotate-[-10deg]">INFO!</div>
        <h1 className="text-5xl mb-8 border-b-6 border-comic-red pb-4">Impressum</h1>
        <div className="space-y-6 font-['Kalam'] text-2xl font-bold">
          <div>
            <h3 className="text-comic-blue mb-2 text-3xl font-['Bangers']">Betreiber der Website</h3>
            <p>Entenhausen AG</p>
            <p>Am Geldspeicher 1</p>
            <p>12345 Entenhausen</p>
          </div>
          
          <div>
            <h3 className="text-comic-red mb-2 text-3xl font-['Bangers']">Kontakt</h3>
            <p>Telefon: +49 (0) 123 456789</p>
            <p>E-Mail: info@comic-world-entenhausen.de</p>
          </div>
          
          <div>
            <h3 className="text-comic-green mb-2 text-3xl font-['Bangers']">Vertreten durch</h3>
            <p>Dagobert Duck (Vorstand)</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-3 border-dotted border-black">
          <p className="font-['Kalam'] text-lg italic">
            Haftungsausschluss: Wir haften nicht für Schäden, die durch das übermäßige Lesen von Comics oder das Baden in Goldtalern entstehen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImprintPage;
