import React from 'react';
import { Quote, Star, UserCheck } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <Quote size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight tracking-tight">
              O que nossos alunos dizem sobre a <span className="text-red-600">Formação Paciente Grave</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Relatos reais de médicos que transformaram sua prática clínica com nosso curso
            </p>
          </div>
          
          {/* Grid de depoimentos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            
            {/* Depoimento 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="text-red-600/20 text-6xl font-black mb-6 leading-none">"</div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-light mb-8">
                O curso mudou completamente minha confiança na Sala Vermelha. Agora sei exatamente o que fazer em cada situação crítica. Os casos reais fizeram toda a diferença.
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <UserCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Dr. Carlos Silva</h4>
                  <p className="text-gray-600 text-sm">Médico Emergencista - SP</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-red-600" fill="currentColor" />
                ))}
              </div>
            </div>
            
            {/* Depoimento 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="text-red-600/20 text-6xl font-black mb-6 leading-none">"</div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-light mb-8">
                Finalmente consegui dominar os procedimentos que sempre me deixavam insegura. A metodologia com pacientes reais é revolucionária.
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <UserCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Dra. Ana Martins</h4>
                  <p className="text-gray-600 text-sm">Residente UTI - RJ</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-red-600" fill="currentColor" />
                ))}
              </div>
            </div>
            
            {/* Depoimento 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="text-red-600/20 text-6xl font-black mb-6 leading-none">"</div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-light mb-8">
                Depois do curso, meus colegas notaram a diferença na minha segurança durante os plantões. Recomendo para todo médico que quer evoluir.
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <UserCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Dr. Rafael Costa</h4>
                  <p className="text-gray-600 text-sm">Clínico Geral - MG</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-red-600" fill="currentColor" />
                ))}
              </div>
            </div>
            
            {/* Depoimento 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="text-red-600/20 text-6xl font-black mb-6 leading-none">"</div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-light mb-8">
                Os protocolos e checklists são fantásticos. Uso direto nos plantões e já salvaram muitas vidas. Investimento que se paga rapidamente.
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <UserCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Dra. Mariana Lopes</h4>
                  <p className="text-gray-600 text-sm">Médica Plantonista - PR</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-red-600" fill="currentColor" />
                ))}
              </div>
            </div>
            
            {/* Depoimento 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="text-red-600/20 text-6xl font-black mb-6 leading-none">"</div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-light mb-8">
                A qualidade do conteúdo supera qualquer expectativa. É como ter os melhores especialistas do país te ensinando pessoalmente.
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <UserCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Dr. Pedro Oliveira</h4>
                  <p className="text-gray-600 text-sm">Médico do Trabalho - RS</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-red-600" fill="currentColor" />
                ))}
              </div>
            </div>
            
            {/* Depoimento 6 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="text-red-600/20 text-6xl font-black mb-6 leading-none">"</div>
              <blockquote className="text-gray-800 text-lg leading-relaxed font-light mb-8">
                Curso completo e direto ao ponto. Cada módulo agrega conhecimento prático que uso no dia a dia. Valeu cada centavo investido.
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <UserCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black">Dra. Fernanda Santos</h4>
                  <p className="text-gray-600 text-sm">Médica de Família - BA</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-red-600" fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats de credibilidade */}
          <div className="bg-black rounded-2xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">
                Mais de <span className="text-red-600">5.000 médicos</span> já transformaram suas carreiras
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-black text-red-600 mb-3">98%</div>
                  <p className="text-gray-300">Taxa de satisfação</p>
                </div>
                <div>
                  <div className="text-5xl font-black text-red-600 mb-3">5.000+</div>
                  <p className="text-gray-300">Médicos formados</p>
                </div>
                <div>
                  <div className="text-5xl font-black text-red-600 mb-3">4.9</div>
                  <p className="text-gray-300">Avaliação média</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;