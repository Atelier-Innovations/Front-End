import React, { FC } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {}

const Modal: FC<ModalProps> = (props) => {
  return (
    // isOpen={showModal}
    <ReactModal>
      <h1>This is a modal</h1>
    </ReactModal>
  );
};

export default Modal;
