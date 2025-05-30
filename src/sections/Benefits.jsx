import React from 'react';
import { Check, Target, Shield, Brain, Stethoscope, Award, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

const Benefits = ({ handleCTAClick }) => {  
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <Target size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight tracking-tight">
              Para o médico que <span className="text-red-600">quer</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Resultados práticos que transformam sua atuação profissional na Sala Vermelha
            </p>
          </div>
          
          {/* Grid de benefícios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Benefício 1 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="font-black text-xl text-black mb-4 tracking-tight">
                Deixar de ser um médico pela metade
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Complete sua formação com as habilidades práticas que a faculdade não ensinou.
              </p>
            </div>
            
            {/* Benefício 2 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Check size={28} className="text-white" />
              </div>
              <h3 className="font-black text-xl text-black mb-4 tracking-tight">
                Ter confiança nos plantões
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Elimine a ansiedade de atender na Sala Vermelha, sabendo exatamente o que fazer.
              </p>
            </div>
            
            {/* Benefício 3 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain size={28} className="text-white" />
              </div>
              <h3 className="font-black text-xl text-black mb-4 tracking-tight">
                Desenvolver Raciocínio Clínico rápido
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Identifique problemas críticos e tome decisões acertadas mesmo sob pressão.
              </p>
            </div>
            
            {/* Benefício 4 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope size={28} className="text-white" />
              </div>
              <h3 className="font-black text-xl text-black mb-4 tracking-tight">
                Fazer Prescrição Médica certa
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Domine as doses, combinações e parâmetros de monitoramento para cada situação.
              </p>
            </div>
            
            {/* Benefício 5 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="font-black text-xl text-black mb-4 tracking-tight">
                Executar Procedimentos salvadores
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Execute com segurança as intervenções que fazem a diferença entre a vida e a morte.
              </p>
            </div>
            
            {/* Benefício 6 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-white" />
              </div>
              <h3 className="font-black text-xl text-black mb-4 tracking-tight">
                Destacar-se profissionalmente
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Seja reconhecido como um médico competente, aumentando suas oportunidades de carreira.
              </p>
            </div>
          </div>
          
          {/* Call-to-action final */}
          <div className="bg-black rounded-2xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">
                Transforme sua carreira médica
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
                Invista no seu conhecimento e transforme seus atendimentos. 
                <strong className="text-red-600"> Seu futuro profissional</strong> e a vida dos seus pacientes agradecem.
              </p>
              
              <Button 
                variant="primary" 
                size="xl" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-5 rounded-xl text-xl border-0 w-full sm:w-auto"
                onClick={(e) => handleCTAClick(e, 'Benefits CTA')}
              >
                Quero me transformar agora
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Benefits;