import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * Componente de Acordeão (FAQ)
 * 
 * @param {Object} props
 * @param {Array} props.items - Array de objetos {title, content}
 * @param {string} props.className - Classes CSS adicionais
 */
const Accordion = ({ items = [], className = '' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border-b border-gray-200 last:border-b-0"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium">{item.title}</span>
            <span className="ml-4 flex-shrink-0 text-primary">
              {openIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </span>
          </button>
          
          {/* Conteúdo do acordeão */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 pt-0">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;