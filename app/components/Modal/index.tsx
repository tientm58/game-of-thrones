import React from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalComponent(props: any) {
  const { modalIsOpen, closeModal, renderContent, Modal } = props;
  const ModalComponentWarrper = Modal;
  return (
    <ModalComponentWarrper
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      {renderContent()}
    </ModalComponentWarrper>
  );
}

export default ModalComponent;
