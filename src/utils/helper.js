/**
 * Formata um preço para exibição em formato brasileiro
 * 
 * @param {number} value - Valor a ser formatado
 * @param {boolean} showCents - Se deve mostrar os centavos
 * @returns {string} Valor formatado
 */
export const formatPrice = (value, showCents = true) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: showCents ? 2 : 0,
    maximumFractionDigits: showCents ? 2 : 0,
  }).format(value);
};

/**
 * Formata uma data para exibição em formato brasileiro
 * 
 * @param {Date|string} date - Data a ser formatada
 * @returns {string} Data formatada
 */
export const formatDate = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(dateObj);
};

/**
 * Gera uma data futura com base na quantidade de dias
 * 
 * @param {number} days - Quantidade de dias a partir de hoje
 * @returns {Date} Data futura
 */
export const getFutureDate = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

/**
 * Trunca um texto e adiciona reticências se necessário
 * 
 * @param {string} text - Texto a ser truncado
 * @param {number} maxLength - Tamanho máximo permitido
 * @returns {string} Texto truncado
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Verifica se estamos em ambiente de produção
 * 
 * @returns {boolean} True se em produção, False se em desenvolvimento
 */
export const isProduction = () => {
  return import.meta.env.MODE === 'production';
};

/**
 * Gera um ID único para uso em elementos DOM
 * 
 * @returns {string} ID único
 */
export const generateUniqueId = () => {
  return `id_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Desabilita o scroll do body (útil para modais)
 */
export const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

/**
 * Habilita o scroll do body
 */
export const enableBodyScroll = () => {
  document.body.style.overflow = '';
};

/**
 * Detecta se o dispositivo é mobile
 * 
 * @returns {boolean} True se for mobile, False se for desktop
 */
export const isMobile = () => {
  return window.innerWidth < 768;
};

/**
 * Scroll suave para um elemento
 * 
 * @param {string} elementId - ID do elemento para scroll
 * @param {number} offset - Offset opcional (útil para compensar headers fixos)
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};