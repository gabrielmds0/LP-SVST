import React from 'react';

/**
 * Componente de botão reutilizável com variantes
 * 
 * @param {Object} props - Propriedades do componente
 * @param {string} props.variant - Variante do botão: 'primary' (padrão), 'secondary', 'outline'
 * @param {string} props.size - Tamanho do botão: 'sm', 'md' (padrão), 'lg'
 * @param {function} props.onClick - Função de clique
 * @param {string} props.className - Classes CSS adicionais
 * @param {ReactNode} props.children - Conteúdo do botão
 * @param {string} props.href - Se fornecido, renderiza como um link <a> em vez de botão
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  children,
  href,
  ...props
}) => {
  // Base classes para todos os botões
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';
  
  // Classes específicas de variante
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-white text-secondary border border-secondary hover:bg-gray-100 focus:ring-secondary',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/10 focus:ring-primary',
  };
  
  // Classes específicas de tamanho
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  // Combinar todas as classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Renderizar como link ou botão
  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;