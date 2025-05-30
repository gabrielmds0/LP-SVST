import React from 'react';
import Button from '../components/Button';
import { MonitorPlay, CheckCircle2, Clock, BookOpen, Download, Wifi, Shield, Smartphone, Globe, Users } from 'lucide-react';

const OnlineLearning = ({ handleCTAClick }) => {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <MonitorPlay size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              Como você vai <span className="text-red-600">aprender online</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Uma plataforma de ensino médico que revoluciona a forma como você aprende emergência
            </p>
          </div>
          
          {/* Layout principal */}
          <div className="grid lg:grid-cols-3 gap-16 mb-24">
            
            {/* Coluna principal - Metodologia */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Cards de metodologia */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-10 text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
                    <MonitorPlay size={32} className="text-white" />
                  </div>
                  <h3 className="font-black text-2xl mb-6 tracking-tight">Casos Reais Filmados</h3>
                  <p className="text-lg leading-relaxed font-light opacity-95">
                    Acesso exclusivo a <strong>procedimentos reais</strong> filmados em ambiente hospitalar: 
                    acesso venoso central, intubação e manejo de vias aéreas difíceis.
                  </p>
                </div>
                
                <div className="bg-gray-900 rounded-2xl p-10 border border-gray-800">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8">
                    <BookOpen size={32} className="text-white" />
                  </div>
                  <h3 className="font-black text-2xl text-white mb-6 tracking-tight">Material Aplicável</h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    Protocolos, checklists e guias que você <strong className="text-red-600">usará nos plantões</strong>. 
                    Todo conteúdo pensado para aplicação imediata na prática médica.
                  </p>
                </div>
              </div>
              
              {/* Diferencial metodológico */}
              <div className="bg-white rounded-2xl p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-black text-black mb-4 tracking-tight">Metodologia Exclusiva</h3>
                  <div className="w-16 h-0.5 bg-red-600 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Users size={32} className="text-red-600" />
                    </div>
                    <h4 className="font-bold text-lg text-black mb-3">Pacientes Reais</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Aprenda com a variabilidade anatômica e respostas reais dos pacientes
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-red-600" />
                    </div>
                    <h4 className="font-bold text-lg text-black mb-3">Casos Completos</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Do diagnóstico inicial até a resolução, acompanhe todo o processo
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Download size={32} className="text-red-600" />
                    </div>
                    <h4 className="font-bold text-lg text-black mb-3">Material Prático</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Downloads em PDF para consulta rápida durante os plantões
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Acesso e flexibilidade */}
              <div className="bg-gray-900 rounded-2xl p-10 border border-gray-800">
                <div className="w-1 h-16 bg-red-600 mb-8"></div>
                <h3 className="font-black text-3xl text-white mb-8 tracking-tight">Acesso Total e Flexível</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-xl text-white mb-4">Disponibilidade 24/7</h4>
                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                      Acesse o conteúdo quando quiser, de qualquer lugar. 
                      <strong className="text-red-600"> 1 ano de acesso completo</strong> para você revisar 
                      quantas vezes precisar.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-white mb-4">Multiplataforma</h4>
                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                      Assista no computador, tablet ou smartphone. 
                      <strong className="text-red-600"> Sincronização automática</strong> do seu progresso 
                      em todos os dispositivos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar - Especificações técnicas */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                
                {/* Especificações da plataforma */}
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                  <h4 className="font-black text-xl text-white mb-8 text-center tracking-tight">Plataforma Premium</h4>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <Wifi size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Streaming HD</p>
                        <p className="text-gray-400 text-sm">Qualidade profissional</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <Download size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Downloads offline</p>
                        <p className="text-gray-400 text-sm">Material em PDF</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <Smartphone size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">App mobile</p>
                        <p className="text-gray-400 text-sm">iOS e Android</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <Shield size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Acesso seguro</p>
                        <p className="text-gray-400 text-sm">Criptografia SSL</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Números da plataforma */}
                <div className="bg-white rounded-2xl p-8">
                  <h4 className="font-black text-xl text-black mb-8 text-center tracking-tight">Números da Plataforma</h4>
                  <div className="space-y-6 text-center">
                    <div>
                      <div className="text-4xl font-black text-red-600 mb-2">40+</div>
                      <p className="text-gray-600">Módulos práticos</p>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-red-600 mb-2">100+</div>
                      <p className="text-gray-600">Horas de conteúdo</p>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-red-600 mb-2">1 ano</div>
                      <p className="text-gray-600">Acesso completo</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA sidebar */}
                <div className="bg-red-600 rounded-2xl p-8 text-center">
                  <h4 className="font-black text-2xl text-white mb-4 tracking-tight">Comece hoje</h4>
                  <p className="text-white/90 mb-6 font-light">
                    Acesso imediato após a confirmação do pagamento
                  </p>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl w-full border-0"
                    onClick={(e) => handleCTAClick(e, 'OnlineLearning CTA')}
                  >
                    Fazer inscrição
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default OnlineLearning;