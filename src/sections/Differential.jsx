import React from 'react';
import { Check, Award, Users, Clock, Star, Shield, MessageCircle, Gift, Play, Monitor, BookOpen } from 'lucide-react';
import Preview from "/images/course-platform-preview.jpg" ;

const Differential = () => {
  return (
    <section className="py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Imagem de fundo sutil - ambiente de aprendizado */}
      <div className="absolute inset-0 opacity-8">
        <img 
          src="/images/online-learning-background.jpg" 
          alt="Ambiente de aprendizado online"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
      </div>
      
      {/* Elementos decorativos de ensino online */}
      <div className="absolute top-10 left-10 opacity-5">
        <Monitor size={80} className="text-red-600" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5">
        <BookOpen size={100} className="text-red-600" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <Award size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
              Não é só mais um <span className="text-red-600">cursinho</span>
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Conheça os diferenciais que fazem do Sala Vermelha Sempre Tranquila único no Brasil
            </p>
          </div>
          
          {/* Seção preview da plataforma */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-black text-white mb-6">
                Plataforma de <span className="text-red-600">última geração</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Acesse seu conteúdo de qualquer lugar, a qualquer hora. Interface intuitiva, 
                videos em alta qualidade e material complementar organizado.
              </p>
              
              {/* Features da plataforma */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Streaming em alta definição</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Download para estudar offline</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  <span>Acesso via mobile e desktop</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-red-600/20">
                <img 
                  src={Preview}
                  alt="Preview da plataforma do curso"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                
                
              </div>
            </div>
          </div>
          
          {/* Estatísticas do curso */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
              <div className="text-3xl font-black text-red-600 mb-2">40+</div>
              <p className="text-gray-300 text-sm font-medium">Módulos</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
              <div className="text-3xl font-black text-red-600 mb-2">20h</div>
              <p className="text-gray-300 text-sm font-medium">Conteúdo</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
              <div className="text-3xl font-black text-red-600 mb-2">1 ano</div>
              <p className="text-gray-300 text-sm font-medium">Acesso</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800">
              <div className="text-3xl font-black text-red-600 mb-2">24/7</div>
              <p className="text-gray-300 text-sm font-medium">Suporte</p>
            </div>
          </div>
          
          {/* Grid de diferenciais */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                <Star size={64} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Único e Exclusivo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    O único curso focado exclusivamente em Sala Vermelha no Brasil
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award size={64} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Conteúdo Extenso</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mais de 40 módulos com conteúdo prático e aplicável
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users size={64} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Casos Reais</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Aulas gravadas em ambiente hospitalar real com pacientes reais
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield size={64} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Instrutores Referência</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Especialistas que são referência nacional em emergência e terapia intensiva
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageCircle size={64} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Suporte Exclusivo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Suporte dedicado para alunos com resposta em até 48 horas
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
                <Clock size={64} className="text-red-600" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Acesso Estendido</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Acesso por 1 ano com atualizações de conteúdo incluídas
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 7 */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <Users size={64} className="text-white" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Comunidade Exclusiva</h3>
                  <p className="text-white/90 leading-relaxed">
                    Networking e discussão de casos com outros profissionais
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 8 */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                <Gift size={64} className="text-white" />
              </div>
              <div className="flex items-start space-x-6 relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white mb-3">Bônus Exclusivos</h3>
                  <p className="text-white/90 leading-relaxed">
                    Materiais extras para acelerar seu aprendizado
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

export default Differential;