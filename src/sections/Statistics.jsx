import React from 'react';
import Button from '../components/Button';
import { Activity, Clock, AlertTriangle, TrendingUp, Users, Zap } from 'lucide-react';
import RedRoom from '/images/red-room-action.jpg';


const Statistics = ({ handleCTAClick }) => {
  return (
    <section className="py-24 md:py-32 bg-gray-200 relative overflow-hidden">
      
      
      {/* Elementos decorativos médicos */}
      <div className="absolute top-20 left-10 opacity-5">
        <Activity size={80} className="text-red-600" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <Zap size={100} className="text-red-600" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-8 leading-tight tracking-tight">
              <span className="text-red-600">100%</span> dos pacientes graves<br />
              chegam na Sala Vermelha
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              A Sala Vermelha é onde acontecem os momentos mais decisivos da medicina de emergência
            </p>
          </div>
          
          {/* Seção visual da Sala Vermelha */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={RedRoom} 
                  alt="Sala Vermelha em ação"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                 
                  <p className="font-bold">Sala Vermelha • Hospital de Referência</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-black mb-6">
                O centro de <span className="text-red-600">comando médico</span>
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Na Sala Vermelha, cada segundo importa. É aqui que acontecem os atendimentos mais críticos, onde protocolos salvam vidas e onde a experiência prática faz toda a diferença.
              </p>
              
              {/* Mini estatísticas visuais */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-black text-red-600 mb-1">95%</div>
                  <p className="text-xs text-gray-600 font-medium">Taxa de sucesso</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-black text-red-600 mb-1">3min</div>
                  <p className="text-xs text-gray-600 font-medium">Tempo médio</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                  <div className="text-2xl font-black text-red-600 mb-1">24h</div>
                  <p className="text-xs text-gray-600 font-medium">Funcionamento</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Layout principal desktop */}
          <div className="grid lg:grid-cols-5 gap-16 items-start mb-24">
            
            {/* Conteúdo textual - 3 colunas */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Cards premium com elementos visuais */}
              <div className="space-y-6">
                <div className="group bg-white rounded-2xl p-10 hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Users size={64} className="text-red-600" />
                  </div>
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="w-3 h-12 bg-red-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-black text-2xl text-black mb-6 tracking-tight">Destino inevitável</h3>
                      <p className="text-gray-700 text-xl leading-relaxed font-light">
                        A Sala Vermelha é o coração do pronto-socorro. É para lá que são encaminhados 
                        <strong className="font-semibold"> todos os pacientes graves</strong>: trauma, infarto, AVC, choque ou parada cardiorrespiratória.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white rounded-2xl p-10 hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Clock size={64} className="text-red-600" />
                  </div>
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="w-3 h-12 bg-red-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-black text-2xl text-black mb-6 tracking-tight">Não é questão de SE, mas QUANDO</h3>
                      <p className="text-gray-700 text-xl leading-relaxed font-light">
                        Como médico, você <strong className="font-semibold">inevitavelmente enfrentará</strong> estas situações. 
                        A questão não é <em>se</em> você vai atender pacientes graves, mas <em>quando</em> e 
                        <strong className="font-semibold"> como</strong> você vai atendê-los.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call-out premium */}
              <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="relative z-10">
                  <h3 className="font-black text-3xl text-white mb-8 tracking-tight">Mais que uma obrigação profissional</h3>
                  <p className="text-gray-300 text-xl leading-relaxed font-light mb-10">
                    Estar preparado para a Sala Vermelha significa <strong className="text-red-600 font-semibold">a oportunidade 
                    de salvar vidas</strong> quando os minutos fazem toda a diferença entre a vida e a morte.
                  </p>
                  
                  <Button 
                    variant="primary" 
                      onClick={(e) => handleCTAClick(e, 'Statistics Desktop CTA')}

                    size="xl" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-5 rounded-xl text-xl border-0"
                  >
                    Quero estar preparado
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Dashboard de estatísticas - Desktop - 2 colunas */}
            <div className="hidden lg:block lg:col-span-2 sticky top-8">
              <div className="space-y-8">
                
                {/* Header do dashboard */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-black text-black mb-4 tracking-tight">Dados Críticos</h3>
                  <div className="w-16 h-0.5 bg-red-600 mx-auto"></div>
                </div>
                
                {/* Métricas principais com imagem */}
                <div className="bg-white rounded-2xl p-10 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <img 
                      src="/images/medical-monitor-icon.png" 
                      alt="Monitor médico"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-8 relative z-10">
                    <div className="text-center border-b border-gray-100 pb-8">
                      <div className="text-6xl font-black text-red-600 mb-3 tracking-tight">100%</div>
                      <p className="text-gray-600 uppercase text-sm font-semibold tracking-wide">Pacientes Graves</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="text-4xl font-black text-red-600 mb-2">10min</div>
                        <p className="text-gray-600 text-sm font-medium">Tempo crítico</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-black text-red-600 mb-2">24/7</div>
                        <p className="text-gray-600 text-sm font-medium">Funcionamento</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual impact */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-10 text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                      <Activity size={40} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-black mb-4 tracking-tight">Sala Vermelha</h4>
                    <p className="text-lg font-light opacity-90">
                      Centro de comando dos casos críticos
                    </p>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
          
          {/* Dashboard mobile - Design cards premium */}
          <div className="lg:hidden space-y-8">
            
            {/* Header mobile */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-black mb-4 tracking-tight">Dados Críticos</h3>
              <div className="w-16 h-0.5 bg-red-600 mx-auto"></div>
            </div>
            
            {/* Estatística principal */}
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                <TrendingUp size={64} className="text-red-600" />
              </div>
              <div className="text-7xl font-black text-red-600 mb-4 tracking-tight relative z-10">100%</div>
              <p className="text-gray-600 uppercase text-lg font-semibold tracking-wide mb-8">Pacientes Graves na Sala Vermelha</p>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            
            {/* Métricas secundárias */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 opacity-5">
                  <Clock size={48} className="text-red-600" />
                </div>
                <div className="text-4xl font-black text-red-600 mb-3 tracking-tight relative z-10">10min</div>
                <p className="text-gray-600 font-medium">Tempo crítico de decisão</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 opacity-5">
                  <Activity size={48} className="text-red-600" />
                </div>
                <div className="text-4xl font-black text-red-600 mb-3 tracking-tight relative z-10">24/7</div>
                <p className="text-gray-600 font-medium">Funcionamento contínuo</p>
              </div>
            </div>
            
            {/* Visual mobile */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-12 text-center text-white">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Activity size={40} className="text-white" />
              </div>
              <h4 className="text-3xl font-black mb-4 tracking-tight">Sala Vermelha</h4>
              <p className="text-xl font-light">
                Centro de comando dos casos críticos
              </p>
            </div>
            
            {/* CTA mobile */}
            <div className="pt-8">
              <button 
               onClick={(e) => handleCTAClick(e, 'Statistics CTA')}
                variant="primary" 
                size="xl" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-5 rounded-xl text-xl w-full border-0"
                
              >
                Quero estar preparado
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Statistics;