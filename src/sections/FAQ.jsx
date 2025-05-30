import React, { useState } from 'react';
import { HelpCircle, Plus, Minus, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqData = [
    {
      question: "Para quem é indicado o curso Sala Vermelha Sempre Tranquila?",
      answer: "O curso é ideal para estudantes de medicina do último ano, médicos recém-formados e profissionais com qualquer tempo de experiência que desejam se sentir mais seguros e preparados para atender pacientes graves na Sala Vermelha."
    },
    {
      question: "Preciso ter experiência prévia em emergência para fazer o curso?",
      answer: "Não é necessário ter experiência prévia. O curso foi desenvolvido justamente para preparar médicos que ainda não se sentem seguros no atendimento de emergência, fornecendo desde os conceitos básicos até técnicas avançadas."
    },
    {
      question: "Como funciona o acesso ao curso?",
      answer: "Após a confirmação do pagamento, você recebe imediatamente o acesso à plataforma online. O curso fica disponível por 1 ano completo, permitindo que você estude no seu ritmo e revise o conteúdo quantas vezes precisar."
    },
    {
      question: "O curso oferece certificado?",
      answer: "Sim, ao concluir o curso você recebe um certificado de participação que pode ser usado para comprovação de atividades de educação continuada e desenvolvimento profissional."
    },
    {
      question: "Posso fazer o curso pelo celular ou tablet?",
      answer: "Sim, a plataforma é totalmente responsiva e funciona perfeitamente em computadores, tablets e smartphones. Você pode estudar onde e quando quiser, com sincronização automática do seu progresso."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se por qualquer motivo você não ficar satisfeito com o curso, pode solicitar o reembolso integral em até 7 dias após a compra. É simples, rápido e sem burocracia."
    },
    {
      question: "Há suporte para dúvidas durante o curso?",
      answer: "Sim, oferecemos suporte dedicado através de nossa equipe especializada. Você pode enviar suas dúvidas e receberá respostas em até 48 horas, além de poder participar da comunidade exclusiva de alunos."
    },
    {
      question: "O conteúdo é atualizado?",
      answer: "Sim, o conteúdo é constantemente atualizado com as mais recentes diretrizes e protocolos da medicina de emergência. Durante seu período de acesso, você recebe automaticamente todas as atualizações."
    }
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Header premium */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-8">
              <HelpCircle size={40} className="text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight tracking-tight">
              <span className="text-red-600">Perguntas</span> Frequentes
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Esclarecemos as principais dúvidas sobre o curso Sala Vermelha Sempre Tranquila
            </p>
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-bold text-lg text-black pr-4 leading-tight">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus size={20} className="text-white" />
                    ) : (
                      <Plus size={20} className="text-white" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default FAQ;