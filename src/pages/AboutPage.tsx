import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="comic-panel bg-comic-orange space-y-4">
          <h2 className="text-4xl text-black drop-shadow-sm rotate-1">Über Unsere Mission</h2>
          <div className="bg-white border-2 border-black p-4 rounded-lg">
            <p className="font-['Kalam'] text-xl font-bold mb-4">
              Wir wollten eine Website bauen, die nicht so langweilig ist wie die Steuererklärung eines Buchhalters. 
              Wir wollten FARBE! Wir wollten ACTION! Wir wollten BOOM!
            </p>
            <p className="font-['Kalam'] text-xl font-bold">
              Inspiriert von den klassischen "Lustigen Taschenbüchern" unserer Kindheit, 
              haben wir diesen digitalen Spielplatz erschaffen.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="speech-bubble bg-comic-green rotate-2">
            <p className="font-['Permanent Marker'] text-2xl text-white">
              Wer steckt hinter dem Ganzen? Ein Haufen Comic-Verrückter, die zu viel Kaffee getrunken haben!
            </p>
          </div>
          
          <div className="comic-panel bg-comic-blue text-white rotate-[-1deg]">
            <h3 className="text-3xl mb-4">Unsere Helden</h3>
            <ul className="list-none space-y-2 font-['Kalam'] text-xl font-bold">
              <li>- Donald der Designer</li>
              <li>- Mickey der Mastermind</li>
              <li>- Goofy der Gopher (Programmierer)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
