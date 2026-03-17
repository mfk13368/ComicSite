import React from 'react';

const BlogPage: React.FC = () => {
  const posts = [
    { title: "Wie man ein Superheld wird", date: "15. März 2026", color: "bg-comic-red" },
    { title: "Die besten Comic-Schriften", date: "10. März 2026", color: "bg-comic-yellow" },
    { title: "Muss man als Comic-Figur immer dieselbe Kleidung tragen?", date: "05. März 2026", color: "bg-comic-blue" },
    { title: "Das Geheimnis des Gold-Taler-Bades", date: "01. März 2026", color: "bg-comic-green" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-6xl text-center mb-16 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] uppercase">
        <span className="bg-comic-yellow p-4 border-3 border-black inline-block -rotate-3">Neues aus Entenhausen & Co.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post, idx) => (
          <div key={idx} className={`comic-panel ${post.color} group hover:rotate-1 transition-transform cursor-pointer overflow-visible`}>
            <div className="absolute -top-8 -right-8 pow-text group-hover:scale-125 transition-transform">POW!</div>
            <p className="text-black font-['Permanent Marker'] text-sm mb-2">{post.date}</p>
            <h3 className={`text-3xl mb-4 ${post.color === 'bg-comic-yellow' ? 'text-black' : 'text-white'} drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]`}>
              {post.title}
            </h3>
            <button className="comic-button bg-white text-black">Lesen!</button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="speech-bubble-inner inline-block speech-bubble border-comic-red border-6 max-w-2xl mx-auto">
          <p className="font-['Kalam'] text-2xl font-black">
            "Wusstet ihr, dass Dagobert Duck gar nicht schwimmt, sondern in die Taler wie in Wasser eintaucht? Pure Magie!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
