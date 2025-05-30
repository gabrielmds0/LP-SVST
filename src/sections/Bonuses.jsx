import React from 'react';
import { Gift, BookOpen, FileCheck, Wallet } from 'lucide-react';

const Bonuses = () => {
  return (
    <section className="py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <Gift size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight tracking-tight">
              <span className="text-red-600">Bônus</span> Exclusivos
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Além de todo o conteúdo do curso, você receberá estes bônus especiais 
              para potencializar ainda mais seu aprendizado e prática clínica
            </p>
          </div>
          
          {/* Grid de bônus */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            
            {/* Bônus 1 */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <FileCheck size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  Checkpoint RS Intangível
                </h3>
                
                <p className="text-white/90 leading-relaxed font-light mb-8">
                  Guia exclusivo com todos os principais parâmetros vitais, laboratoriais e de imagem. 
                  Formato digital e imprimível para consulta rápida durante atendimentos.
                </p>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                    <span className="font-bold text-white text-lg">INCLUSO</span>
                    <span className="text-white/80 ml-1">no seu curso</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bônus 2 */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <BookOpen size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  Guia Paciente Grave
                </h3>
                
                <p className="text-white/90 leading-relaxed font-light mb-8">
                  Manual prático com 12 protocolos essenciais: PCR, choque, sepse, TEP, AVC. 
                  Inclui fluxogramas, doses de medicamentos e critérios de UTI.
                </p>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                    <span className="font-bold text-white text-lg">INCLUSO</span>
                    <span className="text-white/80 ml-1">no seu curso</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bônus 3 */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Wallet size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                  Cashback Pós-graduação
                </h3>
                
                <p className="text-white/90 leading-relaxed font-light mb-8">
                  Desconto exclusivo em nossas pós-graduações: Medicina de Emergência, 
                  Intensiva ou Cardiologia. Continue seu desenvolvimento profissional.
                </p>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="bg-white/20 rounded-lg px-4 py-2 inline-block">
                    <span className="font-bold text-white text-lg">INCLUSO</span>
                    <span className="text-white/80 ml-1">no seu curso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Destaque dos bônus */}
          <div className="bg-gray-900 rounded-2xl p-12 text-center border border-gray-800">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                Bônus <span className="text-red-600">valiosos</span> inclusos
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Materiais exclusivos que potencializam seu aprendizado e aplicação prática
              </p>
              
              <div className="bg-red-600 rounded-xl p-6 inline-block">
                <p className="text-white text-2xl font-bold">
                  TODOS OS BÔNUS <span className="text-3xl">INCLUSOS</span>
                </p>
                <p className="text-white/90">automaticamente na sua inscrição</p>
              </div>
              
              <div className="mt-8 text-gray-400">
                <p>*Todos os bônus são disponibilizados imediatamente após a confirmação da inscrição</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Bonuses;