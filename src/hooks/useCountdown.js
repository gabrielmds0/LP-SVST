import { useState, useEffect } from 'react';

/**
 * Hook para gerenciar contagem regressiva
 * 
 * @param {Date|string} targetDate - Data alvo para a contagem regressiva
 * @returns {Object} Objeto com os componentes de tempo e status de expiração
 */
const useCountdown = (targetDate) => {
  // Converter targetDate para um objeto Date, se for string
  const targetTime = typeof targetDate === 'string' 
    ? new Date(targetDate).getTime() 
    : targetDate.getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;
      
      if (difference <= 0) {
        // Tempo expirado
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true
        };
      }
      
      // Cálculo dos componentes de tempo
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false
      };
    };
    
    // Inicialização
    setTimeLeft(calculateTimeLeft());
    
    // Atualizar a cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    // Limpeza do intervalo
    return () => clearInterval(timer);
  }, [targetTime]);
  
  return timeLeft;
};

export default useCountdown;