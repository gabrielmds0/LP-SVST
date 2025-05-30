import React from 'react';
import { UserCheck, Award, GraduationCap, Stethoscope, Brain, Heart } from 'lucide-react';
import instructors from '../constants/instructorData';

const Instructors = () => {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <GraduationCap size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight tracking-tight">
              Você terá aulas com os <span className="text-red-600">melhores nomes</span><br />
              da medicina no Brasil
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Nossa equipe é formada por médicos especialistas com vasta experiência prática 
              e acadêmica em atendimentos de emergência e cuidados intensivos
            </p>
          </div>
          
          {/* Grid de instrutores - Layout otimizado para 5 doutores */}
          <div className="mb-20">
            {/* Primeira linha - 2 doutores centralizados */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
              {instructors.slice(0, 2).map((instructor) => (
                <div key={instructor.id} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-4 border-red-600 shadow-lg">
                    {instructor.image ? (
                      <img 
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-full object-cover object-[center_75%]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-red-100 flex items-center justify-center">
                        <UserCheck size={36} className="text-red-600" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-black text-2xl text-black mb-3 tracking-tight group-hover:text-red-600 transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-4 text-lg">
                    {instructor.specialty}
                  </p>
                  <p className="text-gray-700 leading-relaxed font-light">
                    {instructor.bio}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Segunda linha - 3 doutores centralizados */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {instructors.slice(2, 5).map((instructor) => (
                <div key={instructor.id} className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-4 border-red-600 shadow-lg">
                    {instructor.image ? (
                      <img 
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-full object-cover object-[center_75%]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-red-100 flex items-center justify-center">
                        <UserCheck size={36} className="text-red-600" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-black text-2xl text-black mb-3 tracking-tight group-hover:text-red-600 transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-4 text-lg">
                    {instructor.specialty}
                  </p>
                  <p className="text-gray-700 leading-relaxed font-light">
                    {instructor.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Credenciais dos instrutores */}
          <div className="bg-black rounded-2xl p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">
                Credenciais dos nossos especialistas
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-red-600 mb-3">25+</div>
                  <p className="text-gray-300">Anos de experiência média</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-red-600 mb-3">50+</div>
                  <p className="text-gray-300">Artigos científicos publicados</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-red-600 mb-3">10+</div>
                  <p className="text-gray-300">Coordenadores de UTI</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-red-600 mb-3">100%</div>
                  <p className="text-gray-300">Especialistas certificados</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Diferencial pedagógico */}
          <div className="bg-white rounded-2xl p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black text-black mb-8 tracking-tight">
                Mais que professores, <span className="text-red-600">são mentores</span>
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-xl text-black mb-4">Experiência Prática</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Todos atuam diariamente em hospitais de referência, trazendo casos reais para as aulas
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <GraduationCap size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-xl text-black mb-4">Didática Comprovada</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Professores de residência médica e pós-graduação com metodologia pedagógica testada
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <UserCheck size={32} className="text-red-600" />
                  </div>
                  <h4 className="font-bold text-xl text-black mb-4">Suporte Personalizado</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Disponíveis para esclarecer dúvidas e orientar sua evolução profissional
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Instructors;