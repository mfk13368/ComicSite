import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-comic-yellow border-b-6 border-black p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-comic-red p-2 border-3 border-black rotate-[-3deg] shadow-comic-sm">
            <Zap size={24} color="white" fill="white" />
          </div>
          <span className="font-['Bangers'] text-3xl tracking-wider text-black">COMIC WORLD</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Über Uns</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/imprint">Impressum</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 border-t-3 border-black pt-4">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>Über Uns</NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/imprint" onClick={() => setIsOpen(false)}>Impressum</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="font-['Bangers'] text-xl hover:text-comic-red transition-colors px-2 py-1 hover:bg-white border-3 border-transparent hover:border-black rounded-lg"
  >
    {children}
  </Link>
);

export default Navbar;
