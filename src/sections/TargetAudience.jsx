import React from 'react';
import { GraduationCap, Stethoscope, UserCheck, Heart } from 'lucide-react';

const TargetAudience = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Título melhorado */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Para quem é o curso <span className="text-red-600">Sala Vermelha Sempre Tranquila</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Desenvolvido especificamente para profissionais que buscam excelência no atendimento de emergência
            </p>
          </div>
          
          {/* Cards redesenhados - Approach 1: Clean minimalist */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <GraduationCap size={28} className="text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-black mb-3 leading-tight">Estudantes de medicina</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Último ano que desejam chegar preparados para plantões e residência
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group bg-white rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Stethoscope size={28} className="text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-black mb-3 leading-tight">Médicos recém-formados</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Que sentem insegurança nos atendimentos de urgência e emergência
                </p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group bg-white rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <UserCheck size={28} className="text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-black mb-3 leading-tight">Médicos experientes</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  3+ anos que querem aprimorar habilidades em Sala Vermelha
                </p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="group bg-white rounded-2xl p-6 hover:bg-red-50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <Heart size={28} className="text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-black mb-3 leading-tight">Profissionais de emergência</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Atuam ou pretendem atuar em pronto-socorro, emergência e UTI
                </p>
              </div>
            </div>
            
          </div>
          
          {/* Stats section - novo elemento */}
          <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">+5000</div>
                <p className="text-gray-600">Profissionais formados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">40+</div>
                <p className="text-gray-600">Módulos práticos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                <p className="text-gray-600">Taxa de aprovação</p>
              </div>
            </div>
          </div>
          
          {/* Citação redesenhada */}
          <div className="bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Elementos decorativos sutis */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-red-600 text-6xl font-bold mb-6 opacity-50">"</div>
              <blockquote>
                <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-6">
                  Se você já sentiu o peso da responsabilidade ao atender um paciente grave e deseja 
                  adquirir confiança e competência nesses momentos cruciais, este curso foi feito para você.
                </p>
              </blockquote>
              <div className="w-16 h-0.5 bg-red-600 mx-auto"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;