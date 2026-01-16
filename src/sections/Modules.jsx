import React, { useState } from 'react';
import { Plus, BookOpen, Star,Play } from 'lucide-react';
import Button from '../components/Button';

const Modules = ({ handleCTAClick }) => { 
  const [showAll, setShowAll] = useState(false);
  
  // Dados dos módulos otimizados (inline para performance)
  const modules = [
    // 10 módulos principais (sempre visíveis)
    { id: 1, title: "Síndrome Coronariana Aguda (SCA)", category: "Cardiologia" },
    { id: 2, title: "Gasometria", category: "Diagnóstico" },
    { id: 3, title: "Sedoanalgesia", category: "Anestesia" },
    { id: 4, title: "Injúria Renal Aguda", category: "Nefrologia" },
    { id: 5, title: "Choque Séptico", category: "Infectologia" },
    { id: 6, title: "Intubação Orotraqueal", category: "Procedimentos" },
    { id: 7, title: "Acesso Venoso Central", category: "Procedimentos" },
    { id: 8, title: "Tromboembolismo Pulmonar", category: "Pneumologia" },
    { id: 9, title: "Crise Hipertensiva", category: "Cardiologia" },
    { id: 10, title: "Atendimento Inicial ao Paciente Grave", category: "Emergência" },
    
    // 10 módulos expandidos (visíveis após "Ver mais")
    { id: 11, title: "Insuficiência Cardíaca Aguda Descompensada", category: "Cardiologia" },
    { id: 12, title: "Bradiarritmia", category: "Cardiologia" },
    { id: 13, title: "Taquiarritmia", category: "Cardiologia" },
    { id: 14, title: "Distúrbios de Potássio", category: "Endocrinologia" },
    { id: 15, title: "Choque Hipovolêmico + Hemotransfusão", category: "Hematologia" },
    { id: 16, title: "Emergência Hiperglicêmica", category: "Endocrinologia" },
    { id: 17, title: "Antibioticoterapia", category: "Infectologia" },
    { id: 18, title: "Ventilação Mecânica", category: "Pneumologia" },
    { id: 19, title: "Acidente Vascular Encefálico Isquêmico", category: "Neurologia" },
    { id: 20, title: "Drenagem Torácica", category: "Procedimentos" },
    
    // Módulos restantes (28 módulos)
    { id: 21, title: "Distúrbios do Sódio", category: "Endocrinologia" },
    { id: 22, title: "Princípios da Reposição Volêmica", category: "Emergência" },
    { id: 23, title: "Síndrome Coronariana Aguda Sem Supra de ST", category: "Cardiologia" },
    { id: 24, title: "Radiologia", category: "Diagnóstico" },
    { id: 25, title: "Três Pilares para um plantão sempre tranquilo", category: "Emergência" },
    { id: 26, title: "ATLS", category: "Trauma" },
    { id: 27, title: "Guia do Paciente Grave", category: "Emergência" },
    { id: 28, title: "Rounds", category: "Emergência" },
    { id: 29, title: "Procedimentos", category: "Procedimentos" },
    { id: 30, title: "Eletrocardiograma (ECG)", category: "Cardiologia" },
    { id: 31, title: "Drogas Vasoativas", category: "Farmacologia" },
    { id: 32, title: "Toracocentese", category: "Procedimentos" },
    { id: 33, title: "Acidente Vascular Encefálico Hemorrágico", category: "Neurologia" },
    { id: 34, title: "Crise Convulsiva", category: "Neurologia" },
    { id: 35, title: "Pneumonia", category: "Pneumologia" },
    { id: 36, title: "Asma", category: "Pneumologia" },
    { id: 37, title: "DPOC (Doença Pulmonar Obstrutiva Crônica)", category: "Pneumologia" },
    { id: 38, title: "Anafilaxia", category: "Imunologia" },
    { id: 39, title: "Novo Guia do Paciente Grave", category: "Emergência" },
    { id: 40, title: "Eletrocardiograma Aplicado ao Paciente", category: "Cardiologia" },
    { id: 41, title: "Toxicologia", category: "Toxicologia" },
    { id: 42, title: "Ventilação Mecânica Aplicada à Sala Vermelha", category: "Pneumologia" },
    { id: 43, title: "Manejo de Vias Aéreas Difíceis", category: "Procedimentos" },
    { id: 44, title: "Emergências Psiquiátricas", category: "Psiquiatria" },
    { id: 45, title: "Parada Cardiorrespiratória", category: "Emergência" },
    { id: 46, title: "Politrauma", category: "Trauma" },
    { id: 47, title: "Queimaduras Graves", category: "Trauma" },
    { id: 48, title: "Emergências Obstétricas", category: "Ginecologia" }
  ];
  
  const displayedModules = showAll ? modules.slice(0, 24) : modules.slice(0, 12);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <BookOpen size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight tracking-tight">
              Os módulos do curso <span className="text-red-600">Formação Paciente Grave</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Conteúdo completo focado nos desafios reais da Sala Vermelha, com casos práticos e abordagem direta
            </p>
          </div>
          
          {/* Stats rápidas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-red-600 mb-2">40+</div>
              <p className="text-gray-600 font-medium">Módulos</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-red-600 mb-2">100+</div>
              <p className="text-gray-600 font-medium">Conteúdo</p>
            </div>
           
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-red-600 mb-2">1 ano</div>
              <p className="text-gray-600 font-medium">Acesso</p>
            </div>
             <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-red-600 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Suporte</p>
            </div>
          </div>
          
          {/* Grid de módulos otimizado - Mobile responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {displayedModules.map((module) => (
              <div 
                key={module.id}
                className="bg-black rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-gray-900 transition-colors duration-300 group"
              >
                {/* Ícone simples */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <BookOpen size={20} className="text-white sm:hidden" />
                  <BookOpen size={24} className="text-white hidden sm:block" />
                </div>
                
                {/* Conteúdo */}
                <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4 leading-tight group-hover:text-red-400 transition-colors">
                  {module.title}
                </h3>
                
                {/* Meta informações simplificadas */}
                <div className="text-gray-400 text-sm">
                  {module.category}
                </div>
              </div>
            ))}
          </div>
          
          {/* Toggle para mostrar todos */}
          {!showAll && (
            <div className="text-center mb-12">
              <button
                onClick={() => setShowAll(true)}
                className="bg-gray-100 hover:bg-gray-200 text-black px-8 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center space-x-3 mx-auto"
              >
                <Plus size={20} />
                <span>Ver mais módulos do curso</span>
              </button>
            </div>
          )}
          
          {/* Texto de módulos adicionais quando expandido */}
          {showAll && (
            <div className="text-center mb-12">
              <p className="text-red-600 font-bold text-lg">
                + {modules.length - 24} módulos especializados adicionais disponíveis no curso completo
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Incluindo: Toxicologia, Emergências Psiquiátricas, Politrauma, Queimaduras e muito mais
              </p>
            </div>
          )}
          
          {/* Destaques do conteúdo */}
          <div className="bg-black rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-black text-white mb-8 tracking-tight">
                O que você vai encontrar em cada módulo
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Play size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-white mb-4">Casos Filmados</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Procedimentos reais filmados em ambiente hospitalar
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-white mb-4">Material de Apoio</h4>
                  <p className="text-gray-300 leading-relaxed">
                    PDFs, protocolos e checklists para download
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Star size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl text-white mb-4">Dicas de Experts</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Insights práticos dos melhores especialistas
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTAs finais */}
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
              onClick={(e) => handleCTAClick(e, 'Module CTA')}
                variant="outline" 
                size="lg"
                className="flex items-center space-x-2 border-2 border-gray-300 hover:border-red-600 text-black hover:text-red-600 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <BookOpen size={20} />
                <span>Baixar Programa Completo</span>
              </Button>
              
              <Button 
                variant="primary" 
                size="xl" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 rounded-xl border-0"
                onClick={(e) => handleCTAClick(e, 'Module CTA')}
              >
                Começar agora
              </Button>
            </div>
            
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              ✓ Acesso imediato • ✓ Certificado incluído • ✓ Suporte dedicado • ✓ 1 ano de acesso
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Modules;