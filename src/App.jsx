import { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import TargetAudience from './sections/TargetAudience';
import Problem from './sections/Problem';
import Statistics from './sections/Statistics';
import Methodology from './sections/Methodology';
import OnlineLearning from './sections/OnlineLearning';
import Pillars from './sections/Pillars';
import Differential from './sections/Differential';
import Modules from './sections/Modules';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import Instructors from './sections/Instructors';
import Bonuses from './sections/Bonuses';
import Offer from './sections/Offer';
import FAQ from './sections/FAQ';
import LeadCaptureModal from './components/LeadCaptureModal';
import { useLeadModal } from './hooks/useLeadModal';
import MobileCTA from './components/MobileCTA';
///

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  
  // Hook do modal de captura de leads
  const { isModalOpen, modalSource, closeModal, handleCTAClick } = useLeadModal();
  
  // Mostrar o botão flutuante quando o usuário rolar além de certa altura
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const heroBottom = heroSection?.getBoundingClientRect().bottom;
      
      if (heroBottom && heroBottom < 0) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Função para suavizar o scroll para as seções quando clicado em links de navegação
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Ajuste para compensar o header fixo
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-sans antialiased text-secondary">
      
      <main>
        {/* Seção Hero */}
        <Hero 
          id="hero"
          handleCTAClick={handleCTAClick}
          scrollToSection={scrollToSection}
        />
        
        {/* Seção de Público-Alvo */}
        <TargetAudience 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Problema/Dor */}
        <Problem 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Estatística/Impacto */}
        <Statistics 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Metodologia/Diferencial */}
        <Methodology 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Como Aprender Online */}
        <OnlineLearning 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Pilares do Curso */}
        <Pillars 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Diferencial (Não é só mais um cursinho) */}
        <Differential 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Módulos do Curso */}
        <Modules 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Benefícios */}
        <Benefits 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Depoimentos */}
        <Testimonials 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Instrutores */}
        <Instructors 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Bônus Exclusivos */}
        <Bonuses 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de Oferta Final/CTA */}
        <Offer 
          handleCTAClick={handleCTAClick}
        />
        
        {/* Seção de FAQ */}
        <FAQ 
          handleCTAClick={handleCTAClick}
        />
      </main>
      
      {/* Modal de Captura de Leads */}
      <LeadCaptureModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        source={modalSource}
      />
      <MobileCTA
        handleCTAClick={handleCTAClick}
        variant="plus" // ou "expandable" ou "text"
      />
    </div>
  );
}

export default App;