import { useState } from 'react';

export const useLeadModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('CTA');

  const openModal = (source = 'CTA') => {
    setModalSource(source);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para ser usada nos CTAs
  const handleCTAClick = (e, source = 'CTA') => {
    e.preventDefault();
    openModal(source);
  };

  return {
    isModalOpen,
    modalSource,
    openModal,
    closeModal,
    handleCTAClick
  };
};