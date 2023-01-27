import React, { FC } from 'react';
import ReactModal from 'react-modal';

{/* <ReactModal isOpen={showModal}>
<h1>This is a modal</h1>
</ReactModal>
<button onClick={() => setShowModal(true)}>show modal</button> */}

interface ModalProps {
}

const Modal: FC<ModalProps> = (props) => {

  return (
    <h1>this is a modal</h1>
  )
}

export default Modal;