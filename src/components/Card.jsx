import React from 'react';

/**
 * Componente de Card genérico e reutilizável
 * 
 * @param {Object} props
 * @param {string} props.variant - Variante do card: 'light', 'dark' (padrão), 'primary'
 * @param {string} props.className - Classes CSS adicionais
 * @param {ReactNode} props.children - Conteúdo do card
 * @param {boolean} props.elevated - Se o card deve ter elevação (sombra)
 * @param {function} props.onClick - Função de clique (opcional)
 */
const Card = ({
  variant = 'dark',
  className = '',
  children,
  elevated = false,
  onClick,
  ...props
}) => {
  // Base classes para todos os cards
  const baseClasses = 'rounded-lg overflow-hidden p-6 transition-all duration-200';
  
  // Classes específicas de variante
  const variantClasses = {
    light: 'bg-white text-secondary border border-gray-200',
    dark: 'bg-secondary text-white',
    primary: 'bg-primary text-white',
  };
  
  // Classes de elevação (sombra)
  const elevationClasses = elevated ? 'shadow-lg hover:shadow-xl' : '';
  
  // Classes para tornar o card interativo se tiver onClick
  const interactiveClasses = onClick ? 'cursor-pointer hover:scale-[1.02]' : '';
  
  // Combinar todas as classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${elevationClasses} ${interactiveClasses} ${className}`;
  
  // Removemos a propriedade 'elevated' dos props para não passá-la para o elemento DOM
  const { elevated: _, ...domProps } = props;
  
  return (
    <div className={cardClasses} onClick={onClick} {...domProps}>
      {children}
    </div>
  );
};

export default Card;