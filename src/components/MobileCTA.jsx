import React, { useState } from 'react';
import { Plus, ArrowRight, X } from 'lucide-react';

const MobileCTA = ({ handleCTAClick, variant = 'plus' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Variant 1: Botão simples com +
  const PlusButton = () => (
    <button
      onClick={(e) => handleCTAClick(e, 'Floating CTA Mobile - Plus')}
      className="group relative bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-110 active:scale-95 floating-cta"
      style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        boxShadow: '0 8px 32px rgba(220, 38, 38, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }}
    >
      {/* Efeito de pulsação */}
      <div className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></div>
      
      {/* Ícone + com animação */}
      <div className="relative z-10 transition-transform duration-300 group-hover:rotate-90">
        <Plus size={24} className="text-white" strokeWidth={3} />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Inscreva-se agora
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  );

  // Variant 2: Botão expansível
  const ExpandableButton = () => (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`group relative bg-red-600 hover:bg-red-700 text-white transition-all duration-500 transform hover:scale-105 active:scale-95 floating-cta ${
          isExpanded 
            ? 'px-6 py-3 rounded-2xl' 
            : 'p-4 rounded-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
          boxShadow: '0 8px 32px rgba(220, 38, 38, 0.4)',
        }}
      >
        {/* Efeito de pulsação */}
        <div className={`absolute inset-0 bg-red-500 animate-ping opacity-20 ${
          isExpanded ? 'rounded-2xl' : 'rounded-full'
        }`}></div>
        
        <div className="relative z-10 flex items-center">
          {isExpanded ? (
            <>
              <span className="text-sm font-bold mr-2">Quero me inscrever</span>
              <ArrowRight size={18} />
            </>
          ) : (
            <Plus size={24} strokeWidth={3} className="transition-transform duration-300 group-hover:rotate-90" />
          )}
        </div>
      </button>
      
      {/* Overlay para fechar quando expandido */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-transparent z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      {/* Botão de ação quando expandido */}
      {isExpanded && (
        <button
          onClick={(e) => {
            setIsExpanded(false);
            handleCTAClick(e, 'Floating CTA Mobile - Expandable');
          }}
          className="absolute bottom-full mb-2 right-0 bg-white text-red-600 px-4 py-2 rounded-xl shadow-lg font-bold text-sm border-2 border-red-600 hover:bg-red-50 transition-colors duration-200"
        >
          Acessar formulário
        </button>
      )}
    </div>
  );

  // Variant 3: Botão com texto sempre visível
  const TextButton = () => (
    <button
      onClick={(e) => handleCTAClick(e, 'Floating CTA Mobile - Text')}
      className="group relative bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-2xl shadow-2xl hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105 active:scale-95 floating-cta"
      style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
        boxShadow: '0 8px 32px rgba(220, 38, 38, 0.4)',
      }}
    >
      {/* Efeito de pulsação */}
      <div className="absolute inset-0 rounded-2xl bg-red-500 animate-ping opacity-20"></div>
      
      <div className="relative z-10 flex items-center">
        <span className="text-sm font-bold mr-2">Inscreva-se</span>
        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </button>
  );

  return (
    <>
      {/* Botão fixo para mobile */}
      <div className="fixed bottom-6 right-4 z-50 md:hidden">
        {variant === 'plus' && <PlusButton />}
        {variant === 'expandable' && <ExpandableButton />}
        {variant === 'text' && <TextButton />}
      </div>

      {/* CSS para animações */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          
          .floating-cta {
            animation: float 4s ease-in-out infinite;
          }
          
          @media (hover: hover) {
            .floating-cta:hover {
              animation-play-state: paused;
            }
          }
          
          /* Garantir que o botão não interfira com outros elementos */
          @media (max-width: 768px) {
            body {
              padding-bottom: 100px;
            }
          }
        `
      }} />
    </>
  );
};

export default MobileCTA;

