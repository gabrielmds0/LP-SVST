import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

/**
 * Componente de contagem regressiva
 * 
 * @param {Object} props
 * @param {Date|string} props.targetDate - Data alvo para a contagem regressiva
 * @param {string} props.className - Classes CSS adicionais
 * @param {string} props.expiredMessage - Mensagem a ser exibida quando o tempo expirar
 */
const Countdown = ({ 
  targetDate, 
  className = '', 
  expiredMessage = 'Oferta expirada!' 
}) => {
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
  
  // Formatação de dígitos (adicionar zero à esquerda se < 10)
  const formatDigit = (digit) => {
    return digit < 10 ? `0${digit}` : digit;
  };
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {timeLeft.expired ? (
        <div className="text-primary font-semibold flex items-center">
          {expiredMessage}
        </div>
      ) : (
        <>
          <Clock className="text-primary mr-2" size={20} />
          <div className="flex items-center text-secondary">
            <div className="flex flex-col items-center mx-1 md:mx-2">
              <span className="text-lg md:text-xl font-bold">{formatDigit(timeLeft.days)}</span>
              <span className="text-xs md:text-sm">dias</span>
            </div>
            <span className="font-bold">:</span>
            <div className="flex flex-col items-center mx-1 md:mx-2">
              <span className="text-lg md:text-xl font-bold">{formatDigit(timeLeft.hours)}</span>
              <span className="text-xs md:text-sm">horas</span>
            </div>
            <span className="font-bold">:</span>
            <div className="flex flex-col items-center mx-1 md:mx-2">
              <span className="text-lg md:text-xl font-bold">{formatDigit(timeLeft.minutes)}</span>
              <span className="text-xs md:text-sm">min</span>
            </div>
            <span className="font-bold">:</span>
            <div className="flex flex-col items-center mx-1 md:mx-2">
              <span className="text-lg md:text-xl font-bold">{formatDigit(timeLeft.seconds)}</span>
              <span className="text-xs md:text-sm">seg</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Countdown;