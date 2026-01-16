import React from 'react';
import { BrainCircuit, Stethoscope, Syringe } from 'lucide-react';

const Pillars = () => {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header otimizado */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight tracking-tight">
              É assim que você vai ter <span className="text-red-600">confiança</span><br />
              para atender o Paciente Grave
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 tracking-tight">
              O Domínio do RPP
            </h3>
          </div>
          
          {/* Cards dos pilares - Performance otimizada */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Pilar 1 - Raciocínio Clínico */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <BrainCircuit size={40} className="text-white" />
                </div>
                <h4 className="text-2xl font-black text-black mb-6 tracking-tight">
                  Raciocínio Clínico
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Desenvolva <strong className="font-semibold">análise rápida e precisa</strong> dos sinais e sintomas. 
                  Estruture seu raciocínio sob pressão, identificando problemas críticos e 
                  determinando intervenções que <strong className="text-red-600">salvam vidas</strong>.
                </p>
              </div>
            </div>
            
            {/* Pilar 2 - Prescrição Médica */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Stethoscope size={40} className="text-white" />
                </div>
                <h4 className="text-2xl font-black text-black mb-6 tracking-tight">
                  Prescrição Médica
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  Domine <strong className="font-semibold">prescrições essenciais</strong> para emergências: 
                  drogas vasoativas, antibióticos, sedativos. Aprenda doses corretas, 
                  combinações ideais e <strong className="text-red-600">monitoramento da resposta</strong>.
                </p>
              </div>
            </div>
            
            {/* Pilar 3 - Procedimentos */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Syringe size={40} className="text-white" />
                </div>
                <h4 className="text-2xl font-black text-black mb-6 tracking-tight">
                  Procedimentos
                </h4>
                <p className="text-gray-700 text-lg leading-relaxed font-light">
                  <strong className="font-semibold">Guias passo a passo</strong> dos procedimentos salvadores: 
                  intubação, acesso venoso central, drenagem torácica. 
                  Técnicas em <strong className="text-red-600">pacientes reais</strong> com dicas de especialistas.
                </p>
              </div>
            </div>
          </div>
          
          {/* Explicação do método RPP */}
          <div className="bg-black rounded-2xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-4 mb-6">
                  <span className="text-red-600 font-bold text-xl tracking-wider">R P P</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                  Metodologia Exclusiva
                </h3>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                <strong className="text-red-600 font-semibold">O Domínio do RPP</strong> integra os três pilares 
                essenciais para o atendimento bem-sucedido em emergências. Ao dominar esses elementos 
                de forma integrada, você terá <strong className="text-white font-semibold">todas as ferramentas 
                necessárias</strong> para atuar com confiança e competência na Sala Vermelha.
              </p>
              
        
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Pillars;