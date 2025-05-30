import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Configurar data-alvo para 7 dias a partir de agora
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  // Detecção de scroll para header fixo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-3 md:mb-0">
            <a href="#" className="block">
              <h1 className="text-2xl font-bold text-primary">
                Sala <span className="text-secondary">Vermelha</span>
              </h1>
            </a>
          </div>
          
          
        </div>
      </div>
    </header>
  );
};

export default Header;