import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (active: boolean) => void;
  modalClassName: string;
  overlayClassName: string;
  children: ReactNode;
}

//className assigns approrpriate styles
//pass

const Modal: FC<ModalProps> = ({
  modalIsOpen,
  setModalIsOpen,
  modalClassName,
  overlayClassName,
  children,
}) => {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // create styling prop options
  return (
    //
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={modalClassName}
      ariaHideApp={false}
      children={children}
      shouldFocusAfterRender={false}
      style={{ overlay: { backgroundColor: 'rgba(255, 255, 255, 0)' } }}
    />
  );
};

export default Modal;

// code to help close modal on direct click

// import React, { useState, useRef } from 'react';
// import Modal from 'react-modal';

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const modalRef = useRef(null);

//   const handleModalClick = (event) => {
//     if (modalRef.current === event.target) {
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={() => setIsOpen(true)}>Open Modal</button>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={() => setIsOpen(false)}
//         ref={modalRef}
//         onClick={handleModalClick}
//       >
//         <p>Modal content</p>
//         <button onClick={() => setIsOpen(false)}>Close Modal</button>
//       </Modal>
//     </div>
//   );
// };

// export default App;
