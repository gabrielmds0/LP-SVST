import React, { useEffect } from 'react';
import Button from '../components/Button';
import { CreditCard, Clock, Check, ArrowRight } from 'lucide-react';
import Logo from '/images/logo-pg.png';

const Hero = ({ handleCTAClick }) => { 

  useEffect(() => {
    // LIMPAR CACHE DO CONVERTAI
    const clearConvertAICache = () => {
      // Limpar localStorage do ConvertAI
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.includes('6751f108a1c14a78e83ad602') || 
            key.includes('converteai') || 
            key.includes('smartplayer')) {
          localStorage.removeItem(key);
        }
      });
      
      // Limpar sessionStorage também
      const sessionKeys = Object.keys(sessionStorage);
      sessionKeys.forEach(key => {
        if (key.includes('6751f108a1c14a78e83ad602') || 
            key.includes('converteai') || 
            key.includes('smartplayer')) {
          sessionStorage.removeItem(key);
        }
      });
    };

    // Limpar cache primeiro
    clearConvertAICache();

    // Remover scripts antigos se existirem
    const oldScripts = document.querySelectorAll('script[src*="converteai"]');
    oldScripts.forEach(script => script.remove());
    
    // Remover elementos antigos do player
    const oldPlayers = document.querySelectorAll('[id*="6751f108a1c14a78e83ad602"]:not(#vid_6751f108a1c14a78e83ad602)');
    oldPlayers.forEach(player => player.remove());

    // Aguardar um pouco antes de carregar o script
    setTimeout(() => {
      // Script LIMPO - método mais simples
      if (!document.getElementById('scr_6751f108a1c14a78e83ad602')) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "scr_6751f108a1c14a78e83ad602";
        script.src = "https://scripts.converteai.net/a7916126-1eb3-4f27-8f5d-42892188f754/players/6751f108a1c14a78e83ad602/player.js";
        script.async = true;
        
        script.onload = () => {
          // GA4 tracking
          setTimeout(() => {
            if (typeof gtag !== 'undefined') {
              gtag('event', 'video_load_svst', {
                event_category: 'Video',
                event_label: 'Hero Section Video Loaded'
              });
            }
          }, 2000);
        };
        
        document.head.appendChild(script);
      }
    }, 500);

  }, []);

  return (
    <section id="hero" className="bg-black py-16 md:py-24 relative overflow-hidden">
    
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          {/* Logo do Sala Vermelha */}
          <div className="mb-8 md:mb-12">
            <img 
              src={Logo} 
              alt="Formação Paciente Grave"
              className="h-20 md:h-24 w-auto mx-auto"
              loading="eager"
            />
          </div>
          
          {/* Título principal melhorado */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tight">
            Domine qualquer{' '}
            <span className="text-red-600 block sm:inline">Paciente Grave</span>
          </h1>
          
          {/* Subtítulo unificado e mais impactante */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 md:mb-12 max-w-4xl leading-relaxed font-light">
            Tenha confiança para fazer <strong className="text-red-600 font-semibold">Raciocínio Clínico</strong>, 
            a <strong className="text-red-600 font-semibold">Prescrição Médica</strong> e 
            os <strong className="text-red-600 font-semibold">Procedimentos Salvadores de Vida </strong> 
            na emergência médica.
          </p>
          
          {/* VÍDEO - YouTube embed mantendo estética */}
<div className="w-full max-w-4xl mb-10 md:mb-12">
  <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
    <iframe
      src="https://www.youtube.com/embed/a-2gIxzUkTM?si=IbLv5X2vCmacbioU"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden"
      }}
    />
  </div>
</div>

          
          {/* CTA com animação de batimento cardíaco */}
          <div className="mb-12 md:mb-16 w-full max-w-md">
           <style>{`
  @keyframes heartbeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  .heartbeat {
    animation: heartbeat 2s ease-in-out infinite;
  }
  .heartbeat:hover {
    animation: heartbeat 0.8s ease-in-out infinite;
  }
`}</style>
            
            <Button 
             onClick={(e) => handleCTAClick(e, 'Hero CTA')}
              variant="primary" 
              size="xl" 
              className=" cursor-pointer heartbeat bg-red-600 hover:bg-red-700 text-white font-black text-xl px-12 py-5 rounded-2xl transition-all duration-300 w-full border-0 shadow-2xl hover:shadow-red-600/25 relative overflow-hidden"
            >
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center justify-center">
                Transformar minha carreira
                <ArrowRight size={24} className="ml-3" />
              </span>
            </Button>
          </div>
          
          {/* Informações melhoradas */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check size={20} className="text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-white font-semibold">100% Online</div>
                  <div className="text-gray-400 text-sm">Acesse de qualquer lugar</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-white font-semibold">1 Ano de Acesso</div>
                  <div className="text-gray-400 text-sm">Revise quando quiser</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CreditCard size={20} className="text-white" />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-white font-semibold">Pagamento Flexível</div>
                  <div className="text-gray-400 text-sm">Pix, Cartão ou Boleto</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* CSS do Elementor */}
      <style>{`
        .elementor-element:has(#smartplayer) {
          width: 100%;
        }
      `}</style>
      
    </section>
  );
};

export default Hero;