import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (active: boolean) => void;
  className: string;
  children: ReactNode;
}

//className assigns approrpriate styles
//pass

const Modal: FC<ModalProps> = ({ modalIsOpen, setModalIsOpen, className }) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // create styling prop options
  return (
    //
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={className}
    />
  );
};

export default Modal;
