import React from 'react';
import { AlertTriangle, BookOpen, Clock, Heart } from 'lucide-react';
import StressedDoctor from "/images/stressed-doctor-emergency.jpg" ;
import Shock from "/images/shock.jpg" ;
import Respiratory from "/images/respiratory-failure.jpg" ;
import Trauma from "/images/trauma.jpg" ;
import CardiacArrest from "/images/cardiac-arrest.jpg" 

const Problem = ({ handleCTAClick }) => {  return (
    <section className="bg-black py-20 md:py-24 relative overflow-hidden">
      {/* Imagem de fundo dramática */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
      </div>
      
      {/* Elementos decorativos sutis */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/5 rounded-full translate-x-40 translate-y-40"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header da seção */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-red-600/10 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <AlertTriangle size={16} className="mr-2" />
              O PROBLEMA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              A faculdade <span className="text-red-600">não te preparou</span><br />
              para a Sala Vermelha
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A realidade do atendimento de emergência é drasticamente diferente da teoria acadêmica
            </p>
          </div>
          
          {/* Seção split com imagem central */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="rounded-2xl overflow-hidden border-2 border-red-600/20 shadow-2xl">
                <img 
                  src={StressedDoctor}
                  alt="Médico sob pressão na emergência"
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                A realidade que <span className="text-red-600">ninguém te contou</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Médicos recém-formados enfrentam situações para as quais não foram preparados. 
                O desespero e a insegurança são mais comuns do que você imagina.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Decisões de vida ou morte em segundos</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Pressão extrema e responsabilidade total</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Zero margin de erro permitido</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid de problemas */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1 - Teoria vs Prática */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen size={80} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Teoria vs Realidade</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Na faculdade você aprende muita teoria, mas pouca prática. A realidade da Sala Vermelha 
                    é completamente diferente do que você viu nos livros e simulações.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Pressão do tempo */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <Clock size={80} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Pressão do Tempo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Quando você está diante de um paciente grave, não há tempo para consultar livros 
                    ou discutir por horas. É preciso agir com rapidez, precisão e confiança.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Insegurança */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <AlertTriangle size={80} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Insegurança Profissional</h3>
                  <p className="text-gray-300 leading-relaxed">
                    A maioria dos médicos recém-formados se sente insegura e despreparada para enfrentar 
                    os desafios da Sala Vermelha, onde decisões erradas podem ter consequências graves.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 4 - Consequências */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <Heart size={80} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Vida ou Morte</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Na emergência, cada minuto pode significar a diferença entre a vida e a morte. 
                    A responsabilidade é imensa e o preparo inadequado pode ser fatal.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Galeria de situações críticas */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Situações críticas que você <span className="text-red-600">vai enfrentar</span>:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={CardiacArrest}
                  alt="Parada Cardíaca" 
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">Parada<br />Cardíaca</span>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={Trauma}
                  alt="Trauma Grave" 
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">Trauma<br />Grave</span>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={Respiratory}
                  alt="Insuficiência Respiratória" 
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">Insuficiência<br />Respiratória</span>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={Shock}
                  alt="Choque Séptico" 
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">Choque<br />Séptico</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call-out principal */}
          <div className="bg-red-600 rounded-2xl p-4 md:p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                A solução existe
              </h3>
              
              <p className="text-lg md:text-xl text-white leading-relaxed mb-6 font-light">
                É por isso que criamos o curso <strong className="font-semibold">Sala Vermelha Sempre Tranquila</strong>, 
                para preencher essa lacuna e te dar o preparo prático que a faculdade não ofereceu.
              </p>
              
              <div className="mb-6">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold text-sm">
                  <span>Transforme teoria em prática real</span>
                </div>
              </div>
              
              <div>
  <button 
    onClick={(e) => handleCTAClick(e, 'Problem CTA')}
    className="inline-flex items-center bg-white hover:bg-gray-100 text-red-600 font-black text-xl px-12 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg border-0 cursor-pointer"
  >
    Quero me preparar agora
  </button>
</div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Problem;