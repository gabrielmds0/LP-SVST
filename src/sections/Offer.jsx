import React from 'react';
import Button from '../components/Button';
import { Shield, CreditCard, CalendarClock, Star, Zap, Clock } from 'lucide-react';

const Offer = ({handleCTAClick}) => {
  return (
    <section id="offer" className="py-20 md:py-24 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Header da oferta */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
              <Zap size={20} className="mr-2" />
              CONDIÇÃO ESPECIAL
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              Transforme sua carreira <br />
              <span className="text-black">agora mesmo</span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
              Invista em sua formação e adquira confiança para salvar vidas na Sala Vermelha. 
              Uma oportunidade única de se destacar profissionalmente.
            </p>
          </div>
          
          {/* Card principal da oferta */}
          <div className="bg-white rounded-3xl p-12 mb-12 relative overflow-hidden shadow-2xl">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-100 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-100 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 text-center">
              {/* Condição especial */}
              <div className="mb-12">
                <div className="inline-flex items-center bg-red-100 text-red-600 px-6 py-3 rounded-full font-bold text-lg mb-6">
                  <Star size={24} className="mr-2" />
                  CONDIÇÃO ESPECIAL DE LANÇAMENTO
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-black mb-6 tracking-tight">
                  Seja um dos primeiros e garante <br />
                  <span className="text-red-600">condições exclusivas</span>
                </h3>
                
                <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Por tempo limitado, você tem acesso ao curso completo com todas as facilidades 
                  e bônus inclusos. Não perca esta oportunidade única.
                </p>
              </div>
              
              {/* CTA Principal */}
              <div className="mb-12">
                <Button 
                onClick={(e) => handleCTAClick(e, 'Statistics Desktop CTA')}
                  variant="primary" 
                  size="xl" 
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-2xl px-16 py-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0"
                >
                  QUERO GARANTIR MINHA VAGA
                </Button>
              </div>
              
              {/* Benefícios destacados */}
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-lg text-black mb-2">Garantia Total</h4>
                  <p className="text-gray-600">7 dias para testar sem riscos</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CalendarClock size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-lg text-black mb-2">Acesso Completo</h4>
                  <p className="text-gray-600">1 ano de acesso ilimitado</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-lg text-black mb-2">Pagamento Flexível</h4>
                  <p className="text-gray-600">Diversas formas de pagamento</p>
                </div>
              </div>
              
              {/* Urgência sutil */}
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <Clock size={20} className="text-red-600" />
                  <span className="font-bold text-red-600">VAGAS LIMITADAS</span>
                </div>
                <p className="text-gray-700">
                  Esta condição especial é válida apenas para os primeiros interessados. 
                  Garante sua vaga antes que seja tarde.
                </p>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Offer;