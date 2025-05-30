import React from 'react';
import { X, Users, Video, Brain, Stethoscope, Activity } from 'lucide-react';

const Methodology = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header premium com ícone integrado */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <X size={40} className="text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-8 leading-tight tracking-tight">
              O seu paciente <span className="text-red-600">não é um boneco</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Nossa metodologia revolucionária usa casos reais para formar médicos realmente preparados
            </p>
          </div>
          
          {/* Layout principal */}
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
            
            {/* Coluna esquerda - Problemas tradicionais */}
            <div className="space-y-8">
              <div className="text-center lg:text-left mb-12">
                <h3 className="text-3xl font-black text-black mb-6 tracking-tight">Métodos Tradicionais</h3>
                <div className="w-16 h-0.5 bg-gray-400 mx-auto lg:mx-0"></div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-16 h-16 bg-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Users size={32} className="text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-black mb-4 tracking-tight">Simulações Limitadas</h4>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                      Cursos tradicionais utilizam <strong className="font-semibold">bonecos e simulações</strong> que não 
                      reproduzem a complexidade real dos pacientes.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-600 font-light">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Variabilidades anatômicas ignoradas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Complicações não simuladas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>Respostas padronizadas</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coluna direita - Nossa metodologia */}
            <div className="space-y-8">
              <div className="text-center lg:text-left mb-12">
                <h3 className="text-3xl font-black text-black mb-6 tracking-tight">Nossa Metodologia</h3>
                <div className="w-16 h-0.5 bg-red-600 mx-auto lg:mx-0"></div>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-10 border border-red-100">
                <div className="flex items-start space-x-6 mb-8">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Video size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-black mb-4 tracking-tight">Casos Reais Filmados</h4>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                      Aprenda com <strong className="text-red-600 font-semibold">pacientes reais</strong> em 
                      ambiente hospitalar real, com todas as suas complexidades.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 font-light">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Variabilidades anatômicas reais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Complicações inesperadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>Respostas individualizadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Seção "Skin in the Game" */}
          <div className="bg-black rounded-2xl p-16 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
                  <Brain size={40} className="text-white" />
                </div>
                <h3 className="text-4xl font-black text-white mb-6 tracking-tight">"Skin in the Game"</h3>
                <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Stethoscope size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-xl text-white mb-4">Identificação</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Desde a identificação inicial do problema até a primeira impressão diagnóstica
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-xl text-white mb-4">Raciocínio</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Acompanhe o raciocínio clínico completo do médico durante todo o atendimento
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Activity size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-xl text-white mb-4">Execução</h4>
                  <p className="text-gray-300 font-light leading-relaxed">
                    Execução dos procedimentos e avaliação dos resultados em tempo real
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Citação premium */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="text-white/30 text-8xl font-black mb-8 leading-none">"</div>
                <blockquote className="text-white text-2xl md:text-3xl font-medium leading-relaxed mb-10">
                  Não ensinamos apenas <strong>o que fazer</strong>, mas <strong>como fazer na vida real</strong>, 
                  com todas as suas complexidades e variáveis que não podem ser simuladas em manequins. 
                  Esta é a diferença entre conhecer a teoria e <strong>dominar a prática</strong>.
                </blockquote>
                
                <div className="flex items-center justify-center space-x-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Stethoscope size={24} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-lg">Dr. Rafael Mendes</p>
                    <p className="text-white/80 font-light">Coordenador do Curso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Methodology;