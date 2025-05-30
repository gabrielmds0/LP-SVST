import React from 'react';
import { CheckCircle2 } from 'lucide-react';

/**
 * Componente para exibir um item com checkmark
 * Usado em listas de benefícios, público-alvo, etc.
 * 
 * @param {Object} props
 * @param {ReactNode} props.children - Texto do item
 * @param {string} props.className - Classes CSS adicionais
 * @param {string} props.iconColor - Cor do ícone de check
 * @param {string} props.size - Tamanho do ícone: 'sm', 'md' (padrão), 'lg'
 */
const CheckItem = ({
  children,
  className = '',
  iconColor = 'text-primary',
  size = 'md',
  ...props
}) => {
  // Tamanhos do ícone
  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  
  // Tamanhos de fonte
  const fontSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex items-start mb-3 ${className}`} {...props}>
      <CheckCircle2 
        className={`${iconColor} flex-shrink-0 mr-2`} 
        size={iconSizes[size]} 
        strokeWidth={2}
      />
      <span className={`${fontSizes[size]}`}>{children}</span>
    </div>
  );
};

export default CheckItem;

